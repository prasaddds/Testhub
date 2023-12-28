import React from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer';

import aboutimg1 from '../images/aboutimg1.PNG';
import aboutimg2 from '../images/Aboutimg2.PNG';

import ourteam1 from '../images/ourteam1.PNG';
import ourteam2 from '../images/ourteam2.PNG';
import ourteam3 from '../images/ourteam3.PNG';

function About(){
    return(
        <div>
            <Navbar/>
            <div className='about-page-first-div'>
                {/* first div in about page */}
                <h2>We understand the realities of</h2>
                <h1>THE CLASSROOM</h1>
            </div>
            <div>
                {/* about page second div */}
                <div>
                    {/* about page second div first part */}
                    <div className='about-page-second-div-first-part-each'>
                        <div>
                        <p>It all started in 2016 when Erik Corell, a Swedish math 
                        teacher, found himself frustrated with the old-school way of giving exams. 
                        Digital exams offered advantages such as auto-marking and integrated tools 
                        and could eliminate problems like illegible handwriting and excessive paper 
                        waste. At the time, few digital exam platforms existed, and the ones that did 
                        felt over-complicated and out of touch with a teacher’s real needs in the classroom.</p>
                        <p>
                        Determined to find a solution that worked in the real world for teachers, Erik teamed 
                        up with his friend Anders Torkelsson, an entrepreneur with a 
                        background in business and product development, and Martin Krisell, a math teacher 
                        and computer programmer, to develop Exam.net. What started with three friends has now 
                        grown into a company of over 30 experts, most of whom also have professional backgrounds 
                        in teaching.  Teachers are at the center of everything we do because our software is for 
                        teachers by teachers.
                        </p>
                        </div>
                        <img src={aboutimg1} alt="aboutimg1" className='about-page-second-div-img'/>
                    </div>

                    {/* about page second div second part */}
                    <div className='about-page-second-div-first-part-each about-page-second-div-second-part-each'>
                        <img src={aboutimg2} alt="aboutimg2" className='about-page-second-div-img'/>
                        <div>
                            <p>
                            At Exam.net, we believe that each teacher is the authority 
                            in their classroom. That’s why Exam.net makes it easy for 
                            teachers like you to conduct your exams your way. We’ll 
                            never impose outside pedagogical frameworks or ideologies. 
                            We also understand that the student’s experience reflects directly 
                            on the teacher, so we make it possible for you to personalize exams to 
                            meet the needs of your individual students.
                            </p>
                            <p>
                            The team at Exam.net has been making products that work and that teachers 
                            trust for more than six years. We are dedicated to helping teachers like you 
                            do what you do best.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div>
            {/* about page third div  */}
                <div className="about-page-third-div-btns">
                    <button>Try It Now</button>
                    <button>How It's Work</button>
                </div>
            </div>

            <div className="about-page-fourth-div-container">
            {/* about page fourth page */}
                <div className="about-page-fourth-div-header" >
                    <h2>OUR TEAM</h2>
                </div>

                <div className="about-page-fourth-div-team-content">
                    <div>
                        <img src={ourteam1} alt="our-team1" className="about-page-fourth-div-team-img"/>
                        <p>Elnaz Abolahrar</p>
                        <p>Software Developer</p>
                    </div>
                    <div>
                        <img src={ourteam2} alt="our-team2" className="about-page-fourth-div-team-img"/>
                        <p>Ronny Alex</p>
                        <p>Software developer & teacher</p>
                    </div>

                    <div>
                        <img src={ourteam3} alt="our-team3" className="about-page-fourth-div-team-img"/>
                        <p>David Andersson</p>
                        <p>Data analyst</p>
                    </div>
                    
                    <div>
                        <img src={ourteam1} alt="our-team1" className="about-page-fourth-div-team-img"/>
                        <p>Elnaz Abolahrar</p>
                        <p>Software Developer</p>
                    </div>
                    <div>
                        <img src={ourteam2} alt="our-team2" className="about-page-fourth-div-team-img"/>
                        <p>Ronny Alex</p>
                        <p>Software developer & teacher</p>
                    </div>
                    <div>
                        <img src={ourteam3} alt="our-team3" className="about-page-fourth-div-team-img"/>
                        <p>David Andersson</p>
                        <p>Data analyst</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default About;