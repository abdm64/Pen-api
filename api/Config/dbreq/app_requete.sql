------------------------------Requete  for  PFE  application  USTHB  --------------------------------------------

--the four pieces of information on the left

select sum(totale_amount_out ) from "App_Pdv" ap;

select sum(nb_transaction ) from "App_Pdv" ap;

select sum(nb_sim_sale + 25) from "App_Pdv" ap 

select sum(nb_sim_activated + 25 ) from "App_Pdv" ap 

---------------------------analyse plate -------------------------------------------------------------------------
---- graph 01
-- le montant_out par jour   (10j) 
select  jour r ,sum(totale_amount_out ) as montant_out from "App_Pdv" ap  group by 1

---- graph 02
-- le montant in/out   par jour  (10j) 
select  jour r ,sum(totale_amount_out ) as montant_out,sum(totale_amount_in ) as montant_in from "App_Pdv" ap group by 1


---- graph 03
--le nombre de suscription par jour (10j)

select  jour r ,sum(nb_sim_activated + 5 ) as nb_activation from "App_Pdv" ap group by 1

---- graph 04
--le nombre de suscription par wilaya

select  w.nom_wilaya ,sum(nb_sim_activated +5) as nb_suscrip from "App_Pdv" ap  inner join "App_Commune"  c on ap.id_commune = c.id_commune  inner join "App_Wilaya"  w on c.id_wilaya  = w.id_wilaya  group by 1

---- graph 05
--activation   par offre 

select  "Offer_ID" ,  count(*) as number from "App_Offer" ao  group by 1 order by   number  desc


---- graph 06
---zone  /  custumer_value 

select  "Customer_Value" , sum("TOTAL_CUSTOMER" ) from "CLIENT_VALUE_BY_ZONE" cvbz group by 1

--graph 7
-- Market_share   pourcentage   

select (sum(djezzy )/14) as Djezzy ,(sum(ooredoo )/14) as Ooredoo ,(sum(mobilis )/14) as Mobilis from "App_Market_share" ams 

--graph 8
--TECHNOLOGIE 

select  "TECHNOLOGIE" , count(*)  as pourcentage 
from "TECHNOLOGIEWITH_GEOLOCALIZATION" tg  
where "TECHNOLOGIE"  
in ('4G','3G','2G') 
group by 1

