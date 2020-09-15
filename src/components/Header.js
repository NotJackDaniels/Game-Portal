import React from 'react'
import logo from '../assets/game-controller.png'
import {Navbar,Nav,Form,FormControl,Container} from 'react-bootstrap'
import '../App.css'
import {Button} from  './Button.js'
import { BrowserRouter as Router,Switch,Route,Link,Redirect } from 'react-router-dom'
import '../styles.css'

import home from '../pages/home.js'
import login from '../pages/Login.js'
import Contacts from '../pages/Contacts.js'
import Register from '../pages/Register.js'


//import Favorites from '../Pages/Favorites.js'
//import Readable from '../Pages/Readable.js'
//import Contacts from '../Pages/Contacts.js'
//import Register from '../Pages/Register.js'
//import Login from '../Pages/Login.js'

export default class Header extends React.Component {
	render() {
		return (
			<>
				<Navbar className="fixed-top navbar-inverse nv-st" collapseOnSelect expand="md">
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
								 <Nav.Link style={{color:"white"}} href="/">Home</Nav.Link>
								 <Nav.Link style={{color:"white"}} href="/Games">Games</Nav.Link>
								 <Nav.Link style={{color:"white"}} href="/News">News</Nav.Link>
								 <Nav.Link style={{color:"white"}} href="/Contacts">Contact us</Nav.Link>
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
							    <Nav.Link href="/Register" style={{padding:"0px"}}>
							    	<Button 
							    	onClick={ () => {console.log("clicked")}}
									type="Button"
									buttonStyle="Btn--dk--outline"
									buttonSize="Btn--small"
							    	href="/register">
							    	Register
							    </Button>
							    </Nav.Link>
							    
							    <Nav.Link href="/login" style={{padding:"0px"}}>
							    	<Button
										onClick={() => {console.log("clicked")}}
										type="Button"
										buttonStyle="Btn--dk--outline"
										buttonSize="Btn--small">
											login
									</Button>
							    </Nav.Link>
						   		
							   


								
							</Form>
						</Navbar.Collapse>
					</Container>
				</Navbar>




				<Router>
					<Switch>
						<Route exact path="/" component={home} />
						<Route exact path="/login" component={login}/>
						<Route exact path="/Contacts" component={Contacts}/>
						<Route exact path="/Register" component={Register}/>
					</Switch>
				</Router>

			
			</>
		)
	}
}