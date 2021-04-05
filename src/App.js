
import fleur from './images/fleur-de-lis.png';
import './App.css';

import  { Breakpoint, BreakpointProvider } from 'react-socks';
import LargeHeader from "./components/largeHeader.js"

function App() {

  const runConsole = (e) => {
    console.log('%c.......................................\n...........AndyAguilar.................\n............AndyAguilar................\n.............AndyAguilar...............\n..............AndyAguilar..............\n.............Andy..Aguilar.............\n............Andy....Aguilar............\n...........Andy......Aguilar...........\n..........Andy........Aguilar..........\n.........Andy..........Aguilar.........\n........AndyAguilar-AndyAguilar........\n.......AndyAguilar---AndyAguilar.......\n......Andy................Aguilar......\n.....Andy..................Aguilar.....\n....Andy....................Aguilar....\n...Andy......................Aguilar...\n..Andy........................Aguilar..\n.......................................\n\n\nI clearly have too much free time on\nmy hands. Please hire me!', 'background:black; color: #957E4D')

  }

  return (
    <BreakpointProvider>
    
      <div className="App">
        {runConsole()}
        <Breakpoint large up>
          <LargeHeader/>
        </Breakpoint>
        <Breakpoint medium only>
          <header className="tablet-header">
            <img src={fleur} className="tablet-logo" alt="logo" />
          </header>
        </Breakpoint>
      </div>
    </BreakpointProvider>
  );
}

export default App;
