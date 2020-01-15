import React from 'react';
import {
    Card,
    CardHeader,
    Row,
    Col,
    Button
} from "reactstrap";

const AddRestaurant = () => {
    return (
        <div>
            <Card className="shadow">
                <CardHeader className="border-0">
                    <Row>
                        <Col xl="10" xs="12">
                            <h3 className="mb-0">Add Restaurant</h3>
                        </Col>
                    </Row>
                </CardHeader>
                <Row className="pl-5 pb-5">
                    <Col xl="10" xs="10">
                        <form>
                            <div className="form-group">
                                <label htmlFor="vendorName">Name</label>
                                <input type="text" value="" name="vendorName" placeholder="" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vendorLogo">Logo</label>
                                <input type="file" name="vendorLogo" accept="image/jpg,image/png,image/jpeg" value="" placeholder="" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vendorEmail">Email</label>
                                <input type="text" name="vendorEmail" placeholder="" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vendorAddress">Address</label>
                                <input type="text" name="vendorAddress"  placeholder="" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vendorContact">Contact</label>
                                <input type="text" name="vendorContact" placeholder="" className="form-control" />
                            </div>
                            <Button pullRight fill type="submit">Submit</Button>
                        </form>
                    </Col>          
                </Row>
            </Card>
        </div>
    )
};

export default AddRestaurant;