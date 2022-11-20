import Sample from './components/Testc';
import { ran_img } from "./components/bank_list_img"
import Context from './components/Context';


const compare= (urli)=>{
 return (
  <div style={{display: "none"}}>
  <Context comparein={urli} />
</div>
 ) 
}


const moz = ran_img()
function App() {
  return (
    <div style={{ width: "1000px" }} class="grid grid-cols-6 gap-2 max-w-4xl  ">
      {moz.map((imgs,index) => {
            return(
            <div key={index} style={{display: "inline-block"}}>

            <Sample onCompare={compare} urls={imgs.urls}/>
            </div>
            )
          })}
    </div>
  );
}

export default App;
