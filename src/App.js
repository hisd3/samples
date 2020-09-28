import { countBy, result } from 'lodash';
import React, { useEffect, useState } from 'react';
import './App.css';
import MyTable from './components/MyTable';
import Heading from './components/Heading';
import NarutoTable from './components/NarutoTable';
import PersonalInfoForms from './components/PersonalInfoForms';
import { Button } from 'antd';

function App() {
  

  // return(

  //   <div className="container">
  //     <div className="top"><Heading title={'PERSONAL INFORMATION'} /></div>
  //     <div className="grid-container">
  //       <div className="item2"></div>
  //       <div className="item3"></div>  
  //       <div className="item4"></div>
  //       <div className="item5"></div>
  //     </div>
  //   </div>
  // )


  const [personInfo, setPersonInfo] = useState({
    fname:'',
    mname:'',
    lname:'',
    p_age:''
  })

  const [narutos, setNarutos] = useState([])
  const [tableHeading]= useState(['FIRSTNAME', 'MIDDLENAME', 'LASTNAME', 'AGE'])
  const [firstname, setFirstname]= useState(['ds','ds'])
  const [middlename, setMiddlename]= useState([])
  const [lastname, setLastname]= useState([])
  const [age, setAge]= useState([])

  useEffect(() => {
    console.log('ni execute ani')
    getNarutos()
  }, [])

  const getNarutos = () => {
    fetch("https://api.jikan.moe/v3/search/anime?q=naruto")
    .then(response => response.json())
    .then(result => {
      if(result.results) {
        setNarutos(result.results)
      }
    })
  }

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
      <PersonalInfoForms submitInfo={submitInfo} />

      <Button type="primary" onClick={sendDataToList}>SUBMIT</Button>

      <br /><br />
      
      <Heading title={'RESULTS'} />
      {/* <p>RESULTS:</p> */}
        
      <MyTable 
        firstnameData={firstname}
        tableHeadingData={tableHeading}
        aceBorder={'green'}
      />

      <NarutoTable narutos={narutos} />

    </div>
  );
  
}

export default App;
