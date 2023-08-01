import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private _montant : number = 0
  private _montantSub : BehaviorSubject<number> = new BehaviorSubject<number>(this._montant);

  constructor() { }

  get montant() {
    return this._montant;
  }

  add(val : number) {
    this._montant += val;
  }
}
