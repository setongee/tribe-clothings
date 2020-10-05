import React from 'react'
import SHOP_DATA from './shop-data'
import Collections from '../../components/collection/collection.component'

class Shop extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {

            collections : SHOP_DATA
        }
    }

    render () {
        
        return (
           
               <div>
                   
                    {
                    this.state.collections.map( ({id, title, items}) => {
                    return <Collections title = {title} key = {id} items = {items}/>
                    })
                }

               </div>
        )
    }
}

export default Shop