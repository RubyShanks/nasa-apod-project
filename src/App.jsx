import { useEffect, useState } from 'react'
import Main from './components/Main'
import Footer from "./components/Footer"
import SideBar from './components/SideBar'

function App() {

  // useState hooks eliminate the need for event listeners 
  const [data, setData] = useState(null) // default value is null
  const [loading, setLoading] = useState(false) 

  // We use the useState hook to create a state variable called showModal and a function called setShowModal to update it
  const [showModal, setShowModal] = useState(false) // default value is false
  
  function handleToggleModal() {
    setShowModal(!showModal)
  }
  
  // function is executed whenever the requirements in the dependency array are satisfied
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`

      const today = (new Date()).toDateString() // Default date is today
      const localKey = `NASA-${today}` 
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today')
        return
      }
      localStorage.clear()

      try {
        // await pauses the function until the promise is resolved (i.e., the data is fetched)
        const res = await fetch(url) // fetch the data
        const apiData = await res.json() // convert the response to JSON
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API today')  
      }
      catch (err) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, []) // empty dependency array means the function should be run whenever the page loads
  // if we had a variable in the dependency array, the function would run whenever that variable changes

  return (
    <>
      {data ? (<Main data={data} />): ( // if data is not null, render the Main component
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && ( // if showModal is true, render the SideBar component
        <SideBar data={data} handleToggleModal={handleToggleModal} />

        )}
      {data && (<Footer data={data} showModal={showModal} handleToggleModal={handleToggleModal} />)}
    </>
  )
}

export default App
