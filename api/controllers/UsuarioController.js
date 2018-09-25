/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  login: async function (req, res) {

    let correo = req.param('correo');
    let contrasenia =  req.param('contrasenia');

    console.log(req.param('a')+"|"+ req.param('b'));
   let user = await  Usuario.findOne({correo: correo,contrasenia: contrasenia});


    if(!user){
      res.send('USuario invalido');
      res.view('pages/login')

    }
    else{
      req.session.usuario = user;
      res.view('pages/usuarioData')
    }

  },
  logout:async function(req,res){

    req.session = null;
    req.redirect('/');
  }
};

