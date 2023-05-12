## React-Query(TanStack Query)
**기존 React-query가 버전 3부터 TanStack Query로 변경되었다.**

> Powerful asynchronous state management for TS/JS, React, Solid, Vue and Svelte.
**TS/JS, React, Solid, Vue 및 Svelte를 위한 강력한 비동기 상태 관리**
[TanStack Query 공식문서](https://tanstack.com/query/v3/)

![](https://velog.velcdn.com/images/jellyjw/post/63892401-cea9-45ff-8a64-21bdea533ebf/image.png)
기존에는 리액트에서만 사용 가능했지만, 공식문서에 v4부터 React 뿐만 아니라 Solid, Vue, Svelte 등 지원하는 Framework가 추가된 것을 볼 수 있다.

---
`React-Query` 는 서버에서 데이터를 가져오거나 업데이트하는 등 **비동기 작업**을 더욱 편하게 해주는 라이브러리이다.

- 캐싱
- 동일한 데이터에 대한 요청이 여러번이면, 한번만 요청
- 오래된 데이터를 업데이트, 데이터가 오래됐는지 파악
- 간편하게 에러, 로딩 등의 처리 가능
