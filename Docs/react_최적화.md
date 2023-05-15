## React 최적화
useMemo와 useCallback은 리액트에서 최적화를 위해 사용할 수 있는 훅이다.
하지만, 항상 최적화에 도움이 되는 것은 아니다.

### useMemo
```js
import React, { useMemo } from 'react';

function MyComponent({ value1, value2 }) {
  const result = useMemo(() => {
    // value1과 value2를 이용한 계산
    return value1 + value2;
  }, [value1, value2]);

  return <div>Result: {result}</div>;
}

```

value1과 value2가 변경되지 않으면, 리렌더링 되어도 연산이 수행되지 않는다.

### useCallback
```js
import React, { useState, useCallback } from 'react';

function MyComponent({ onClick }) {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

```

마찬가지로 useCallback은 함수를 메모이제이션 한다.

매우 복잡한 연산이 아닐경우, 또는 의존성 배열의 인자가 많아질 경우가 오히려 성능에 안좋은 영향을 미칠 수 있기 때문에
잘 알아보고 사용해야 한다.

아주 복잡한 연산일때만 사용하도록 하자.


