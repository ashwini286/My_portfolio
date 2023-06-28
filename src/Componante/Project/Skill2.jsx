import React, { useEffect } from 'react';
import './Skill2.css'
import parlourWebsite from '../Img/Parlour_project_img.png'
import twitter from '../Img/Twitter-Photos-removebg (1).png'
import googleDoc from '../Img/Google_Doc_img.png'
import onlineMeal from '../Img/onlineMeal (1).jpg'
import kanban from '../Img/Carry on.jpg'
import gym from '../Img/gym_img.jpg'
import { RxGithubLogo } from 'react-icons/rx'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skill2 = () => {
 
  
  useEffect(() => {
    AOS.init();
  });


function HandKanban(){
  window.open("https://github.com/ashwini286/new_Kanban_project");
}

function HandleParlour(){
  window.open("https://github.com/ashwini286/Website-of-parlour")
}

function HandleTwitter(){
window.open("https://github.com/ashwini286/Twitter-Clone/tree/FinalProject/src")
}
function HandleGoogledoc(){
window.open("https://github.com/ashwini286/Google_Doc_Project/tree/master/src")
}
function HandleOnlineMeal(){
  window.open("https://github.com/ashwini286/Online-Meal")
}
function HandleGym(){
  window.open("https://github.com/ashwini286/GYM-Website")
}
  return (
    <div style={{boxShadow: "0px 0px 4px 5px var(--purple)"}} >
      <div className='experience' style={{marginTop:"40px"}}>
        <div className='achievement'>
          <div className='circle'> 500+ </div>
          <span>Hour of <br /></span>
          <span>Coding</span>
          {/* Skills shadow */}
          <div  style={{
                  position:"absolute",zIndex:"1", borderRadius:"50%", filter:"blur(72px)",
                  left: '70rem',
                  background: "var(--purple)",
                    top: '140rem', width: '45rem', height: '15rem', 

                }}></div>

        </div>
        <div className='achievement'>
          <div className='circle'> 5+ </div>
          <span>Completed <br /></span>
          <span>Projects</span>
          {/* Skills shadow */}

          <div style={{  position:"absolute",zIndex:"1", borderRadius:"50%",
                    background: '#C1F5FF', right: '80rem',top:"140rem",
                     width: '35rem', height: '15rem', filter:"blur(72px)"

                }}></div>

        </div>

        <div className='achievement'>
          <div className='circle'>40+ </div>
          <span>Hours of <br /></span>
          <span>Soft Skill</span>
        </div>
      </div>

      {/* Project */}
     
      <div style={{ textAlign:"center"}}> <h1 style={{marginTop:"-80px"}}  id="scrollspyHeading4" data-aos="fade-up" >Projects </h1></div>
      <hr style={{width:"20%",position:"relative",left:"40%",borderWidth:"3px"}} />

      <div class="card-group" style={{ margin: "30px", gap: "30px", marginTop:"40px" }}>
    
        <div data-aos="fade-left" class="card" style={{ borderRadius: "40px", boxShadow: "0px 0px 6px 0px black" }}>
      
          <img src={parlourWebsite} class="card-img-top" alt="..." style={{ height: "370px", borderRadius: "40px" }} />
          <div class="card-body" style={{textAlign:"center" , backgroundColor:"#80a1a747"}}>
            <h5 class="card-title">Parlour Website</h5>
            <p class="card-text">A parlour website is a type of website that is specifically designed for beauty parlours, salons, or spas. It serves as an online platform where customers can gather information about the services offered, browse through the available treatments, and make appointments. A well-designed parlour website can effectively showcase the salon's expertise, attract potential customers, and enhance the overall user experience.</p>
          </div>
         
          <div class="card-footer">
            <h3 class="text-body-secondary" style={{ textAlign: "center" }}><RxGithubLogo onClick={HandleParlour} /></h3>
          </div>
 
        </div>
      
        <div data-aos="fade-up"  class="card" style={{ borderRadius: "40px", boxShadow: "0px 0px 6px 0px black" }}>
          <img src={kanban} class="card-img-top" alt="..." style={{ height: "370px", borderRadius: "40px" }} />
          <div class="card-body" style={{textAlign:"center" , backgroundColor:"#80a1a747"}}>
            <h5 class="card-title">Kanban Board</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div class="card-footer">
            <h3 class="text-body-secondary" style={{ textAlign: "center" }}><RxGithubLogo onClick={HandKanban} /></h3>
          </div>
        </div>
        <div data-aos="fade-right" class="card" style={{ borderRadius: "40px", boxShadow: "0px 0px 6px 0px black" }}>
          <img src={twitter} class="card-img-top" alt="..." style={{ height: "370px", borderRadius: "40px" }} />
          <div class="card-body" style={{textAlign:"center" , backgroundColor:"#80a1a747"}}>
            <h5 class="card-title">Twitter Clone</h5>
            <p class="card-text"> This is the clone of twitter where you can experiance actual twitter functionality like...Your Twitter Clone users will have the option to register themselves and create their own profile. They will have the option to add pictures, birthday, personal bio, and contact details. </p>
          </div>
          <div class="card-footer">
            <h3 class="text-body-secondary" style={{ textAlign: "center" }}><RxGithubLogo onClick={HandleTwitter} /></h3>
          </div>
        </div>
      </div>

      <div data-aos="fade-left" class="card-group"  style={{ margin: "30px", gap: "30px" }}>
        <div class="card" style={{ borderRadius: "40px", boxShadow: "0px 0px 6px 0px black" }}>
          <img src={googleDoc} class="card-img-top" alt="..." style={{ height: "370px", borderRadius: "40px" }} />
          <div class="card-body" style={{textAlign:"center" , backgroundColor:"#80a1a747"}}>
            <h5 class="card-title">Google Doc</h5>
            <p class="card-text">A Google Docs project management template is a document that helps guide you through the phases of a project lifecycle, from planning to delivery. Use a Google Docs project management template to plan, schedule, monitor, and fulfill your project deliverables.</p>
          </div>
          <div class="card-footer">
            <h3 class="text-body-secondary" style={{ textAlign: "center" }}><RxGithubLogo onClick={HandleGoogledoc} /></h3>
          </div>
        </div>
        <div data-aos="fade-up" class="card" style={{ borderRadius: "40px", boxShadow: "0px 0px 6px 0px black" }}>
          <img src={onlineMeal} class="card-img-top" alt="..." style={{ height: "370px", borderRadius: "40px" }} />
          <div class="card-body" style={{textAlign:"center" , backgroundColor:"#80a1a747"}}>
            <h5 class="card-title">Online Meal Website</h5>
            <p class="card-text">An online meal website is a platform that allows users to order food and have it delivered to their doorstep. These websites provide a convenient way for customers to browse through a wide range of food options, select their desired meals, customize their orders, and make online payments. They have become increasingly popular, offering a convenient solution for people who prefer to have meals delivered rather than cooking or dining out.</p>
          </div>
          <div class="card-footer">
            <h3 class="text-body-secondary" style={{ textAlign: "center" }}><RxGithubLogo onClick={HandleOnlineMeal} /></h3>
          </div>
        </div>
        <div data-aos="fade-righ
        t" class="card" style={{ borderRadius: "40px", boxShadow: "0px 0px 6px 0px black" }}>
          <img src={gym} class="card-img-top" alt="..." style={{ height: "370px", borderRadius: "40px" }} />
          <div class="card-body" style={{textAlign:"center" , backgroundColor:"#80a1a747"}}>
            <h5 class="card-title">GYM Website</h5>
            <p class="card-text">A gym website serves as an online platform for fitness enthusiasts, gym members, and potential clients to gather information about the gym's facilities, services, trainers, and class schedules. It is a crucial marketing tool that showcases the gym's brand, promotes its offerings, and attracts new customers.</p>
          </div>
          <div class="card-footer">
            <h3 class="text-body-secondary" style={{ textAlign: "center" }}><RxGithubLogo onClick={HandleGym} /></h3>
          </div>
        </div>
      </div>






    </div>
  )
}

export default Skill2
