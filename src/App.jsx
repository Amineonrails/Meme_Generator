import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [meme, setMeme] = useState()


  const getMeme = async () => {
    const req = await axios.get('https://meme-api.herokuapp.com/gimme');
    const memeUrl = req.data.url;
    console.log(memeUrl)
    setMeme(memeUrl)
  }


  useEffect(() => {

    getMeme()

  }, [])

  return (
    <div className="App">
      <div className='memeContainer'>
        <img src={meme} alt="meme" className='memeImage' />
        <button onClick={() => { getMeme() }}>Generate a meme</button>
      </div>
    </div>
  )
}

export default App
