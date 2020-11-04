import React, { useState } from 'react';
import { graphql, navigate } from 'gatsby';

import { Layout } from '../components';
import { useCountry } from '../context/country-context';
import Countries from '../countries';

/**
 * If the user has a country preference in session storage, we don't need to
 * present the user to select a country. We update the button to _clear_ their selection.
 */
export default () => {
  const { clearCountry } = useCountry();
  const countries = Countries.getAll();

  const [country, setCountry] = useState(sessionStorage.getItem('country_pref'))

  /**
   * When a country is selected, we store
   * temporary value in session storage that persists through
   * reloads. This enables users to have some continuity when
   * refreshing, or returning to the site. We also bind the
   * update to React's state, so that when a user re-selects
   * an option, we trigger a state change to refresh the site.
   */
  const updateCountry = (country) => {
    setCountry(country);
    sessionStorage.setItem('country_pref', country);
  };

  return (
    <Layout title="Select Your Country">
      <div className="select-your-country padding">
        <div className="header">
          <h1>Select Your Country</h1>
          <input
            type="text"
            placeholder="Filter Countries"
            onChange={(e) => setCountry(e.target.value.toLowerCase())}
          />
        </div>
        <div>
          {country && country.name ? (
            <div className="country-list-item selected" key={country.code}>
              <small>Currently selected</small>
              <div>
                {country.flag} {country.name}
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  // Store an empty string in session storage
                  updateCountry('');
                  navigate('/');
                }}
              >
                Remove
              </button>
            </div>
          ) : null}

          {Object.values(countries).map((country) => {
            const flag = country.emoji;
            const name = country.name;
            const code = country.code;

            return (
              <div
                className="country-list-item"
                key={code}

                onClick={() => {
                  updateCountry(country.code);
                  navigate('/');
                }}
              >
                {flag} {name} &rarr;
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allLinksYaml {
      nodes {
        countries
      }
    }
  }
`;
