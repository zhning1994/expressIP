import express from 'express';
import { getGeolocation } from '../controllers/geolocationController.js';

const router = express.Router();

router.get('/anonymize/:ip_address', getGeolocation);

export default router;
