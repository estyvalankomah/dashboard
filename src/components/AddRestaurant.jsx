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
            <Card className="shadow mt-5 ml-5 mr-5">
                <CardHeader className="border-0">
                    <Row>
                        <Col xl="10" xs="12">
                            <h3 className="mb-2 ml-5">Add Restaurant</h3>
                        </Col>
                    </Row>
                </CardHeader>
                <Row className="pl-5 pb-5">
                    <Col xl="10" xs="12">
                        <form className="pl-5">
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
                                <label htmlFor="vendorAddress">Country</label>
                                <input type="text" name="vendorCountry"  placeholder="" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vendorAddress">Region</label>
                                <input type="text" name="vendorRegion"  placeholder="" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vendorAddress">City</label>
                                <input type="text" name="vendorCity"  placeholder="" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vendorAddress">Area</label>
                                <input type="text" name="vendorArea"  placeholder="" className="form-control" />
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