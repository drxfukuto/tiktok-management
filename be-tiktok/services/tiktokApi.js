const axios = require('axios');

const tiktokApi = axios.create({
  baseURL: 'https://business-api.tiktok.com/open_api/v1.2/',
  headers: {
    'Access-Token': process.env.TIKTOK_API_KEY,
    'Content-Type': 'application/json'
  }
});

// Hàm lấy danh sách chiến dịch
const getCampaigns = async (advertiser_id) => {
  try {
    const response = await tiktokApi.get(`/campaign/get`, {
      params: { advertiser_id }
    });
    return response.data;
  } catch (error) {
    console.error('Lỗi lấy danh sách chiến dịch:', error);
    throw error;
  }
};

module.exports = { getCampaigns };
