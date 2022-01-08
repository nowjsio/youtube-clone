import React from 'react';
import styles from './search-header.module.css';

const SearchHeaer = () => {
  //   const { inputRef, formRef, handleSearch } = props;
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}> Youtube </h1>
      </div>
      <input className={styles.input} type="text" placeholder="Search Item.." />
      <button className={styles.button} type="submit">
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
};

export default SearchHeaer;
