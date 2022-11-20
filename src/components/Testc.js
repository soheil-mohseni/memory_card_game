import { useEffect, useRef , useState } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Context from './Context';



function Sample(props) {
  const ref = useRef();
  const [shift,setShift] = useState("notfliped");
  const [match,setMatch] = useState(false);
  const [first,setFirst] = useState(true);
  const [choice,setChoice] = useState([]);
  

const shiftHandler = () => {
     console.log("2222222");
      if (shift == "fliped"){
         setShift("notfliped")
     }else if (shift == "notfliped"){
        setShift("fliped")
        props.onCompare(props.urls)
      }
    }


useEffect(()=>{

  if(shift == "fliped"){
    setTimeout(()=>{
      
      ref.current.toggle()
      setShift("notfliped")
        setFirst(false)

      },2000)
}else if(first && shift == "notfliped"){
  ref.current.toggle()
  setTimeout(()=>{
  setShift("fliped")
},500)
}
},[shift])


console.log(shift);
console.log(choice);
  return (
<>
  <Flippy
      flipOnHover={false} // default false
      flipOnClick={match ? false : true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: '200px', height: '150px',width: "150px" }} /// these are optional style, it is not necessary
  >
    <span onClick={shiftHandler} style={{display: "inline-block"}}>
    <FrontSide style={{ backgroundColor: '#41669d', width: "150px",height: '150px'}} >
      <img src={require('./qq.webp')} ></img>

    </FrontSide>
    </span>
    
    <span onClick={shiftHandler} style={{display: "inline-block"}}>
    <BackSide style={{ height: "150px", backgroundColor: 'red'}}>
    <img src={require(`${props.urls}`)} ></img>

    </BackSide>
    </span>
  </Flippy>

  </>
  )}

  export default Sample
       // if(choice[choice.length - 1] == choice[choice.length - 2] ){setMatch(true)}else{
       // }
       //setChoice(prevState => [...prevState,props.urls])
