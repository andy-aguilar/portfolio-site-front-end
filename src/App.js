import './App.css';
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import LargeHome from "./components/home/largeHome"


function App() {

  const runConsole = (e) => {
    console.log('%c.......................................\n...........AndyAguilar.................\n............AndyAguilar................\n.............AndyAguilar...............\n..............AndyAguilar..............\n.............Andy..Aguilar.............\n............Andy....Aguilar............\n...........Andy......Aguilar...........\n..........Andy........Aguilar..........\n.........Andy..........Aguilar.........\n........AndyAguilar-AndyAguilar........\n.......AndyAguilar---AndyAguilar.......\n......Andy................Aguilar......\n.....Andy..................Aguilar.....\n....Andy....................Aguilar....\n...Andy......................Aguilar...\n..Andy........................Aguilar..\n.......................................\n\n\nI clearly have too much free time on\nmy hands. Please hire me!', 'background:black; color: #957E4D')

  }

  return (
    <BreakpointProvider>
    
      <div className="App">
        {runConsole()}
        <Breakpoint large up>
          <LargeHome />
        </Breakpoint>
        <Breakpoint medium only>
          
        </Breakpoint>
      </div>
    </BreakpointProvider>
  );
}

export default App;
