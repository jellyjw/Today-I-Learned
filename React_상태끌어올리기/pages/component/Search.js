import { useState } from "react";

function Search({ onSearch }) {
  const [textDestination, setTextDestination] = useState("");

  const handleChange = (e) => {
    setTextDestination(e.target.value.toUpperCase());
  };

  const handleKeyPress = (e, departure, destination) => {
    if (e.type === "keypress" && e.code === "Enter") {
      handleSearchClick(departure, destination);
    }
  };

  const handleSearchClick = (departure, destination) => {
    console.log("검색 버튼을 누르거나, 엔터를 치면 search 함수가 실행됩니다");
    onSearch({ departure, destination });
    // TODO: 지시에 따라 상위 컴포넌트에서 props를 받아서 실행시켜 보세요.
  };

  return (
    <fieldset>
      <legend>공항 코드를 입력하고, 검색하세요</legend>
      <span>출발지</span>
      <input id="input-departure" type="text" disabled value="ICN"></input>
      <span>도착지</span>
      <input
        id="input-destination"
        type="text"
        value={textDestination}
        onChange={handleChange}
        placeholder="CJU, BKK, PUS 중 하나를 입력하세요"
        onKeyPress={() => handleKeyPress("ICN", textDestination)}
      />
      <button
        id="search-btn"
        onClick={() => handleSearchClick("ICN", textDestination)}
      >
        검색
      </button>
    </fieldset>
  );
}

export default Search;
