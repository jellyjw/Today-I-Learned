import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const nameInput = useRef();

  const { name, nickname } = inputs; // 객체만 복사됨

  const onChange = (e) => {
    const { name, value } = e.target; // inputd에서 name, value 추출
    setInputs({
      ...inputs, // 오브젝트이므로 spread문법으로 객체를 펼쳐서 복사함
      [name]: value, // name 키의 값을 value로 설정
    });
    /**
     * 리액트에서 객체를 수정할때는
     * inputs[name] = value; 이런식으로 하면 안됨
     * 불변성을 지켜야 하기때문. 이를 지켜야 onChange를 감지할 수 있고 리랜더링까지 이어짐
     * 또한 불변성을 지키면 컴포넌트 성능 최적화에도 유리함
     */
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
