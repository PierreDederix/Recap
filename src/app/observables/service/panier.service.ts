import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Burger } from 'src/app/services/burgers';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private _panier : Burger[] = [];
  private _totalSub : BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  get panier() : Burger[] {
    return this._panier;
  }

  ajouter(ajouter : Burger) : void {
    this._panier.push(ajouter);
    let total : number = 0;
    for (const e of this._panier) {
      total += +e.price;
    }

    this._totalSub.next(total);
  }

  get prix$() {
  return this._totalSub.asObservable()
 }
}
