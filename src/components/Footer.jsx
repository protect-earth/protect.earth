import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
// import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import {
  useMenuState,
  Menu,
  MenuItem,
  MenuButton,
  MenuSeparator,
} from "reakit/Menu";

import { useCountry } from '../context/country-context';
import Countries from '../countries';

/**
 * When a language is selected, we store
 * a cookie that persists that language. This
 * enables users to have some continuity when
 * refreshing, or returning to the site.
 */
const setCookie = (language) => {
  console.log('Setting language...')

  // TODO: expiry and other metadata for the cookie...
  // TODO: should overwrite if another language was selected...
  document.cookie=`lang_pref=${language}`;
}

const Footer = () => {
  const { country } = useCountry();
  const menu = useMenuState();
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

            {/* If the language cookie's been set, we don't need to
            present the user to select a language. We need to present them
            a button to _clear_ their selection. */}
            <MenuButton {...menu}>Choose your language</MenuButton>
            <Menu {...menu} aria-label="Preferences">
              <MenuItem {...menu} onClick={() => {
                setCookie('english');
                menu.hide();
              }}>English</MenuItem>
              <MenuItem {...menu} onClick={() => {
                setCookie('spanish');
                menu.hide();
                }}>Español</MenuItem>
              <MenuItem {...menu} onClick={() => {
                setCookie('french');
                menu.hide();
                }}>Français</MenuItem>
            </Menu>

            <div className="change-country">
              {country.name ? (
                <>
                  <span className="current">
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
