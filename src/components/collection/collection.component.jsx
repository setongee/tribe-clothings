import React from 'react'
import './collection.styles.scss'

import ItemComponent from './item.collection.component'

const Collections = ({title, items}) => (
    <div className="collection">
        <div className="title">{title.toUpperCase()}</div>
        <div className="list-items">
            {
                items
                .filter( (item, idx) => idx < 4 )
                .map( ( {id, ...otherItemProps } ) => (
                    <ItemComponent key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
)

export default Collections