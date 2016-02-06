//Create New component
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyArFE0FKjiGoX-0wKSay_riAbAemd8t63U';
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}


//render the app in DOM
ReactDOM.render(<App />, document.querySelector('div.container'))
