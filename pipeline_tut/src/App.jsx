// import MyHeading from "./components/MyHeading";
import Header from "./components/Header";
import Meow,{Myheadinglil1,Myheadinglil2,Myheadinglil3} from "./components/MyHeading";
// import {Myheadinglil1,Myheadinglil2,Myheadinglil3} from "./components/MyHeading";
// import {Myheadinglil1 as Cusname,Myheadinglil2,Myheadinglil3} from "./components/MyHeading";


const a = 'hAHAHA'
// const Myheading = () => <h1>Heading</h1>

function App(){
  return ( 
  <>{/*Fragment*/}
  <div>
    <Header/>
    <Meow name="Alex" text="Nice" price={1000}/>
    {/* <Cusname /> */}
    <Myheadinglil1 />
    <Myheadinglil2 />
    <Myheadinglil3 />
    <h1>Welcome a = {a}</h1>
  </div>
  <div>Helllllllll yeahh</div>
  </>
  );
}

export default App;