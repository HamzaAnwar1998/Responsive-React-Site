import React from 'react';
import tourism9 from '../images/tourism9.jpg';
// import tourism10 from '../images/tourism10.jpg';
import tourism11 from '../images/tourism11.jpg';

const SpecialOffers = () => {
    return (
        <div className='offers-box'>
            <div className='big-heading'>Special Offers</div>
            <div className='small-text'>TAKE A LOOK AT THESE OFFERS</div>
            <div className='images-flex'>
                <div className='img-box2'>
                    <div className="img">
                        <img src={tourism9} alt="" />
                    </div>
                    <div className='navigation-btn'>
                        <i className='fas fa-arrow-right'></i>
                    </div>
                </div>
                <div className='img-box2 display'>
                    <div className="img colored">
                        {/* <img src={tourism10} alt="" /> */}
                    </div>
                </div>
                <div className='img-box2 display'>
                    <div className="img">
                        <img src={tourism11} alt="" />
                    </div>
                    <div className='navigation-btn'>
                        <i className='fas fa-arrow-right'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialOffers;