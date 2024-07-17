// src/component/Home.jsx
import React from "react";
import Product from "./Product";

const Home = () => {
const product = [
   
 {name: 'LAMP',
Image:'https://via.placeholder.com/150',

description:'This is sample description of a Lamp',
price: 29.99,
quantity:10,
},
{name:'Flower',
Image:'https://via.placeholder.com/150',
description:'This is a sample description of flower',
price: 50.99,
quantity:5,
},
{
name: 'Shells',
Image: 'https://via.placeholder.com/150',
description: 'This is a sample of sea shells',
price: 45.99,
quantity:20,    
},
{
name: 'PlayStation 5.O',
Image: 'https://via.placeholder.com/150',
description: 'This is a sample description of a playstation 5.O',
price: 599.99,
quantity:15,
}
] 
return(
<div>
    <h1>Home Component</h1>
    {product.map((product, index) =>(
<Product
key={index}
name={product.name}
Image={product.Image}
description={product.description}
price={product.price}
quantity={product.quantity}
/>   
    ))}
</div>
);
};
export default Home;
