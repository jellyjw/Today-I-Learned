import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const MyBackButton = () => {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate(-1);
  };
  return (
    <FontAwesomeIcon className="far" icon={faArrowLeft} onClick={onClickBtn} />
  );
};

const Sidebar = () => {
  return (
    <section className="sidebar">
      <Link to="/">
        <i className="far fa-comment-dots"></i>
      </Link>
      <Link to="/about">
        <i className="far fa-question-circle"></i>
      </Link>
      <Link to="/mypage">
        <i className="far fa-user"></i>
      </Link>
      {/* 뒤로가기 기능 구현 */}
      <MyBackButton />
    </section>
  );
};

export default Sidebar;
