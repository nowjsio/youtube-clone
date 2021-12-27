import React, { useRef } from 'react';
import './app.css';
import Navbar from './components/navbar';
import SearchItems from './components/searchItems';
import search from './api/search';

const App = () => {
  const inputRef = useRef();
  const formRef = useRef();
  let searchedItems = search('');
  const clickSearch = async event => {
    event.preventDefault();
    searchedItems = await search(inputRef.current.value);
    formRef.current.reset();
  };
  return (
    <>
      <Navbar inputRef={inputRef} formRef={formRef} clickSearch={clickSearch} />
      <SearchItems items={searchedItems} />
    </>
  );
};

export default App;
