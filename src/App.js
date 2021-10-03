import React, { useRef } from "react";

export default function App() {
  const ref = useRef();

  function submit(e) {
    e.preventDefault();
    const data = new FormData(ref.current);
    for (const datas of data) {
      console.log(datas[0], datas[1]);
    }
    ref.current.reset();
  }

  return (
    <div>
      <form ref={ref} onSubmit={submit}>
        <label htmlFor="name">
          NAME:
          <input type="text" name="name" defaultValue="" id="name" />
        </label>
        <label htmlFor="school">
          SCHOOL:
          <input type="text" name="school" defaultValue="" id="school" />
        </label>
        <label htmlFor="rank">
          RANK:
          <input type="number" name="rank" defaultValue="" id="rank" />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
