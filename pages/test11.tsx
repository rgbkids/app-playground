export default function App() {
  function hoge5(text: string) {
    console.log('5');
  }

  return (
    <>
      <button onClick={() => hoge5('5')}>5</button>
    </>
  );
}
