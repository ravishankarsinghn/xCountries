import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header';
import Card from './Card';

function App() {
  const [allCountry, setAllCountry] = useState([]);

  useEffect(()=>{
    async function fetchCountries() {
      try {
        const res = await fetch("https://xcountries-backend.azurewebsites.net/all");
        const data = await res.json();
        setAllCountry(data);
      } catch (error) {
        console.log(`Error fetching data: ${error}`)
      }
    }

    fetchCountries();
  },[])
  

  return (
    <>
    <Header/>

    <div className='container'>
      {
      allCountry.map((country)=><Card country={country}/>)
      }
      
    </div>
    </>
  )
}

export default App
