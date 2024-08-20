import express from 'express';
import bodyParser from 'body-parser';
import indexRoutes from './routes/index';

const app = express();
const PORT = 1245;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', indexRoutes);

// Start server
const databasePath = process.argv[2];
if (!databasePath) {
  console.error('Error: Database path is required');
  process.exit(1);
}

app.locals.databasePath = databasePath;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
