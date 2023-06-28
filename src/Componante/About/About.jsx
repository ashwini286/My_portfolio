import React,{useEffect} from 'react'
import MyIng from './My-img.png'
import {AiFillLinkedin} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {RxGithubLogo} from 'react-icons/rx'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div class="card mb-3"  id="scrollspyHeading2"  style={{ boxShadow: "0px 0px 4px 5px var(--purple)"}}>
  <div class="row g-0" data-aos="fade-left" >
    <div class="col-md-4" style={{
    marginTop:"200px",
    marginLeft: "80px",    
    }}>
      <img src={MyIng} class="rounded-circle" alt="Sorry" style={{ backgroundColor: "#80a1a747", position: "relative",left:"200px",
    boxShadow: "0px 0px 5px 1px black",
    display:"flex",
    justifyContent:"center",
    marginTop:"30px"
    }}/>
    </div>
    <div class="col-md-5 d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
      <div class="card-body" data-aos="fade-right">
      <div  style={{
                  position:"absolute",zIndex:"1", borderRadius:"50%", filter:"blur(72px)",
                  left: '40rem',
                  background: "#C1F5FF",
                    top: '40rem', width: '30rem', height: '15rem', 

                }}></div>
        <h1 class="card-title"  data-aos="fade-up" style={{textAlign:"center" ,position:"relative",left:"260px"}}>About Me <span> 🙋‍♀️ </span></h1>
        {/* <hr style={{marginBottom: "10px",borderColor:"black",width:"20%"}}/> */}
        <hr style={{width:"50%",position:"relative",left:"60%",borderWidth:"3px"}} />
        {/* <hr width="20%" style="margin-bottom: 10px; border-color: black;"> */}
        <div style={{  position:"absolute",zIndex:"1", borderRadius:"50%",
                    background: '#C1F5FF', left: '0rem',top:"-7rem",
                     width: '25rem', height: '15rem', filter:"blur(72px)"

                }}></div>
        <p class="card-text" style={{fontSize:"1.6rem",color:"gray",textAlign:"left",position:"relative",left:"260px"}}>
         Hello, I'm Ashwini Vishwakarma, an enthusiastic and dedicated individual aspiring to build a career in web development. Although I'm new to the industry, I possess a strong foundation in web technologies and a genuine passion for creating impactful digital experiences.
 <br />
 
During my educational journey, I acquired knowledge in HTML, CSS, and JavaScript, and I'm currently expanding my skills in frameworks like React and exploring back-end technologies like Node.js. I enjoy the challenge of turning ideas into functional websites and applications, and I'm always eager to learn new techniques and technologies to enhance my development abilities.
         </p>
        <div class="card-text" style={{fontSize:"3rem",position:"relative",left:"260px"}}>
        <div  style={{
                  position:"absolute",zIndex:"1", borderRadius:"50%", filter:"blur(72px)",
                  right: '70rem',
                  background: "var(--purple)",
                    top: '-4rem', width: '35rem', height: '15rem', 

                }}></div>
        <a href='https://www.instagram.com/ashwinisharma289/'> <FiInstagram style={{color:"gray"}}/></a>
        <a href='https://www.linkedin.com/in/ashwini-kumari-839684225/'><AiFillLinkedin style={{color:"gray"}} /></a>
          <a href='https://github.com/ashwini286'><RxGithubLogo style={{color:"gray"}} /></a>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default About
