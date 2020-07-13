import React from 'react';
import logo from '../images/logo.png';

class Navbar extends React.Component {
    handleToggle = () => {
        // console.log("clicked");
        const itemsDiv = document.getElementById('itemsDiv');
        // console.log(itemsDiv);
        itemsDiv.classList.toggle('active');
        const Navbar = document.getElementById('Navbar');
        Navbar.classList.toggle('active');
    }
    render() {
        return (
            <div className="navbar" id="Navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <span className="js-toggler" onClick={this.handleToggle}>
                    <i className="fas fa-bars"></i>
                </span>
                <div className="items-div" id="itemsDiv">
                    <div className="items">Home</div>
                    <div className="items">About us</div>
                    <div className="items">Offers</div>
                    <div className="items">News</div>
                    <div className="items">Contact</div>
                    <div className='items search'>
                        <i className='fas fa-search'></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;