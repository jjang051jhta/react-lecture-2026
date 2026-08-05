function Student({ name, major, age, hobby }) {
  return (
    <>
      <div>
        <h2>학생정보</h2>
        <p>이름 : {name}</p>
        <p>나이 : {age}</p>
        <p>전공 : {major}</p>
        <p>취미 : {hobby}</p>
      </div>
    </>
  );
}
export default Student;
