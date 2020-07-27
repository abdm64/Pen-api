import { Component, OnInit } from '@angular/core';
import { ChartHelper } from '../ChartHelper';
import { BackendApiService } from '../backend-api.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {
  Total_Amount : number
  Total_Count : number
  Total_Amount1 : number
  Total_Count1 : number


  constructor(private _backendApi : BackendApiService, private _chart: ChartHelper) { }

  ngOnInit(): void {

    this._backendApi.getTotalPred().subscribe((data) => {
      this.setamount(data)


    })
    this._backendApi.getAnalysePred().subscribe((data)=> {
      const nb_chutes_wilaya = this.getDataByrefrence(data,'nb_chutes_wilaya')
      const nb_chutes_day = this.getDataByrefrence(data,'nb_chutes_day')
      const nb_chutes_per = this.getDataByrefrence(data,'nb_chutes_per')
      const market_share = this.getDataByrefrence(data,'market_share')
      //create chart
      this._chart.createPie_market_share(market_share,"market_share","market_share")
      this._chart.createPie_nb_subs_wilaya(nb_chutes_wilaya,'nb_chutes_wilaya','nb_chutes_wilaya','nb_chute')
      this._chart.createBarnb_chutes_day(nb_chutes_day,'nb_chutes_day','nb_chutes_day')
      this._chart.createBar_nb_chutes_per(nb_chutes_per,'nb_chutes_per','nb_chutes_per')


    })
  }

  setamount(data){

    this.Total_Amount = data.totale_amount_out
    this.Total_Count = data.nb_transaction
    this.Total_Amount1 = data.nb_sim_sale
    this.Total_Count1 = data.nb_sim_activated


  }

  getDataByrefrence(data,name){


    return data[name]
  }


}//
