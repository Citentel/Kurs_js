const url = 'http://localhost:4321/todos';

export const getElements = () => fetch(url, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
});

export const addElement = (data) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: data,
});

export const removeElement = (id) => fetch(`${url}/${id}`, {
  method: 'DELETE',
});

export const updateElement = (id, data) => fetch(`${url}/${id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: data,
});
