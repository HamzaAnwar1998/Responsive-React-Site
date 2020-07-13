import React from 'react';

const Adventure = () => {
    return (
        <div className="adventure-box">
            <div className="heading">Find the Adventure of lifetime</div>
            <br />
            <div className="form-div">
                <form action="" className="form-group">
                    <div>
                        <label htmlFor="">Destination</label>
                        <input type="text" className="form-control" placeholder="keyword here" />
                    </div>
                    <div>
                        <label htmlFor="">Adventure Type</label>
                        <input type="text" className="form-control" placeholder="Categories" />
                    </div>
                    <div>
                        <label htmlFor="">Max Price</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <label htmlFor="">Min Price</label>
                        <input type="text" className="form-control" />
                    </div>
                </form>
                <button className="form-btn">FIND</button>
            </div>
        </div>
    )
}

export default Adventure;