import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

function useSearch(searchParamsKey) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => searchParams.get(searchParamsKey) || '');

  const onKeywordChangeHandler = (event) => {
    setKeyword(event.target.value);
    setSearchParams({ keyword: event.target.value });
  };

  return [keyword, onKeywordChangeHandler];
}

export default useSearch;
