import React, { Component } from 'react';
import {Container} from 'react-bootstrap'
import HypingGames from './HypingGames.js'

export default class Hyping extends Component {
	render() {
		return (
			<div>
				<Container>
					<h1 className="text-center m-4 display-1" style={{color:"#343a40"}}><b>Hyping Games</b></h1>
					<HypingGames/>
				</Container>
				
			</div>
		);
	}
}

