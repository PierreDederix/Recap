import { Component } from '@angular/core';
import { Burger } from 'src/app/services/burgers';
import { PanierService } from '../../service/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {

  panier !: Burger[];


  constructor(private _panierService : PanierService) {

    this.panier = _panierService.panier;
  }
}
