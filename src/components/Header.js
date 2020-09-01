import React from 'react'
import logo from '../assets/game-controller.png'
import {Navbar,Nav,Form,FormControl,Container} from 'react-bootstrap'
import '../App.css'
import {Button} from  './Button.js'
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'

import home from '../pages/home.js'
//import Favorites from '../Pages/Favorites.js'
//import Readable from '../Pages/Readable.js'
//import Contacts from '../Pages/Contacts.js'
//import Register from '../Pages/Register.js'
//import Login from '../Pages/Login.js'

export default class Header extends React.Component {
	render() {
		return (
			<>
				<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="/">
							<img className="img-logo" 
								src={logo}
								height="30"
								width="30"
								className="d-inline-block align-top"
								alt="logo"
							/>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								 <Nav.Link href="/">Home</Nav.Link>
								 <Nav.Link href="/Games">Games</Nav.Link>
								 <Nav.Link href="/News">News</Nav.Link>
								 <Nav.Link href="/Contacts">About us</Nav.Link>
							</Nav>
							<Form inline>
								<FormControl
									type="text"
									placeholder="Search"
									className = "mr-sm-2"
								/>
								<Button 
									onClick={ () => {console.log("clicked")}}
									type="Button"
									buttonStyle="Btn--dk--outline"
									buttonSize="Btn--small">
									Search
							    </Button>
							    <Button 
							    	onClick={ () => {console.log("clicked")}}
									type="Button"
									buttonStyle="Btn--dk--outline"
									buttonSize="Btn--small"
							    	href="/register">
							    	Register
							    </Button>
								<Button 
									onClick={ () => {console.log("clicked")}}
									type="Button"
									buttonStyle="Btn--dk--outline"
									buttonSize="Btn--small"
									href="/login">
									Login
								</Button>
								
							</Form>
						</Navbar.Collapse>
					</Container>
				</Navbar>




				<Router>
					<Switch>
						<Route exact path="/" component={home} />
					</Switch>
				</Router>

			
			</>
		)
	}
}