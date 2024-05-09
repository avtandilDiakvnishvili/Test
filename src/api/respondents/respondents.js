import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const findAll = () => {
  return axios.get(`${apiUrl}/respondents`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
};

export const findOne = (id) => {
  return axios.get(`${apiUrl}/respondents/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
};

export const create = (params) => {
  return axios.post(
    `${apiUrl}/respondents`,
    {
      firstname: params.firstname,
      lastname: params.lastname,
      identityNumber: params.identityNumber
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
  );
};

export const upload = (data) => {
  return axios.post(`${apiUrl}/respondents/import`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const update = (id, params) => {
  return axios.put(
    `${apiUrl}/respondents/${id}`,
    {
      firstname: params.firstname,
      lastname: params.lastname,
      identityNumber: params.identityNumber
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
  );
};

export const remove = (id) => {
  return axios.delete(`${apiUrl}/respondents/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
};
