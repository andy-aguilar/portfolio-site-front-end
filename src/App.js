import React, {useState, useEffect, useCallback} from 'react'
import './App.css';
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import LargeHome from "./components/home/largeHome"
import LargeAbout from "./components/about/largeAbout"
import LargeProjects from "./components/projects/largeProjects"
import LargeBlog from "./components/blog/largeBlog"
import LargeContact from "./components/contact/largeContact"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [topBtn, setTopBtn] = useState(false)
  const [bottomBtn, setBottomBtn] = useState(true)
  const [arrowColor, setArrowColor] = useState("black")

  
  const setBtns = useCallback( () => {
    if(window.scrollY >= window.innerHeight * 3.5){
      setBottomBtn(false)
    } else{
      setBottomBtn(true)
    }
    
    if(window.scrollY <= window.innerHeight/2){
      setTopBtn(false)
    } else{
      setTopBtn(true)
    }
  }, [setTopBtn, setBottomBtn])

  useEffect(() => {
    runConsole()
    window.addEventListener("scroll", () => {
      setBtns()
      
    })
  }, [setBtns])


  const scrollToSec = (section) => {
    if (section === "home"){
      window.scrollTo({
        top:0,
        left: 0,
        behavior: "smooth"
      })
      setArrowColor("black")
    } else if (section === "about"){
      window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth"
      })
      setArrowColor("white")
    } else if (section === "projects"){
      window.scrollTo({
        top: window.innerHeight *2,
        left: 0,
        behavior: "smooth"
      })
      setArrowColor("black")
    } else if (section === "blog"){
      window.scrollTo({
        top: window.innerHeight * 3,
        left: 0,
        behavior: "smooth"
      })
      setArrowColor("white")
    } else if (section === "contact"){
      window.scrollTo({
        top: window.innerHeight * 4,
        left: 0,
        behavior: "smooth"
      })
      setArrowColor("black")
    } 

}

  const runConsole = (e) => {
    console.log('%c.......................................\n...........AndyAguilar.................\n............AndyAguilar................\n.............AndyAguilar...............\n..............AndyAguilar..............\n.............Andy..Aguilar.............\n............Andy....Aguilar............\n...........Andy......Aguilar...........\n..........Andy........Aguilar..........\n.........Andy..........Aguilar.........\n........AndyAguilar-AndyAguilar........\n.......AndyAguilar---AndyAguilar.......\n......Andy................Aguilar......\n.....Andy..................Aguilar.....\n....Andy....................Aguilar....\n...Andy......................Aguilar...\n..Andy........................Aguilar..\n.......................................\n\n\nI clearly have too much free time on\nmy hands. Please hire me!', 'background:#ad8b2f; color: #2F4AAE')

  }

  const handleDownClick = () => {
    if(window.scrollY < window.innerHeight){
      scrollToSec("about")
    } else if (window.scrollY < window.innerHeight * 2){
      scrollToSec("projects")
    } else if (window.scrollY < window.innerHeight * 3){
      scrollToSec("blog")
    } else if (window.scrollY < window.innerHeight * 4){
      scrollToSec("contact")
    } 
    // else if ( window.scrollY < window.innerHeight *5 ){
    //   window.scrollTo(0, window.innerHeight * 5)
    // }
    console.log(window.scrollY)
  }

  const handleUpClick = () => {
    if(window.scrollY >= window.innerHeight * 4){
      scrollToSec("blog")
    } else if (window.scrollY >= window.innerHeight * 3) {
      scrollToSec("projects")
    } else if (window.scrollY >= window.innerHeight * 2){
      scrollToSec("about")
    } else {
      scrollToSec("home")
    }
  }

  return (
    <BreakpointProvider>
    
      <div className="App">
        <Breakpoint large up>
          <div id="scroll">
            <LargeHome scrollToSec={scrollToSec}/>
            <LargeAbout />
            <LargeProjects />
            <LargeBlog />
            <LargeContact />
            {topBtn ? <FontAwesomeIcon id="top-button" style={{color:arrowColor}} icon={faChevronUp} onClick={handleUpClick} /> : null}
            {bottomBtn ? <FontAwesomeIcon id="bottom-button" style={{color:arrowColor}} icon={faChevronDown} onClick={handleDownClick} /> : null}
            {/* style={{display: topBtn ? "inline" : "none"}} */}
            
          </div>
        </Breakpoint>
        <Breakpoint medium only>
          <h1>Zidar Sucks</h1>
        </Breakpoint>
      </div>
    </BreakpointProvider>
  );
}

export default App;
