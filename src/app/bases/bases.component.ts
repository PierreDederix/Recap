import { Component } from '@angular/core';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.scss']
})
export class BasesComponent {
  name : string = 'Bob';

  eventMsg : string = 'Click on the button';

  imgSource : string = 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?q=65&auto=format&w=2270&ar=2:1&fit=crop'

  clickMe() : void {
    this.eventMsg = "You clicked me 👉👈";
  }

  // Pipes

  today : Date = new Date();

  // Directives
  isNight : boolean = false;
  toggleDayNight() : void {
    this.isNight = !this.isNight;
  }

  connected : boolean = false;
  login() : void {
    this.connected = true;
  }
  logout() : void {
    this.connected = false;
  }

  topWorstDriver : string[] = ['Français', 'Hollandais', 'Suisse'];

  // input/output
  foodType : string = '';
  setFoodType(type : string) : void {
    this.foodType = type;
    this.todayMeal = ''
  }
  todayMeal : string = '';

  changeMeal(meal : string) : void {
    this.todayMeal = meal
  }
}
