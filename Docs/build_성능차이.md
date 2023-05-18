## build 성능 차이
React 애플리케이션을 build하기 전과 후의 성능 차이는 다음과 같은 요소에 따라 다를 수 있습니다.

번들 파일 크기: React 애플리케이션을 build할 때, 모든 코드가 단일 파일(bundle)로 번들링됩니다. 이 때, 번들 파일의 크기가 작을수록 초기 로딩 속도가 빨라지므로 성능이 향상됩니다. 따라서, build 전에는 번들 파일이 없으므로 초기 로딩 속도가 느릴 수 있습니다.

코드 최적화: React 애플리케이션을 build할 때, 코드가 최적화됩니다. 이를 통해 불필요한 코드가 제거되고, 코드 실행 속도가 개선됩니다. build 전에는 이러한 최적화가 이루어지지 않으므로, 성능이 떨어질 수 있습니다.

브라우저 캐싱: React 애플리케이션을 build할 때, 브라우저 캐싱을 이용하여 파일을 로딩할 수 있습니다. 이를 통해 반복적인 요청을 줄이고, 성능을 향상시킬 수 있습니다. build 전에는 이러한 캐싱이 이루어지지 않으므로, 반복적인 요청이 발생하여 성능이 떨어질 수 있습니다.

따라서, 일반적으로 React 애플리케이션을 build한 후에는 초기 로딩 속도와 코드 실행 속도가 개선되고, 브라우저 캐싱을 이용하여 성능을 향상시킬 수 있습니다.

## 리액트 쿼리 캐싱
리액트쿼리는 데이터 캐싱 관련 기능을 지원한다.
Query는 데이터를 캐싱하고, 동일한 쿼리 키로 다시 요청될 때 이전에 캐싱된 데이터를 사용한다. 이를 통해 반복적인 요청을 줄이고 성능을 향상시킬 수 있다.

```js
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

// QueryClient 생성
const queryClient = new QueryClient();

function App() {
  return (
    // QueryClientProvider를 사용하여 애플리케이션 전체에 QueryClient를 제공합니다.
    <QueryClientProvider client={queryClient}>
      <UserComponent />
    </QueryClientProvider>
  );
}

function UserComponent() {
  // useQuery 훅을 사용하여 데이터를 가져옵니다.
  const { data, isLoading, isError } = useQuery('userData', fetchUserData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <div>
      <h1>User Data</h1>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
}

// 서버에서 유저 데이터를 가져오는 비동기 함수
async function fetchUserData() {
  const response = await fetch('api/user');
  if (!response.ok) {
    throw new Error('Error fetching user data');
  }
  return response.json();
}

export default App;

```
