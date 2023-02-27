import { useState } from 'react';

export default function Test7() {
  const [hello, setHello] = useState(false);

  function hoge() {
    console.log('1');
    // console.log(o);
    // console.log(this);

    // setHello(!hello)
  }

  function hoge3() {
    console.log('3');
    // console.log(o);
    // console.log(this);

    // setHello(!hello)
  }

  return (
    <>
      <button onClick={() => setHello(!hello)}>2</button>
      <button onClick={void hoge()}>1</button>
      <button onClick={hoge3()}>3</button>
    </>
  );
}
