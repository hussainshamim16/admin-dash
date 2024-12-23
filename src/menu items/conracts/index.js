import React, { useState } from "react";

import { Card, CardBody, Col, Container, Row, Button } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Contracts = () => {
  const Add = () => {
    alert("Development will continue.")
  }

  return (

    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Tables" breadcrumbItem="Contracts" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Contracts</h4>
                  <p className="card-title-desc">
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/>
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </p>

                  <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Contracter Name</th>
                          <th>Contracter Number</th>
                          <th>Contract price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>

  )
}

export default Contracts;