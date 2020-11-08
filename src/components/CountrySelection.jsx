import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Countries from '../countries';

/**
 * If the user has a country preference in session storage, we don't need to
 * present the user to select a country. We render a button to _clear_ their selection.
 */
const CountryButton = ({}) => {
  // Get the country code. e.g., "BG" for "Bulgaria"
  const [country] = useState(sessionStorage.getItem('country_pref'));

  // Default to Great Britain
  const countryName = Countries.fromAlpha2Code(country || 'GB').name;
  const countryEmoji = Countries.fromAlpha2Code(country || 'GB').emoji;

  return (
    <div className="change-country">
      {countryName && countryEmoji ? (
        <>
          <span className="current selected-item">
            {countryName} {countryEmoji}
          </span>{' '}
        </>
      ) : null}

      <Button href="/select-your-country" className="link text-white">
        {countryName ? 'Change' : 'Filter site for your'} country
      </Button>
    </div>
  );
};

export default CountryButton;
