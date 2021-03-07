"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var port = process.env.port || 1122;
var app = express();
app.listen(port);
app.use(express.static('public')); // to randering index file
console.log("Listening on Port " + port);
//# sourceMappingURL=server.js.map