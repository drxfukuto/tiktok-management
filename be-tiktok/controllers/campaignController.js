const { getCampaigns } = require('../services/tiktokApi');

exports.getCampaignList = async (req, res) => {
  try {
    const campaigns = await getCampaigns(req.params.advertiser_id);
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách chiến dịch' });
  }
};
