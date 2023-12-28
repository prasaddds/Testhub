import React from 'react';
import './Footer.css';

function Footer(){
    return(
        <>
        <div className="footer-container">
            {/* part1 */}
            <div className="footer-container-first-part">
                <h1>Online Exam</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui animi laboriosam 
                explicabo minus provident expedita saepe tenetur inventore </p>
                <h1>Follow Us</h1>
                <div className="footer-container-first-part-first">
                {/*<WhatsAppIcon/>
                <LinkedInIcon sx={{color:'white'}}/>
                <TwitterIcon sx={{color:'white'}}/>*/}
                </div>
            </div>
            {/* part2 */}
            <div className="footer-container-first-part">
                <h1>Resource</h1>
                <p>Home</p>
                <p>About Us</p>
                <p>features</p>
                <p>Contact Us</p>
            </div>
            {/* part3*/}
            <div className="footer-container-first-part">
                <h1>Give Us a Call</h1>
               
                <div className="footer-container-first-part-first">
                {/*<WifiCalling3OutlinedIcon />*/}
                <p>call: 999-999-9990</p>
                </div>
                <hr/>

                <h1>mail us</h1>
                <div className="footer-container-first-part-first">
                {/*<MailOutlinedIcon />*/}
                <p>mail: onlinedotexam@gmail.com</p>
                </div>
                <hr/>
                <p>Need Help?</p>
            </div>
        </div>
        
        </>
    );
}

export default Footer;