import React from 'react';
import './LogoutTest.css';
import Navbar from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer';
import cheatprevention from '../images/cheatprevention.PNG';
import automark from '../images/automark.PNG';
import devloprichexams from '../images/developrichexams.PNG';
import anonymizedexams from '../images/anonymizedexams.PNG';
function LogoutTest(){
    return(
        <div>
            <Navbar/>
            {/* logout first div */}
            <div className="logout-test-first-div-bg-image">
                <h2>All you need in your</h2>
                <h1>EXAM TOOLBOX</h1>
            </div>
            {/* logout second div */}
            <div className="logout-test-page-second-div">
                <h1>Everything you need</h1>
                <p>We respect that you’re the expert when it comes to what’s 
                best for your students (because we’re teachers, too). With 
                powerful tools that are easy to use and quick to apply, Exam.net 
                gives you everything you need to create comprehensive exams.</p>
                
            </div>
            {/*logout page third page */}
            <div className="logout-page-third-div-important">
                <div className="logout-page-third-div-important-each">
                    <div>
                    <img src={cheatprevention} alt="cheatprevention" className="logouttest-page-third-div"/>
                    </div>
                    <h3>Cheat Prevention</h3>
                    <div className="logout-page-third-div-imp-each-para">
                        <p>With Exam.net you can choose from multiple levels of security 
                        from open book (no security) to a fully-locked down device.</p>
                        <p>These security measures will help you get an accurate assessment 
                        of each student’s knowledge. Exam security is integrated into our software, 
                        so you can conduct academically honest exams without having to manage and 
                        integrate with third party plug ins.</p>
                    </div>
                </div>
                <div className="logout-page-third-div-important-each">
                    <div>
                    <img src={automark} alt="auto-mark" className="logouttest-page-third-div"/>
                    </div>
                    <h3>Auto-Mark</h3>
                    <div className="logout-page-third-div-imp-each-para">
                        <p>Save time and energy when you set up an exam for auto-mark. 
                        Let Exam.net do the scoring for you.</p>
                        <p>Create your exam with various question types, from multiple 
                        choice to fill-the-gaps. You can choose which questions are 
                        automatically scored and which need to be graded by you. Put down 
                        your red pen and put your newfound time toward the next task at hand.</p>
                    </div>
                </div>
                <div className="logout-page-third-div-important-each">
                    <div>
                    <img src={devloprichexams} alt="devloprichexams" className="logouttest-page-third-div"/>
                    </div>
                    <h3>Develop Rich Exams</h3>
                    <div className="logout-page-third-div-imp-each-para">
                        <p>Exam.net has a rich set of built-in tools integrated right into the 
                        exam experience. Tools such as Desmos, Dictionaries, Translation services…</p>
                        <p>…and more are available if you choose. Students don’t even have to switch tabs 
                        or windows to access these tools.</p>
                    </div>
                </div>
                <div className="logout-page-third-div-important-each">
                    <div>
                    <img src={anonymizedexams} alt="anonymizedexams" className="logouttest-page-third-div"/>
                    </div>
                    <h3>Anonymized Exams</h3>
                    <div className="logout-page-third-div-imp-each-para">
                        <p>Remove bias and ensure fairness by marking the 
                        examinations without knowing which student you are marking.</p>
                        <p>The anonymisation option can be activated by the teacher as he/she 
                        creates the exam or by editing an exam created previously. While anonymous, 
                        the student information on each exam is replaced with an identity code.</p>
                    </div>
                </div>
            </div>

            {/* logout test fourth page */}
            <div className="logout-test-page-second-div">
                <h1>Make it simple</h1>
                <p>Conducting exams online takes coordination. We simplify 
                all the moving pieces so you can administer your exams without 
                being overwhelmed by technical complexity. Create and conduct 
                your first exam in as little as an hour, by just uploading a PDF 
                of an existing exam.</p>
                
            </div>

            {/*logout test fifth page */}
            <div className="logout-page-third-div-important">
                <div className="logout-page-third-div-important-each">
                    <div>
                    <img src={cheatprevention} alt="cheatprevention" className="logouttest-page-third-div"/>
                    </div>
                    <h3>Upload existing PDF exams</h3>
                    <div className="logout-page-third-div-imp-each-para">
                        <p>Take the PDF of a pre-existing exam you want to use, upload it to Exam.net, 
                        and get it live to your students in less than an hour.</p>
                        <p>It’s that easy. While you can enter each exam question individually or paste questions 
                        from Microsoft Word, we know that sometimes all you need is to use materials you already have.</p>
                    </div>
                </div>
                <div className="logout-page-third-div-important-each">
                    <div>
                    <img src={automark} alt="auto-mark" className="logouttest-page-third-div"/>
                    </div>
                    <h3>Works across devices</h3>
                    <div className="logout-page-third-div-imp-each-para">
                        <p>Exam.net works consistently across most devices, including Chromebooks, 
                        Macs, iPads, iPhones, Windows machines, and more.</p>
                        <p>We know that not every student will use the same devices while taking 
                        digital exams and teachers can’t be expected to be experts in every type 
                        of equipment.</p>
                    </div>
                </div>
                <div className="logout-page-third-div-important-each">
                    <div>
                    <img src={devloprichexams} alt="devloprichexams" className="logouttest-page-third-div"/>
                    </div>
                    <h3>No student accounts</h3>
                    <div className="logout-page-third-div-imp-each-para">
                        <p>Don’t worry about lost or forgotten passwords when exam time rolls around.</p>
                        <p>Students start an exam by using a unique exam key generated by Exam.net and 
                        provided by their teacher. Enjoy a more streamlined exam experience for you and 
                        your students.</p>
                    </div>
                </div>
                <div className="logout-page-third-div-important-each">
                    <div>
                    <img src={anonymizedexams} alt="anonymizedexams" className="logouttest-page-third-div"/>
                    </div>
                    <h3>Google Classroom</h3>
                    <div className="logout-page-third-div-imp-each-para">
                        <p>Simplify communication between teachers and students through our 
                        integration with Google Classroom.</p>
                        <p>Seamlessly connect Exam.net to Google Classroom so students start 
                        exams from their Google Classroom feed. With 1-click, return exam results 
                        to students.</p>
                    </div>
                </div>
            </div>

            {/* logout test sixth div */}
            <div className="logout-test-page-second-div">
                <h1>Empower every student</h1>
                <p>Different students need different levels of support to demonstrate 
                their knowledge. Exam.net gives you the flexibility to adapt your exams 
                to each student’s individual needs so everyone can shine.</p>
                
            </div>

            {/* logout test seventh div */}
            <div className="logout-page-third-div-important">
                <div className="logout-page-third-div-important-each">
                    <div>
                    <img src={cheatprevention} alt="cheatprevention" className="logouttest-page-third-div"/>
                    </div>
                    <h3>Personalize exams to each student</h3>
                    <div className="logout-page-third-div-imp-each-para">
                        <p>For students who might need a little extra assistance, Exam.net offers a 
                        variety of accommodations that help each student demonstrate their knowledge.</p>
                        <p>Because we know not all students learn the same. Some of our most used modifications include:
                        Apply text-to-speech,Record audio for your questions, Translate questions from English to a student’s 
                        native language (English, Dutch, Danish, French, Swedish, Spanish, German, Italian, Portuguese)</p>
                    </div>
                </div>
                <div className="logout-page-third-div-important-each">
                    <div>
                    <img src={automark} alt="auto-mark" className="logouttest-page-third-div"/>
                    </div>
                    <h3>All tools in the exam window</h3>
                    <div className="logout-page-third-div-imp-each-para">
                        <p>With all tools and resources accessible in the student’s exam window, students can focus 
                        on their exams with limited distractions and increased security.</p>
                        <p>Whether it’s a list of equations, an audio recording, or a drawing tool, 
                        everything is on hand without switching to another window in the exam. Students 
                        can even ask their teacher questions in a chat without leaving the exam window.</p>
                    </div>
                </div>
                <div className="logout-page-third-div-important-each">
                    <div>
                    <img src={devloprichexams} alt="devloprichexams" className="logouttest-page-third-div"/>
                    </div>
                    <h3>Exams that are resilient</h3>
                    <div className="logout-page-third-div-imp-each-para">
                        <p>Sometimes with technology, things don’t go the way we plan. No matter if it’s a 
                        device running out of batteries or loss of internet, we got you covered.</p>
                        <p>If a student’s device runs out of batteries, the student can pick up right where they 
                        left off on their exam with a different device. Likewise, if there is a loss of internet 
                        connection during an exam, the student can continue without losing their work and their 
                        answers will be synched once the connection returns. If a student forgets to bring their device, 
                        you can print the test from Exam.net and use the old-fashioned way.</p>
                    </div>
                </div>
                <div className="logout-page-third-div-important-each">
                    <div>
                    <img src={anonymizedexams} alt="anonymizedexams" className="logouttest-page-third-div"/>
                    </div>
                    <h3>Easily submit handwritten work</h3>
                    <div className="logout-page-third-div-imp-each-para">
                        <p>Just point a smart phone’s camera at the screen and then take a picture and 
                        the work will attach to the student’s exam submission.</p>
                        <p>Despite the efficiency and convenience of digital exams, some work is best 
                        shown by hand. Whether you need your students to provide a hard drawing or show their 
                        algebra logic by hand, you can have students upload photos of written work to Exam.net 
                        using specialized QR codes. There is no app to install or integrations to make.</p>
                    </div>
                </div>
            </div>

            {/* logout test page eigth */}
            <div className="logout-test-page-eigth-div">
                <h2>Put down</h2>
                <h1>YOUR PENCILS</h1>
                <button>Create your Exam</button>
            </div>
            <Footer/>

        </div>
    );
}
export default LogoutTest;