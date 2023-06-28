import React,{useEffect} from 'react'
// import {BiLogoHtml5} from 'react-icons/bi';
import {TiHtml5} from 'react-icons/ti'
import {DiCss3} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
// import {MdAddToQueue} from 'react-icons/md'
import {TbBrandRedux} from 'react-icons/tb'
import datastructure from '../Img/data-structure-removebg.png'
import webDeloper from '../Img/fronted-removebg.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skill = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div style={{boxShadow: "0px 0px 4px 5px var(--purple)" , height:"100vh"}} >
    <div style={{display:"flex",justifyContent:"center"}}  id="scrollspyHeading3" > <h1  data-aos="fade-up" style={{marginTop:"23px"}}> Skills </h1> </div>
    <hr style={{width:"20%",position:"relative",left:"40%",borderWidth:"3px"}} />
    <div class="row row-cols-1 row-cols-md-5 g-4" style={{textAlign:"center",padding:"40px",marginLeft:"70px"}}>
  <div class="col" >
    <div class="card" style={{width:"200px", height:"200px", backgroundColor:"#80a1a747",boxShadow:"0px 0px 6px 0px black"}}>
      <div class="card-body">
        <h1 class="card-title"  data-aos="fade-left"  style={{fontSize:"10rem" }}>  <TiHtml5 style={{marginTop:"-60px"}}/></h1>
        <p>HTML</p>
      {/* project shadow */}
        <div  style={{
                  position:"absolute",zIndex:"1", borderRadius:"50%", filter:"blur(72px)",
                  left: '65rem',
                  background: "#C1F5FF",
                    top: '50rem', width: '35rem', height: '15rem', 

                }}></div>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{width:"200px", height:"200px",backgroundColor:"#80a1a747",boxShadow:"0px 0px 6px 0px black"}}>
      <div class="card-body">
        <h1 class="card-title"  data-aos="fade-left"  style={{fontSize:"10rem"}}> <DiCss3 style={{marginTop:"-60px"}} /> </h1>
        <p>CSS</p>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
  <div  style={{
                  position:"absolute",zIndex:"1", borderRadius:"50%", filter:"blur(72px)",
                  right: '70rem',
                  background: "var(--purple)",
                    top: '180rem', width: '35rem', height: '15rem', 

                }}></div>
                 <div  style={{
                  position:"absolute",zIndex:"1", borderRadius:"50%", filter:"blur(72px)",
                  right: '70rem',
                  background: "var(--purple)",
                    top: '180rem', width: '45rem', height: '15rem', 

                }}></div>
  <div class="col">
    <div class="card" style={{width:"200px", height:"200px",backgroundColor:"#80a1a747",boxShadow:"0px 0px 6px 0px black"}}>
      <div class="card-body">
        <h1 class="card-title"  data-aos="fade-left"  style={{fontSize:"10rem"}}><IoLogoJavascript style={{marginTop:"-60px"}}/></h1>
        <p>JavaScript</p>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{width:"200px", height:"200px",backgroundColor:"#80a1a747",boxShadow:"0px 0px 6px 0px black"}}>
      {/* <img src="..." class="card-img-top" alt="..."/> */}
      <div class="card-body">
        <h1 class="card-title"  data-aos="fade-left" style={{fontSize:"10rem"}}><FaReact style={{marginTop:"-60px"}} /></h1>
        <p>React</p>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
  {/* contact page shadow */}
  <div  style={{
                  position:"absolute",zIndex:"1", borderRadius:"50%", filter:"blur(72px)",
                  right: '80rem',
                  background: "#C1F5FF",
                    top: '280rem', width: '45rem', height: '15rem', 

                }}></div>
  <div class="col">
    <div class="card" style={{width:"200px", height:"200px",backgroundColor:"#80a1a747",boxShadow:"0px 0px 6px 0px black"}}>
      {/* <img src="..." class="card-img-top" alt="..."/> */}
      <div class="card-body">
        <h1 class="card-title"  data-aos="fade-left" style={{fontSize:"10rem"}}><TbBrandRedux  style={{marginTop:"-60px"}}/></h1>
        <p>Redux-Toolkit</p>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
  <div  style={{
                  position:"absolute",zIndex:"1", borderRadius:"50%", filter:"blur(72px)",
                  left: '60rem',
                  background: "var(--purple)",
                    top: '280rem', width: '45rem', height: '15rem', 

                }}></div>

</div>
<div style={{display:"flex",justifyContent:"center"}}> <h1 style={{marginTop:"23px"}} data-aos="fade-up" >Proficiencies </h1> </div>  
<hr style={{width:"20%",position:"relative",left:"40%",borderWidth:"3px"}} />
<div class="row row-cols-1 row-cols-md-2 " style={{textAlign:"center",padding:"40px"}}>
<div class="col">
    <div class="card" style={{width:"200px", height:"200px",marginLeft:"600px",backgroundColor:"#80a1a747",boxShadow:"0px 0px 6px 0px black"}}>
      <img  data-aos="fade-left"  src={webDeloper} class="card-img-top" alt="..." style={{fontSize:"10rem"}}/>
      <div class="card-body">
        {/* <h1 class="card-title"><MdAddToQueue /></h1> */}
        <p>Fronted</p>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
    <div  style={{
                  position:"absolute",zIndex:"1", borderRadius:"50%", filter:"blur(72px)",
                  left: '20rem',
                  background: "#C1F5FF",
                    top: '320rem', width: '65rem', height: '15rem', 

                }}></div>
  </div>
  <div class="col">
    <div class="card" style={{width:"200px", height:"200px",backgroundColor:"#80a1a747",boxShadow:"0px 0px 6px 0px black"}}>
      <img  data-aos="fade-left"  src={datastructure} class="card-img-top" alt="..."/> 
      <div class="card-body">
        {/* <h1 class="card-title">Data Structure</h1> */}
        <p>Data Structure</p>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>

  </div>

</div>
  )
}

export default Skill



 