import React from 'react';
import logo from '../images/logo.png';
import img1 from '../images/background2.jpg'
import img2 from '../images/tourism11.jpg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-divs'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div><br />
                <div className='text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit facilis perferendis blanditiis quas, ea eum quo ipsa! Quaerat, dolore! Nesciunt repellat impedit labore est blanditiis itaque ullam accusamus omnis voluptatibus.
                </div>
            </div><br /><br />
            <div className='footer-divs'>
                <div className='heading'>Latest News</div>
                <br />
                <div className='latest-news-div'>
                    <div className='img'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='details'>
                        <div className='name'>Brazil Summer</div>
                        <div className='date'>Jan 09, 2018</div>
                    </div>
                </div><br />
                <div className='latest-news-div'>
                    <div className='img'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='details'>
                        <div className='name'>A Perfect Vacation</div>
                        <div className='date'>Jan 09, 2018</div>
                    </div>
                </div>
            </div><br /><br />
            <div className='footer-divs'>
                <div className='heading'>Tags</div>
                <br />
                <div className='tags-div'>
                    <div className='btns'>
                        <button>travel</button>
                    </div>
                    <div className='btns'>
                        <button>summer</button>
                    </div>
                    <div className='btns'>
                        <button>cruise</button>
                    </div>
                    <div className='btns'>
                        <button>beach</button>
                    </div>
                    <div className='btns'>
                        <button>offer</button>
                    </div>
                    <div className='btns'>
                        <button>vacation</button>
                    </div>
                    <div className='btns'>
                        <button>trip</button>
                    </div>
                    <div className='btns'>
                        <button>city break</button>
                    </div>
                    <div className='btns'>
                        <button>adventure</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;