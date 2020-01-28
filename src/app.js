import React, { Component } from 'react';
import Bkgrnd from './assets/img_fan_bg.jpg';
import Ctaand from './assets/cta-android.png';
import Cardimg from './assets/rfrrl_card_bg.png';
import Fanimg from './assets/img-fan-1.png';
var style1 = {
    background: 'no-repeat',
    backgroundImage: `url(${Bkgrnd})`,
    backgroundSize: 'cover',
    height: '80vh',
    position: 'relative',
    overflow: 'hidden'
}
var style2 = {
    height: '235px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%'
}
var style3 = {
    position: 'absolute',
    right: '5%',
    top: '45%',
    transform: `scale(1.5)`
}
var style4 = {
    display: 'flex',
    height: '15vh',
    alignItems: 'center',
    justifyContent: 'center'
}
var footerStyle= {
    width: '90%',
    height: '80%',
    cursor: 'pointer'
}
var header = {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'sans-serif'
}
var para = {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'sans-serif'
}
var label = {
    height: '5vh',
    background: 'lightgrey'
}
var spanStyle1 = {
    position: 'absolute',
  
    top: '25px',
    left: '16px',
    color: '#404040',
    fontSize: '17px',
    fontStyle: 'italic'

}
var spanStyle2 = {
    position: 'absolute',
    fontSize: '60px',
    color: 'red',
    top: '35px',
    left: '16px',
    fontWeight: 'bold'

}
var spanStyle3 = {
    position: 'absolute',

    bottom: '50px',
    left: '16px',
    color: '#404040',
    fontSize: '17px',
    fontStyle: 'italic'

}
var spanStyle4= {
    position: 'absolute',

    bottom: '20px',
    left: '16px',
    fontSize: '25px',
    fontWeight: 'bold'

}
class App extends Component{

   render(){
      return(
         <div>
            <div style={style1}>
                <h1 style={header}>USRENAME12345</h1>
                <p style={para}>invite you to play Mobile premier leage</p>
                <div style={style2}>
                    <img src={Cardimg} alt="" style={{width: '100%', height: '100%'}}/>
                    <span style={spanStyle1}> Get free cash</span>
                    <span style={spanStyle2}> &#8377;20</span>
                    <span style={spanStyle3}> Use Referal Code</span>
                    <span style={spanStyle4}> ABCD123</span>
                </div>
                <img src={Fanimg} alt="" style={style3}/>
            </div>
            <div style={label}>
                <p style={para}>invite you to play Mobile premier leage</p>
            </div>
            <div style={style4}>
                <img src={Ctaand} alt="" style={footerStyle}/>

            </div>
         </div>
      );
   }
}
export default App;