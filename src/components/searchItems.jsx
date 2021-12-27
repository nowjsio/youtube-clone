import React from 'react';
import SearchItem from './searchItem';

const SearchItems = props => {
  const { items } = props;
  return items.then(_items => {
    console.log('[!]', _items);
    return (
      <ol>
        {_items.map(item => (
          <SearchItem key={new Date().getTime()} item={item} />
        ))}
      </ol>
    );
  });
};

export default SearchItems;
