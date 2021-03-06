import React, { memo } from 'react';
import styles from './search-header.module.css';

const SearchHeader = memo(props => {
  const { inputRef, handleSearch } = props;
  console.log('[!] re-render SearchHeader');
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}> Youtube </h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Search Item.."
        onKeyDown={event => {
          if (event.key === 'Enter') handleSearch(event);
        }}
      />
      <button
        className={styles.button}
        type="submit"
        onClick={event => handleSearch(event)}
      >
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
  //   return (
  //     <header className="youtube-nav">
  //       <form ref={formRef} action="" className="search-form">
  //         <input ref={inputRef} type="text" className="youtube-search-text" />
  //         <input
  //           type="button"
  //           value="click"
  //           className="youtube-search-button"
  //           onClick={event => handleSearch(event)}
  //         />
  //       </form>
  //     </header>
  //   );
});

export default SearchHeader;
