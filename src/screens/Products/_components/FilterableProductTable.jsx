import React from 'react';
import SearchBar from './SearchBar'; 
import ProductTable from './ProductTable'; 

const FilterableProductTable = ({ products }) => {
    const filteredProducts = products;
    return (
    <div>
      <SearchBar/>
      <ProductTable products={filteredProducts} />
    </div>
  );
};

export default FilterableProductTable;
