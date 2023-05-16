## 리액트 불변성

React에서 불변성(Immutability)을 유지하는 것은 정말 중요하다.
불변성은 상태(State) 및 속성(Properties)의 변경을 해야 할 경우 원본 데이터를 변경하지 않고 처리하는 개념이다.
이를 유지하는 것은 React 컴포넌트의 성능과 예측 가능성을 향상시키는 데 도움이 된다.

- 성능 최적화: React에서 컴포넌트의 업데이트는 Virtual DOM을 통해 이루어지는데, 불변성을 유지하면 이전 상태와 현재 상태를 비교하여 변경된 부분만 업데이트할 수 있다. 이는 불필요한 렌더링을 방지하고 성능을 향상시킨다.
- 참조 동등성 비교: 객체나 배열과 같은 가변(mutable) 데이터를 사용하면 값이 변경되더라도 참조(Reference)가 동일한 경우에는 React가 변경 여부를 판단하지 못한다. 따라서 불변성을 유지하면 값이 변경되었는지를 쉽게 판단할 수 있다.
- 이력 추적 및 디버깅: 불변성을 유지하면 상태의 변경 이력을 추적하기 쉽다. 또한, 버그를 디버깅할 때 이전 상태와 현재 상태를 비교하여 문제를 분석하는 데 도움이 된다. 

**Bad**
```js
import React, { useState } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);

  const handleClick = () => {
    // 올바르지 않은 방식
    // data 배열에 직접적으로 push를 수행하고 있다.
    // 이는 불변성을 깨트리는 작업이다.
    data.push('new item');
    setData(data);
  };

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Add Item</button>
    </div>
  );
}

```

**Good**
```js
import React, { useState } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);

  const handleClick = () => {
    const newItem = 'new item';
    const newData = [...data, newItem];
    setData(newData);
  };

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Add Item</button>
    </div>
  );
}

```
