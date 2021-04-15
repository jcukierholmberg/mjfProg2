const express = require('express');

let productsController = {
    product: function(req, res) {
        res.render ('product.ejs')
    },

    productAdd: function(req, res) {
        res.render ('productAdd.ejs')
    },

}

module.exports = productsController;
    