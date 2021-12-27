import React from 'react';

const SearchItem = props => {
  const { item } = props;
  return (
    <li>
      <p>{item.kind}</p>
    </li>
  );
};

export default SearchItem;
