import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Countries from '../countries';

/**
 * Renders a button to select a new country, and the currently
 * selected country if one's been set in session storage.
 *
 * If the user has a country preference in session storage, we
 * update the button text to "Change country".
 */
const CountrySelection = ({}) => {
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

export default CountrySelection;
