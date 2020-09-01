import React, { Component } from 'react';
import GameReview from '../components/GameReview.js'
import Hyping from '../components/Hyping.js'

export default class home extends Component {
	render() {
		return (
			<div>
				<GameReview/>
				<Hyping/>
			</div>
		);
	}
}
