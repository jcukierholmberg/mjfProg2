let buzos = require ("../data/data");

let usersController = {

    profile : function(req, res) {
        let nombre = req.params.usuarioQueComento
        return res.render ('profile', {buzos_buzos: buzos.lista})
    },

    profileEdit: function(req, res) {
        let id = req.params.id
        return res.render ('profileEdit', {producto: buzos.lista})
    },

    register: function(req, res) {
        return res.render ('register', {title: "Registrate"})
    },

    login: function(req, res) {
        return res.render ('login', {title: "Iniciar Sesion"})
     },
}

module.exports = usersController;
