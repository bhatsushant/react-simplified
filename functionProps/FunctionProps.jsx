export function FunctionProps({
  name,
  age = 26,
  isProgrammer = true,
  children,
}) {
  console.log(isProgrammer);
  return (
    <>
      <h1>
        {/* My name is {props.name} and my age is {props.age} */}
        My name is {name} and my age is {age}
      </h1>
      <h1>{children}</h1>
    </>
  );
}
