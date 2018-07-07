import React, { Component } from 'react'
import { Link,NavLink } from 'react-router-dom'
class Navbar extends Component {
    state = {
        menu:[
            {
                key:"1",
                name:"profile",
                path:"profile"
            },
            {
                key:"2",
                name:"Categories",
                path:"categories"
            }
        ]
    }
    toggleMenu(e){
        console.log("ss")
        // return (e) => {
        //     console.log(e.target)
        // }
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler is-active" onClick={this.toggleMenu} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {
                                this.state.menu.map((item,index)=>{
                                    return  <li className="nav-item" key={item.key}>
                                        <NavLink className="nav-link" activeClassName="active" to={`/${item.path}`}>{item.name}</NavLink>
                                    </li> 
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar
