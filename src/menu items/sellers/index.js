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

import { Card, CardBody, CardTitle, Col, Row, Container } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const Sallers = () => {
    document.title = "Sellers | Lialani - Admin & Dashboard";
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
                    </Container>
                </div>
        </React.Fragment>
    );
}

export default Sallers;
