import axios from 'axios';

const api = axios.create({
  baseURL: '/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm interceptor để đính kèm token nếu cần (ví dụ cho Admin Dashboard)
api.interceptors.request.use(
  (config) => {
    const adminId = localStorage.getItem('adminId');
    if (adminId) {
      config.headers['X-Admin-Id'] = adminId;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
