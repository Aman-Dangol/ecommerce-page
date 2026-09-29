"use client";

export default function Home() {
  return (
    <section>
      <button
        type='button'
        onClick={async () => {
          console.log("object");
          const data = await fetch("/dummyJson/test");
          if (data.ok) {
            const result = await data.json();
            console.log(result, "asdasdad");
          }
        }}>
        Click
      </button>
      <input type='text' />
      <input type='text' />
    </section>
  );
}
