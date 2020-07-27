import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../backend-api.service';
import {ChartHelper } from '../ChartHelper';

@Component({
  selector: 'app-analyde-plate',
  templateUrl: './analyde-plate.component.html',
  styleUrls: ['./analyde-plate.component.css']
})
export class AnalydePlateComponent implements OnInit {

  constructor(private _backendApi : BackendApiService, private _chart: ChartHelper) { }
  Total_Amount : number
  Total_Count : number
  Total_Amount1 : number
  Total_Count1 : number



  ngOnInit(): void {
    this._backendApi.getTotalSum().subscribe((data) => {
      this.setamount(data)


    })
    this._backendApi.getAnalyse().subscribe((data)=> {
    const montant_out = this.getDataByrefrence(data,'montant_out')
      const montant_in_out = this.getDataByrefrence(data,'montant_in_out')
      const nb_subs_day = this.getDataByrefrence(data,'nb_subs_day')
      const nb_subs_wilaya = this.getDataByrefrence(data,'nb_subs_wilaya')
      const active_offer = this.getDataByrefrence(data,'active_offer')
      const custumer_value = this.getDataByrefrence(data,'custumer_value')
      const market_share = this.getDataByrefrence(data,'market_share')
      const tech = this.getDataByrefrence(data,'tech')



this._chart.createBarMontant_out(montant_out,'montant_out','montant out')
this._chart.createBarMontant_out_in(montant_in_out, 'montant_in_out','montant in  out' )
this._chart.createBar_nb_subs_day(nb_subs_day,'nb_subs_day','number activation  par jour')
this._chart.createPie_nb_subs_wilaya(nb_subs_wilaya,'nb_subs_wilaya','nb_subs_wilaya','nb_suscrip')
this._chart.createBar_active_offer(active_offer,'active_offer','active_offer')
this._chart.createPie_custumer_value(custumer_value,"custumer_value","Custumer_value")
this._chart.createPie_market_share(market_share,"market_share","market_share")
this._chart.createPie_tech(tech,'tech','tech')


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






}//class
