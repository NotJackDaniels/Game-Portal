import React, { Component } from 'react';
import img1 from '../assets/witcher.jpg'
import img2 from '../assets/tsushima.png'
import img3 from '../assets/valhala.jpg'
import {Container,CardDeck,Card,Button,Row} from 'react-bootstrap'



var cardStyle = {
	height:"200px",
	borderRadius:"15px"
}

var h = {
	height:"1000px"
}

export default class Cards extends Component {
	render() {
		const cardInfo = [
			{image:img1,title:"Witcher 3 Wild Hunt Review"},
			{image:img2,title:"Ghost Of Tsushima Review"},
			{image:img3,title:"Assassin's Creed Valhala Review"},
		];


		const renderCard = (card, index) => {
			return(	
				<Card  className="border-0" key={index}>
					<Card.Img 
						variant="top"
						src={card.image}
						style={cardStyle}
					/>
					<Card.ImgOverlay>
						<Card.Title className="d-flex text-center text-white">
							{card.title}
						</Card.Title>
					</Card.ImgOverlay>	
				</Card>
			)

		}

		return (
			<>
				<CardDeck className="d-flex align-items-end" style={h}>
					{cardInfo.map(renderCard)}
						
				</CardDeck>
			</>
		)
	}
}
