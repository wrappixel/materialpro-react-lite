import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            About Material Pro React
          </CardTitle>
          <CardBody className="p-4">
            <Row >
              <Col lg="8">
                <h2 className="mt-4">Material React Admin Pro Version</h2>
                <h5 className=" mb-4">
                  5 premium and highly customizable demo variations included in
                  the package, with React Router 6, Redux Toolkit, Axios nd much
                  more...
                </h5>
                <img
                  src="https://demos.wrappixel.com/free-admin-templates/angular/landingpage-styles/assets/images/screenshots/materialpro-react-pro-lp-img.jpg"
                  alt="my"
                />
                <br />
                <Button
                  className="mt-3"
                  color="primary"
                  href="https://wrappixel.com/templates/materialpro-react-admin/?ref=33"
                  target="_blank"
                >
                  Check Pro Version
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
