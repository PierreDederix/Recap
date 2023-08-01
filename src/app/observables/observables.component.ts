import { Component, numberAttribute } from '@angular/core';
import { catchError, delay, EMPTY, interval, Observable, of, pipe, startWith, switchMap, tap } from 'rxjs';
import { Burger } from '../services/burgers';
import { BurgerApiService } from './service/burger-api.service';
import { PanierService } from './service/panier.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent {

  obsCold$ = of (1, 2, 3, 4, 5);
  // obsHot$ = interval(1000);

  burgers$?: Observable<Burger[]>;
  lastReception ?: Date;

  constructor(private _burgerService : BurgerApiService, private _panierService : PanierService) {
    
    this.demoSub();
    // this.obsHot$.subscribe((data:number) =>console.log(`interval - ${data}`));

    this.burgers$ = interval(60_000).pipe(
      startWith(0),
      switchMap( (data : number) => _burgerService.getBurgers() ), // à chaque émission, transforme l'observable
      delay(1000), // ajoute un délai à chaque émission 'next'
      tap((data : Burger[]) => this.lastReception = new Date), // réaction au signal "next"
      catchError((err) => { // réaction au signal "error"
        console.warn(err);
        return EMPTY;
      })
    )

    
    // this.burgers$ = _burgerService.getBurgers().pipe(
    //   delay(1000),
    //   tap((data : Burger[]) => console.log(data)), // réaction au signal "next"
    //   catchError((err) => { // réaction au signal "error"
    //     console.warn(err);
    //     return EMPTY;
    //   })
    // );
     
  }

  
  demoSub():void {
    this.obsCold$.subscribe( {
      next: (data : number) => console.log(data),
      // error: (error) => console.log(error),
      complete: () => console.log("FIN")
      
    })
    this.obsCold$.subscribe( {
      next: (data : number) => console.log(data),
      // error: (error) => console.log(error),
      complete: () => console.log("FIN")
      
    })

  }

  addToPanier(burger : Burger) : void {
    this._panierService.ajouter(burger)
  }

}
