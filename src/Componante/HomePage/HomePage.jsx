import React,{useEffect} from 'react'
import Lottie from 'lottie-react'
import Resume from './Ashwini_resume.pdf'
import NavBar from '../NavBar/NavBar';
import { useTypewriter} from "react-simple-typewriter";
import WorkGirl from './work-girl.json'
import AOS from 'aos';
import 'aos/dist/aos.css';
const HomePage = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Web Developer.", "UI Designer."],
    loop: Infinity,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  useEffect(() => {
    AOS.init();
  });
  return (<>
    <NavBar />
    <div class="card mb-4"  id="scrollspyHeading1"  style={{  boxShadow: "0px 0px 4px 5px var(--purple)"}}>
  <div class="row g-0">
  <div class="col-md-8">
      <div class="card-body" style={{ height:"60vh", width:"50vw",marginLeft:"50px",marginTop:"100px"}}>
        <h3 class="card-title" style={{marginTop:"40px"}} data-aos="fade-up" >Hello __ <span className='wave'>👋</span></h3>
        <div style={{  position:"absolute",zIndex:"1", borderRadius:"50%",
                    background: '#C1F5FF', left: '40rem',top:"-1rem",
                     width: '25rem', height: '15rem', filter:"blur(72px)"

                }}></div>
        <h3 style={{color:"var(--orange)",fontSize:"40px",overFlow:"hidden"}} data-aos="fade-up" >I'm {' '}<spna style={{color:"var(--orange)",fontSize:"35px"}}>{text}</spna></h3>
        <div  style={{
                  position:"absolute",zIndex:"1", borderRadius:"50%", filter:"blur(72px)",
                  right: '90rem',
                  background: "var(--purple)",
                    top: '30rem', width: '21rem', height: '15rem', 

                }}></div>
        <p class="card-text" style={{fontSize:"25px"}} data-aos="fade-up" > An Enthusiastic Front-End Web Developer with a 
                        strong set of technical as well as non-technical
                        skills and a dedication towards creating useful and 
                        interactive web applications</p>
                        <a href={Resume} download class="btn" data-aos="fade-left"  style={{backgroundColor:"var(--orange)",marginRight:"20px", padding:"13px 40px"}}>Resume</a>
                        <a href="#scrollspyHeading4" data-aos="fade-right"  class="btn" style={{backgroundColor:"var(--orange)",padding:"13px 40px"}}>Project</a>
       
    
      </div>
    </div>
    <div class="col-md-4" style={{marginLeft:"-120px"}}>
    <div style={{  position:"absolute",zIndex:"1", borderRadius:"50%",
                    background: '#C1F5FF', left: '90rem',top:"30rem",
                     width: '25rem', height: '15rem', filter:"blur(72px)"

                }}></div>
    <Lottie animationData={WorkGirl} loop={true} style={{marginLeft:"-90px"}}/>;

   
     
    </div>
    </div>
   </div>


      
   </>
  )
}

export default HomePage
