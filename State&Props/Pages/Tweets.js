// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from "react";
import Footer from "../Footer";
import Tweet from "../Components/Tweet";
import "./Tweets.css";
import dummyTweets from "../static/dummyData";

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  const getRandomNumber = (min, max) => {
    return parseInt(Math.random() * (Number(max) - Number(min) + 2));
  };

  const [tweetList, setTweetList] = useState(dummyTweets);
  const [inputUserName, setInputUserName] = useState("parkhacker"); //유저 이름
  const [inputUserText, setInputUserText] = useState(""); //트윗 내용
  // const [newSendTweet, setNewSendTweet] = useState(0); // 전송 버튼
  const [count, setCount] = useState(dummyTweets.length);

  const handleButtonClick = (event) => {
    const tweet = {
      id: tweetList.length + 1,
      username: inputUserName,
      picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      content: inputUserText,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
    setTweetList([tweet, ...tweetList]);
    setCount(count + 1);
  };

  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setInputUserName(event.target.value);
  };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setInputUserText(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  // defaultValue="parkhacker"
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  onChange={handleChangeUser}
                  value={inputUserName}
                />
                {/* TODO : 트윗을 작성할 수 있는 textarea 엘리먼트를 작성하세요. */}
                <textarea
                  placeholder="your tweet here.."
                  name="description"
                  value={inputUserText}
                  className="tweetForm__input--message"
                  onChange={handleChangeMsg}
                >
                  {inputUserText}
                </textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {`total : ${count}`}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button
                className="tweetForm__submitButton"
                onClick={handleButtonClick}
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {/* <Tweet tweet={dummyTweets[0]} /> */}
        {tweetList.map((el) => {
          return <Tweet tweet={el} key={el.id} />;
        })}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
