import React, { Component } from 'react';
import witcher from '../assets/tsushima.png'
import Cards from './Cards.js'
import {Container} from 'react-bootstrap'


var sectionStyle = {
	backgroundImage: "url(" + witcher + ")",
	height:"900px",
	backgroundPosition: "center",
    backgroundSize: "cover"

}

export default class GameReview extends Component {
	render() {
		return (
			<>
				<div style={{marginBottom:"300px"}}>


					<section style={sectionStyle} className="d-block w-100">
						<Container >
							<Cards/>
						</Container>
					</section>
					
				</div>
				
			</>
		);
	}
}
