import logo from '../../Asset/Logo/Group 74.png';
import './Footer.css';
const Footer = () => {
    return ( 
        <div className="footer" >
          <div className="top">
          <img src={logo} className="logo" alt=" " />
            <p>Thelookup well-known API for address lookup and form valadation</p>
       </div>
       <div className="buttom">
            <div className="section" id="sec-1">
                <p>Aboat</p>
                <p>privacy policy</p>
                <p>cookies policy</p>
                <p>Terms of Use</p>
                <p>our toturial</p> 
                <p>Help and suport</p>
            </div>
            <div className="section">
                <p>Adress lookup</p>
                <p>Mobile varication</p>
                <p>Bank veritifiction</p>
                <p>Email valadation</p>
                <p>Quaik start</p>
                <p>Good pricing</p>
                <p>Lookup tutorial</p>
            </div>
            <div className="section" id="sec-3">
                    <h2> Address</h2>
                    <p>Sila Road,1st street</p>
                    <p>the lookup@gmail.com</p>
                    <p>0798827626</p>
                    <p>0798827626</p>
                    <button>Call Now</button>
            </div>
       </div>

        </div>
     );
}
 
export default Footer;