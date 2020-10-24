import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';

import { useCountry } from '../context/country-context';
import Countries from '../countries';

const Footer = () => {

  const [language, setLanguage]  = useState(sessionStorage.getItem('lang_pref'))
  const { country } = useCountry();

  /**
   * When a language is selected, we store
   * temporary value in session storage that persists through
   * reloads. This enables users to have some continuity when
   * refreshing, or returning to the site. We also bind the
   * update to React's state, so that when a user re-selects
   * an option, we trigger a state change to refresh the site.
   *
   * We use the ISO 639-1 language codes to map to specified languages, e.g.
   * "EN" maps to "English".
   */
  const updateLanguage = (language) => {
    setLanguage(language);
    sessionStorage.setItem('lang_pref', language);
  }

  return (
    <footer
      className="bg-dark"
      style={{ marginTop: '3rem', paddingTop: '8rem', paddingBottom: '10rem' }}
    >
      <Container>
        <Row noGutters>
          <Col xs={12} md={10} className="text-white">
            <a href="/">&copy; {new Date().getFullYear()} - Protect.Earth</a>

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
            {/*
              If the user has a language preference in session storage, we don't need to
              present the user to select a language. We render a button to _clear_ their selection.
            */}
            <Dropdown className="change-language">
              {language ?
                <div>
                  <span className="selected-item">Language: {language}</span>
                  <Button onClick={() => {
                    setLanguage(null);
                    sessionStorage.removeItem('lang_pref')
                  }}variant="link">Reset language</Button>
                </div> :
                (<Dropdown.Toggle id="dropdown-language">
                  Select language
                </Dropdown.Toggle>)}

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => {
                    updateLanguage('EN');
                  }}>
                    English
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => {
                    updateLanguage('ES');
                  }}>
                    Español
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => {
                    updateLanguage('FR');
                  }}>
                    Français
                  </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div className="change-country">
              {country.name ? (
                <>
                  <span className="current selected-item">
                    {Countries.fromAlpha2Code(country.code).emoji}{' '}
                    {country.name}
                  </span>{' '}
                </>
              ) : null}
              <Button href="/select-your-country" className="link text-white">
                {country.name ? 'Change' : 'Filter site for your'} country
              </Button>
            </div>
          </Col>
        </Row>
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
      </Container>
    </footer>
  );
};

export default Footer;
