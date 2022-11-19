import { useRef , useState } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';



function Sample() {
  const ref = useRef();
  const [shift,setShift] = useState("notfliped");
  const [match,setMatch] = useState("");


const shiftHandler = () => {
     console.log("2222222");
      if (shift == "fliped"){
         setShift("notfliped")
     }else if (shift == "notfliped"){
        setShift("fliped")
    }
    }
console.log(shift);
  return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={false} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: '200px', height: '150px',width: "150px" }} /// these are optional style, it is not necessary
  >
    <span onClick={shiftHandler} style={{display: "inline-block"}}>
    <FrontSide style={{ backgroundColor: '#41669d', width: "150px",height: '150px'}} >
      RICK
    </FrontSide>
    </span>
    
    <span onClick={shiftHandler} style={{display: "inline-block"}}>
    <BackSide style={{ height: "150px", backgroundColor: '#175852'}}>
      ROCKS
    </BackSide>
    </span>
  </Flippy>
  )}

  export default Sample