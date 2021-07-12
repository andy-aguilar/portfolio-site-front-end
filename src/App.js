import React, {useState, useEffect, useCallback} from 'react'
import './App.css';
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import LargeHome from "./components/home/largeHome"
import LargeAbout from "./components/about/largeAbout"
import LargeProjects from "./components/projects/largeProjects"
import LargeBlog from "./components/blog/largeBlog"
import LargeContact from "./components/contact/largeContact"


function App() {
  const [topBtn, setTopBtn] = useState(false)
  const [bottomBtn, setBottomBtn] = useState(true)

  
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
      window.scrollTo(0, 0)
    } else if (section === "about"){
      window.scrollTo(0, window.innerHeight)
    } else if (section === "projects"){
      window.scrollTo(0, window.innerHeight * 2)
    } else if (section === "blog"){
      window.scrollTo(0, window.innerHeight * 3)
    } else if (section === "contact"){
      window.scrollTo(0, window.innerHeight * 4)
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
            {topBtn ? <button id="top-button" onClick={handleUpClick}>^</button> : null}
            {bottomBtn ? <button id="bottom-button" onClick={handleDownClick}>down</button> : null}
            {/* style={{display: topBtn ? "inline" : "none"}} */}
            
          </div>
        </Breakpoint>
        <Breakpoint medium only>
          
        </Breakpoint>
      </div>
    </BreakpointProvider>
  );
}

export default App;
