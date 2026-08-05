function Student({ name, major, age }) {
  //console.log(props);
  //const { name, major, age } = props;
  return (
    <>
      <h2>이름 : {name}</h2>
      <h2>전공 : {major}</h2>
      <h2>나이 : {age + 1}</h2>
    </>
  );
}
export default Student;
