import React from 'react'
import Navbar from '../Navbar/Navbar'
import HomeImage from '../images/HomeImage.jpg';
import './Home.css';
import filesetting from '../images/file-setting.png';
import maths from '../images/maths.png';
import system from '../images/system.png';
import Arrow from '../images/arrow.PNG';
import examstart from '../images/examstart.PNG';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Home = () => {
  return (
    <div className="home-page-container">
        <Navbar/>
        <div>
          {/* first div part */}
          <div className='home-page-first-div'>
            <div className='home-page-headers'>
            <h5> «Built for the realities of the classroom»</h5>
            <h3>Simply Powerful</h3>
            <h1>ONLINE EXAMS</h1>
            <p>TestHub equips you with all the power and function you need to securely create, conduct and mark exams for your students.
            Create and conduct your first exam in less than an hour</p>
            <div>
            <NavLink to={'/login'} ><button className='home-page-register-btn'>Login</button></NavLink>
            </div>
            </div>
            <div className='home-page-image-first-div'>
            <img src={HomeImage} alt="home-image" className='Home-page-head-image'/>
            </div>
          </div>
          {/* second div part*/}
          <div className="home-page-second-div-container">
            <div className="home-page-second-div-head">
              <h1>Why choose TestHub?</h1>
            </div>
            <div className="home-page-second-div-parts">
              {/* 2nd div 1st */}
              <div className="home-page-sec-parts-each">
              <img src={maths} alt="maths" className="home-page-second-each-img"/>
              <h1>EVERYTHING YOU NEED</h1>
              <p>Create comprehensive exams with powerful tools that are easy to use and quick to apply</p>

              </div>
              {/* 2nd div 1st */}
              <div className="home-page-sec-parts-each">
              <img src={system} alt="system" className="home-page-second-each-img"/>
              <h1>MAKE IT SIMPLE</h1>
              <p> Conduct exams with confidence and control thanks to our intuitive software that simplifies technical complexity</p>
              </div>
              {/* 2nd div 1st */}
              <div className="home-page-sec-parts-each">
              <img src={filesetting} alt="file-setting" className="home-page-second-each-img"/>
              <h1>EMPOWER EVERY STUDENT</h1>
              <p>Customize exams to empower each student's individual needs and let their knowledge shine</p>
              </div>
            </div>
            {/*2nd div buttons */}
            <div className="home-page-second-div-buttons">
              <div>
                <button>How its works</button>
              </div>
              <div>
                <button>See The Video</button>
              </div>
            </div>
          </div>

        </div>

        {/* third div in home page */}
        <div className="home-page-third-div-container">
          <div className="home-page-third-div-header">
            <p>Trusted by Over <b>xxx</b> recruiters</p>
          </div>
          <div className="home-page-third-div-parts">
            <div className="home-page-third-div-parts-each">
            {/* 1st div in 3r*/}
              <p>xxx</p>
              <p>Companies</p>
            </div>
            <div className="home-page-third-div-parts-each">
            {/* 2nd div in 3r */}
              <p>xxx</p>
              <p>Universities</p>
            </div>
            <div className="home-page-third-div-parts-each">
            {/* 3rd div in 3r */}
              <p>xxx</p>
              <p>Exams started</p>
            </div>
          </div>
        </div>

        {/* 4th div of the home page starts here */}
        <div className="home-page-fourth-container">
          <div className="home-page-fourth-con-header">
            <h2>But I teach <span>History . . .</span> will <span>TestHub</span> work for me and my students?</h2>
          </div>
          <div className="home-page-fourth-container-imp-parts">
            <div className="home-page-fourth-container-imp-parts-first">
              <p>Charles Duboc</p>
              <p>Math Teacher</p>
              
              <p>I found Exam.net at the start of the school year and 
              I've told everyone about it. I was in love with the 
              app and it's about the only way I got through teaching and 
              assessing in the Fall. As a math teacher, it did all of the things I 
              needed it to. It has a great equation editor that was super easy to learn 
              and use. It has Desmos included so students could graph and then include the 
              files and it was easy for them to upload their work so I could continue to 
              grade for partial credit. I spent the time to set up my assessments using auto 
              grading which was really helpful.</p>
              
              <p>The Hun School of Princeton</p>
              <p>Read more testimonials from Math Teachers</p>
            </div>
            <div className='home-page-fourth-container-imp-parts-second'>
              <div className='home-page-fourth-container-imp-parts-second-header'>
                <h2>You choose which of Exam.net's integrated tools
                 are available during your exam.</h2>
              </div>
              <div className='home-page-fourth-container-imp-parts-second-points'>
                <div>
                <img src={Arrow} alt="Arrow" className='Arrow-images-in-home-page-fourth-div'/>
                 
                  <p>GeoGebra: A tool with both graphing and algebra capabilities</p>
                </div>
                <div>
                  <img src={Arrow} alt="Arrow" className='Arrow-images-in-home-page-fourth-div'/>
                  <p>Desmos: A tool for constructing and analyzing mathematical graphs</p>
                </div>
                <div>
                  <img src={Arrow} alt="Arrow" className='Arrow-images-in-home-page-fourth-div'/>
                  <p>Calculator</p>
                </div>
                <div>
                  <img src={Arrow} alt="Arrow" className='Arrow-images-in-home-page-fourth-div'/>
                  <p>Equation Editor</p>
                </div>
                <div>
                  <img src={Arrow} alt="Arrow" className='Arrow-images-in-home-page-fourth-div'/>
                  <p>Drawing Area</p>
                </div>
                <div>
                  <img src={Arrow} alt="Arrow" className='Arrow-images-in-home-page-fourth-div'/>
                  <p>Teacher Uploaded Resources such as a list of equations</p>
                </div>
                <div>
                  <img src={Arrow} alt="Arrow" className='Arrow-images-in-home-page-fourth-div'/>
                  <p>Text editor toolbar includes Greek letters and equation symbols</p>
                </div>
                <div>
                  <img src={Arrow} alt="Arrow" className='Arrow-images-in-home-page-fourth-div'/>
                  <p>Scan handwritten drawings</p>
                </div>
              </div>
              
            </div>
          </div>

        </div>
        {/* home page 5th div */}
        <div className="home-page-fifth-container">
            <div className="home-page-fifth-div-second-container">
              <div>
                <div className='home-page-fourth-container-imp-parts-second-header'>
                <h2>Create and conduct your first exam in less than an hour</h2>
                </div>
                <div className="home-page-fifth-container-imp-parts">
                  <div className="home-page-fifth-container-imp-parts-each">
                    <img src={Arrow} alt="Arrow" className='Arrow-images-in-home-page-fourth-div'/>
                    <p>Without talking to a salesperson or scheduling a demo</p>
                  </div>
                  <div className="home-page-fifth-container-imp-parts-each">
                    <img src={Arrow} alt="Arrow" className='Arrow-images-in-home-page-fourth-div'/>
                    <p>Without putting a credit card on file</p>
                  </div>
                  <div className="home-page-fifth-container-imp-parts-each">
                    <img src={Arrow} alt="Arrow" className='Arrow-images-in-home-page-fourth-div'/>
                    <p>Without installing software or performing technical integrations</p>
                  </div>
                  <div className="home-page-fifth-container-imp-parts-each">
                    <img src={Arrow} alt="Arrow" className='Arrow-images-in-home-page-fourth-div'/>
                    <p>Without creating student accounts</p>
                  </div>
                </div>
              </div>
              <div>
              <img src={examstart} alt="exam-start" className="fifth-home-page-exam-start-img"/>
              </div>
            </div>
            <div className="home-page-fifth-container-button">
            <NavLink to={'/tests'} ><button>Start Test</button></NavLink>
            </div>  
        </div>

        {/* home page 6th div */}
        <div className="home-page-sixth-div-container">
            <div className="home-page-sixth-div-header">
            {/* 6th div home page */}
            <h2>Customer Stories</h2>
            </div>
            <div className="home-page-sixth-div-important-parts">
            {/* two important customers */}
              <div className="home-page-sixth-div-important-parts-each">
                <h3>University of Milan</h3>
                <p>When the University of Milan adopted Exam.net there was an urgent need to manage remote online 
                examinations in a reliable and secure manner.  Exam.net easily met all the university’s requirements, 
                was easy to introduce to the staff and, as a bonus, proved 
                to be much more than just a remote, online assessment tool.</p>
                <p className="home-page-sixth-div-read-more-btn">Read more</p>
              </div>
              <div  className="home-page-sixth-div-important-parts-each">
                <h3>University of Milan</h3>
                <p>When the University of Milan adopted Exam.net there was an urgent need to manage remote online 
                examinations in a reliable and secure manner.  Exam.net easily met all the university’s requirements, 
                was easy to introduce to the staff and, as a bonus, proved 
                to be much more than just a remote, online assessment tool.</p>
                <p className="home-page-sixth-div-read-more-btn">Read more</p>
              </div>
            </div>
        </div>
        
       <Footer/>
        
    </div>
  )
}

export default Home