![](https://velog.velcdn.com/images/jellyjw/post/6863be5c-f995-4c4b-a92c-d363f6f7937a/image.gif)

사용자 입력 폼을 만들던중,
자동으로 하이픈을 생성해주는 함수를 만들어서 입력을 받는게 나을 것 같아서 만들어봤다.
확실히 UX적으로도, 입력값을 받아올때에도 훨씬 편해서 좋았음!

## autoHyphen 함수

```js
export const autoHyphenPhoneNumber = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: UseFormSetValue<inquiryType>,
) => {
  const rawPhone = e.target.value.replace(/-/g, '')
  let formattedPhone = ''

  if (rawPhone.length < 4) {
    formattedPhone = rawPhone
  } else if (rawPhone.length < 8) {
    formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(3)}`
  } else if (rawPhone.length < 11) {
    formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(
      3,
      7,
    )}-${rawPhone.slice(7)}`
  } else {
    formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(
      3,
      7,
    )}-${rawPhone.slice(7, 11)}`
  }

  const displayPhone = formattedPhone.length > 0 ? formattedPhone : ''
  setValue('phone', displayPhone)
}

```

- **`e.target.value.replace(/-/g, '')`**  먼저 입력된 전화번호에서 하이픈을 제거하여 `rawPhone` 변수에 할당했다.
- 그리고 `rawPhone` 길이에 따라, 조건문을 통해 formattedPhone 값을 설정해준다.


입력 폼 데이터 처리는 길이 제한 및 유효성검사를 꼼꼼히 해야한다. (예외처리는 클라이언트, 서버 양방향) 또한 하이픈을 데이터에 포함시켜야할지 말아야 할지도 고려해서 데이터를 잘 받아올수 있도록 하자!
