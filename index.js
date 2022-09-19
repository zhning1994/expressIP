import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import geolocationRoute from './routes/geolocationRoute.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.listen(5000, () => {
  console.log('server is on');
});

app.use('/', geolocationRoute);
