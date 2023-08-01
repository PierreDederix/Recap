import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Burger } from '../burgers';
import { BurgersService } from '../burgers.service';

@Component({
  selector: 'app-detail-burger',
  templateUrl: './detail-burger.component.html',
  styleUrls: ['./detail-burger.component.scss']
})
export class DetailBurgerComponent implements OnInit {
  burger : Burger | undefined;
  burgerId : number;

  constructor(private _activeRoute : ActivatedRoute, private _burgerService : BurgersService) {
    this.burgerId = parseInt(this._activeRoute.snapshot.params['id']);
  }
  ngOnInit(): void {
    this.burger = this._burgerService.getById(this.burgerId);
  }
}
