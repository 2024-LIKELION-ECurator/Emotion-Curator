import axios from 'axios';

// 기본 API 설정 (axios 인스턴스)
const api = axios.create({
  baseURL: 'http://13.125.7.131', // Django 서버의 기본 URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// 테스트용 고정값 토큰
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM0NDQwMDQ1LCJpYXQiOjE3MzQzNTM2NDUsImp0aSI6ImFmOGZjNWI1YmE3NzQ0NmJiMjBlMmQzMTJmNmQ5NzRkIiwidXNlcl9pZCI6Mn0.RI2P7VSa0vD2qoRR3PPfOtiWJ6Zrn6NpFJTX9dPAe-w';

// 회원가입
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/users/register/', userData);
    console.log('회원가입 성공:', response.data);
    return response.data;  // 응답 데이터 반환
  } catch (error) {
    console.error('회원가입 실패:', error);
    throw error;  // 에러 발생 시 에러를 던져서 컴포넌트에서 처리하도록
  }
};

// 로그인
export const loginUser = async (loginData) => {
  try {
    const response = await api.post('/users/login/', loginData);
    console.log('로그인 성공:', response.data);
    return response.data;  // 로그인 시 받은 토큰 데이터를 반환
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error;
  }
};

// 마이페이지 조회 (GET 요청)
export const getUserInfo = async () => {
  try {
    const response = await api.get('/users/mypage/', {
      headers: {
        Authorization: `Bearer ${accessToken}`, // 인증 헤더에 토큰 추가
      },
    });
    console.log('마이페이지 정보:', response.data);
    return response.data;
  } catch (error) {
    console.error('마이페이지 조회 실패:', error);
    throw error;
  }
};

// 로그아웃 (POST 요청)
export const logoutUser = async () => {
  try {
    const response = await api.post('/users/logout/', {}, {
      headers: {
        Authorization: `Bearer ${accessToken}`, // 인증 헤더에 토큰 추가
      },
    });
    console.log('로그아웃 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('로그아웃 실패:', error);
    throw error;
  }
};
