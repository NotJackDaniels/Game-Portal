import React, { Component } from 'react';
import GameReview from '../components/GameReview.js'
import Hyping from '../components/Hyping.js'
import Upcoming from '../components/UpcomingGames.js'
import Footer from '../components/Footer.js'

export default class home extends Component {
	render() {
		return (
			<div>
				<GameReview/>
				<Hyping/>
				<Upcoming/>
				<Footer/>
			</div>
		);
	}
}
