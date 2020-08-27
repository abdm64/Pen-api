import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalydePlateComponent } from './analyde-plate/analyde-plate.component';
import { PredictionComponent } from './prediction/prediction.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartHelper } from './ChartHelper';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    AnalydePlateComponent,
    PredictionComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,
    ChartsModule,
    HttpClientModule,
    MatIconModule,MatTableModule,MatPaginatorModule
  ],
  providers: [ChartHelper],
  bootstrap: [AppComponent]
})
export class AppModule {




}
