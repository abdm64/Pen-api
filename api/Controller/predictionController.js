const pool = require('../Config/db')
const array_req = require('../Config/request_id')
const total = array_req.totalprediction
const analyse = array_req.analysePrediction


exports.totalPrediction = async (req, res) => {
 
 
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

  exports.analysePrediction = async (req, res) => {
 
 
//console.log(analyse)
  
    try {
        const  nb_chutes_wilaya = await pool.query( analyse[0]);
         const  nb_chutes_day = await pool.query( analyse[1]);
         const nb_chutes_per = await pool.query( analyse[2]);
         const market_share = await pool.query( analyse[3]);
        const data = {
          nb_chutes_wilaya :  nb_chutes_wilaya.rows,
          nb_chutes_day:nb_chutes_day.rows,
          nb_chutes_per:nb_chutes_per.rows,
          market_share: market_share.rows
       
      }
      
      res.json(data);
    } catch (err) {
      console.error(err.message);
    }
  }