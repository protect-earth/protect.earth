import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import CountrySelection from './CountrySelection';

const Footer = () => {
  return (
    <footer
      className="bg-dark"
      style={{ marginTop: '3rem', paddingTop: '8rem', paddingBottom: '10rem' }}
    >
      <Container>
        <Row noGutters>
          <Col xs={12} md={10} className="text-white">
            <Button
              href="https://airtable.com/shr9iNOeyFAAk8zqN"
              target="_blank"
            >
              Submit more links
            </Button>

            <div className="credits">
              Maintained by{' '}
              <a
                href="https://twitter.com/philsturgeon"
                target="_blank"
                rel="noopener noreferrer"
              >
                @philsturgeon
              </a>{' '}
              <a
                href="https://twitter.com/jungledev"
                target="_blank"
                rel="noopener noreferrer"
              >
                @jungledev
              </a>{' '}
              <a
                href="https://twitter.com/irreverentmike"
                target="_blank"
                rel="noopener noreferrer"
              >
                @irreverentmike
              </a>
            </div>
          </Col>
          <Col xs={12} md={2} lg={2}>
            {/* Enable country selection, preview, and clearing. */}
            <CountrySelection />

            <Row noGutters>
              <a
                href="https://www.netlify.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="Deploys by netlify"
                  src="https://www.netlify.com/img/global/badges/netlify-light.svg"
                />
              </a>
            </Row>

            <Row noGutters>
              <a href="/">&copy; {new Date().getFullYear()} - Protect.Earth</a>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
