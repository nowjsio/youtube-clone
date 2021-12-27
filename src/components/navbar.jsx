import React from 'react';

const Navbar = props => {
  const { inputRef, formRef, clickSearch } = props;
  return (
    <nav className="youtube-nav">
      <form ref={formRef} action="" className="search-form">
        <input ref={inputRef} type="text" className="youtube-search-text" />
        <input
          type="button"
          value="click"
          className="youtube-search-button"
          onClick={event => clickSearch(event)}
        />
      </form>
    </nav>
  );
};

export default Navbar;
