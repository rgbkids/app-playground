import { useState } from 'react';

export default function Hoge1() {
  const [sig, setSig] = useState('');

  console.log('hoge1 render!');

  function hoge() {
    console.log('hoge1がクリック!');
    setSig('hoge1');
  }

  return (
    <>
      Hoge1:
      <input type="text" onClick={hoge} />
    </>
  );
}
