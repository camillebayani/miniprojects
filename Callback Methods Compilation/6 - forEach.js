// 6. ForEach Display product Details
//  Use "forEach" to display specific details of each product, such as name and price, in the console. 

// const products = [
//     { name: 'Laptop', price: 799 },
//     { name: 'Headphones', price: 99 },
//     { name: 'Keyboard', price: 49 },
//     { name: 'Mouse', price: 25 },
//     { name: 'Monitor', price: 249 }
// ];

// //Product: Laptop  Price: $799

const gadgets = [
    { name: "Laptop", price: 799 },
    { name: "Headphones", price: 99 },
    { name: "Keyboard", price: 49 },
    { name: "Mouse", price: 25 },
  ];
  
  gadgets.forEach((gadget) => {
    console.log(`Product Name: ${gadget.name}, Price: 💰${gadget.price}`);
  });