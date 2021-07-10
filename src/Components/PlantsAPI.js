import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';



function PlantsAPI () {
  const [isLoading, setIsLoading] = useState(true);
  const [plants, setPlants] = useState([])

useEffect(()=>{
  fetch('http://192.168.1.23:8080/plants')
  .then(response => response.json())
  .then((data)=>{
    setPlants(data)
    setIsLoading(false)
  })

},[])

  const el = 
    plants.map((elem)=>{
    return(  
  
      <table key={elem+"table"} style={{ border:"1px solid black", width:"55vh", display:"flex", justifyContent:"center"}}  >
        <tbody   >
  <tr  >
    <th >Name</th>
  </tr>
  <tr  >
    <td >{elem}</td>
  </tr>
  </tbody>
</table>
      )
    
      
    })
  
 return (
<Container style={{border:"2px solid black", display:"flex", marginTop:"20vh", justifyContent:"center", padding:"5vh"}}  >
  <Row style={{border:"2px solid green"}}  >
    <Col style={{border:"2px solid pink"}}  >    {isLoading ? "Loading..." : el}
</Col>
  </Row>
</Container>

   

 

 

  
      

 )
}

export default PlantsAPI