import React from 'react';
import './style.css';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/firestore"


const Form = ({ input, setInput, todos, setTodos }) => {

  const [Datalist,setData]=useState([{activity:''}])

  const onCreate = () =>{
    const db =firebase.firestore()
    db.collection("users").add({activity:input})
  }
  

  const onInputChange = event => {
    setInput(event.target.value);
  };
  const onFormSubmit = event => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput('');
  };

  return (
    <div className="todo">
      <form onSubmit={onFormSubmit}>
        <input
          style={{
            marginBottom: '10px',
            borderStyle: 'none',
            borderRadius: '0px',
            textAlign: 'left',
            marginLeft: '150px',
            marginTop: '50px',
            width: '300px',
            height: '40px',
            padding:'15px',
            margin:'15px'
          }}
          type="text"
          placeholder="store todo"
          className="task-input"
          value={input}
          required
          onChange={onInputChange}
        />

        <button
          style={{
            backgroundColor: '#00e676',
            height: '40px',
            width: '80px',
            color: 'white',
            borderStyle: 'none',
            padding:"9px",
            margin:'15px',
            marginLeft:'30px'
          }}
          className="button-add"
          type="submit"
          onClick={onCreate}

        >
          Save
        </button>
      </form>

       <button style={{
        textAlign: 'left',
            backgroundColor: 'rgba(3 , 3 , 3 , 0.2)',
            height: '30px',
            width: '80px',
            color: 'white',
            borderStyle: 'none',
            padding:"0px",
            marginLeft:'15px '
          }} onClick={()=>{ 
  let val=[]
  console.log("getting")
  console.log(Datalist)
  firebase.firestore().collection('users').get().then(response=>{
  console.log(response)
  response.forEach(data=>{
       
    val.push({...{id:data.id},...data.data()})
     console.log(data.id);
   
     //setData(...Datalist,val)

     })
setData(val)
   //console.log("list = ",val)
   console.log("list = ",Datalist)

})
}}>View  </button>
  <div className = "App" >
  <ul  style={{listStyle:"none",  marginTop: '1px', background:"rgba(0 , 0 , 0 , 0.5)" ,width:"550px",marginLeft:'50px ' }  } >
  {Datalist.map(person => {
    return (
      <div style={{  marginTop: '20px',color:"#FFFFFF"}} key={person.id} onClick={(data)=>{
        console.log("click",person)

      }}>
        {person.activity} 
      </div>
    )
  })}
</ul>
     </div>
    </div>
  );
};

export default Form;
