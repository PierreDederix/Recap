import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasesComponent } from './bases/bases.component';
import { AddBurgerApiComponent } from './observables/components/add-burger-api/add-burger-api.component';
import { PanierComponent } from './observables/components/panier/panier.component';
import { ThermometreComponent } from './observables/components/thermometre/thermometre.component';
import { ObservablesComponent } from './observables/observables.component';
import { AddBurgerComponent } from './services/add-burger/add-burger.component';
import { DetailBurgerComponent } from './services/detail-burger/detail-burger.component';
import { EditBurgerComponent } from './services/edit-burger/edit-burger.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path : 'bases', component : BasesComponent },
  { path : 'services', component : ServicesComponent },
  { path : 'observables', component : ObservablesComponent },
  { path : 'obs/thermometre', component : ThermometreComponent },
  { path : 'obs/panier', component : PanierComponent },
  { path : 'obs/add', component : AddBurgerApiComponent },
  { path : 'burgers/add', component : AddBurgerComponent },
  { path : 'burgers/:id', component : DetailBurgerComponent },
  { path : 'burgers/edit/:id', component : EditBurgerComponent },
  // { path : '**', redirectTo : 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
