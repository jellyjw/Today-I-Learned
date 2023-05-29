## keyof, typeof 함께 사용하기



회사에서 세가지 옵션 그룹이 존재하고, 하나의 옵션을 선택하면 나머지 active가 false로 변하는 버튼 그룹을 만들었다.
![](https://velog.velcdn.com/images/jellyjw/post/216538ae-9a6c-4fa6-8cb6-8873af023d2f/image.png)

옵션을 클릭하면 실행될 onClick 함수를 만들다가,
`keyof typeof` 를 함께 사용해서 코드를 작성했던게 있어서 정확한 사용법과 의미를 알아보려고 한다.

먼저 각 연산자를 살펴보자.

### typeof
> typeof 연산자는 피연산자의 평가 전 자료형을 나타내는 문자열을 반환합니다.
출처 : mdn

```ts
console.log(typeof 42);
// Expected output: "number"

console.log(typeof 'blubber');
// Expected output: "string"

console.log(typeof true);
// Expected output: "boolean"

console.log(typeof undeclaredVariable);
// Expected output: "undefined"
```

`typeof`는 자바스크립트에서 이렇게 데이터 타입을 문자열로 반환해주는 연산자이다.

---

### keyof
그렇다면 타입스크립트에서 쓰이는 `keyof` 는 무엇일까?

>keyof 연산자는 객체 타입에서 객체의 키 값들을 숫자나 문자열 리터럴 유니언을 생성합니다. 아래 타입 P는 “x” | “y”와 동일한 타입입니다.
출처 : [타입스크립트 공식문서](https://www.typescriptlang.org/ko/docs/handbook/2/keyof-types.html)

```ts
type Point = { x: number; y: number };
type P = keyof Point; // "X" | "Y"
```

즉, Point 객체의 키값으로 이루어진 ( `"X" | "Y"` )  **[유니온 타입](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#unions)** 을 반환한다는 뜻이다.
아래 예시로 조금더 알아보면,
```ts
interface Car {
  brand: string;
  model: string;
  year: number;
}

type CarKey = keyof Car;
const carKey: CarKey = 'brand';
console.log(carKey); // Output: "brand"



```

`CarKey` 에 `keyof` 연산자로 `Car` 타입을 지정했으니 Carkey의 타입은 `Car` 의 `key` 값들인  `"brand" | "model" | "year"` 가 된다. 따라서 carKey 변수에 "brand"를 할당할 수 있다.

---
## typeof keyof
요약하자면, **`typeof`**는 변수의 타입을 반환하고, **`keyof`** 는 객체 또는 인터페이스의 키 값을 **타입**으로 반환하는 것이다.

내가 작성한 버튼 클릭시 실행되는 함수를 보면,

```ts

  const handlePrintOptionButtonClick = (groupIndex: number, buttonIndex: number) => {
	...
    const selectedKey = ButtonTitleKey[printMode as keyof typeof ButtonTitleKey][groupIndex];
   // 생략
  };

```


`keyof typeof` 를 사용하여 객체의 키 값을 타입으로 가져왔다.

- `typeof ButtonTitleKey` 는 `ButtonTitleKey` 객체의 타입을 가져오고, `keyof` 를 사용하여 해당 객체의 모든 키 값을 가져온다.
- 따라서 `ButtonTitleKey[printMode as keyof typeof ButtonTitleKey][groupIndex]` 는 `printMode`의 값에 따라 `ButtonTitleKey` 객체에서 선택한 그룹의 키 값을 가져오는 것을 의미한다.


그런데 공부하다보니 한가지 더 궁금한 점이 생겼다.

```ts
const person = {
  name: 'jiwoo',
  age: 10
}

console.log(typeof person) // 'object'
```

`typeof` 만 사용했을 경우, 이런식으로 'object' 라는 타입을 반환하게 되고,
`keyof` 를 사용하면 해당 객체의 키값을 유니온 타입으로 반환한다고 했는데
어쩔 때 같이 사용해야 할까?

### keyof typeof를 같이 사용하는 경우
```ts
const bmw = { name: "BMW", power: "1000hp" }

type CarLiteralType = keyof typeof bmw

let carPropertyLiteral: CarLiteralType
carPropertyLiteral = "name"       // OK
carPropertyLiteral = "power"      // OK
carPropertyLiteral = "anyOther"   // Error...

```

>**keyof typeof together on an object**
As you might already know, the typeof operator gives you the type of an object. In the above example of Person interface, we already knew the type, so we just had to use the keyof operator on type Person.
But what to do when we don't know the type of an object or we just have a value and not a type of that value like the following?
출처 : [stackoverflow](https://stackoverflow.com/questions/55377365/what-does-keyof-typeof-mean-in-typescript) 예시와 설명이 좋아서 참고했다! 

위 예시처럼, 미리 `interface` 등으로 타입 지정이 되어있지 않고 값만 할당되어있는 object에서 바로 사용하고 싶은 경우 keyof와 typeof를 같이 사용하여 해당 객체의 키값으로 이루어진 유니온 타입을 얻을수 있다.
