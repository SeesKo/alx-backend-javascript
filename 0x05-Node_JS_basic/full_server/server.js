// Miniature Express server
import express from 'express';
import router from './routes/index';

const app = express();
const port = 1245;

// Set up middleware to use JSON body parser
app.use(express.json());

// Define the route
app.use('/', router);

const [, , databasePath] = process.argv;
app.locals.databasePath = databasePath;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
