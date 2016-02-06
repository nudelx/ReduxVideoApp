//Create New component
import React from 'react'
import ReactDOM from 'react-dom'

/// const
const App = function(){
  return <div>Hi!</div>
}


//render the app in DOM
ReactDOM.render(<App />, document.querySelector('div.container'))
