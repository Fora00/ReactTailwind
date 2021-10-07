import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import SillyComponent from './Components/SillyComponent';

// react-scripts in package.json need to be craco

function App() {
  return (
    <div className="bg-green-200">
      <p className="uppercase text-right">{'Hello from App'}</p>
      <Navbar />
      <SillyComponent />
      <div className="flex flex-col text-white ">
        <h3 className="text-bold text-4xl">{'Hi from app pt2'}</h3>
        <div className="border-2 border-red-900 bg-green-800 rounded mb-2 w-20 text-center pb-3 ">Hello xD</div>
        <div className="border-4 m-4 border-black bg-green-800 rounded-l">Hello xD</div>
        <div className="border-2 bg-green-800 border-white full-rounded m-10 rounded-r-2xl">Hello xD</div>
        <div className="m-6 border-8 rounded-full bg-black text-center hover:bg-white hover:text-black hover:border-black ">
          <p className="uppercase"> Hello again </p>
        </div>
        <div className=" hover:text-10xl">
          <h4 className="bg-primary">I use customs</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
