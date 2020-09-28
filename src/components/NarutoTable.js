import React from 'react'
import { Table } from 'antd';

function NarutoTable(props){

    return (
        <Table id ="perInfo" style={{border:'2px solid black'}}>
          <tr>
            <th>Title</th>
            <th>Synopsis</th>
            <th>Rated</th>
          </tr>
          {
            props?.narutos.map(rowData => {
              return <tr>
                <td>{rowData?.title}</td>
                <td>{rowData?.synopsis}</td>
                <td>{rowData?.rated}</td>
              </tr>
            })
          }
        </Table>
    )
}

export default NarutoTable