
import React , { useState , useEffect , useRef} from "react";
import "./style.css"
import { ran_img } from "./bank_list_img"
import Image from "./Image";


function App() {


const [deciderimg, setDeciderimg] = useState(false);
const [first,setFirst] = useState();
const [decider,setDecider] = useState();
const [kk,setKk]= useState()
const previousInputValue = useRef();

const bank_imgs = ran_img()


const queOnChangeHandler = (event) => {
    setDeciderimg(false)
            }; 

useEffect(() => {
  previousInputValue.current = first;
},[first])


  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  var nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  const equal = (number) => {
    console.log("NNNNNNNNN", number);
    setFirst(number)
  }
  console.log("FFFF", previousInputValue.current);
  console.log("PPPPPP", first);

  if (previousInputValue.current !== undefined && previousInputValue.current === first){
    console.log("heyyyyyy you have done it" , );
    bank_imgs[previousInputValue.current].turn = false
    setFirst()
    console.log(bank_imgs);
  }
  // const imageOnChangeHandler = (event) => {
  //   props.onFirst(props.number)
  //   setImg(previousInputValue.current)
  //   setDecider(true)
  //       };



  return (
   
        <div style={{backgroundColor: "red" }} class="grid grid-cols-6 gap-2 max-w-4xl ml-12 mr-12">
          
          {deciderimg && bank_imgs.map((imgs,index) => {
            console.log("2231232fffffff",imgs);
            return(
            <>
                <img onClick={queOnChangeHandler}  key={imgs.urls} src={ require(`${imgs.urls}`)}/>
            </>
            )
          })}
          
        {/* {nums.map((num,index)=>{
            return (
            <Image dec={decider} key={index + 1} number={index} onFirst={equal}/> 
            )
          })}

        {nums2.map((num,index)=>{
            return (
            <Image key={ num + 15} number={index} onFirst={equal}/> 
            )
          })} */}
          {!deciderimg && bank_imgs.map((imgas,index) => {
            return(
            <>
                <img key={index} src={ require("./qq.webp")}/>
            </>
            )
          })}

        </div>
  );
}

export default App;
