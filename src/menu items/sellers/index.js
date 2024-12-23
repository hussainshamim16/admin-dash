import React from "react"

// import apexChart
import LineApexChart from "../../Pages/AllCharts/apex/chartapex"
import DashedLine from "../../Pages/AllCharts/apex/dashedLine"
import SplineArea from "../../Pages/AllCharts/apex/SplineArea"
import Apaexlinecolumn from "../../Pages/AllCharts/apex/apaexlinecolumn"
import ColumnWithDataLabels from "../../Pages/AllCharts/apex/ColumnWithDataLabels"
import BarChart from "../../Pages/AllCharts/apex/barchart"
import LineColumnArea from "../../Pages/AllCharts/apex/LineColumnArea"
import RadialChart from "../../Pages/AllCharts/apex/RadialChart"
import PieChart from "../../Pages/AllCharts/apex/PieChart"
import DonutChart from "../../Pages/AllCharts/apex/dountchart"

import { Card, CardBody, CardTitle, Col, Row, Container, Button } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const Sallers = () => {
    document.title = "Sellers | Lialani - Admin & Dashboard";


    const Add = () => {
        alert("Development will continue.")
    }

    return (
        <React.Fragment>
            <div className="page-content">

                <Container fluid>
                    <Breadcrumbs title="Charts" breadcrumbItem="Sellers" />

                    <Row>

                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <CardTitle className="mb-4"> Sellers Chart</CardTitle>
                                    <DashedLine />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
               
            <div className="">
                
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Sellers classes</h4>
                                    <p className="card-title-desc">
                                        Use Sellers classes to color table rows or individual
                                        cells.
                                    </p>

                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Seller Name</th>
                                                    <th>Seller Number</th>
                                                    <th>Seller Id</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="table-light">
                                                    <th scope="row">1</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>

                                                <tr className="table-success">
                                                    <th scope="row">2</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>

                                                <tr className="table-info">
                                                    <th scope="row">3</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>

                                                <tr className="table-warning">
                                                    <th scope="row">4</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>

                                                <tr className="table-danger">
                                                    <th scope="row">5</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
        
            </div>
            </Container>
            </div>
        </React.Fragment>
    );
}

export default Sallers;
