import React from 'react';
import { Layout, SuggestionForm } from '../components';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

export default () => (
  <Layout title="Getting Started">
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
          <>
            <h1>Getting Started</h1>

            <p>
              To avoid the worst effects of climate change, we all get our
              individual carbon footprints down to{' '}
              <a href="https://www.tmrow.com/climatechange#objective--2-tons-co2eq-per-human-per-year-by-2050">
                5 tonnes a year by 2030
              </a>
              , then 2 tonnes a year by 2050. Currently most of us in "more
              economically developed countries are much much higher. The United
              Kingdom is roughly 10 tCO2e per person per year, and United States
              is 20 tCO2e per person per year, but the{' '}
              <a href="https://www.independent.co.uk/environment/british-carbon-footprint-africa-emissions-oxfam-climate-change-a9271861.html">
                18 lowest emitting countries were in Africa, including Nigeria,
                Kenya and Zimbabwe
              </a>
              , are under 1 tCO2e per person per year!
            </p>

            <p>
              Reducing personal emissions has a far more noticeable and direct
              impact, and often{' '}
              <a href="https://protect.earth/tags/save">save money</a>. That
              money can then be used to offset whatever footprint is remaining,
              or help cover some of the carbon reductions which require an
              up-front investment to reduce footprints over time (like solar
              panels and buying a bicycle).
            </p>

            <ul>
              <li>
                <a href="/tags/track">track</a> your carbon footprint
              </li>
              <li>
                identify ways to <a href="/tags/reduce">reduce</a> footprint and
                waste
              </li>
              <li>
                <a href="/tags/shift">shift</a> to sustainable alternatives for
                things you currently do
              </li>
              <li>
                <a href="/tags/refuse">refuse</a> pointless trips and waste
              </li>
              <li>
                chose second hand and <a href="/tags/reuse">reuse</a> instead of
                buying new
              </li>
              <li>
                save cash learning to <a href="/tags/repair">repair</a> things
              </li>
              <li>
                <a href="/tags/recycle">recycle</a> as little as possible
              </li>
              <li>
                as a last resort <a href="/tags/offset">offset</a> what you
                cannot avoid any other way
              </li>
              <li>
                <a href="/tags/vote">vote</a> for politicians who will take
                drastic immediate action
              </li>
              <li>
                <a href="/tags/choose">choose</a> the companies we patronize, to
                encourage positive trends
              </li>
              <li>
                <a href="/tags/inspire">inspire</a> others to understand the
                gravity of the problems we're solving
              </li>
            </ul>
          </>
        </Col>
      </Row>
    </Container>
    <Container>
      <SuggestionForm />
    </Container>
  </Layout>
);
