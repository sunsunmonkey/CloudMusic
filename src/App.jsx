import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'


import "./assets/css/reset.css"

const App = memo(() => {
  
  
  return (
   <div>
   
      <div className="page">
        {useRoutes(routes)}
      </div>
   </div>
  )
})

export default App