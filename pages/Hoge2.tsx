import { useState } from 'react';

export default function Hoge2() {
  const [sig, setSig] = useState('');

  console.log('hoge2 render!');

  function hoge() {
    console.log('hoge2がクリック!');
    setSig('hoge2');
  }

  return (
    <>
      Hoge2:
      <input type="text" onClick={hoge} />
      <input type="text" onClick={() => setSig('hoge2 t')} />
    </>
  );
}
