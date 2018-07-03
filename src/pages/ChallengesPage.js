import React from 'react';

import { getColor } from 'utils/colors';

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardImg,
  CardText,
  CardGroup,
  CardDeck,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Badge,
  Button,
} from 'reactstrap';

import {
  MdInsertChart,
  MdBubbleChart,
  MdPieChart,
  MdShowChart,
  MdAccessAlarm,
  MdPersonPin,
  MdRateReview,
  MdThumbUp,
  MdEditLocation,
  MdShare,
  MdPeople,
} from 'react-icons/lib/md';

import InfiniteCalendar from 'react-infinite-calendar';

import { Line, Bar } from 'react-chartjs-2';

import {
  supportTicketsData,
  productsData,
  userProgressTableData,
  avatarsData,
  todosData,
  chartjs,
} from 'demos/dashboardPage';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';

import Page from 'components/Page';

import SupportTicket from 'components/SupportTicket';
import ProductMedia from 'components/ProductMedia';
import UserProgressTable from 'components/UserProgressTable';

import { AnnouncementCard, TodosCard } from 'components/Card';

import { NumberWidget, IconWidget } from 'components/Widget';

import MapWithBubbles from 'components/MapWithBubbles';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import bg11Image from 'assets/img/bg/hack1.jpeg';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);

class ChallengesPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="ChallengesPage"
        title="Hack Day!">
        {/* <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Total Profit"
              subtitle="This month"
              number="9.8k"
              color="secondary"
              progress={{
                value: 75,
                label: 'Last month',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Monthly Visitors"
              subtitle="This month"
              number="5,400"
              color="secondary"
              progress={{
                value: 45,
                label: 'Last month',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="New Users"
              subtitle="This month"
              number="3,400"
              color="secondary"
              progress={{
                value: 90,
                label: 'Last month',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Bounce Rate"
              subtitle="This month"
              number="38%"
              color="secondary"
              progress={{
                value: 60,
                label: 'Last month',
              }}
            />
          </Col>
        </Row> */}

        {/* <Row>
          <Col lg="8" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Total Revenue{' '}
                <small className="text-muted text-capitalize">This year</small>
              </CardHeader>
              <CardBody>
                <Line data={chartjs.line.data} options={chartjs.line.options} />
              </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Total Expense</CardHeader>
              <CardBody>
                <Bar data={chartjs.bar.data} options={chartjs.bar.options} />
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>
                  <MdInsertChart size={25} color={primaryColor} /> Cost of sales{' '}
                  <Badge color="secondary">$3000</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdBubbleChart size={25} color={primaryColor} /> Management
                  costs <Badge color="secondary">$1200</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdShowChart size={25} color={primaryColor} /> Financial costs{' '}
                  <Badge color="secondary">$800</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdPieChart size={25} color={primaryColor} /> Other operating
                  costs <Badge color="secondary">$2400</Badge>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row> */}

        
        <Row>
        <Col md="12" sm="8" xs="8">
          <Card className="flex-row">
          <CardBody>
              <CardTitle>Get the most out of Local Hack Day!</CardTitle>
              <CardText>
              It's finally here! December 2nd, 2017 marks the 4th annual MLH Local Hack Day - a worldwide celebration of learning, building, and sharing. Over 275 communities around the world are hosting simultaneous 12 hour hackathons where developers, designers, and makers will join forces to bring their crazy ideas to life. 
              </CardText>
              <CardText>
              This page has everything you need to know to get the most out of Local Hack Day 2017. With the help of our wonderful sponsors, we curated lots of great resources and activities to make the day unforgettable for participants everywhere. Make sure you read this page thoroughly, and let us know if you have any questions.
              </CardText>
              <CardText>
                  Happy Hacking!
              </CardText>
            </CardBody>
            <CardImg
              className="card-img-right"
              src={bg11Image}
              style={{ width: 'auto', height: 300 }}
            />
          </Card>
        </Col>
        </Row>
        <Row>
        <Col md="12" sm="8" xs="8">
            <CardGroup style={{ marginBottom: '1rem' }}>
                <IconWidget
                bgColor="white"
                inverse={false}
                icon={MdAccessAlarm}
                title="20 July - 23 July"
                subtitle="50 hours "
                />
                <IconWidget
                bgColor="white"
                inverse={false}
                icon={MdPeople}
                title="Teams of 3"
                />
                <IconWidget
                bgColor="white"
                inverse={false}
                icon={MdEditLocation}
                title="Chennai"
                subtitle="Room 101, Olympia Tech Park"
                />
            </CardGroup>
            </Col>
        </Row>
        <Row>
        <Col md="6" sm="8" xs="8">
        <CardDeck style={{ marginBottom: '1rem' }}>
          <Card body style={{ overflowX: 'auto' }}>
            <HorizontalAvatarList
              avatars={avatarsData}
              avatarProps={{ size: 60 }}
            />
          </Card> 
          </CardDeck>
          </Col>
          <Col md="6" sm="8" xs="8">
            <NumberWidget
              title="Number of developers registered"
              number="354"
              color="secondary"
              progress={{
                value: 65,
                label: 'Last month',
              }}
            />
          </Col>
        </Row>
        <Row>
        <Col md="12" sm="8" xs="8">
          <Card className="flex-row">
            <CardBody>
              <CardTitle>Get the most out of Local Hack Day!</CardTitle>
              <CardText>
              It's finally here! December 2nd, 2017 marks the 4th annual MLH Local Hack Day - a worldwide celebration of learning, building, and sharing. Over 275 communities around the world are hosting simultaneous 12 hour hackathons where developers, designers, and makers will join forces to bring their crazy ideas to life. 
              </CardText>
              <CardText>
              This page has everything you need to know to get the most out of Local Hack Day 2017. With the help of our wonderful sponsors, we curated lots of great resources and activities to make the day unforgettable for participants everywhere. Make sure you read this page thoroughly, and let us know if you have any questions.
              </CardText>
              <CardText>
                  Happy Hacking!
              </CardText>
            </CardBody>
          </Card>
        </Col>
        </Row>

        

        <Row>
          <Col md="6" sm="12" xs="12">
            <AnnouncementCard
              color="gradient-secondary"
              header="Announcement"
              avatarSize={60}
              name="Jamy"
              date="1 hour ago"
              text="Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy euismod tinciduntut laoreet doloremagna"
              buttonProps={{
                children: 'show',
              }}
              style={{ height: 500 }}
            />
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <span>Discussion Forum</span>
                  <Button>
                    <small>View All</small>
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                {supportTicketsData.map(supportTicket => (
                  <SupportTicket key={supportTicket.id} {...supportTicket} />
                ))}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default ChallengesPage;
