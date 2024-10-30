// controllers/campaignController.js
const Campaign = require('../models/Campaign');

// Hàm để tạo chiến dịch mới
exports.createCampaign = async (req, res) => {
  try {
    const campaign = new Campaign(req.body);
    await campaign.save();
    res.status(201).json(campaign);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Hàm để lấy danh sách các chiến dịch
exports.getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
