import React from 'react';
import FanScrn from './fan-scrn';
import ReferalTile from './referal-info-tile';
const Banner = (props) => {
    const {fanImg, tileImg, userName, bannerText} = props;
    return(
        <div className="banner-section">
            <h1>{userName}</h1>
            <p>{bannerText}</p>
            <ReferalTile imgSrc={tileImg}/>
            <FanScrn imgSrc={fanImg}/>
        </div>
    )
}
export default Banner;
