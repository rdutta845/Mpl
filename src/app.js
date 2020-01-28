import React, { Component } from 'react';

import Ctaand from './assets/cta-android.png';
import Cardimg from './assets/rfrrl_card_bg.png';
import Fanimg from './assets/img-fan-1.png';

import AndroidButton from './components/andoid-download';

import LabelInfo from './components/label-info';
import Banner from './components/banner';
import './index.css';
class App extends Component{
   render(){
      const userName = 'USRENAME12345';
      const bannerText = 'invite you to play Mobile premier leage';
      const labelText = 'install the MPL & GET 20 MPL Tokens Free!'
      return(
         <div>
            <Banner userName={userName} bannerText={bannerText} fanImg={Fanimg} tileImg={Cardimg}/>
            <LabelInfo text={labelText}/>
            <AndroidButton imgSrc={Ctaand}/>
         </div>
      );
   }
}
export default App;