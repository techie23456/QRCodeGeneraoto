import React from 'react';


import {useState} from 'react'

export default function App() {

const [msg,setMsg] = useState('');

const [myMsg,setMyMsg] = useState('');


return (
  <div className='App'>
   
    <input type = "text" onChange={(event)=>{

                                       console.log(">>>>>>",event.target.value);

                                       setMsg(event.target.value)
                                             }               
                                    } />
   
    <button onClick={() =>{

     setMyMsg("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + msg);

                           }
                     }> Click Me </button>

    <h2> {myMsg}</h2>
     <img src={myMsg} alt="" id="qr-img"></img>
  </div>
);
}