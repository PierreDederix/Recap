import { Component } from '@angular/core';
import { ThermometreService } from 'src/app/observables/service/thermometre.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  private temperature !:number
  bgClass : string = 'bg-gray'

  constructor(private _thermoServ : ThermometreService) {
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
  }

}
