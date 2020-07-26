import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalydePlateComponent } from './analyde-plate/analyde-plate.component';
import { PredictionComponent } from './prediction/prediction.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: 'Analyse-Plate' , component: AnalydePlateComponent},
  {path:'Prédiction', component:PredictionComponent},
  {path:  'Register', component:RegisterComponent},
  {path: '', redirectTo: '/Register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
