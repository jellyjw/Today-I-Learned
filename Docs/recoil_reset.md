## Recoil reset state

리코일로 전역 상태를 관리할때, default값이 빈 string이나 0이 아닐 경우
어떤 이벤트가 발생했을때 default값으로 되돌리고 싶을때가 있다.
기본값을 설정해놓고, `useResetRecoilState` hooks를 사용하면 된다.

```JS
export const abc = atom<any>({
  key: 'abc',
  default: {
    type: '1',
    ...
    wordLength: '20',
  },
});

```

이런 상태가 있다고 가정했을 때,

```JS
const [abc, setAbc] = useRecoilState<any>(abc);

const resetAbc = useResetRecoilState(abc); //먼저 선언해주고

const reset = () => {
  resetAbc() // 동작해야하는 함수 내에서 실행시켜주면 된다.
}



```

**주의할 점**은, 
`const resetAbc = useResetRecoilState(abc); `를 함수 내에서 직접 선언할시
hooks를 함수 내부 말고 컴포넌트에서 선언해야 한다는 에러가 뜨기 때문에,
컴포넌트 내부에서 선언하고 함수내에서 실행시켜줘야 한다.
