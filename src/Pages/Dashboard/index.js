import React from "react";
import UsePanel from "./UserPanel";
import OrderStatus from "./OrderStatus";
import Notifications from "./Notifications";
import SocialSource from "./SocialSource";
import OverView from "./OverView";
import RevenueByLocation from "./RevenueByLocation";
import LatestTransation from "./LatestTransation";
import DashedLine from "../AllCharts/apex/dashedLine";
import { Sparklines, SparklinesLine } from "react-sparklines";


import {
  Row, Container, Card,
  CardBody,
  CardTitle,
  Col,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Dashboard = () => {
  document.title = "Dashboard | Lilani - Admin & Dashboard";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Lilani" breadcrumbItem="Dashboard" />
          {/* User Panel Charts */}
          <UsePanel />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4"> Customers Rating</CardTitle>
                  <DashedLine />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            {/* Overview Chart */}
            <OverView />

            {/* Social Source Chart */}
            <SocialSource />
          </Row>

          <Row>
         {/* Order Stats */}
         <OrderStatus />

            <Col xl={8}>
              <Card>
                <CardBody>
                  <CardTitle>Contracts</CardTitle>
                  <p className="card-title-desc">
                    Example of line sparkline chart.
                  </p>
                  <div id="sparkline1">
                    <Sparklines data={[46, 38, 43, 35, 44, 45, 52, 40]}>
                      <SparklinesLine
                        color="#3d8ef8"
                        fill="'rgba(61, 142, 248, 0.3)"
                        lineWidth="1"
                      />
                    </Sparklines>
                  </div>
                </CardBody>
              </Card>
            </Col>


            {/* Order Stats */}
            {/* <OrderStatus /> */}
                   {/* Notifications */}
                   {/* <Notifications /> */}
            {/* Notifications */}
            {/* <Notifications /> */}
            {/* Revenue by Location Vector Map */}
            {/* <RevenueByLocation /> */}
          </Row>

          {/* Latest Transaction Table */}
          <LatestTransation />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
