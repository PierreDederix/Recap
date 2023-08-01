import { Component, OnInit } from '@angular/core';
import { Burger } from './burgers';
import { BurgersService } from './burgers.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  burgerList : Burger[] = [];

  constructor(private _burgerService : BurgersService) {

  }
  ngOnInit(): void {
    this.burgerList = this._burgerService.getAll();
  }

  delete(id : number) : void {
    this._burgerService.delete(id);
    this.burgerList = this._burgerService.getAll()
  }

}
