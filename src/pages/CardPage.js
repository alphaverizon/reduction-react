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

import bg1 from 'assets/img/bg/hackimg1.png';
import bg2 from 'assets/img/bg/hackimg2.png';
import bg3 from 'assets/img/bg/hackimg3.png';
import bg4 from 'assets/img/bg/hackimg4.png';
import bg5 from 'assets/img/bg/hackimg5.png';
import bg6 from 'assets/img/bg/hackimg6.png';
import bg7 from 'assets/img/bg/hackimg7.png';
import bg8 from 'assets/img/bg/hackimg8.jpg';
import bg9 from 'assets/img/bg/hackimg9.png';

const CardPage = () => {
  return (
    <Page title="Ongoing Challenges">    
      <Row>
      <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg style={{ width: 370, height: 250 }} top src={bg1} />
            <CardBody>
              <CardTitle>IOT Hackathon</CardTitle>
              <CardText>
                This example shows how to use card with list group{' '}
              </CardText>
            </CardBody>
            <CardBody>
              <CardLink tag="a" href="challenges">
                Enroll
              </CardLink>
              <CardLink tag="a" href="challenges">
                More
              </CardLink>
            </CardBody>
          </Card>
        </Col>

        <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg style={{ width: 380, height: 250 }} top src={bg5} />
            <CardBody>
              <CardTitle>Reactathon</CardTitle>
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

        <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg style={{ width: 380, height: 250 }} top src={bg3} />
            <CardBody>
              <CardTitle>A.S. Watson Hackathon</CardTitle>
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
            <CardImg top style={{ width: 370, height: 250 }} src={bg4} />
            <CardBody>
              <CardTitle>Girl Hackathon</CardTitle>
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
            <CardImg top style={{ width: 380, height: 250 }} src={bg2} />
            <CardBody>
              <CardTitle>Codeathon</CardTitle>
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

        <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top style={{ width: 380, height: 250 }} src={bg6} />
            <CardBody>
              <CardTitle>The 36 Hour Challenge</CardTitle>
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
            <CardImg top style={{ width: 380, height: 250 }} src={bg7} />
            <CardBody>
              <CardTitle>Speedathon</CardTitle>
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
            <CardImg top style={{ width: 370, height: 250 }} src={bg8} />
            <CardBody>
              <CardTitle>Live Chat Hackathon</CardTitle>
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

        <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top style={{ width: 380, height: 250 }} src={bg9} />
            <CardBody>
              <CardTitle>Save The Hacker</CardTitle>
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
