import { countBy, result } from 'lodash';
import React, { useEffect, useState } from 'react';
import './App.css';
import MyTable from './components/MyTable';
import Heading from './components/Heading';

function App() {
  
  const [personInfo, setPersonInfo] = useState({
    fname:'',
    mname:'',
    lname:'',
    p_age:''
  })
  
  const [tableHeading, setTableHeading]= useState(['FIRSTNAME', 'MIDDLENAME', 'LASTNAME', 'AGE'])
  const [firstname, setFirstname]= useState([,'ds','ds'])
  const [middlename, setMiddlename]= useState([])
  const [lastname, setLastname]= useState([])
  const [age, setAge]= useState([])

  const submitInfo = (field,value) =>{
    setPersonInfo({
        ...personInfo,
        [field]:value
    })
  }
  const sendDataToList = () =>{
    let tempFName= [...firstname]
    let tempLName= [...middlename]
    let tempMName= [...lastname]
    let tempAge= [...age]

    tempFName.push(personInfo.fname)
    tempLName.push(personInfo.mname)
    tempMName.push(personInfo.lname)
    tempAge.push(personInfo.p_age)
    
    setFirstname(tempFName)
    setMiddlename(tempLName)
    setLastname(tempMName)
    setAge(tempAge)
  }



  return(
    
    <div>
      <Heading title={'PERSONAL INFORMATION'} />

      <br/>
    
      Firstname: <input type="text" onChange={e => submitInfo('fname', e.target.value)}/><br />
      Middle Name: <input type="text" onChange={e => submitInfo('mname', e.target.value)}/><br />
      Lastname: <input type="text" onChange={e => submitInfo('lname', e.target.value)}/><br />
      Age: <input type="text" onChange={e => submitInfo('p_age', e.target.value)}/><br />

      <button onClick={sendDataToList}>SUBMIT</button>

      <br /><br />
      
      <Heading title={'RESULTS'} />
      {/* <p>RESULTS:</p> */}
        
      <MyTable 
        firstnameData={firstname}
        tableHeadingData={tableHeading}
        aceBorder={'green'}
      />

    </div>
  );
  
}

export default App;
