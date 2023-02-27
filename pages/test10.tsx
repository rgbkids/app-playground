export default function App() {
  function hoge1() {
    console.log('1');
  }

  function hoge3(text: string) {
    console.log(text);
  }

  // よくあるミス
  // 再レンダリングのたびにconsoleに1と2が表示されます。
  // ボタン3と4は期待通りの動作をします。
  return (
    <>
      <button onClick={hoge1()}>1</button>
      <button onClick={console.log('2')}>2</button>
      <button onClick={hoge3.bind(null, '3')}>3</button>
      <button onClick={() => console.log('4')}>4</button>
    </>
  );
}
