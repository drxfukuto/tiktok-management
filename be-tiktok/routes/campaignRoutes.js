const express = require('express');
const { getCampaignList } = require('../controllers/campaignController');
const router = express.Router();

router.get('/campaigns/:advertiser_id', getCampaignList);

module.exports = router;
