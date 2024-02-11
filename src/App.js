import React from 'react';
import './App.css'

import {useState} from 'react'

export default function App() {

const [msg,setMsg] = useState('');

const [myMsg,setMyMsg] = useState('');


return (
  <div className='App' id ="wrapper">

    <h1> 🐺🐺🐺🐺 QR Code Generator 🐺🐺🐺🐺</h1>
   
    <input type = "text" id ="inputBox" placeholder='Enter Text or Link here..' onChange={(event)=>{

                                       console.log(">>>>>>",event.target.value);

                                       setMsg(event.target.value)
                                             }               
                                    } />
   
    <button onClick={() =>{

     setMyMsg("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + msg);

                           }
                     }> Click Me </button>

    <h2> {myMsg}</h2>
    <div id ="qr">
     <img src={myMsg} alt="" id="qr-img"></img>
     </div>
  </div>
);
}