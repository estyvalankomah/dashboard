import React from 'react';
import {
    Card,
    CardHeader,
    Row,
    Col,
    Table
} from "reactstrap";

const ViewRestaurant = () => {
    return (
        <div>
            <Row>
                <div className="col">
                <Card className="shadow">
                    <CardHeader className="border-0">
                        <Row>
                            <Col xl="10" xs="12">
                            <h3 className="mb-0">Restaurants</h3>
                            </Col>
                        </Row>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                            <tr>
                            <th scope="col">Index</th>
                            <th scope="col">Vendor Name</th>
                            <th scope="col">Icon/Logo</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Adenta KFC</td>
                            <td></td>
                            <td>0262720206</td>
                            <td>abenammra2002@gmail.com</td>
                            <td>Accra Adenta</td>
                            <td>
                                <button className="btn btn-link btn-primary">View</button>
                                <button className="btn btn-link text-success btn-success">Authorize</button>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Adenta KFC</td>
                            <td></td>
                            <td>0262720206</td>
                            <td>abenammra2002@gmail.com</td>
                            <td>Accra Adenta</td>
                            <td>
                                <button className="btn btn-link btn-primary">View</button>
                                <button className="btn btn-link text-success btn-success">Authorize</button>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Adenta KFC</td>
                            <td></td>
                            <td>0262720206</td>
                            <td>abenammra2002@gmail.com</td>
                            <td>Accra Adenta</td>
                            <td>
                                <button className="btn btn-link btn-primary">View</button>
                                <button className="btn btn-link text-success btn-success">Authorize</button>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Adenta KFC</td>
                            <td></td>
                            <td>0262720206</td>
                            <td>abenammra2002@gmail.com</td>
                            <td>Accra Adenta</td>
                            <td>
                                <button className="btn btn-link btn-primary">View</button>
                                <button className="btn btn-link text-success btn-success">Authorize</button>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Adenta KFC</td>
                            <td></td>
                            <td>0262720206</td>
                            <td>abenammra2002@gmail.com</td>
                            <td>Accra Adenta</td>
                            <td>
                                <button className="btn btn-link btn-primary">View</button>
                                <button className="btn btn-link text-success btn-success">Authorize</button>
                            </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
                </div>
            </Row>
        </div>
    )
};

export default ViewRestaurant;