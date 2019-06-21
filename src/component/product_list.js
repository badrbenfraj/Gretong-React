import React, { Component } from 'react';
import Product from './product';
import {ProductConsumer} from './context';


class ProductList extends Component {
    render() {
        return (
            <div className="container" style={{overflow: 'hidden'}}>
                <ProductConsumer>
                    {
                        (value) => {
                            return value.products.map( product => {
                                return <Product key={product.id} product={product}/>;
                            });
                        }
                    }
                </ProductConsumer>
            </div>
        );
    }
}

export default ProductList;