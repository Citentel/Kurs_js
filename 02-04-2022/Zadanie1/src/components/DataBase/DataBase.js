const url = 'http://localhost:3000/todos';

export const getElements = () => fetch(url, {
  method: 'GET',
  mode: 'no-cors',
  headers: {
    Accept: 'application/json',
  },
});

export const addElement = (data) => fetch(url, {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: data,
});

export const removeElement = (id) => fetch(`${url}/${id}`, {
  method: 'DELETE',
  mode: 'no-cors',
});

export const updateElement = (id, data) => fetch(`${url}/${id}`, {
  method: 'PUT',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: data,
});
