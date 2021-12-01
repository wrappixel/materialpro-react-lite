import React, { useState } from 'react';
import { Card, CardBody, Tooltip, Row, Col } from 'reactstrap';

import img1 from '../../../assets/images/big/img1.jpg';
import img2 from '../../../assets/images/big/img2.jpg';
import img3 from '../../../assets/images/big/img3.jpg';

const TechCards = () => {

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [tooltipOpen2, setTooltipOpen2] = useState(false);
    const [tooltipOpen3, setTooltipOpen3] = useState(false);
    const [tooltipOpen4, setTooltipOpen4] = useState(false);
    const [tooltipOpen5, setTooltipOpen5] = useState(false);
    const [tooltipOpen6, setTooltipOpen6] = useState(false);

    const toggle = () => {
        setTooltipOpen(!tooltipOpen);
    }

    const toggle2 = () => {
        setTooltipOpen2(!tooltipOpen2);
    }

    const toggle3 = () => {
        setTooltipOpen3(!tooltipOpen3);
    }

    const toggle4 = () => {
        setTooltipOpen4(!tooltipOpen4);
    }

    const toggle5 = () => {
        setTooltipOpen5(!tooltipOpen5);
    }

    const toggle6 = () => {
        setTooltipOpen6(!tooltipOpen6);
    }

    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-1                                                        */
        /*--------------------------------------------------------------------------------*/
        <Row>
            <Col lg="4">
                <Card className="blog-widget">
                    <CardBody>
                        <div className="blog-image">
                            <img src={img1} alt="img" className="img-fluid" />
                        </div>
                        <h4>France’s national research council has ruled.</h4>
                        <div className="badge badge-rounded badge-success text-white">
                            Nature
              </div>
                        <p className="mt-3 mb-3">
                            Lorem ipsum dolor sit amet, this is a consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut
              </p>
                        <div className="d-flex">
                            <div className="read">
                                <a href="{undefined}" className="link font-medium">
                                    Read More
                  </a>
                            </div>
                            <div className="ml-auto">
                                <a href="{undefined}" className="link mr-2" id="TooltipExample">
                                    <i className="mdi mdi-heart-outline" />
                                </a>
                                <Tooltip
                                    placement="top"
                                    isOpen={tooltipOpen}
                                    target="TooltipExample"
                                    toggle={toggle.bind(null)}
                                >
                                    Like
                  </Tooltip>
                                <a href="{undefined}" className="link" id="TooltipExample2">
                                    <i className="mdi mdi-share-variant" />
                                </a>
                                <Tooltip
                                    placement="top"
                                    isOpen={tooltipOpen2}
                                    target="TooltipExample2"
                                    toggle={toggle2.bind(null)}
                                >
                                    Share
                  </Tooltip>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg="4">
                <Card className="blog-widget">
                    <CardBody>
                        <div className="blog-image">
                            <img src={img3} alt="img" className="img-fluid" />
                        </div>
                        <h4>France’s national research council has ruled.</h4>
                        <div className="badge badge-rounded badge-info text-white">
                            Blog Post
              </div>
                        <p className="mt-3 mb-3">
                            Lorem ipsum dolor sit amet, this is a consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut
              </p>
                        <div className="d-flex">
                            <div className="read">
                                <a href="/" className="link font-medium">
                                    Read More
                  </a>
                            </div>
                            <div className="ml-auto">
                                <a href="/" className="link mr-2" id="TooltipExample5">
                                    <i className="mdi mdi-heart-outline" />
                                </a>
                                <Tooltip
                                    placement="top"
                                    isOpen={tooltipOpen5}
                                    target="TooltipExample5"
                                    toggle={toggle5.bind(null)}
                                >
                                    Like
                  </Tooltip>
                                <a href="/" className="link" id="TooltipExample6">
                                    <i className="mdi mdi-share-variant" />
                                </a>
                                <Tooltip
                                    placement="top"
                                    isOpen={tooltipOpen6}
                                    target="TooltipExample6"
                                    toggle={toggle6.bind(null)}
                                >
                                    Share
                  </Tooltip>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg="4">
                <Card className="blog-widget">
                    <CardBody>
                        <div className="blog-image">
                            <img src={img2} alt="img" className="img-fluid" />
                        </div>
                        <h4>France’s national research council has ruled.</h4>
                        <div className="badge badge-rounded badge-danger text-white">
                            Science
              </div>
                        <p className="mt-3 mb-3">
                            Lorem ipsum dolor sit amet, this is a consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut
              </p>
                        <div className="d-flex">
                            <div className="read">
                                <a href="/" className="link font-medium">
                                    Read More
                  </a>
                            </div>
                            <div className="ml-auto">
                                <a href="/" className="link mr-2" id="TooltipExample3">
                                    <i className="mdi mdi-heart-outline" />
                                </a>
                                <Tooltip
                                    placement="top"
                                    isOpen={tooltipOpen3}
                                    target="TooltipExample3"
                                    toggle={toggle3.bind(null)}
                                >
                                    Like
                  </Tooltip>
                                <a href="/" className="link" id="TooltipExample4">
                                    <i className="mdi mdi-share-variant" />
                                </a>
                                <Tooltip
                                    placement="top"
                                    isOpen={tooltipOpen4}
                                    target="TooltipExample4"
                                    toggle={toggle4.bind(null)}
                                >
                                    Share
                  </Tooltip>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default TechCards;
