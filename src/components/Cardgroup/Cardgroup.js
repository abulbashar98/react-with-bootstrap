import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const Cardgroup = () => {
    const products = [
        { name: 'iPhone 13 pro', id: 1, price: 84000 },
        { name: 'samsung fold', id: 2, price: 184000 },
        { name: 'oneplus 9r', id: 3, price: 38000 },
    ]
    return (
        <div>
            <CardGroup>
                {
                    products.map(product => <Card2
                        product={product}
                        key={product.id}></Card2>)
                }
            </CardGroup>

        </div>
    );
};

export default Cardgroup;