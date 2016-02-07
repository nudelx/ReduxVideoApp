//Create New component

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TYSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_details'

const API_KEY = 'AIzaSyArFE0FKjiGoX-0wKSay_riAbAemd8t63U';


class App extends Component {


	constructor(props){
		super(props);
		this.state = {
				videos: [] ,
				selectedVideo: null
			};

			this.videoSearch('starwars')

	}

	videoSearch(term){
		// console.log("UPPER => "+term);
		TYSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo:videos[0]
			});
		});

	}

	render(){
		return (
    	<div>
      	<SearchBar onSearchTermChange={term => this.videoSearch(term) }/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}/>
    	</div>
  	);
	}
}


//render the app in DOM
ReactDOM.render(<App />, document.querySelector('div.container'))
