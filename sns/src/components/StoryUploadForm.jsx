import { useState } from "react";
import styles from "../css/StoryUploadForm.module.css";

function StoryUploadForm({ loadStories }) {
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
  };

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
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    console.log(data);

    setWriter("");
    setContent("");
    setImage(null);

    loadStories();
  };

  return (
    <section className={styles.formSection}>
      <form className={styles.form} onSubmit={saveStory}>
        {/* 작성자 */}
        <div className={styles.formGroup}>
          <label className={styles.label}>작성자</label>

          <input
            className={styles.input}
            type="text"
            placeholder="이름을 쓰세요"
            value={writer}
            onChange={(e) => setWriter(e.target.value)}
          />
        </div>

        {/* 내용 */}
        <div className={styles.formGroup}>
          <label className={styles.label}>내용</label>

          <textarea
            className={styles.textarea}
            placeholder="무슨 일이 있었나요?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* 이미지 */}
        <div className={styles.formGroup}>
          <label className={styles.label}>이미지</label>

          <div className={styles.fileBox}>
            <label htmlFor="image" className={styles.fileButton}>
              📷 이미지 선택
            </label>

            <input
              id="image"
              className={styles.fileInput}
              type="file"
              accept="image/*"
              onChange={handleImage}
            />

            <span className={styles.fileName}>
              {image ? image.name : "선택된 파일 없음"}
            </span>
          </div>
        </div>

        <button className={styles.submitButton} type="submit">
          게시하기
        </button>
      </form>
    </section>
  );
}

export default StoryUploadForm;
