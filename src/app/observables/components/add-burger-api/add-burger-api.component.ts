import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY, tap } from 'rxjs';
import { BurgersService } from 'src/app/services/burgers.service';
import { BurgerApiService } from '../../service/burger-api.service';

@Component({
  selector: 'app-add-burger-api',
  templateUrl: './add-burger-api.component.html',
  styleUrls: ['./add-burger-api.component.scss']
})
export class AddBurgerApiComponent {
  burgerForm : FormGroup;
  showError: boolean = false;

  constructor(private _fb : FormBuilder, private _burgerService : BurgerApiService, private _router : Router) {
    this.burgerForm = this._fb.group({
      //controlName : [value, [synchrone validators], [async validators]],
      name : [null, [Validators.required, Validators.maxLength(150)]],
      price : [null, [Validators.required, Validators.min(0)]],
      picture : [null, []],
      available : [false, []],
      ingredients : this._fb.array([

      ])
    });
  }

  get ingredients() : FormArray {
    return this.burgerForm.get('ingredients') as FormArray;
  }

  addIngredients() {
    this.ingredients.push(this._fb.control(null, [Validators.required]))
  }

  removeIngredient(i : number) {
    this.ingredients.removeAt(i);
  }

  addBurger() : void {
    if(this.burgerForm.valid) {

      this._burgerService.addBurger(this.burgerForm.value).pipe(
        tap(() => this._router.navigateByUrl('/observables')),
        catchError( () => {
          this.showError = true;
          return EMPTY;
        })
      ).subscribe();

    } else {
      this.burgerForm.markAllAsTouched();
    }
  }
}
