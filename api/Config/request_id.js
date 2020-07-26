const array_req = {
    total  : ['select sum(totale_amount_out ) from "App_Pdv" ap','select sum(nb_transaction ) from "App_Pdv" ap','select sum(nb_sim_sale + 25) from "App_Pdv" ap','select sum(nb_sim_activated + 25 ) from "App_Pdv" ap '],
    analyse : ['select  jour r ,sum(totale_amount_out ) as montant_out from "App_Pdv" ap  group by 1','select  jour r ,sum(totale_amount_out ) as montant_out,sum(totale_amount_in ) as montant_in from "App_Pdv" ap group by 1','select  jour r ,sum(nb_sim_activated + 5 ) as nb_activation from "App_Pdv" ap group by 1','select  w.nom_wilaya ,sum(nb_sim_activated +5) as nb_suscrip from "App_Pdv" ap  inner join "App_Commune"  c on ap.id_commune = c.id_commune  inner join "App_Wilaya"  w on c.id_wilaya  = w.id_wilaya  group by 1','select  "Offer_ID" ,  count(*) as number from "App_Offer" ao  group by 1 order by   number  desc', 'select  "Customer_Value" , sum("TOTAL_CUSTOMER" ) from "CLIENT_VALUE_BY_ZONE" cvbz group by 1','select (sum(djezzy )/14) as Djezzy ,(sum(ooredoo )/14) as Ooredoo ,(sum(mobilis )/14) as Mobilis from "App_Market_share" ams ', `select  "TECHNOLOGIE" , count(*)  as pourcentage from "TECHNOLOGIEWITH_GEOLOCALIZATION" tg  where "TECHNOLOGIE" in ('4G','3G','2G')  group by 1`],
    totalprediction : [`select sum(totale_amount_out ) from "App_Pdv" ap  where jour  = '2020-01-15' `, ` select sum(nb_transaction ) from "App_Pdv" ap  where jour  = '2020-01-15'  `, ` select sum(nb_sim_sale +10) from "App_Pdv" ap  where jour  = '2020-01-15'  `,` select sum(nb_sim_activated + 10 ) from "App_Pdv" ap  where jour  = '2020-01-15'  `,` select  jour, count(*)  from "App_Pdv" ap  where etat ='1' group by 1 `, ],
    analysePrediction : [` select w.nom_wilaya  ,count(*)*15  nb_chute from "App_Prediction_pdv" app  inner join "App_Pdv" ap on app.num  = ap.num  inner join  "App_Commune"  cm on ap.id_commune  = cm.id_commune  inner join  "App_Wilaya"  w on cm.id_wilaya  = w.id_wilaya  where app.etat ='1' group by 1 `,`select  jour, count(*)  from "App_Pdv" ap  where etat ='1' group by 1`,'select  etat ,count(*) from "App_Prediction_pdv" app group by etat ', ` select sum(djezzy ) as Djezzy ,sum(ooredoo ) as Ooredoo ,sum(mobilis ) as Mobilis from "App_Market_share" ams  where jour  = '2020-01-15'   ` ]
}

// `  `




  



module.exports = array_req;