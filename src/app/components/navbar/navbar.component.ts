import { Component, numberAttribute } from '@angular/core';
import { PanierService } from 'src/app/observables/service/panier.service';
import { ThermometreService } from 'src/app/observables/service/thermometre.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  private temperature !:number
  bgClass : string = 'bg-gray'
  total !: number

  constructor(private _thermoServ : ThermometreService, private _panierServ : PanierService) {
    _thermoServ.temperatureSub.subscribe((temp : number) : void => {
      if (temp > this.temperature) {
        this.bgClass = 'bg-red'
      } else if (temp < this.temperature) {
        this.bgClass = 'bg-blue'
      } else {
        this.bgClass = 'bg-gray'
      }


      this.temperature = temp
    })

    this._panierServ.prix$.subscribe( total => this.total = total )
  }

}
