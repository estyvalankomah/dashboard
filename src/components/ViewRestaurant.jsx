import React from 'react';
import {
    Card,
    CardHeader,
    Row,
    Col,
    Button
} from "reactstrap";

const ViewRestaurant = () => {
    return (
        <div>
            <Card className="shadow mt-5 ml-5 mr-5 pl-5 pb-3">
                <CardHeader className="border-0">
                    <Row>
                        <Col xl="10" xs="12">
                            <h3 className="mb-2">Restaurants</h3>
                        </Col>
                    </Row>
                </CardHeader>
                <Row className="pt-2 mb-4">
                    <Col xl="2" className="pt-4"> 
                        <img src={require('../assets/img/tim_80x80.png')} alt="pc" className="border rounded-circle"/>
                    </Col>
                    <Col xl="3">
                        <Row className="text-info">Adenta KFC</Row>
                        <Row className="text-muted">adentakfc@gmail.com</Row>
                        <Row className="text-muted">0262720206</Row>
                        <Row className="text-muted">Ghana</Row>
                        <Row className="text-muted">Greater Accra, Accra</Row>
                    </Col>
                    <Col className="pt-4">
                        <Button color="primary">View</Button>{'  '}
                        <Button color="success">Authorize</Button>
                    </Col>
                </Row>
                <Row className="pt-2 mb-4">
                    <Col xl="2" className="pt-4"> 
                        <img src={require('../assets/img/tim_80x80.png')} alt="pc" className="border rounded-circle"/>
                    </Col>
                    <Col xl="3">
                        <Row className="text-info">Adenta KFC</Row>
                        <Row className="text-muted">adentakfc@gmail.com</Row>
                        <Row className="text-muted">0262720206</Row>
                        <Row className="text-muted">Ghana</Row>
                        <Row className="text-muted">Greater Accra, Accra</Row>
                    </Col>
                    <Col className="pt-4">
                        <Button color="primary">View</Button>{'  '}
                        <Button color="success">Authorize</Button>
                    </Col>
                </Row>
                <Row className="pt-2 mb-4">
                    <Col xl="2" className="pt-4"> 
                        <img src={require('../assets/img/tim_80x80.png')} alt="pc" className="border rounded-circle"/>
                    </Col>
                    <Col xl="3">
                        <Row className="text-info">Adenta KFC</Row>
                        <Row className="text-muted">adentakfc@gmail.com</Row>
                        <Row className="text-muted">0262720206</Row>
                        <Row className="text-muted">Ghana</Row>
                        <Row className="text-muted">Greater Accra, Accra</Row>
                    </Col>
                    <Col className="pt-4">
                        <Button color="primary">View</Button>{'  '}
                        <Button color="success">Authorize</Button>
                    </Col>
                </Row>
                <Row className="pt-2 mb-4">
                    <Col xl="2" className="pt-4"> 
                        <img src={require('../assets/img/tim_80x80.png')} alt="pc" className="border rounded-circle"/>
                    </Col>
                    <Col xl="3">
                        <Row className="text-info">Adenta KFC</Row>
                        <Row className="text-muted">adentakfc@gmail.com</Row>
                        <Row className="text-muted">0262720206</Row>
                        <Row className="text-muted">Ghana</Row>
                        <Row className="text-muted">Greater Accra, Accra</Row>
                    </Col>
                    <Col className="pt-4">
                        <Button color="primary">View</Button>{'  '}
                        <Button color="success">Authorize</Button>
                    </Col>
                </Row>
                <Row className="pt-2 mb-4">
                    <Col xl="2" className="pt-4"> 
                        <img src={require('../assets/img/tim_80x80.png')} alt="pc" className="border rounded-circle"/>
                    </Col>
                    <Col xl="3">
                        <Row className="text-info">Adenta KFC</Row>
                        <Row className="text-muted">adentakfc@gmail.com</Row>
                        <Row className="text-muted">0262720206</Row>
                        <Row className="text-muted">Ghana</Row>
                        <Row className="text-muted">Greater Accra, Accra</Row>
                    </Col>
                    <Col className="pt-4">
                        <Button color="primary">View</Button>{'  '}
                        <Button color="success">Authorize</Button>
                    </Col>
                </Row>
            </Card>
        </div>
    )
};

export default ViewRestaurant;