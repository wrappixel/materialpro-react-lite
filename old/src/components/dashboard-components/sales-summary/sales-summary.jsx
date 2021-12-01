import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
    Row
} from 'reactstrap';
import { Bar } from 'react-chartjs-2';

// random values for demo
let rFactor = function () {
    return Math.round(Math.random() * 100);
};

//Bar chart
let barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Iphone',
        backgroundColor: '#1e88e5',
        borderColor: '#1e88e5',
        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
    },
    {
        label: 'Ipad',
        backgroundColor: '#7460ee',
        borderColor: '#7460ee',
        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
    }]
};

const SalesSummary = () => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Sales Summary</CardTitle>
                        <CardSubtitle>summary of the month</CardSubtitle>
                    </div>
                    <div className="ml-auto d-flex align-items-center">
                        <ul className="list-inline font-12 dl mr-3 mb-0">
                            <li className="border-0 p-0 text-info list-inline-item">
                                <i className="fa fa-circle"></i> Iphone
								</li>
                            <li className="border-0 p-0 text-primary list-inline-item">
                                <i className="fa fa-circle"></i> Ipad
								</li>
                        </ul>
                    </div>
                </div>
                <Row>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
                                <Bar data={barData} options={{ maintainAspectRatio: false, legend: { display: true, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" }, barThickness: 15 }] } }} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default SalesSummary;
