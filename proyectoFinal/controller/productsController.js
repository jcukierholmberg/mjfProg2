let productsController = {
    product: function(req, res) {
        return res.render ('product')
    },

    productAdd: function(req, res) {
        return res.render ('productAdd')
    },

}

module.exports = productsController;
    