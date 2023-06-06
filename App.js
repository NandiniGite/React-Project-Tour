import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading]=useState(false);
  const [tours,setTours]= useState([]);

  const fetchTour= async ()=>{

    setLoading(true);

    try {
      const response =await fetch(url);
    const tours = await response.json();
     setLoading(false);
     setTours(tours);
      
    } catch (error) {
       setLoading(false);
       console.log("Error");
    }
    
  };

  useEffect(()=>{
   
    
    fetchTour();

  },[])

  if(loading){
    return(
      <>
      <Loading/>
      </>
    )

  }
  const removeTour=(id)=>{
    const newtours=tours.filter((tours)=>tours.id!==id);
    setTours(newtours);
  }

  if(tours.length===0){
    return<main>
      <div className='title'>
        <h2>no tours left</h2>
        <button className='btn' onClick={fetchTour}>Refresh</button>
      </div>
    </main>
  }
  return <main>
   <Tours tours={tours} removeTour={removeTour}/>
  </main>
}

export default App