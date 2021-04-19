let buzos = require ("../data/data");

let usersController = {

    profile : function(req, res) {
        let nombre = req.params.usuarioQueComento
                //que es usuarios??
        let result = []
        if (nombre != null) {
            fot ( let i = 0; i < buzos.usuarios.length; i++){
                if (buzos.usuarios[i].username.toLowerCase() == nombre.toLowerCase()){
                    result.push (buzos.usuarios[i])
                }
            }
            return res.render ('profile', {resultado: buzos.lista, usuarioClickeado: nombreUsuario, usuario:buzos.usuario })
        }
        
        else {
            res.render ("profile", {resultado: buzos.lista, usuarioClickeado: nombreUsuario, usuario: buzos.usuario })
            }
    },

    profileEdit: function(req, res) {
        let id = req.params.id
        return res.render ('profileEdit', {producto: buzos.lista, idSearch: id, usuario: buzos.usuario })
    },

    register: function(req, res) {
        return res.render ('register', {title: "Register"})
    },

    login: function(req, res) {
        return res.render ('login', {title: "Inicia Sesion"})
     },
}

module.exports = usersController;
