import { Trash } from 'feather-icons-react/build/IconComponents';
import React from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';





function History() {
  return (
    <div>
     <Container>
        <h3 className='text-center mt-5'>Watch History</h3>
<Table className='my-5' striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>title</th>
          <th>time</th>
          <th>video url</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><Trash></Trash></td>
        </tr>
        
      </tbody>
    </Table>
</Container>
    </div>
  )
}

export default History