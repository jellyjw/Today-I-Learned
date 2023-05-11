import React, { useState, useRef } from "react";
import Hello from "./routes/Hello";
import Wrapper from "./routes/Wrapper";
import Counter from "./routes/Counter";
import InputSample from "./routes/InputSample";
import User from "./routes/User";
import User2 from "./routes/User2";

function App() {
  /*
   * Wrapper
   */
  const wrapper = (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello color="pink" />
    </Wrapper>
  );

  /*
   * Counter
   */
  const counter = <Counter />;

  /*
   * InputSample
   */
  const inputSample = <InputSample />;

  /*
   * User
   */
  const user = <User />;
  const user2 = <User2 />;

  return user2;
}

export default App;
