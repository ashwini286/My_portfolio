import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <>

{/* <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3"> */}
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  {/* <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading1">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading2">About</a>
    </li>
    <li class="nav-item dropdown"> */}
      {/* <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a> */}
      {/* <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
      </ul>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
  <h4 id="scrollspyHeading1"><HomePage/></h4>
  <p>...</p>
  <h4 id="scrollspyHeading2"><About/></h4>
  <p>...</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading5">Fifth heading</h4>
  <p>...</p>
</div> */}
   
    
                 
    <nav class="navbar navbar-expand-lg px-3 mb-3" id="navbar-example2"  style={{background:"#C1F5FF", boxShadow: "0px 0px 4px 5px var(--purple) ",marginTop:"10px",marginBottom:"10px", border:"none",position:"sticky"}}>
  <div class="container-fluid"
   style={{
      marginLeft: "90px",
      fontFamily: "'Sacramento', cursive",
    fontVariantLigatures: "no-common-ligatures",
   
    }}
  
  >
    <a class="navbar-brand" href="#">&lt; <span>Ashwini Vishwakarma </span> /&gt;</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav justify-content-end" id="navbarNav">
      <ul class="navbar-nav " style={{fontSize:"20px",gap:"30px", fontFamily:"'Poppins', sans-serif"}}>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#scrollspyHeading1">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading2">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading3">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading4" >Project</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading5">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 </>
      
    
  )
}

export default NavBar
