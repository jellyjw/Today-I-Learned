## Query Params
만약 정렬, 필터, 검색 등 쿼리스트링에 여러가지 값이 동적으로 들어가야 할 경우,

```js
function objectToQueryString(obj: queryParamsType) {
    const queryParams = [];

    for (const key in obj) {
      const value = obj[key];
      if (value !== undefined) {
        queryParams.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
      }
    }

    return queryParams.join('&');
  }

const getBookListsUrl = useMemo(() => {
    const category = bookIdToCategoryName(bookCategoryId);

    const queryParams: { filterValue?: string; sortKey?: string; searchValue?: string } = {};

    bookFilteredGradeId === 'all'
      ? (queryParams.filterValue = undefined)
      : (queryParams.filterValue = bookFilteredGradeId);
    bookSortedId === undefined ? (queryParams.sortKey = undefined) : (queryParams.sortKey = bookSortedId);
    searchValue === '' ? (queryParams.searchValue = undefined) : (queryParams.searchValue = searchValue);

    let base_url = `/origin_books/categories`;
    if (category === 'custom') {
      base_url = `/customers/${userInfo.center_id}/books?`;
    } else {
      base_url += `/${category}?`;
    }
    return base_url + objectToQueryString(queryParams);
  }, [bookCategoryId, bookSortedId, bookFilteredGradeId, searchValue]);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: `getBookLists` });
  }, []);
```

objectToQueryString 함수를 따로 만들어서, object 값을 쿼리스트링으로 변환시킬 수 있다.
원래는 각각 base_url을 변경시켜줘야 하는지 고민했지만 이 방법을 통해서 간편하게 api 요청에 성공했다.
