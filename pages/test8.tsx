export default function App() {
  function hoge1() {
    console.log('1');
  }

  // よくあるミス
  // 再レンダリングのたびにconsoleに1と2が表示されます。
  // ボタン3しか期待通りの動作をしません。
  return (
    <>
      <button onClick={hoge1()}>1</button>
      <button onClick={console.log('2')}>2</button>
      <button onClick={() => console.log('3')}>3</button>
    </>
  );
}
