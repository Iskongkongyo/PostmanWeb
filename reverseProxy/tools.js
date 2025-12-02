const axios = require('axios');

// 获取IPv4地址
async function getPublicIPv4() {
  try {
    const response = await axios.get('https://api.ipify.org', {
      timeout: 5000
    });
    return response.data;
  } catch (error) {
    console.error('获取IPv4失败:', error.message);
    throw error.message;
  }
}

// 获取IPv6地址
async function getPublicIPv6() {
  try {
    const response = await axios.get('https://api6.ipify.org', {
      timeout: 5000
    });
    return response.data;
  } catch (error) {
    console.error('获取IPv6失败:', error.message);
    throw error.message;
  }
}

// 同时获取两种地址
async function getAllIPs() {
  const [ipv4, ipv6] = await Promise.all([
    getPublicIPv4(),
    getPublicIPv6()
  ]);
  
  return { ipv4, ipv6 };
}

module.exports = {ipv4:getPublicIPv4(),ipv6:getPublicIPv6()};