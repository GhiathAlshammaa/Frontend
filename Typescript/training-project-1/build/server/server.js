"use strict";
/** @types/express must be installed in this project for VSCode to provide the correct code hints for the file below */
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
/*import { Question } from '../shared/Question';*/
var port = process.env.port || 1122;
var app = express();
var questions = [
    {
        title: 'Are dividends tax deductible?',
        content: 'I have recently decided to invest in....',
        answerCount: 2,
    },
    {
        title: 'Is it smart to invest in commodities?',
        content: 'My bank has recently offered a new....',
        answerCount: 1,
    },
];
app.use(express.static('public'));
app.get('/main.js', function (_req, res) {
    /** This patch is relative to the build directory */
    res.sendFile(path.resolve(__dirname, '..', 'client', 'client.js'));
});
/*
app.get("/client.js.map", (_req, res) => {

    res.sendFile(path.resolve(__dirname, "..", "client", "client.js.map"));

});

app.get("/src/client/client.ts", (_req, res) => {

    res.sendFile(path.resolve(__dirname, "..", "..", "src", "client", "client.ts"));

});
failed attempt to get source files working via serving... attempting to inline instead */
app.get('/questions', function (_req, res) {
    res.json(questions);
});
app.get('/new', function (req, res) {
    var question = req.query;
    questions.push(question);
    res.json({
        status: 'OK',
        questions: questions,
    });
});
app.listen(port);
console.info("App listening on port " + port + "!");
//# sourceMappingURL=server.js.map