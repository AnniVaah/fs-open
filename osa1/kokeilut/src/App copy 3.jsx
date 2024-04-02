import { useState } from 'react'

const App = () => {

  //const [ left, setLeft ] = useState(0)
  //const [ right, setRight ] = useState(0)
  const [ clicks, setClicks ] = useState({
    left:0, right:0
  })
  const handleLeftClick = () =>
    setClicks({ ...clicks, left: clicks.left + 1 })

  const handleRightClick = () =>
    setClicks({ ...clicks, right: clicks.right + 1 })

  console.log('rendering...', clicks.left, clicks.right)

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}

export default App