import { Injectable } from '@angular/core';
import { Burger } from './burgers';

@Injectable({
  providedIn: 'root'
})
export class BurgersService {

  private _burgers : Burger[] = [
    { id : 1, name : 'Classique', ingredients : ['Salade', 'Tomates', 'Oignons', 'Haché', 'Sauce andalouse'], price : 5, picture : 'https://img.cuisineaz.com/1280x720/2016/03/04/i91705-hamburger.webp', available : true},
    { id : 2, name : 'Montagnard', ingredients : ['Salade', 'Oignons caramélisés', 'Fromage à Raclettes', 'Haché', 'Lard Fumé', 'Sauce poivre'], price : 19, picture : 'https://www.sherpa.net/sites/default/files/recette/burger.jpg', available : true}
  ]

  constructor() { }

  getAll() : Burger[] {
    return this._burgers;
  }

  getById(id : number) : Burger|undefined {
    return this._burgers.find(b => b.id === id);
  }

  add(burger : Burger) : void {
    burger.id = Math.max(...this._burgers.map(b => b.id)) + 1;
    this._burgers.push(burger);
  }

  update(id : number, burger : Burger) : void {
    let burgerToUpdate = this._burgers.find(b => b.id === id);
    if (burgerToUpdate) {
      burgerToUpdate.name = burger.name;
      burgerToUpdate.price = burger.price;
      burgerToUpdate.picture = burger.picture;
      burgerToUpdate.available = burger.available;
      burgerToUpdate.ingredients = burger.ingredients;
    }
  }
  
  updateAvailability(id : number) : void {
    let burgerToUpdate = this._burgers.find(b => b.id === id);

    if (burgerToUpdate) {
      burgerToUpdate.available = !burgerToUpdate.available;
    }
  }

  delete(id : number) : void {
    this._burgers = this._burgers.filter(b => b.id !== id);
  }
}
