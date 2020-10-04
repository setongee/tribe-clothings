import React from 'react'
import MenuItem from '../menu-items/menu-item.component'
import './directory.styles.scss'
import { sections } from './directory-data'

class Directory extends React.Component {
    constructor () {
        super()

        this.state = {
            section : sections
        }
    }


    render() {
        return (
            <div className="directory-menu">

                {
                    this.state.section.map( ({id, ...otherSectionProps }) => {
                        return <MenuItem key = {id} {...otherSectionProps} />
                    })
                }

            </div>
        )
    }

}

export default Directory
