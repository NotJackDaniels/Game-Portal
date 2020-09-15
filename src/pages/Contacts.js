import React from 'react'
import { Form, Button, Container } from "react-bootstrap";
export default class Contacts extends React.Component {
	render() {
		return (
			<Container style={{ width: '500px' ,marginTop:"100px"}}>
				<h1 className="text-center"> Contact us</h1>
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Example text area</Form.Label>
						<Form.Control as="textarea" rows="3" />
					</Form.Group>

					<Form.Group controlId="formBasicCheckBox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button varient="primary" type="submit">Submit</Button>
				</Form>
			</Container>
		)
	}
}