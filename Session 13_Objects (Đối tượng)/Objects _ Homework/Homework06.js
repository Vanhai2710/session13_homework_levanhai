


let products = [
    {
        id: 1,
        name: 'iPhone 12',
        price: 20000000,
    },
    {
        id: 2,
        name: 'iPhone 11',
        price: 10000000,
    },
    {
        id: 3,
        name: 'samsung note 10',
        price: 500000000,
    }
]

products.sort((a,b) => a.price - b.price);

console.log(products);
