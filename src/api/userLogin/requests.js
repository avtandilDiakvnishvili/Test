import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const login = (params) => {
  return axios.post(`${apiUrl}/auth/sign-in`, {
    email: params.email,
    password: params.password
  });
};

export const registration = (params) => {
  return axios.post(`${apiUrl}/auth/sign-up`, {
    firstname: params.firstName,
    lastname: params.lastName,
    username: params.userName,
    email: params.mail,
    password: params.password,
    confirmPassword: params.password,
    phone: '',
    phoneCode: '',
    phoneNumber: '',
    identityNumber: '',
    birthDate: ''
  });
};

export const currentUser = (params) => {
  return axios.get(`${apiUrl}/auth/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
};

export const updateProfile = (params) => {
  return axios.put(
    `${apiUrl}/auth/profile`,
    {
      username: params.username,
      email: params.email
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
  );
};
