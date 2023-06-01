## text-ellipsis
전에 글이 지정한 px을 넘어가면 ... 으로 표시되는걸 라이브러리를 이용해서 구현했었는데,
css로 이렇게도 구현할 수 있다.

먼저, 한줄일 경우 이렇게 짧은 코드로 가능하다.
tailwind css 사용!

```js
<div className="overflow-hidden whitespace-nowrap text-ellipsis w-[250px]">
{data.title}
</div>
```

그런데 여러줄일 경우는 css의 함수를 이용해서 구현이 가능했다.
```js
<div
    className="overflow-hidden"
    style={{
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    }}
>
{content.content}
</div>
```
