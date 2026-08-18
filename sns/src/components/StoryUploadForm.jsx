import { useState } from "react";

function StoryUploadForm() {
  const [writer, setWriter] = useState("");
  const [content, setCotent] = useState("");
  const [image, setImage] = useState(null);
  const handleImage = (e) => {
    //console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
  };
  //1. writer 2. content 3. file
  const saveStory = async (e) => {
    e.preventDefault();
    if (writer.trim() === "") {
      alert("작성자를 입력해 주세요.");
      return;
    }
    if (content.trim() === "") {
      alert("내용을 작성해 주세요.");
      return;
    }
    const formData = new FormData();
    formData.append("writer", writer);
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }
    const response = await fetch("http://localhost:8080/api/stories", {
      method: "post",
      body: formData,
    });
    const data = await response.text();
    console.log(data);
  };
  return (
    <>
      <section>
        <form onSubmit={saveStory}>
          <div>
            <input
              type="text"
              placeholder="이름을 쓰세요"
              onChange={(e) => setWriter(e.target.value)}
            ></input>
          </div>
          <div>
            <textarea
              name=""
              id=""
              onChange={(e) => setCotent(e.target.value)}
            ></textarea>
          </div>
          <div>
            <input type="file" onChange={handleImage}></input>
          </div>
          <div>
            <button>게시하기</button>
          </div>
        </form>
      </section>
    </>
  );
}
export default StoryUploadForm;
