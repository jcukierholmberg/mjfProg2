const express = require('express');

let usersController = {
    login: function(req, res) {
        res.render ('login')
    },
    profile : function(req, res) {
        res.render ('profile')
    },

    profileEdit: function(req, res) {
        res.render ('profileEdit')
    },

    register: function(req, res) {
        res.render ('register')
    },
}

module.exports = usersController;
    