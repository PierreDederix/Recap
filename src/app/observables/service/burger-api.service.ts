import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Burger } from 'src/app/services/burgers';

@Injectable({
  providedIn: 'root'
})
export class BurgerApiService {

  private readonly BASE_URL : string = 'http://localhost:3000/burgers';

  constructor(private _client : HttpClient) { }

  getBurgers() : Observable<Burger[]> {
    return this._client.get<Burger[]>(this.BASE_URL)
  }

  addBurger(burger: Burger) {
    return this._client.post<Burger>(this.BASE_URL, burger)
  }
}
