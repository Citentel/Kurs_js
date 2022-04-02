fetch('http://localhost:3003/cars')
  .then((response) => {
    return response.json()
  })
  .then((cars) => {
    const listHtml = document.querySelector('#cars-list');
    let elements = '';
    
    cars.forEach((car, key) => {
      elements += `<li data-id="${key}">${car.Name}</li>`;
    });
    
    listHtml.innerHTML = elements;
  })
  .catch((error) => {
    console.error(error)
  })
