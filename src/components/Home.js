import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => (

    <div>
        <h3>Home</h3>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/categories">Home</Link></li>
                <li className="breadcrumb-item active">Library</li>
            </ol>
        </nav>
    </div>
)


export default Home;