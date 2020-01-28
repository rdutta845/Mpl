import React from 'react';
const ReferalTile = (props) => {
    return(
        <div className="tile-info">
            <div className="top-sec">
                <p className="italic-text"> Get free cash</p>
                <p className="referal-amount"> &#8377;20</p>
            </div>
            <div className="bottom-sec">
                <p className="italic-text"> Use Referal Code</p>
                <p className="referal-code"> ABCD123</p>
            </div>
        </div>
    )
}
export default ReferalTile;
