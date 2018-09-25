/**
 * DatoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  put: async  function(req,res){
    const tipos = {
      T : 'temperatura',
      H : 'humedad'
    };

    let {t,v} = req.body.split(':'); /// tipo y valor
    await Dato.create({tipo: tipos[t],valor: v});

    res.send('OK');

  }



};

