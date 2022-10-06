import './Feature.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/LocalPhone';
import BankIcon from '@material-ui/icons/AccountBalance';
import EmailIcon from '@material-ui/icons/Mail';
import ArrowIcon from '@material-ui/icons/ArrowForward';

const Featurs = () => {
    return (  
            <div className="content-of-feature">
                <div className="left-side">
                      <div className='section'>
                        <p>TheLookUP Features</p>
                        <h2>We deliver you the best</h2>
                      </div>
                      <div className='section'>
                        <p>It is a long establish fact that a reader will be distributed by the readable</p>
                      </div>
                      <div className='section'>
                          <h2>Tell us about new features</h2>
                          <p><a href="https://www.gmail.com/thelookup">thelookup@gmail.com</a></p>
                          <div className='icon'>
                             <div className='twit'><TwitterIcon sx={{fontSize:40}}/></div>
                             <div className='git'><GitHubIcon sx={{fontSize:40}}/></div>
                          </div>
                      </div>
                </div>
                <div className="right-side">
                    <div className="section">
                           <div className='empty'>
                               <div className='icon'>
                               <LocationIcon sx={{fontSize:50}}/>
                               </div >
                           </div>
                           <div className='text'>
                                <h3>Address LookUp</h3>
                                <p>this is paragrphe about bank and this is paragraphe about bank</p>
                                <div className='more'>
                                    <div >Learn more ... </div>
                                    <div ><ArrowIcon/></div>
                                 </div>
                           </div>
                          
                    </div>
                    <div className="section">
                            <div className='empty'>
                               <div className='icon'>
                                <PhoneIcon sx={{fontSize:50}}/>
                               </div>
                            </div>
                            <div className='text'>
                                <h3>Mobile Validation</h3>
                                <p>this is paragrphe about bank and this is paragraphe about bank</p>
                                <div className='more'>
                                    <div >Learn more ... </div>
                                    <div ><ArrowIcon/></div>
                                </div>
                           </div>
                            
                    </div>
                    <div className="section">
                            <div className='empty'>
                               <div className='icon'>
                                <EmailIcon sx={{fontSize:50}}></EmailIcon>
                               </div>
                            </div>
                            <div className='text'>
                                <h3>Email validation</h3>
                                <p>this is paragrphe about bank and this is paragraphe about bank</p>
                                <div className='more'>
                                    <div >Learn more ... </div>
                                    <div ><ArrowIcon/></div>
                                 </div>
                           </div>
                    </div>
                    <div className="section">
                            <div className='empty'>
                                <div className='icon'>
                                  <BankIcon sx={{fontSize:50}}></BankIcon>
                                </div>
                            </div>
                            <div className='text'>
                                <h3>Bank validation</h3>
                                <p>this is paragrphe about bank and this is paragraphe about bank</p>
                                <div className='more'>
                                    <div >Learn more ... </div>
                                    <div ><ArrowIcon/></div>
                                 </div>
                           </div>
                    </div>
                 </div>
            </div> 
    );
}
 
export default Featurs;