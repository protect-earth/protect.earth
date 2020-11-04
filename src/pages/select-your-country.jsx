import React, { useState } from 'react';
import { graphql, navigate } from 'gatsby';

import { Layout } from '../components';
import { useCountry } from '../context/country-context';
import Countries from '../countries';

//   return (
//     <Dropdown className="change-language">
//       {language ?
//         <div className="selected-item selected-language-block">
//           <span>Language: {language}</span>
//           <span> </span>
//           <Button
//             aria-label="Clear selection"
//             className="clear-button"
//             onClick={() => {
//               setCountry(null);
//               sessionStorage.removeItem('country_pref')
//             }} variant="link"> Reset ⓧ</Button>
//         </div> :
//         (<Dropdown.Toggle id="dropdown-language">
//           Select language
//         </Dropdown.Toggle>)}

//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => {
//           updateCountry('EN');
//         }}>
//           English
//             </Dropdown.Item>
//         <Dropdown.Item onClick={() => {
//           updateCountry('ES');
//         }}>
//           Español
//             </Dropdown.Item>
//         <Dropdown.Item onClick={() => {
//           updateCountry('FR');
//         }}>
//           Français
//             </Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// };

// export default LanguageDropdown;

/**
 * If the user has a country preference in session storage, we don't need to
 * present the user to select a country. We update the button to _clear_ their selection.
 */
export default () => {
  // const { country, setCountry, clearCountry } = useCountry();
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
                  // setCountry(country.code);
                  // debugger;
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
