import React from 'react';

import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
  CardText,
  CardLink,
  Row,
  Col,
} from 'reactstrap';

import Page from 'components/Page';

import bg6 from 'assets/img/bg/hackimg6.png';
import bg7 from 'assets/img/bg/hackimg7.png';
import bg8 from 'assets/img/bg/hackimg8.jpeg';
import bg9 from 'assets/img/bg/hackimg9.jpg';

const Upcoming = () => {
  return (
    <Page title="Upcoming Challenges">    
      <Row>
      <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top style={{ width: 380, height: 200 }} src={bg6} />
            <CardBody>
              <CardTitle>Hack Away!</CardTitle>
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

        <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top style={{ width: 380, height: 200 }} src={bg7} />
            <CardBody>
              <CardTitle>ASU Startup Challenge</CardTitle>
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

        <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top style={{ width: 380, height: 200 }} src={bg8} />
            <CardBody>
              <CardTitle>Summer Meetup</CardTitle>
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
      <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top style={{ width: 380, height: 200 }} src={bg9} />
            <CardBody>
              <CardTitle>Capture The Flag</CardTitle>
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

      </Row>
    </Page>
  );
};

export default Upcoming;
