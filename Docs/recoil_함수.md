## Recoil로 함수를 관리하는 방법
함수를 Recoil 상태로 관리하면 컴포넌트 간에 함수를 공유하거나 전역적으로 사용할 수 있다.

```js
import { atom, useRecoilState } from 'recoil';

// 함수 생성
const greetingState = atom({
  key: 'greeting',
  default: () => console.log('hi'),
});

// 함수를 사용하는 컴포넌트
function GreetingButton() {
  const [greeting, setGreeting] = useRecoilState(greetingState);

  const handleClick = () => {
    greeting(); // Recoil 상태로 관리된 함수 호출
  };

  return <button onClick={handleClick}>인사하기</button>;
}

```

이런식으로 만들어서, 전역 함수를 사용할 수 있다.
위의 예시에서는 greeting이라는 Recoil 상태에 함수가 저장되어 있고,
handleClick 함수에서 greeting 함수를 호출하면 Recoil 상태로 관리되는 함수가 실행된다.
이렇게 함수를 Recoil 상태로 관리하면 필요한 곳에서 언제든지 해당 함수를 호출하거나 변경할 수 있게 된다.
