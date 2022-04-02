fetch('http://localhost:3003/cars', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Polonez'
  })
})