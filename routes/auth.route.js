const express = require("express");
const authController = require("../controller/auth.controller");

const route = express.Router();


// POST - register
route.post("/registered", authController.registered);

// POST - login
route.post("/login", authController.login);

// POST - refresh 
route.post("/refresh", authController.requestRefreshToken);

module.exports = route;
