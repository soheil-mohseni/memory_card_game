import { useEffect, useRef , useState } from 'react';

function Context(props) {
const [compare,setCompare] = useState([]);
const [match,setMatch] = useState(false);

// 

useEffect(()=>{
  //  setCompare(prevState => [...prevState,props.comparein])
   // if(compare[compare.length - 1] == compare[compare.length - 2] ){setMatch(true)}else{
     //    }
     setCompare(prevState => [...prevState,props.comparein])
  },[props.comparein])

console.log(compare);

  return (
    <div style={{ width: "1000px" }} class="grid grid-cols-6 gap-2 max-w-4xl  ">

    </div>
  );
}

export default Context;
