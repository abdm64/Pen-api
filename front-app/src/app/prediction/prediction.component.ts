import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    respensive: true,
    title:{
          display: true,
          text: 'Un exemple visualisation '
        },
        // elements: {
        //   line: {
        //     tension: 0.1
        //   }
        // }, 			
  }
  public barChartType1 = 'bar';  
  public barChartType2 = 'line';
  public barChartType3 = 'horizontalBar';
  public barChartType4 = 'pie';
  public barChartType5 = 'doughnut';

  public barChartLabels= ['2006','2007','2008','2009','2010','2011','2012'];

  public barChartLegend=true;

  public barChartData = [
    {data : [65,40,54,78,53,97,80],label:'Serie A',backgroundColor:'#80bfff',borderColor:'#f2e6ff'},
    {data : [64,97,41,65,44,77,87],label:'Serie B',backgroundColor:'#3399ff',borderColor:'#f2e6ff'}
  ];
  public barChartData4 = [
    {data : [43,30,27],label:'Serie A',backgroundColor:['blue','red','green'],borderColor:'#80bfff'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
