import React, { Component } from 'react';
import img1 from '../assets/logo1.png'
import img2 from '../assets/logo2.png'
import img3 from '../assets/logo3.jpg'
import img4 from '../assets/logo4.png'
import img5 from '../assets/logo5.jpg'
import img6 from '../assets/logo6.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'



import '../styles.css'


export default class Footer extends Component {
	render() {
		return (
			<div>
				<footer class="social-footer">
				  <div class="container">
				    <div class="icons">
		                <a href=""><FontAwesomeIcon icon={faInstagram} className="mr-2"/></a>
		                <a href=""><FontAwesomeIcon icon={faYoutube} className="mr-2"/></a>
		                <a href=""><FontAwesomeIcon icon={faFacebookSquare} className="mr-2"/></a>
		            </div>

				  </div>
				</footer>
			</div>
		);
	}
}
