import Hoge1 from './Hoge1';
import Hoge2 from './Hoge2';

export default function Test() {
  console.log('親がrenderされたぜ！');

  return (
    <>
      <Hoge1 />
      <br />
      <Hoge2 />
    </>
  );
}
