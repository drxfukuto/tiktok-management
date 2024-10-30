// server.js
const express = require('express');
const connectDB = require('./config/db');
const campaignRoutes = require('./routes/campaignRoutes');
const axios = require('axios');
const app = express();
app.use(express.json());
require('dotenv').config();
// Kết nối cơ sở dữ liệu
connectDB();

// Sử dụng các route
app.use('/api', campaignRoutes);

app.get('/tiktok/callback', async (req, res) => {
  const authorizationCode = req.query.code;

  if (!authorizationCode) {
    return res.status(400).send("Authorization code not provided");
  }

  try {
    // Gửi yêu cầu lấy Access Token từ TikTok
    const response = await axios.post('https://business-api.tiktok.com/open_api/v1.3/oauth2/access_token/', {
      app_id: process.env.TIKTOK_APP_ID,
      secret: process.env.TIKTOK_APP_SECRET,
      auth_code: authorizationCode,
      redirect_uri: 'https://yourdomain.com/tiktok/callback'  // Thay bằng URL callback thực tế của bạn
    });

    const accessToken = response.data.data.access_token;
    console.log("Access Token:", accessToken);

    // Sau khi có access token, bạn có thể lưu trữ hoặc sử dụng nó
    res.send("TikTok Authentication Successful! Access token received.");
  } catch (error) {
    console.error("Error fetching access token:", error.response?.data || error.message);
    res.status(500).send("Failed to retrieve access token.");
  }
});

// Định nghĩa PORT và lắng nghe kết nối
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
