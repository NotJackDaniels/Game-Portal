import React, { Component } from 'react';
import {Container,CardDeck,Card,Row} from 'react-bootstrap'
import img from '../assets/cyberpunk2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons'
import '../styles.css'


import img1 from '../assets/HITMAN_III.png'
import img2 from '../assets/farcry6.jpg'
import img3 from '../assets/scullandbones.jpg'


var sectionStyle = {
	backgroundImage: "url(" + img + ")",
	height:"400px",
	border:"2px solid #ff4035",
	backgroundPosition: "center",
    backgroundSize: "100% 100%"

}


export default class UpcomingGames extends Component {
	render() {

		
		const articleInfo = [
			{image:img1,title:"Hitman 3",text:"Relise date - 20.01.2021"},
			{image:img2,title:"Far Cry 6",text:"Relise date - 18.02.2021"},
			{image:img3,title:"Scull And Bones",text:"Relise date - March 2021"},
		];


		const renderCard = (card, index) => {
			return(	
				<Card  className="mb-3 col-12 p-0" key={index} style={{backgroundColor:"#1c192c",color:"white",border:"2px solid #ff4035"}}>
					<div className="row no-gutters">
						<div className="col-md-5">
							<img src={card.image} className="card-img" style={{height:"119px"}} alt=""/>
						</div>
						<div className="col-md-7">
							<Card.Body>
								<Card.Title>
									{card.title}
								</Card.Title>
								<Card.Text>
									{card.text}
									<a href=""><FontAwesomeIcon icon={faCommentAlt} className="mx-2"/></a>
									<span className="mr-2">0</span>
									<a href=""><FontAwesomeIcon icon={faHeart} className="mx-2"/></a>
									
									<span className="mr-2">0</span>
								</Card.Text>
							</Card.Body>
						</div>

					</div>
					
				</Card>
				
			)

		}


		return (
			<div>
				<div style={{backgroundColor:"#1c192c",marginBottom:"100px"}}>
					<Container>
					<h1 className="text-center m-4 display-1" style={{color:"white"}}><b>Upcoming Games</b></h1>
					<div className="row" style={{marginTop:"100px"}}>
						<section style={sectionStyle} className="d-block col-6">
							<div className="row align-items-end p-3" style={{height:"100%", color:"white"}}>
								<div>
									<h2 ><b>Cyberpunk 2077</b></h2>
									<section className="d-flex mt-4 mb-4 align-items-center">
										<h3 className="mr-4">
											Relise date - 19.10.2020
											
										</h3>
										<div className="d-flex align-items-center">
											<a href=""><FontAwesomeIcon icon={faCommentAlt} className="mr-2"/></a>
											<span className="mr-2">0</span>
											<a href=""><FontAwesomeIcon icon={faHeart} className="mr-2"/></a>
											
											<span className="mr-2">0</span>
										</div>
										
									</section>
									div
								</div>
								
							</div>
							
							
						</section>

						<section className="d-block col-6">
							{articleInfo.map(renderCard)}
						</section>	
					</div>
					
				</Container>
				</div>
				
			</div>
		);
	}
}
