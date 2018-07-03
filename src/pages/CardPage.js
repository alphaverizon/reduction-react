import React from 'react';

import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardLink,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
} from 'reactstrap';

import { Line } from 'react-chartjs-2';

import { overlayCards, bgCards, gradientCards } from 'demos/cardPage';

import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';

import Page from 'components/Page';
import { UserCard } from 'components/Card';

import bg1 from 'assets/img/bg/hackimg1.jpeg';
import bg2 from 'assets/img/bg/hackimg2.jpeg';
import bg18Image from 'assets/img/bg/background_1920-18.jpg';
import detailsPage from 'pages/ChallengesPage';

const CardPage = () => {
  return (
    <Page title="Ongoing Challenges">    
      <Row>
      <Col md={3} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top src={bg1} />
            <CardBody>
              <CardTitle>Card with list group</CardTitle>
              <CardText>
                This example shows how to use card with list group{' '}
              </CardText>
            </CardBody>
            <CardBody>
              <CardLink tag="a" href="#" onClick={detailsPage}>
                Enroll
              </CardLink>
              <CardLink tag="a" href="detailsPage">
                More
              </CardLink>
            </CardBody>
          </Card>
        </Col>

        <Col md={3} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top src={bg1} />
            <CardBody>
              <CardTitle>Card with list group</CardTitle>
              <CardText>
                This example shows how to use card with list group{' '}
              </CardText>
            </CardBody>
            {/* <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
            </ListGroup> */}
            <CardBody>
              <CardLink tag="a" href="#">
                Go to details
              </CardLink>
              <CardLink tag="a" href="#">
                More
              </CardLink>
            </CardBody>
          </Card>
        </Col>

        <Col md={3} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top src={bg1} />
            <CardBody>
              <CardTitle>Card with list group</CardTitle>
              <CardText>
                This example shows how to use card with list group{' '}
              </CardText>
            </CardBody>
            {/* <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
            </ListGroup> */}
            <CardBody>
              <CardLink tag="a" href="#">
                Go to details
              </CardLink>
              <CardLink tag="a" href="#">
                More
              </CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
      <Col md={3} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top src={bg1} />
            <CardBody>
              <CardTitle>Card with list group</CardTitle>
              <CardText>
                This example shows how to use card with list group{' '}
              </CardText>
            </CardBody>
            <CardBody>
              <CardLink tag="a" href="#">
                Go to details
              </CardLink>
              <CardLink tag="a" href="#">
                More
              </CardLink>
            </CardBody>
          </Card>
        </Col>

        <Col md={3} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top src={bg1} />
            <CardBody>
              <CardTitle>Card with list group</CardTitle>
              <CardText>
                This example shows how to use card with list group{' '}
              </CardText>
            </CardBody>
            {/* <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
            </ListGroup> */}
            <CardBody>
              <CardLink tag="a" href="#">
                Go to details
              </CardLink>
              <CardLink tag="a" href="#">
                More
              </CardLink>
            </CardBody>
          </Card>
        </Col>

        <Col md={3} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top src={bg1} />
            <CardBody>
              <CardTitle>Card with list group</CardTitle>
              <CardText>
                This example shows how to use card with list group{' '}
              </CardText>
            </CardBody>
            {/* <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
            </ListGroup> */}
            <CardBody>
              <CardLink tag="a" href="#">
                Go to details
              </CardLink>
              <CardLink tag="a" href="#">
                More
              </CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
      <Col md={3} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top src={bg1} />
            <CardBody>
              <CardTitle>Card with list group</CardTitle>
              <CardText>
                This example shows how to use card with list group{' '}
              </CardText>
            </CardBody>
            <CardBody>
              <CardLink tag="a" href="#">
                Go to details
              </CardLink>
              <CardLink tag="a" href="#">
                More
              </CardLink>
            </CardBody>
          </Card>
        </Col>

        <Col md={3} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top src={bg1} />
            <CardBody>
              <CardTitle>Card with list group</CardTitle>
              <CardText>
                This example shows how to use card with list group{' '}
              </CardText>
            </CardBody>
            {/* <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
            </ListGroup> */}
            <CardBody>
              <CardLink tag="a" href="#">
                Go to details
              </CardLink>
              <CardLink tag="a" href="#">
                More
              </CardLink>
            </CardBody>
          </Card>
        </Col>

        <Col md={3} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top src={bg1} />
            <CardBody>
              <CardTitle>Card with list group</CardTitle>
              <CardText>
                This example shows how to use card with list group{' '}
              </CardText>
            </CardBody>
            {/* <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
            </ListGroup> */}
            <CardBody>
              <CardLink tag="a" href="#">
                Go to details
              </CardLink>
              <CardLink tag="a" href="#">
                More
              </CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default CardPage;
