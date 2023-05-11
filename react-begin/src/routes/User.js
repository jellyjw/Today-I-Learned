import React, { useState, useRef, useMemo, useCallback } from "react";
import UserList from "./UserList";
import UserCreate from "./UserCreate";

function countActiveUsers(users) {
  console.log("활성 사용자수를 세는중..");
  return users.filter((user) => user.active).length;
}

function User() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: true,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: true,
    },
  ]);

  const [inputs, setInputs] = useState({
    username: "dylan",
    email: "dylan@waynehills.co",
  });
  const { username, email } = inputs; // username을 inputs.username으로 사용

  // useRef()를 사용할때 파라미터를 넣어주면 value.current의 기본값이 된다
  // useRef()는 useState()와 달리 값이 변경될때 컴포넌트 리렌더링이 발생되지 않는다
  const nextId = useRef(4);

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );
  // 이럴경우 inputs값이 바뀌지 않으면 함수를 새로 만들지 않고 재사용함

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
      active: true,
    };
    setUsers([...users, user]);

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  }, [users, username, email]);

  const onRemove = useCallback(
    (id) => {
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  const onToggle = useCallback(
    (id) => {
      setUsers(
        users.map(
          (user) => (user.id === id ? { ...user, active: !user.active } : user) // else의 경우에도 user를 리턴하므로 변경된 배열이 적용됨
        )
      );
    },
    [users]
  );

  const count = useMemo(() => countActiveUsers(users), [users]); // 이럴경우 users가 바뀌지 않으면 값을 재사용함

  const userList = (
    <>
      <UserCreate
        username={username} // 초기화 값
        email={email} // 초기화 값
        onChange={onChange} // 이벤트 발생
        onCreate={onCreate} // 이벤트 발생
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <p>활성사용자 수 : {count}</p>
    </>
  );

  return userList;
}

export default User;
