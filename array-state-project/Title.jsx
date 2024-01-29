export function Title({ values, title }) {
  return (
    <>
      <h1>{title}</h1>
      <label>{values.join(", ")}</label>
      <br />
    </>
  );
}
