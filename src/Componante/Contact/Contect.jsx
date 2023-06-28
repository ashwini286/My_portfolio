import React,{useEffect} from 'react'
import Lottie from 'lottie-react'
import workingGirl from './computer-use-animation.json'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contect = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
    <div style={{height:"100vh"}}>
    {/* style={{boxShadow: "0px 0px 4px 5px var(--purple)" , height:"100vh"}} */}
      <div class="card mb-2 " style={{ marginTop:"20px",border:"none"}}>
      <div style={{textAlign:"center",marginTop:"40px"}}  id="scrollspyHeading5"><h1>Contact</h1></div>
      <hr style={{width:"20%",position:"relative",left:"40%",borderWidth:"3px"}} />
  <div class="d-flex justify-content-center" style={{height:"400px",marginTop:"50px" }}>
    <div class="col-md-4" data-aos="fade-left">
    <div style={{height:"450px", width:"500px",marginLeft:"100px", boxShadow:"0px 2px 4px 0px black"}}>
      {/* <img src="..." class="img-fluid rounded-start" alt="..." /> */}
      <Lottie animationData={workingGirl} loop={true} style={{height:"500px"}} />;
      </div>
    </div>
    <div class="col-md-8" data-aos="fade-right" style={{textAlign:"center",boxShadow:"0px 2px 4px 0px black",height:"450px", width:"900px"}}>
      <div class="card-body" >
      <form action='https://formspree.io/f/maygwyrd' method='POST' > 
      <input 
      type='text' 
      name='username'
      autoComplete='off'
      required
        placeholder='Name'
        style={{width:"600px",height:"60px"}}
      /> <br/><br />
       <input 
      type='email' 
      name='Email'
      autoComplete='off'
      required
        placeholder='Email'
        style={{width:"600px",height:"60px"}}
      /> <br/><br />
      
      <textarea
      name="message"
      cols="80"
      rows="6"
      autoComplete='off'
      placeholder='Enter your message'
      required
      >

      </textarea>
      <br/>
      <br/>
      <input type='submit' value="send"  class="btn" style={{backgroundColor:"var(--orange)",padding:"13px 40px"}}/>

      </form>
    
      </div>
    </div>
  </div>
</div>

    </div>
    <div style={{height:"40px", backgroundColor:"var(--purple)"}}>
    <h4 class="text-center m-0">@Copyright 2023 all rights reserved @Ashwini</h4>

</div>
</>
  )
}

export default Contect
