import { useCallback } from 'react';

export default function App() {
  const hoge4 = () => console.log('4');
  const hoge5 = useCallback(() => console.log('5'), []);

  return (
    <>
      <button onClick={() => console.log('3')}>3</button>
      <button onClick={hoge4}>4</button>
      <button onClick={hoge5}>5</button>
      <button onClick={useCallback(() => console.log('6'), [])}>6</button>
    </>
  );
}
