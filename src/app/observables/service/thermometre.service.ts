import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThermometreService {

  private _temperature : number = 0;
  private _temperatureSub : BehaviorSubject<number> = new BehaviorSubject<number>(this._temperature);

  constructor() { }

  get temperature() {
    return this._temperature;
  }

  set temperature(value : number) {
    if (value < -274) {
      this._temperatureSub.error ({ // Attention: error => fin de l'observable
        type: 'bad arg',
        message: 'température invalide'
      })
    }
    this._temperature = value;
    this._temperatureSub.next(this.temperature)
  }

  get temperatureSub() {
    return this._temperatureSub.asObservable();
    // transforme en 'bête' observable pour retirer la possibilité d'émettre des données
  }
}
