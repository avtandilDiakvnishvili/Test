import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const findAll = () => {
  return axios.get(`${apiUrl}/admin/user`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
};

export const findOne = (id) => {
  return axios.get(`${apiUrl}/admin/user/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
};

export const create = (params) => {
  return axios.post(
    `${apiUrl}/admin/user`,
    {
      username: params.username,
      email: params.email,
      role: params.role
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
  );
};

export const update = (id, params) => {
  return axios.put(
    `${apiUrl}/admin/user/${id}`,
    {
      username: params.username,
      email: params.email,
      role: params.role,
      status: params.status
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
  );
};

export const remove = (id) => {
  return axios.delete(`${apiUrl}/admin/user/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
};
