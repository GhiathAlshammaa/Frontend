import * as express from 'express';

const port: string | number = process.env.port || 1122;
const app = express();

app.listen(port);
app.use(express.static('public')); // to randering index file

console.log(`Listening on Port ` + port);
