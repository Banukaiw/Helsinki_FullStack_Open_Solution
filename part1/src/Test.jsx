
   

    /* const i = [1,2,3];
    console.log(i)

    const i2 = i.map(value => value *2
        
    )
    console.log(value) */



/* import { useState } from "react"; */

    /* const object1 = {
        name: 'Arto Hellas',
        age: 35,
        education: 'PhD',
      }
      
      const object2 = {
        name: 'Full Stack web application development',
        level: 'intermediate studies',
        size: 5,
      }
      
      const object3 = {
        name: {
          first: 'Dan',
          last: 'Abramov',
        },
        grades: [2, 3, 5, 3],
        department: 'Stanford University',
      }
    
    console.log(object1.name);
    object1.name = 'banuka Ishara';
    console.log(object1.name);
    object1.address = 'matara';
    console.log(object1); */

   


/* function product(a, b) {
    return a * b
  }
  
  const result = product(2, 6)
  console.log(result) */





/* import Test2 from "./Test2"
  const Test = () => {
    return (
      <div>
        <h1>Greetings</h1>
        <Test2 name='George' />
        <Test2 name='Daisy' />
      </div>
    )
  }
export default Test */




/* -------------------------------------get birth year------------------

const Hello = (props) => {
    const bornyear=()=>{
        const yearnow = new Date().getFullYear();
        return yearnow - props.age
    }

    return(
        <>
        <h1>Hi {props.name}</h1>
        <div>you probably born in {bornyear()}</div></>
        
        
    )
}

const Test = () => {
    console.log("hi")
    return(
      <div>
        <h1>Greetings</h1>
        <Hello name="Banuka" age={23} />
        
      </div>
    )
}

export default Test; */

/* 
///////////////////////////////////////////////////////////////////////////////usestate


 import React, {useState} from "react";

const Counter=() =>{
  // Declare a state variable called 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      
      <button onClick={() => setCount(count + 1)}>Incease</button>
    
      <button onClick={() => setCount(count - 1)}>Decrease</button>
     
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter */; 


/* /////////////////////////////// event handler //////////

import React, { useState } from "react";
const Test = ()=>{
  
 const [count, setCount] = useState(0);

 const IncreaseByOne =()=>{setCount(count+1)} 
 const DecreaseByOne =()=>{setCount(count-1)}
 const Reset=()=>{setCount(0)}
  
  return(
    <div>
    <h1>Counter: {count}</h1>
    
    <button onClick={IncreaseByOne}>Increase</button>
    
    <button onClick={DecreaseByOne}>Decrease</button>
    
    <button onClick={Reset}>Reset</button>
  </div>
  )
  
}



export default Test; */



/* const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}


const Test = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}> 
        zero
      </button>
    </div>
  )
}

export default Test */

////////////////////////////////////////////props use in button////////////

/* const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}


const APP =()=>{
  const[count,setCount] = useState(0);

 const increaseByOne = ()=>{setCount(count+1)}
  const decreaseByOne = ()=>{setCount(count-1)}
  const setToZero = ()=>{setCount(0)}

  return(
    <div>
      <Test2 count={count}/>
    <Button
        onClick={increaseByOne}
        text='plus'
      />
       <Button
        onClick={setToZero}
        text='zero'
      />    
      <Button
        onClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}

export default APP; */

///////////////////////////complex USe sate


/* import React, {useState} from "react";
import Test2 from "./Test2";

const Button =(props)=>{
  return(
    <button  onClick={props.onClick}>{props.text}</button>
  )

}

const Test=()=>{
   const[left,setLeft] = useState(0);
  const[right, setRight]=useState(0); 

  const IncreaseByOne = ()=>{setLeft(left+1)}
  const DecreseByOne = ()=>{setRight(right-1)}
  const Zero = ()=>{setLeft(0) || setRight(0)};

  return(
    <>
    <Test2 left={left} /> 
    <Button onClick={IncreaseByOne} text='Plus'/>
    <Button onClick={Zero} text='Reset'/>
    <Button onClick={DecreseByOne} text='Minus'/>
     <Test2 right={right}/> 

    </>
  )
}
export default Test; */



 import React, {useState} from "react";
import Test2 from "./Test2";

const Button =(props)=>{
  return(
    <button  onClick={props.onClick}>{props.text}</button>
  )

}

const Test=()=>{
   const[left,setLeft] = useState(0);
  const[right, setRight]=useState(0); 
  const[allClick,setAll]=useState([]);
  const[total,setTotal]=useState(0);
  

  const IncreaseByOne = ()=>{
     setAll(allClick.concat('L'))
    setLeft(left+1)
    setTotal(left+right)
    }
  const DecreseByOne = ()=>{
    setAll(allClick.concat('R'))
    setRight(right+1)
    setTotal(left+right)
  }
  const Zero = ()=>{setLeft(0) || setRight(0)};

  return(
    <>
    <Test2 left={left} /> 
    <Button onClick={IncreaseByOne} text='Plus'/>
    <Button onClick={Zero} text='Reset'/>
    <Button onClick={DecreseByOne} text='Minus'/>
     <Test2 right={right}/> 
     <p>{allClick.join('')}</p>
     <p>total:{total}</p>

    </>
  )
}
export default Test; 

