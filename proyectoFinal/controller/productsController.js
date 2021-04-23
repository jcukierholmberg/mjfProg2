let buzos = require ("../data/data");
let users = require ("../data/users")

let productsController = {
    product : function(req, res) {
        let id = req.params.id 
        return res.render ('product', {buzos_buzos: buzos.lista, idSearch: id, users: users.lista})
    },

    productAdd: function(req, res) {
        return res.render ('productAdd', {buzos_buzos: buzos.lista, users: users.list})
    },

    allProducts: function(req, res) {
        return res.render ('allProducts', {buzos_buzos: buzos.lista})
    },

}

module.exports = productsController;
    