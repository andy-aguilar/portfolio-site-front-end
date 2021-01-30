import logo from './images/main-logo.png';
import './App.css';

function App() {

  const runConsole = (e) => {
    console.log('%c.......................................\n...........AndyAguilar.................\n............AndyAguilar................\n.............AndyAguilar...............\n..............AndyAguilar..............\n.............Andy..Aguilar.............\n............Andy....Aguilar............\n...........Andy......Aguilar...........\n..........Andy........Aguilar..........\n.........Andy..........Aguilar.........\n........AndyAguilar-AndyAguilar........\n.......AndyAguilar---AndyAguilar.......\n......Andy................Aguilar......\n.....Andy..................Aguilar.....\n....Andy....................Aguilar....\n...Andy......................Aguilar...\n..Andy........................Aguilar..\n.......................................\n\n\nI clearly have too much free time on\nmy hands. Please hire me!', 'background:black; color: #957E4D')

  }

  return (
    <div className="App">
      {runConsole()}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
