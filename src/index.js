//Create New component

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TYSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyArFE0FKjiGoX-0wKSay_riAbAemd8t63U';


class App extends Component {


	constructor(props){
		super(props);
		this.state = {videos: [] };

		TYSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({videos})
		})

	}


	render(){
		return (
    	<div>
      	<SearchBar />
				<VideoList videos={this.state.videos}/>
    	</div>
  	);
	}
}


//render the app in DOM
ReactDOM.render(<App />, document.querySelector('div.container'))
