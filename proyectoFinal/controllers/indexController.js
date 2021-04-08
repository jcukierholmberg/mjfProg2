const express = require('express');


let indexController = { 
    index : function(req, res) {
        res.render ('index.ejs')
    },

    } ;

    module.exports = indexController;
    