import React from 'react';

const Newsletter = () => {
    return (
        <div className='newsletter-box'>
            <div className='heading'>Subscribe to our Newsletter</div>
            <div className='form'>
                <input type="text" placeholder='Enter Email...' />
                <button>SUBSCRIBE</button>
            </div>
        </div>
    )
}

export default Newsletter;