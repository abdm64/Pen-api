import * as Chart from 'chart.js';


export class ChartHelper {

  ict_unit = [];
  efficiency = [];
   coloR = [];

  createBarMontant_out(data, name,title){

    let years = this.getYears(data,'r')
    let montant_out = this.getData(data,'montant_out')


      let  bar= new Chart(name,{
          type: 'bar',
          data: {
              datasets: [{
                  label: 'montant par jour janvier',
                  data: montant_out,
                  backgroundColor: '#86C7F3',
                  borderColor: '#5EB4EF'


              },

          ],
              labels: years
          },



          options:{
            title:{
              text:title,
              display:true,
              fontSize:20,
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",

            },
          responsive: true,

          }





        });

      }


    createBarMontant_out_in(data, name,title){

      let years = this.getYears(data,'r')
      let montant_out = this.getData(data,'montant_out')
      let montant_in = this.getData(data,'montant_in')


        let  bar= new Chart(name,{
            type: 'bar',
            data: {
                datasets: [{
                    label: 'montant out par jour janvier',
                    data: montant_out,
                    backgroundColor: '#86C7F3',
                    borderColor: '#5EB4EF'


                },
                {
                  label: 'montant IN par jour janvier',
                  data: montant_in,
                  backgroundColor: '#FFA1B5',
                  borderColor: '#f2e6ff'


              },
            ],
                labels: years
            },



            options:{
              title:{
                text:title,
                display:true,
                fontSize:20,
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",

              },
            responsive: true,

            }





          });

        }

        createBar_nb_subs_day(data, name,title){

          let years = this.getYears(data,'r')
          let nb_activation = this.getData(data,'nb_activation')


            let  bar= new Chart(name,{
                type: 'bar',
                data: {
                    datasets: [{
                        label: 'number activation  par jour ',
                        data: nb_activation,
                        backgroundColor: '#86C7F3',
                        borderColor: '#5EB4EF'


                    },

                ],
                    labels: years
                },



                options:{
                  title:{
                    text:title,
                    display:true,
                    fontSize:20,
                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",

                  },
                responsive: true,

                }





              });

            }


     createPie_nb_subs_wilaya(data, name,title){

              let nom_wilaya = this.getWilaya(data,'nom_wilaya')
              let nb_suscrip = this.getData(data,'nb_suscrip')
              console.log(nb_suscrip);

              this.getRandomColor(data)



                let  bar= new Chart(name,{
                    type: 'pie',
                    data: {
                        datasets: [{
                            label: 'number activation  par wilaya ',
                            data: nb_suscrip,
                            backgroundColor: this.coloR,
                            borderColor: this.coloR


                        },

                    ],
                        labels: nom_wilaya
                    },



                    options:{
                      title:{
                        text:title,
                        display:true,
                        fontSize:20,
                        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",

                      },
                    responsive: true,
                    legend: {
                      display: false
                  }

                    }





                  });

                }


                createBar_active_offer(data, name,title){

                  let years = this.getYears(data,'Offer_ID')
                  let active_offer = this.getData(data,'number')


                    let  bar= new Chart(name,{
                        type: 'bar',
                        data: {
                            datasets: [{
                                label: 'number activation  par jour ',
                                data: active_offer,
                                backgroundColor: '#86C7F3',
                                borderColor: '#5EB4EF'


                            },

                        ],
                            labels: years
                        },



                        options:{
                          title:{
                            text:title,
                            display:true,
                            fontSize:20,
                            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",

                          },
                        responsive: true,

                        }





                      });

                    }






    getData(datas,type){

      let datae = []
      for ( let data of datas){

        datae.push(parseInt(data[type]))

      }
      return datae
    }

    getYears(datas,type){

      let year = []
      for ( let data of datas){

        year.push(new Date(data[type]).getDate())

      }

      return year
    }

    getWilaya(datas,type){

      let wilaya = []
      for ( let data of datas){

        wilaya.push((data[type]))

      }

      return wilaya
    }

    getRandomColor(data : any){
      var  dynamicColors = function() {
         var r = Math.floor(Math.random() * 255);
         var g = Math.floor(Math.random() * 255);
         var b = Math.floor(Math.random() * 255);
         return "rgb(" + r + "," + g + "," + b + ",0.3)";
      };
       for (var i in data) {
         this.ict_unit.push("ICT Unit " + data[i].ict_unit);
         this.efficiency.push(data[i].efficiency);
         this.coloR.push(dynamicColors());
       }


      }



}
