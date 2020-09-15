
import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel,Form } from "react-bootstrap";
import '../styles.css'




export default class Register extends React.Component {
 	render() {
 		return (
 			<div>
 				<Form className="login-form" style={{marginTop:"100px"}}>
 					<h2 className="text-center">Register</h2>
 					<FormGroup>
 						<label>Email</label>
 						<FormControl type="email" placeholder="Email"/>
 					</FormGroup>
 					<FormGroup>
 						<label for="password" class="d-flex">Your password</label>
 						<FormControl type="password" placeholder="Password" id="password" name="password" class="form-control validate"/>
 					</FormGroup>
 					<FormGroup>
 						<label for="password2" class="d-flex">Confirm password</label>
 						<FormControl type="password" id="password2" name="password2" class="form-control" placeholder="confirm password"/>
 					</FormGroup>
 					<Button className="btn-lg btn-block">Register</Button>
 					
 				</Form>
 			</div>
 		)
 	}
}
