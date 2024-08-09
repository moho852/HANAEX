import FlowText from './components/FlowText';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='flex justify-center'>
      <NavBar />
      <div className="w-full h-[600px]"></div>
      <FlowText />
    </div>
  );
}

export default App;
