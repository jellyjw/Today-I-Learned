import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
  // 처음 마운트되었을때 실행
  useEffect(() => {
    // console.log(user);
  });

  return (
    <div>
      <b
        style={{ cursor: "pointer", color: user.active ? "green" : "black" }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>{" "}
      <span>({user.email})</span>
      <button
        onClick={
          () =>
            onRemove(user.id) /* arrow function이 아니면 바로 실행되어버림 */
        }
      >
        삭제
      </button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);
