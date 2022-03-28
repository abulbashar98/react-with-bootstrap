import React from 'react';
import Card from '../Card/Card';

const Bootcontainer = () => {
    // 3 changes made: 
    // * JSX needs closing tags on img.....
    // * className= replaced by className=......
    // * to tackle the repetition of card codes.... we can use Component Card and repeat codes using map.....
    // * In that case when  send data to cards we wont have to repeat the process ovaer
    //   and over again.... we can send data using loop and use it dynamically.....


    const products = [
        { name: 'iPhone 13 pro', id: 1, price: 84000 },
        { name: 'samsung fold', id: 2, price: 184000 },
        { name: 'oneplus 9r', id: 3, price: 38000 },
    ]


    return (

        // Original Bootstrap Code

        // <div>
        //     <h1>This Is a Hello from Bootstrap in React</h1>
        //     <div className="card-group">
        //         <div className="card">
        //             <img src="..." className="card-img-top" alt="..." >
        //                 <div className="card-body">
        //                     <h5 className="card-title">Card title</h5>
        //                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        //                 </div>
        //         </div>
        //         <div className="card">
        //             <img src="..." className="card-img-top" alt="..." >
        //                 <div className="card-body">
        //                     <h5 className="card-title">Card title</h5>
        //                     <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        //                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        //                 </div>
        //         </div>
        //         <div className="card">
        //             <img src="..." className="card-img-top" alt="..." >
        //                 <div className="card-body">
        //                     <h5 className="card-title">Card title</h5>
        //                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        //                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        //                 </div>
        //         </div>
        //     </div>
        // </div>


        /*-------------- --------------*\
           After the changes have been made
        \*---------------------------------*/


        <div>
            <h1>This Is a Hello from Bootstrap in React</h1>
            <div className="card-group">
                {
                    products.map(product => <Card
                        product={product}
                        key={product.id}></Card>)
                }
            </div>
        </div>


    );
};

export default Bootcontainer;