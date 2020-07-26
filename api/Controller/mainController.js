
const pool = require('../Config/db')
const array_req = require('../Config/request_id')
const total = array_req.total
const analyse = array_req.analyse

exports.totalSum =  async (req, res) => {
 
 
    try {
        const totale_amount_out = await pool.query( total[0]);
        const nb_transaction = await pool.query( total[1]);
        const nb_sim_sale = await pool.query( total[2]);
        const nb_sim_activated = await pool.query( total[3]);
        const data = {
        totale_amount_out : parseInt(totale_amount_out.rows[0].sum),
         nb_transaction : parseInt(nb_transaction.rows[0].sum),
         nb_sim_sale: parseInt(nb_sim_sale.rows[0].sum),
         nb_sim_activated : parseInt(nb_sim_activated.rows[0].sum)
      }
      
      res.json(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  exports.analyse =  async (req, res) => {
 
 

  
    try {
        const montant_out = await pool.query( analyse[0]);
        const montant_in_out = await pool.query( analyse[1]);
        const nb_subs_day = await pool.query( analyse[2]);
        const nb_subs_wilaya = await pool.query( analyse[3]);
        const active_offer = await pool.query( analyse[4]);
        const custumer_value = await pool.query( analyse[5]);
        const market_share = await pool.query( analyse[6]);
        const tech = await pool.query( analyse[7]);
        const data = {
          
          montant_out : montant_out.rows,
          montant_in_out:montant_in_out.rows,
          nb_subs_day : nb_subs_day.rows,
          nb_subs_wilaya: nb_subs_wilaya.rows,
          active_offer: active_offer.rows,
          custumer_value: custumer_value.rows,
          market_share: market_share.rows,
          tech: tech.rows
      }
      
      res.json(data);
    } catch (err) {
      console.error(err.message);
    }
  }