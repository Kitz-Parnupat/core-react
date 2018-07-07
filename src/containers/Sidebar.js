import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
class Sidebar extends Component {
    state = {
        menu: [
            {
                key:'1',
                name: 'menu1',
            },
            {
                key:'2',
                name: 'menu2',
            }
        ]
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.state.menu.map((item) => {
                            return <NavLink className="list-group-item" activeClassName="active" to={`/categories/${item.key}`} key={item.key}>{item.name}</NavLink>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Sidebar
