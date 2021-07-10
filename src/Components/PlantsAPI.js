import { useEffect, useState } from 'react';



function PlantsAPI () {
  const [isLoading, setIsLoading] = useState(true);
  const [plants, setPlants] = useState([])

useEffect(()=>{
  fetch('http://192.168.1.23:8080/plants')
  .then(response => response.json())
  .then((data)=>{
    setPlants(data)
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
  <div style={{marginTop:"20vh", textAlign:"center"}} >
  
 
   <h1> API calls with React Hooks </h1>
    {el}

 

  
      
 </div>
 )
}

export default PlantsAPI