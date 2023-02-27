export default function Test6() {
  function hoge(o) {
    console.log('1');
    console.log(o);
    console.log(this);
  }

  return (
    <>
      <button className="square" onClick={() => console.log(this)}>
        aaa
      </button>
      <button className="square" onClick={void hoge(this)}>
        aaa
      </button>
    </>
  );
}
