import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, Row, ModalHeader } from 'reactstrap';
import Breadcrumbs from "../../components/Common/Breadcrumb";

import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';
import List from 'list.js';
// Import Flatepicker
import Flatpickr from "react-flatpickr";

// Import Images

import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";

const Users = () => {
  const Add = () => {
    alert("Development will continue.")
  }

  return (

    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Tables" breadcrumbItem="Users" />
          <div className="user">
            <Row>
              <Col xl={12}>
                <Card>
                  <CardHeader>
                    <h4 className="card-title mb-0">The Data Of Users </h4>
                  </CardHeader>
                  <CardBody>
                    <p className="text-muted">Use data attributes and other custom attributes as keys</p>
                    <div id="users">
                      <Row className="mb-2">
                        <Col>
                          <div>
                            <input className="search form-control" placeholder="Search" />
                          </div>
                        </Col>
                        <Col className="col-auto">
                          <button className="btn btn-light sort" data-sort="name">
                            Sort by name
                          </button>
                        </Col>
                      </Row>

                      <SimpleBar style={{ height: "242px" }} className="mx-n3">
                        <ListGroup className="list mb-0" flush>
                          <ListGroupItem data-id="1">
                            <div className="d-flex">
                              <div className="flex-grow-1">
                                <h5 className="fs-14 mb-1"><Link to="#" className="link name text-dark">Jonny Stromberg</Link></h5>
                                <p className="born timestamp text-muted mb-0" data-timestamp="12345">1986</p>
                              </div>
                              <div className="flex-shrink-0">
                                <div>
                                  <img className="avatar-xs rounded-circle" alt="" src={avatar1} />
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>

                          <ListGroupItem data-id="2">
                            <div className="d-flex">
                              <div className="flex-grow-1">
                                <h5 className="fs-14 mb-1"><Link to="#" className="link name text-dark">Jonas Arnklint</Link></h5>
                                <p className="born timestamp text-muted mb-0" data-timestamp="23456">1985</p>
                              </div>
                              <div className="flex-shrink-0">
                                <div>
                                  <img className="avatar-xs rounded-circle" alt="" src={avatar2} />
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>

                          <ListGroupItem data-id="3">
                            <div className="d-flex">
                              <div className="flex-grow-1">
                                <h5 className="fs-14 mb-1"><Link to="#" className="link name text-dark">Martina Elm</Link></h5>
                                <p className="born timestamp text-muted mb-0" data-timestamp="34567">1986</p>
                              </div>
                              <div className="flex-shrink-0">
                                <div>
                                  <img className="avatar-xs rounded-circle" alt="" src={avatar3} />
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>

                          <ListGroupItem data-id="4">
                            <div className="d-flex">
                              <div className="flex-grow-1">
                                <h5 className="fs-14 mb-1"><Link to="#" className="link name text-dark">Gustaf Lindqvist</Link></h5>
                                <p className="born timestamp text-muted mb-0" data-timestamp="45678">1983</p>
                              </div>
                              <div className="flex-shrink-0">
                                <div>
                                  <img className="avatar-xs rounded-circle" alt="" src={avatar4} />
                                </div>
                              </div>
                            </div>
                          </ListGroupItem>

                        </ListGroup>
                      </SimpleBar>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Captions</h4>
                  <p className="card-title-desc">
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/>
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </p>

                  <div className="table-responsive">
                    <table className="table mb-0">
                      <caption>List of users</caption>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
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

export default Users;