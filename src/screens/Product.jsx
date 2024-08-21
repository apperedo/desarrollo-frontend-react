import React from 'react';
import FilterableProductTable from './Products/_components/FilterableProductTable';
import Home from './Products/_components/Home';

const Product = () => {

    const products = [
        { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
        { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
        { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
        { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
        { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
        { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
    ];

    return (
        <>
            <Home />
            <FilterableProductTable products={products} /> 
        </>
    );
};

export default Product;
