import React from 'react'

function MyTable(props){
    const displayHeading = (row) =>{
      return(
        <th style={{border:'2px solid black'}}>{`${ row}`}</th>
        );
    }
    
    const displayContent = (row,i) =>{
      return(
        <tr>
          <td style={{ border:`2px solid black` }}>{row}</td>
          <td style={{border:`2px solid black`}}>{row}</td>
        </tr>
      );
    }
    
    return (
        <table id ="perInfo" style={{border:'2px solid black'}}>
          <tr>
            {props?.tableHeadingData.map((row) => displayHeading(row))}
          </tr>
          
          {props?.firstnameData.map((row,i) => displayContent(row,i))}

        </table>
    )
}

export default MyTable