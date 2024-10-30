// routes/campaignRoutes.js
const express = require('express');
const router = express.Router();
const { createCampaign, getCampaigns } = require('../controllers/campaignController');

// Route để tạo chiến dịch mới
router.post('/campaigns', createCampaign);

// Route để lấy danh sách các chiến dịch
router.get('/campaigns', getCampaigns);


module.exports = router;
