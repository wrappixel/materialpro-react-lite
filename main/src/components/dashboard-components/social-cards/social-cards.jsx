import React from 'react';
import { Card, CardBody, Tooltip, Row, Col } from 'reactstrap';

import img1 from 'assets/images/big/img1.jpg';
import img2 from 'assets/images/big/img2.jpg';
import img3 from 'assets/images/big/img3.jpg';

class TechCards extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
    this.toggle5 = this.toggle5.bind(this);
    this.toggle6 = this.toggle6.bind(this);
    this.state = {
      tooltipOpen: false,
      tooltipOpen2: false,
      tooltipOpen3: false,
      tooltipOpen4: false,
      tooltipOpen5: false,
      tooltipOpen6: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  toggle2() {
    this.setState({
      tooltipOpen2: !this.state.tooltipOpen2
    });
  }

  toggle3() {
    this.setState({
      tooltipOpen3: !this.state.tooltipOpen3
    });
  }

  toggle4() {
    this.setState({
      tooltipOpen4: !this.state.tooltipOpen4
    });
  }

  toggle5() {
    this.setState({
      tooltipOpen5: !this.state.tooltipOpen5
    });
  }

  toggle6() {
    this.setState({
      tooltipOpen6: !this.state.tooltipOpen6
    });
  }

  render() {
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
                  <a href="" className="link font-medium">
                    Read More
                  </a>
                </div>
                <div className="ml-auto">
                  <a href="" className="link mr-2" id="TooltipExample">
                    <i className="mdi mdi-heart-outline" />
                  </a>
                  <Tooltip
                    placement="top"
                    isOpen={this.state.tooltipOpen}
                    target="TooltipExample"
                    toggle={this.toggle}
                  >
                    Like
                  </Tooltip>
                  <a href="" className="link" id="TooltipExample2">
                    <i className="mdi mdi-share-variant" />
                  </a>
                  <Tooltip
                    placement="top"
                    isOpen={this.state.tooltipOpen2}
                    target="TooltipExample2"
                    toggle={this.toggle2}
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
                  <a href="" className="link font-medium">
                    Read More
                  </a>
                </div>
                <div className="ml-auto">
                  <a href="" className="link mr-2" id="TooltipExample5">
                    <i className="mdi mdi-heart-outline" />
                  </a>
                  <Tooltip
                    placement="top"
                    isOpen={this.state.tooltipOpen5}
                    target="TooltipExample5"
                    toggle={this.toggle5}
                  >
                    Like
                  </Tooltip>
                  <a href="" className="link" id="TooltipExample6">
                    <i className="mdi mdi-share-variant" />
                  </a>
                  <Tooltip
                    placement="top"
                    isOpen={this.state.tooltipOpen6}
                    target="TooltipExample6"
                    toggle={this.toggle6}
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
                  <a href="" className="link font-medium">
                    Read More
                  </a>
                </div>
                <div className="ml-auto">
                  <a href="" className="link mr-2" id="TooltipExample3">
                    <i className="mdi mdi-heart-outline" />
                  </a>
                  <Tooltip
                    placement="top"
                    isOpen={this.state.tooltipOpen3}
                    target="TooltipExample3"
                    toggle={this.toggle3}
                  >
                    Like
                  </Tooltip>
                  <a href="" className="link" id="TooltipExample4">
                    <i className="mdi mdi-share-variant" />
                  </a>
                  <Tooltip
                    placement="top"
                    isOpen={this.state.tooltipOpen4}
                    target="TooltipExample4"
                    toggle={this.toggle4}
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
}

export default TechCards;
