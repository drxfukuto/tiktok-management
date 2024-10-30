const express = require('express');
const connectDB = require('./config/db');
const campaignRoutes = require('./routes/campaignRoutes');

const app = express();
app.use(express.json());

// Kết nối cơ sở dữ liệu
connectDB();

// Sử dụng các route
app.use('/api', campaignRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
