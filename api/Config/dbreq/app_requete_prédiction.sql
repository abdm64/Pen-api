------------------------------------------------------------------------------------
----------------------------------Prediction----------------------------------------
------------------------------------------------------------------------------------

--the four pieces of information on the left

select sum(totale_amount_out ) from "App_Pdv" ap  where jour  = '2020-01-15'     

select sum(nb_transaction ) from "App_Pdv" ap  where jour  = '2020-01-15'     

select sum(nb_sim_sale +10) from "App_Pdv" ap  where jour  = '2020-01-15'    

select sum(nb_sim_activated + 10 ) from "App_Pdv" ap  where jour  = '2020-01-15'     


-----------search space --------

select jour,num, etat from "App_Prediction_pdv" app  where jour  ='2020-01-16'   

-- graph 01 
--le nombre des chutes par wilaya

select w.nom_wilaya  ,count(*)*15  nb_chute from "App_Prediction_pdv" app  inner join "App_Pdv" ap on app.num  = ap.num  inner join  "App_Commune"  cm on ap.id_commune  = cm.id_commune  inner join  "App_Wilaya"  w on cm.id_wilaya  = w.id_wilaya  where app.etat ='1' group by 1

--graph 02
-- le nombre des chute par jour (10j)
select  jour, count(*)  from "App_Pdv" ap  where etat ='1' group by 1


--graph 04 
-- pourcentage chute / non chute 

select  etat ,count(*) from "App_Prediction_pdv" app group by etat 


--graph 03
-- Market_share   pourcentage   

select sum(djezzy ) as Djezzy ,sum(ooredoo ) as Ooredoo ,sum(mobilis ) as Mobilis from "App_Market_share" ams  where jour  = '2020-01-15'  

