import React from 'react'
import './collection.styles.scss'

const ItemComponent = ( { price, name,imageUrl } ) => (

    <div className='item'>
        <div className="image">
            
            <img src= {`${imageUrl}`} alt=""/>
            
            <div className="action-card">
                <button className="add-to-cart">add to cart</button>
            </div>

        </div>
        <div className="desc">
            <div className="name">{name}</div>
            <div className="name">{price}</div>
        </div>
    </div>

)

export default ItemComponent