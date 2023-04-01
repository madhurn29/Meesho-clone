import React, { useState } from 'react';

function Products() {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const productsData = [
    { id: 1, name: 'Product 1', price: 299 },
    { id: 2, name: 'Product 2', price: 499 },
    { id: 3, name: 'Product 3', price: 599 },
    { id: 4, name: 'Product 4', price: 699 },
  ];

  // Filter products based on the selected price range
  const filteredProducts = productsData.filter((product) => {
    if (!selectedPrice) return true;
    if (selectedPrice === '299') return product.price <= 299;
    if (selectedPrice === '499') return product.price > 299 && product.price <= 499;
    if (selectedPrice === '599') return product.price > 499 && product.price <= 599;
    if (selectedPrice === '699') return product.price > 599 && product.price <= 699;
  });

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  return (
    <div>
      <div>
        <label>
          <input type="checkbox" value="299" onChange={handleCheckboxChange} />
          Under 299
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" value="499" onChange={handleCheckboxChange} />
          299-499
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" value="599" onChange={handleCheckboxChange} />
          499-599
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" value="699" onChange={handleCheckboxChange} />
          599-699
        </label>
      </div>
      <div>
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name} - {product.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;
