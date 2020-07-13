import React from 'react';
import tourism1 from '../images/tourism1.jpg';
import tourism2 from '../images/tourism2.jpg';
import tourism3 from '../images/tourism3.jpg';
import tourism4 from '../images/tourism4.jpg';
import tourism5 from '../images/tourism5.jpg';
import tourism6 from '../images/tourism6.jpg';
import tourism7 from '../images/tourism7.jpg';
import tourism8 from '../images/tourism8.jpg';

const Destination = () => {
    return (
        <div className='offers-box'>
            <div className='big-heading'>Popular destinations in 2018</div>
            <div className='small-text'>TAKE A LOOK AT THESES OFFERS</div>
            <div className='images-flex'>
                <div className='img-box3'>
                    <div className="img">
                        <img src={tourism1} alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <div className="price">From $890</div>
                            <div className="country">Turkey</div>
                        </div>
                    </div>
                </div>
                <div className='img-box3'>
                    <div className="img">
                        <img src={tourism2} alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <div className="price">From $890</div>
                            <div className="country">Hawai</div>
                        </div>
                    </div>
                </div>
                <div className='img-box3'>
                    <div className="img">
                        <img src={tourism3} alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <div className="price">From $890</div>
                            <div className="country">Ireland</div>
                        </div>
                    </div>
                </div>
                <div className='img-box3'>
                    <div className="img">
                        <img src={tourism4} alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <div className="price">From $890</div>
                            <div className="country">Thailand</div>
                        </div>
                    </div>
                </div>
                <div className='img-box3'>
                    <div className="img">
                        <img src={tourism5} alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <div className="price">From $890</div>
                            <div className="country">Crotia</div>
                        </div>
                    </div>
                </div>
                <div className='img-box3'>
                    <div className="img">
                        <img src={tourism6} alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <div className="price">From $890</div>
                            <div className="country">Bali</div>
                        </div>
                    </div>
                </div>
                <div className='img-box3'>
                    <div className="img">
                        <img src={tourism7} alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <div className="price">From $890</div>
                            <div className="country">France</div>
                        </div>
                    </div>
                </div>
                <div className='img-box3'>
                    <div className="img">
                        <img src={tourism8} alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <div className="price">From $890</div>
                            <div className="country">Vietnam</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination;