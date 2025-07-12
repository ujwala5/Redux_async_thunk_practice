import { useState } from 'react'
import Post from './Component/Post'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Post />
    </>
  )
}

export default App
