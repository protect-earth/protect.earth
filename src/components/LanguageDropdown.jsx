import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

/**
 * If the user has a language preference in session storage, we don't need to
 * present the user to select a language. We render a button to _clear_ their selection.
 */
const LanguageDropdown = ({ }) => {
  const [language, setLanguage] = useState(sessionStorage.getItem('lang_pref'))

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
  };

  return (
    <Dropdown className="change-language">
      {language ?
        <div className="selected-item selected-language-block">
          <span>Language: {language}</span>
          <span> </span>
          <Button
            aria-label="Clear selection"
            className="clear-button"
            onClick={() => {
              setLanguage(null);
              sessionStorage.removeItem('lang_pref')
            }} variant="link"> Reset ⓧ</Button>
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
  );
};

export default LanguageDropdown;