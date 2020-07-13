import React from 'react';
import tourism1 from '../images/tourism1.jpg';
import tourism2 from '../images/tourism2.jpg';
import tourism3 from '../images/tourism3.jpg';
import tourism4 from '../images/tourism4.jpg';

const Offers = () => {
    return (
        <div className='offers-box'>
            <div className='big-heading'>Top destinations in Europe</div>
            <div className='small-text'>TAKE A LOOK AT THESE OFFERS</div>
            <div className='images-flex'>
                <div className='img-box'>
                    <div className="img">
                        <img src={tourism1} alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <div className="price">From $890</div>
                            <div className="country">Paris, France</div>
                        </div>
                    </div>
                </div>
                <div className='img-box'>
                    <div className="img">
                        <img src={tourism2} alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <div className="price">From $890</div>
                            <div className="country">Italian Riveria</div>
                        </div>
                    </div>
                </div>
                <div className='img-box'>
                    <div className="img">
                        <img src={tourism3} alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <div className="price">From $890</div>
                            <div className="country">Satorni Greece</div>
                        </div>
                    </div>
                </div>
                <div className='img-box'>
                    <div className="img">
                        <img src={tourism4} alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <div className="price">From $890</div>
                            <div className="country">Cinque Terre</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers;