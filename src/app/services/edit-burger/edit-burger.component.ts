import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Burger } from '../burgers';
import { BurgersService } from '../burgers.service';

@Component({
  selector: 'app-edit-burger',
  templateUrl: './edit-burger.component.html',
  styleUrls: ['./edit-burger.component.scss']
})
export class EditBurgerComponent implements OnInit {
  burgerForm : FormGroup;
  burgerId : number;

  constructor(private _fb : FormBuilder, private _burgerService : BurgersService, private _router : Router, private _activeRoute : ActivatedRoute) {
this.burgerId = parseInt(this._activeRoute.snapshot.params['id']);

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
  ngOnInit(): void {
    let burger : Burger | undefined = this._burgerService.getById(this.burgerId);
    if (burger) {
      burger.ingredients.forEach(i => this.addIngredients());
      this.burgerForm.patchValue({
        name : burger.name,
        price : burger.price,
        picture : burger.picture,
        available : burger.available,
        ingredients : burger.ingredients
      })
    }
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

  updateBurger() : void {
    if (this.burgerForm.valid) {
      this._burgerService.update(this.burgerId, this.burgerForm.value);
      this._router.navigateByUrl('/services')

    } else {
      this.burgerForm.markAllAsTouched();
    }
  }
}
