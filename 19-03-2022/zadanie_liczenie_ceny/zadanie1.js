const products = [
    {name: "Bananas", pricePerUnit: 1.49, quantity: 2},
    {name: "Bread", pricePerUnit: 3.29, quantity: 1},
    {name: "Chocolate", pricePerUnit: 5, quantity: 2},
];

function sumItems(products) {
    let sumPrice = 0;

    products.forEach(product => {
        sumPrice += product.pricePerUnit * product.quantity;
    });

    alert(sumPrice)
}

sumItems(products)