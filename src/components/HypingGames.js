import React, { Component } from 'react';
import img1 from '../assets/fortine.png';
import img2 from '../assets/tarkov.jpg';
import img3 from '../assets/warzone.jpg';
import {Container,CardDeck,Card,Row} from 'react-bootstrap'
import {Button} from  './Button.js'
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
import '../styles.css'

var cardStyle = {
	height:"200px"
}

var ratingValue = {
	fontWeight: "700",
	fontSize: "26px",
    color: "rgba(248,107,80,1)",
	marginTop: "12px"
}


var ratingCircle = {
    width: "80px",
    height: "80px",
    textAlign: "center",
    display: "inline-block",
    borderRadius: "50px",
    border: "8px solid #ff4035",
    marginBottom:"50px",
    marginTop:"20px"
}


function cl(ref) {
	window.location.href= ref
}

export default class HypingGames extends Component {
	render() {
		const cardInfo = [
			{image:img1,rating:"7.5",title:"Fortnite",text:"Lorem ipsum dolor sit amet",ref:"https://www.epicgames.com/fortnite/ru/home"},
			{image:img2,rating:"5.2",title:"Escape From Tarkov",text:"Lorem ipsum dolor sit amet",ref:"https://www.escapefromtarkov.com/preorder-page"},
			{image:img3,rating:"6.5",title:"Call of Duty: Warzone",text:"Lorem ipsum dolor sit amet",ref:"https://eu.shop.battle.net/ru-ru/product/call-of-duty-warzone"},
		];


		const renderCard = (card, index) => {
			return(					
				<Card className="col-4 p-0 text-center" style={{border:"2px solid #ff4035"}} key={index}>
					<Card.Img 
						variant="top"
						src={card.image}
						style={cardStyle}
					/>
					<Card.Body>
						<div style={ratingCircle}>
							<p style={ratingValue}>
								{card.rating}
							</p>
						</div>
						<Card.Title>
							{card.title}
						</Card.Title>
						<Card.Text>
							{card.text}
						</Card.Text>
						<Button 
							onClick= {() => cl(card.ref)}
							type="Button"
							buttonStyle="Btn--or--outline"
							buttonSize="Btn--small"
							>
							DOWNLOAD

						</Button>
						
					</Card.Body>	
				</Card>
		    )

		}

		return (
			<>
				<CardDeck  style={{marginTop:"130px"}}>
					{cardInfo.map(renderCard)}
						
				</CardDeck>

			</>
		)


	}
}

