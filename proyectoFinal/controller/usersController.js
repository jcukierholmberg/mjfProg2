let buzos = require ("../data/data");

let usersController = {

    profile : function(req, res) {
        let nombre = req.params.usuarioQueComento
                //que es usuarios??
        let result = []
        if (nombre != null) {
            fot ( let i = 0, i < buzos.usuarios.length, i++){
                if (buzos.usuarios[i].username.toLowerCase() == nombre.toLowerCase()){
                    result.push (buzos.usuarios[i])
                }
            }
            return res.render ('profile', {resultado: buzos.lista, usuarioClickeado: nombreUsuario, usuario: })
        }
        
        else {
            res.render ("profile", {resultado: buzos.lista, usuarioClickeado: nombreUsuario, usuario: })
            }
    },

    profileEdit: function(req, res) {
        return res.render ('profileEdit')
    },

    register: function(req, res) {
        return res.render ('register')
    },

    login: function(req, res) {
        return res.render ('login')
     },
}

module.exports = usersController;
