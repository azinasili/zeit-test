import Head from 'next/head';
import Router from 'next/router'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const handler = () => {
    Router.push({
        pathname: '/about',
        query: { name: 'Zeit' }
    })
}

const LearnMore = (props) => (
    <div>
        <Head>
            <title>Learn More - {props.partner}</title>
        </Head>
        <main className="border pt-4 pb-3 px-3 mt-5">
            <div className="text-center">
                <Image src="http://placecage.com/250/100" alt="Partner logo" className="m-auto"/>
                <p>&ndash; has a limited time offer for you &ndash;</p>
                <h1>Free 2-Day Shipping For 1 Year</h1>
                <p>Sign up for ShopRunner and enjoy unlimited free 2-day shipping and free returns at 140+ stores.</p>
            </div>
            <Form>
                <Row>
                    <Col md={6}>
                        <fieldset>
                            <legend className="col-form-label text-center">Choose 1 of 3 ways to sign up FOR FREE</legend>
                            <Form.Check id="sng">
                                <Form.Check.Input type="radio" name="signup" />
                                <Image src="http://placecage.com/100/36" alt="Partner logo" />
                                <Form.Check.Label>Free when you spend $120 today</Form.Check.Label>
                            </Form.Check>
                            <Form.Check id="amex">
                                <Form.Check.Input type="radio" name="signup" />
                                <Image src="http://placecage.com/36/36" alt="AMEX logo" />
                                <Form.Check.Label>Free with your eligible card</Form.Check.Label>
                            </Form.Check>
                            <Form.Check id="paypal">
                                <Form.Check.Input type="radio" name="signup" />
                                <Image src="http://placecage.com/36/36" alt="PayPal logo" />
                                <Form.Check.Label>Free with your PayPal account</Form.Check.Label>
                            </Form.Check>
                        </fieldset>
                    </Col>
                    <Col md={6}>
                        <fieldset>
                            <legend className="col-form-label text-center">Activate your ShopRunner account</legend>
                            <Form.Row>
                                <Form.Group as={Col} controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Create Password" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Button variant="primary" type="submit"  onClick={handler} block>Click here to apply free shipping</Button>
                                </Col>
                            </Form.Row>
                        </fieldset>
                    </Col>
                </Row>
            </Form>
            <div className="text-center mt-3">
                <p className="mb-0 small">By clicking activate this offer, you are agreeing to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
            </div>
        </main>
    </div>
);

LearnMore.getInitialProps = async function(context) {
    const { partner } = context.query
    console.log("Testing CloudFront - " + partner)
    return { partner }
}

export default LearnMore
