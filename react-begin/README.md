# react-begin

## 목차

1. 리액트란?
2. JSX
3. 컴포넌트와 prop
4. state
5. input값 관리하기
6. useRef
7. useEffect
8. useMemo
9. useCallback
10. React.memo
11. useReducer
12. 커스텀 hook
13. lifecycle 메서드

## 리액트란?

> 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리 - [React 가이드](https://ko.reactjs.org/)

공식 문서에 나와있는것처럼, 리액트란 UI를 구축하기 위한 자바스크립트 라이브러리이다.

리액트는 자바스크립트 **라이브러리**라는점에서 기존의 프론트엔드 프레임워크들과의 차별성을 가진다. 라이브러리가 프레임워크와 다른점은 다른 사람이 만들어놓은 구조(폴더 구조가 될수도 있고, 아키텍쳐 구조가 될수도 있다)를 그대로 사용하는것이 아닌 개별의 라이브러리를 사용하기 때문에 자유도 높은 환경에서 뷰를 구현할 수 있으며, 프레임워크에서 선언한 규칙이나 방식에 얽메일 필요 없이 기능을 구현하기 위해 필요한 라이브러리만 선택하여 사용하는것이 가능하기 때문에 vue, angular에 비해서 가볍다는 이점이 있다.

물론 PWA(Progressive Web Application)을 구현하는데 있어 react 하나만으로는 부족하다. 만약 제대로 동작하는 웹 어플리케이션을 만들고자 한다면 SPA 라우팅을 위한 react-dom-router, 컴포넌트간의 데이터 공유를 위한 redux등의 라이브러리를 사용해야만 한다. 만약 이러한 라이브러리들을 한번에 세팅해주려면 Next.js를 사용해주면 된다.

리액트또한 각각의 라이브러리만 놓고보면 가볍게 느껴질지 몰라도, 웹앱 구현에 필요한 라이브러리들을 총합시킨 프로젝트는 처음에 기대했던것보다 더 무겁다.

그럼에도 불구하고, 리액트는 함수형 컴포넌트를 지원하며, JSX라는 매력적인 마크업 방법론을 가지고 있으며, 현재 프론트엔드 기술 시장을 주도하고있다. 리액트에 단점이 일부 있을지는 몰라도 리액트의 생태계와 커뮤니티는 그 규모가 크고 깊이가 깊기에, 신규 서비스를 구현하거나 기존 서비스를 마이그레이션할때 최우선 선택지로 두기에 모자람이 없다고 생각된다.

## JSX

jsx는 자바스크립트에서 확장된 문법으로, 마크업 문법을 객체 형태로 저장하고 렌더링한다. vue나 angular와 같은 프레임워크에서 MVC패턴을 사용하는것과 다르게, 리액트에서는 로직단과 뷰단을 분리하지 않으며, 이들을 개별의 파일로 나누는 대신 jsx문법으로 작성하여 변수에 저장해 사용한다.

```js
const username = "dylan";

const ele = (
  <>
    <h3>Hello, React</h3>
    <p>welcome to the react, {username}.</p>
  </>
);
```

또한 jsx은 표현식이기 때문에 if문이나 for문에서 사용하는것이 가능하다. 만약 리스트를 만들고 싶다면 다음과 같이 구현할 수 있다.

```js
const plants = ["flower", "tree", "weeds"];

const isFlowerCheck = (name) =>
  name === "flower" ? <li>it's flower🌷</li> : <li>it's {name}</li>;

const ele = (
  <>
    <h2>Plants List</h2>
    <ol>{plants.map((plant) => isFlowerCheck(map))}</ol>
  </>
);
```

## 컴포넌트와 prop

컴포넌트를 선언하는 방법은 간단하다. jsx문법을 return하는 함수를 export 해주면 된다.

```js
// components/Button.js
const StyledButton = styled.button {
  border: none;
  background: blue;
  color: #fff;
  font-size: 1rem;
}

const Button = (name, ...rest) => {
  return <StyledButton {...rest}>{name}</StyledButton>
}

export default Button;
```

그리고 자식 컴포넌트에 prop을 전해주기만 하면 된다. prop은 값이 될수도 있고, 함수가 될수도 있다.

```js
// App.js
import Button from "./components/Button";

const username = "dylan";

const App = () => {
  return <Button name={username} />;
};

export default App;
```

## state

부모 컴포넌트 또는 전역 컴포넌트로부터 전달받는 값을 prop이라고 부르고, 컴포넌트 내에서 선언하는 값을 state라고 부른다. 만약 아래와 같은 컴포넌트가 있을때, prop은 onToggle, onChange, companyType이 되고 state는 companyName, companyCountry가 된다

```js
const companyName = "Discord";
const companyCountry = "USA, Califonia";

const Container = (onToggle, onChange, companyType) => {
  return (
    <p>
      <button onClick={onToggle}>Toggle Country<button/>
      <span>type : {companyType}</span>
      <input onChange={onChange} value={companyName}>
      <input onChange={onChange} value={companyCountry}>
    </p>
  );
};
```

## input값 관리하기

react에서 input값을 가져오기 위해서는 form event에 접근해야 한다. name값이 있는 form에 접근하려면 값이 들어올 객체를 만들어놓고 input에서 이벤트가 발생할때마다 이벤트에서 form value값을 가지고와 객체를 변경해줘야 한다. 이런 방식을 사용하면 리액트에서 특히 강조하는 불변성을 지키며 input값을 관리할 수 있게된다

```js
const useInputs = (initialForm) => {
  const [form, setForm] = useState({ initialForm });

  const onChange = (e) => {
    const { name, value } = e.target; // 비구조화 할당으로 접근
    setForm({ ...form, [name]: value }); // spread 문법을 사용하여 키값이 name인 객체의 값을 value로 교체
  };

  return [form, onChange];
};

const [{ username, email }, onChange] = useInputs({
  username: "",
  email: "",
});

const App = () => {
  return (
    <input onChange={onChange} name="username" value={username}>
    <input onChange={onChange} name="email" value={email}>
  );
};
```

## useRef

리액트는 기본적으로 가상돔에 렌더트리를 업데이트하고 이를 일시에 렌더링하는 방식을 사용하고 있지만, 어느 경우에는 직접적으로 dom에 접근해야 할때도 있다. 스크롤바 위치를 설정한다던가, 포커스를 설정해줘야 하거나, 차트 관련 라이브러리를 사용해야 하는 등 다양한 상황에서 dom을 직접적으로 선택해야 하는 상황이 발생할때 useRef를 사용한다.

만약 form에 값을 입력한 후 초기화 버튼을 클릭했을때 특정 form에 foucs가 걸리도록 하려면 다음과 같이 구현할 수 있다

```js
const nameInput = useRef();

const onReset = () => {
  nameInput.current.focus();
};

const App = () => {
  return (
  <input
    name="name"
    placeholder="이름"
    ref={nameInput}
  />
  <button onClick={onReset}>초기화</button>
  )
}
```

## useEffect

useEffect 훅은 컴포넌트가 마운트 됬을때, 언마운트 됬을때, 리렌더링 될때 특정 작업을 처리하는 훅이다

```js
useEffect(() => {
  console.log("컴포넌트가 화면에 나타남");
  return () => {
    console.log("컴포넌트가 화면에서 사라짐");
  };
}, []);
```

useEffect훅의 인자(deps)가 비어있을 경우 컴포넌트가 처음 호출될때(마운트)만 실행된다. 만약 컴포넌트가 해제될때(언마운트)는 return함수가 실행되는데, 이를 cleanup 함수라고 부른다. 또한 컴포넌트가 리렌더링될때 또한 훅 내에있는 코드가 실행된다

이번에는 deps에 값을 넣어보도록 하겠다

```js
useEffect(() => {
  console.log("user 값이 설정됨");
  console.log(user);
  return () => {
    console.log("user 가 바뀌기 전..");
    console.log(user);
  };
}, [user]);
```

이 경우 컴포넌트가 마운트, 언마운트, 리렌더링 될때뿐만 아니라 user값이 변경될때와 변경되기 직전일 때에도 호출된다

## useMemo

useMemo는 이미 한번 실행된 연산된 값을 재사용하여 성능을 최적화하는 훅이다. 모든 함수가 리렌더링될때마다 실행될 필요는 없다. useMemo의 경우 리렌더링이 일어나더라도 리턴값이 변경되지 않는 함수가 이에 포함되며 특정 값이 변경될때만 함수를 실행시키도록 설정해줄 수 있다.

useMemo는 두번째 인자로 배열이 주어지게 되는데, 해당 배열안에 변수를 바인딩하면 해당 변수가 변경되었을때만 함수가 재실행된다.

```js
const countActiveUsers = (users) => {
  return users.filter((user) => user.active).length;
};
const count = useMemo(() => countActiveUsers(users), [users]);
```

## useCallback

useCallback은 useMemo와 유사한 기능의 훅이다. useMemo 는 특정 결과값을 재사용 할 때 사용하는 반면, useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용한다.

해당 훅을 사용하려면 기존의 함수를 useCallback으로 감싸주기만 하면 된다. 첫번째 인자는 callback으로 기존에 사용하던 함수내의 코드가 포함되며, 두번째 인자는 deps로 callback내에서 사용되는 state, prop을 포함시켜줘야만 한다. 만약 callback에 함수가 실행되고 있다면, 해당 함수또한 deps에 포함시켜야 정상적으로 작동한다.

```js
const onCreate = useCallback(() => {
  dispatch({
    type: "CREATE_USER",
    user: {
      username,
      email,
    },
  });
  reset();
}, [username, email, reset]);
```

해당 작업을 해준다고 해서 눈에띄는 성능 향상이 바로 이루어지는것은 아니다. 컴포넌트 렌더링 최적화를 하는것이 목적이기 때문에, React.memo까지 적용해야 한다.

## React.memo

React.memo를 사용하는 방법은 굉장히 간단하다. 컴포넌트를 감싸버리기만 하면 된다. 해당 훅의 기능은 컴포넌트의 prop이 바뀌지 않았을때 리렌더링을 하는것을 방지해 성능 최적화를 시키는 것이다.

좀더 상세히 설명하자면, 변경되는 prop과 관계있는 컴포넌트만을 리렌더링하여 성능을 올리는것으로 해당 작업을 위해서는 useCallback에서 deps에 어떤 값이 바인딩되어있는지도 확인해야 한다. 만약 리렌더링되는 이유가 useCallback때문이라면, 함수형 업데이트를 하도록 수정해줘서 문제의 deps를 제거해줘야만 한다

```js
function UserCreate({ username, email, onChange, onCreate }) {
  return <div>(...)</div>;
}

export default React.memo(UserCreate);
```

## useReducer

useReducer는 useState보다 더 효율적으로 상태를 관리할 수 있는 훅이다. 이를 사용하면 상태 업데이트 로직을 컴포넌트에서 분리하여 개별의 파일로 관리할 수 있고, action이라는 직관적인 명칭이 있는 update를 실행함으로써 더욱 깔끔하고 직관적인 코드를 작성할 수 있게된다. 카운터로 예시를 들어보겠다.

```js
import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
```

useState를 사용했을때는 setNumber에 직접 접근해야 했지만, useReducer을 사용한 후로 dispatch만으로 상태 업데이트를 수행할 수 있게 되었다. 두 훅은 기능이 비슷하지만 단순한 number, boolean의 경우에는 useState를 사용하고, 업데이트 로직이 좀더 복잡하고 다양한 경우에는 useReducer를 쓰는편이 더 좋을 것 같다.

## 커스텀 Hook

자주 반복되는 로직이 있을때, 이런 코드들을 분리해서 재사용할 수 있으면 좋겠다는 생각을 하게 된다. 이경우 간단하게 외부 함수로 빼내는 방법이 있지만 리액트에서는 자체적으로 커스텀 hook을 지원하고 있다.

만약 form값을 수정하는 로직을 작성하고 싶다면 커스텀 훅을 사용해 다음과 같이 구현할 수 있다.

```js
const useInputs = (initialForm) => {
  const [form, setForm] = useState({ initialForm });

  const onChange = (e) => {
    const { name, value } = e.target; // 비구조화 할당으로 접근
    setForm({ ...form, [name]: value }); // spread 문법을 사용하여 키값이 name인 객체의 값을 value로 교체
  };

  return [form, onChange];
};

const [{ username, email }, onChange] = useInputs({
  username: "",
  email: "",
});

const App = () => {
  return (
    <input onChange={onChange} name="username" value={username}>
    <input onChange={onChange} name="email" value={email}>
  );
};
```

와 같은 코드가 있다고 할때

```js
// App.js
import useInputs from '../hooks/useInputs';

const [{ username, email }, onChange] = useInputs({
  username: "",
  email: "",
});

const App = () => {
  return (
    <input onChange={onChange} name="username" value={username}>
    <input onChange={onChange} name="email" value={email}>
  );
};
```

```js
/// hooks/useInputs.js
function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    },
    [form]
  );

  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, reset];
}

export default useInputs;
```

위처럼 커스텀훅을 만들어 따로 관리할 수 있다. useInputs훅은 form값이 있을때 이를 추출하여 form, onChange, reset()을 반환하는 로직으로, 종속성을 가지지 않기 때문에 여러 코드에서 해당 훅을 사용할 수 있다는 장점이 있다.

## lifecycle 메서드

![react 라이프사이클](https://i.imgur.com/cNfpEph.png)

lifecycle 메서드는 생명주기 메서드라고도 부르는데, 컴포넌트가 화면상에 나타나고, 업데이트 되고, 사라질때 호출되는 메서드들이다. 생명주기 메서드는 클래스형 컴포넌트에서만 사용하는것이 가능하고 함수형 컴포넌트에서는 위에서도 언급했던 useEffect훅을 사용해야만 한다. 우리는 클래스형 컴포넌트를 사용하지 않기 때문에 이부분에 대해서는 깊게 애기하지 않을것이다.

참고자료 : https://react.vlpt.us/basic/25-lifecycle.html
