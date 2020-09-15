
import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel,Form } from "react-bootstrap";
import '../styles.css'

import { FacebookLoginButton } from 'react-social-login-buttons'



export default class Login extends React.Component {
 	render() {
 		return (
 			<div>
 				<Form className="login-form" style={{marginTop:"100px"}}>
 					<h2 className="text-center">Welcome</h2>
 					<FormGroup>
 						<label>Email</label>
 						<FormControl type="email" placeholder="Email"/>
 					</FormGroup>
 					<FormGroup>
 						<label>Password</label>
 						<FormControl type="password" placeholder="Password"/>
 					</FormGroup>
 					<Button className="btn-lg btn-block">Log in</Button>
 					<div className="text-center pt-3">
 						Or continue with your social account
 					</div>
 					<FacebookLoginButton className="mt-3"/>
 				</Form>
 			</div>
 		)
 	}
}






