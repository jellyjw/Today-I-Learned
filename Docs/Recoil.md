## Recoil
리코일은 상태관리 라이브러리로, 리액트에서 전역 상태관리를 하기 위해 사용된다.

먼저 초기화 단계를 거친 뒤,

```js
// recoil.js 파일

import { atom, RecoilRoot } from 'recoil';

// 전역 상태를 정의
const counterState = atom({
  key: 'counterState',
  default: 0,
});

export { counterState };

// RecoilRoot 컴포넌트로 Recoil을 초기화
export default function RecoilApp({ children }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

```

```js
// App.js 파일

import React from 'react';
import { useRecoilState } from 'recoil';
import RecoilApp, { counterState } from './recoil';

function Counter() {
  const [count, setCount] = useRecoilState(counterState);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <RecoilApp>
      <Counter />
    </RecoilApp>
  );
}

export default App;

```

Recoil을 사용하기 위해 RecoilRoot 컴포넌트로 Recoil을 초기화하고, 이를 RecoilApp 컴포넌트로 감싸서 사용할 수 있다.
