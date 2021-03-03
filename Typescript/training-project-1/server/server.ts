import * as express from 'express';
import { Question } from '../@types/Question';
import * as path from 'path';

const questions: Question[] = [
  {
    title: 'How to log in?',
    content: 'How do I log in?',
    answerCount: 2,
  },
];

const port: string | number = process.env.port || 1122;
const app = express();

app.listen(port);
app.use(express.static('public')); // to rendering index file

console.log(`Listening on ` + port);

app.get('/questions', (_req, res) => {
  res.json(questions);
});

app.get('/main.js', (_req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'client.js'));
});
