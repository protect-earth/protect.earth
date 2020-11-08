import React from 'react';
import { Layout } from '../components';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

const AboutPage = () => (
  <Layout title="About">
    <Jumbotron
      style={{
        marginTop: '1rem',
        minHeight: '45vh',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundImage:
          'url(https://source.unsplash.com/featured/1600x400?nature)',
      }}
    />
    <Container>
      <Row>
        <Col>
          <h1>About</h1>
          <p>
            Protect.Earth came around after{' '}
            <a href="https://philsturgeon.com/">Phil</a> went riding around
            Europe in the summer of 2019, the hottest year and hottest summer on
            record. Phil was{' '}
            <a href="https://offset.earth/articles/climate-emergency/climate-change-by-bike">
              raising money for reforestation
            </a>{' '}
            with <a href="https://ecologi.com/">Ecology</a>, and after the tour
            lead to a lengthy injury he wanted to find other ways to fight the
            climate crisis.
          </p>
          <p>
            Together with contributions from 50+ people, we have gathered
            resources to help everyone find their next piece of climate action.
            The climate crisis can be overwhelming, but if we can get people on
            board with simplifying their lives, reducing their footprint,
            supporting ecosystem restoration, and reducing the insane amounts of
            waste we all cause, our kids might inherit a world worth living in.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default AboutPage;
