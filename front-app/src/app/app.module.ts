import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalydePlateComponent } from './analyde-plate/analyde-plate.component';
import { PredictionComponent } from './prediction/prediction.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartHelper } from './ChartHelper'



@NgModule({
  declarations: [
    AppComponent,
    AnalydePlateComponent,
    PredictionComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [ChartHelper],
  bootstrap: [AppComponent]
})
export class AppModule {



  
}
