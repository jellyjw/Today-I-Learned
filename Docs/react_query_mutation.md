## React Query Mutation
리액트쿼리로 데이터를 받아올 경우 `useQuery` 를 사용하고,
그 외 요청, 예를들어 Post 요청의 경우는 useMutation을 사용한다.

```js
import { useMutation } from 'react-query';

// POST 요청을 보낼 함수
const createUser = async (userData) => {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  return data;
};

// 컴포넌트 안에서 useMutation 훅을 사용
function CreateUserForm() {
  const { mutate, isLoading, isError, error } = useMutation(createUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      // 사용자 데이터를 수집해올 수 있음
    };
    mutate(userData);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* 사용자 입력 필드 등 */}
      <button type="submit">등록</button>
    </form>
  );
}

```

여기서, createUser 함수는 POST 요청을 보내는 함수이다.
fetch를 사용해서 API 엔드포인트로 요청을 보내고, 응답 데이터를 받아오게 도와준다.
이때 mutate 함수를 호출하여 userData를 전달하면 POST 요청이 발생해.

useMutation 훅은 몇 가지 상태와 함수를 반환하는데,
isLoading은 현재 요청이 진행 중인지를 나타내고, isError는 요청 중에 오류가 발생했는지를 나타낸다.
만약 오류가 발생하면 error 객체를 통해 오류 메시지를 확인할 수 있다.

이런 식으로 React Query의 useMutation 훅을 사용하면 POST 요청을 간단하게 처리할 수 있다.
