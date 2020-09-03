import React, { Component } from 'react';
import img1 from '../assets/cyberpunk.jpg'
import img2 from '../assets/tlou2.jpg'
import img3 from '../assets/valhala.jpg'
import {Container,CardDeck,Card,Button,Row} from 'react-bootstrap'
import '../styles.css'



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
			{image:img1,title:"Cyberpunk Review"},
			{image:img2,title:"The Last Of Us 2 Review"},
			{image:img3,title:"Assassin's Creed Valhala Review"},
		];


		const renderCard = (card, index) => {
			return(	
				<Card  className="border-0" key={index}>
					<a href="">
						<Card.Img 
							variant="top"
							src={card.image}
							style={cardStyle}
						/>
						<Card.ImgOverlay className="row align-items-center text-center">
							<span className="mx-auto" style={{fontSize:"20pt", color:"white"}}>
								{card.title}
							</span>
						</Card.ImgOverlay>	
					</a>
					
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
