import { useState } from 'react';

function SuperSlowComponent() {
  console.log('SuperSlowComponent render!');

  const now = performance.now();
  while (performance.now() - now < 200) {}
  return <div>Super slow component</div>;
}

function Form() {
  console.log('Form render!');

  const [name, setName] = useState('');

  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default function App() {
  console.log('App render!');

  return (
    <div className="App">
      <Form />
      <SuperSlowComponent />
    </div>
  );
}
