import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [allCountry, setAllCountry] = useState([]);

  useEffect(()=>{
    async function fetchCountries() {
      try {
        const res = await fetch("https://xcountries-backend.azurewebsites.net/all");
        const data = await res.json();
        setAllCountry(data);
        console.log(data);
      } catch (error) {
        console.log(`Error fetching data: ${error}`)
      }
    }

    fetchCountries();
  },[])
  

  return (
    <>
    <h1>All Countries</h1>

    <div className='parent'>
      {
      allCountry.map((country)=>{
        return <>
        
        <div className='card'>
        <img src={country.flag} alt={country.name}/>
        <p className='title'>{country.name}</p>
      </div>
        </>
      })
      }
      
    </div>
    </>
  )
}

export default App
