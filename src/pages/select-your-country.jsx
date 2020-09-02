import React from 'react';
import { graphql, navigate } from 'gatsby';

import { Layout } from '../components';
import { useCountry } from '../context/country-context';
import Countries from '../countries';

export default () => {
  const { country, setCountry, clearCountry } = useCountry();
  const countries = Countries.getAll();

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
          {country.name !== null ? (
            <div className="country-list-item selected" key={country.code}>
              <small>Currently selected</small>
              <div>
                {country.flag} {country.name}
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  clearCountry();
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
                  setCountry(country);
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
