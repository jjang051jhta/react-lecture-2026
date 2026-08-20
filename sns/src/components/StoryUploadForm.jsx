import { useState } from "react";
import styles from "../css/StoryUploadForm.module.css";

function StoryUploadForm({ loadStories }) {
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  // 이미지 미리보기
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // 실제 서버로 보낼 파일
    setImage(file);

    // 미리보기용 URL
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
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

    if (response.ok) {
      const data = await response.json();

      console.log(data);

      // 입력값 초기화
      setWriter("");
      setContent("");
      setImage(null);
      setPreview(null);

      // Story 목록 다시 가져오기
      loadStories();
    }
  };

  return (
    <section className={styles.formSection}>
      <form className={styles.form} onSubmit={saveStory}>
        {/* 작성자 */}
        <div className={styles.formGroup}>
          <label>작성자</label>

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
          <label>내용</label>

          <textarea
            className={styles.textarea}
            placeholder="내용을 작성하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* 이미지 */}
        <div className={styles.formGroup}>
          <label>이미지</label>

          <div className={styles.fileBox}>
            <label htmlFor="storyImage" className={styles.fileButton}>
              이미지 선택
            </label>

            <input
              id="storyImage"
              className={styles.fileInput}
              type="file"
              accept="image/*"
              onChange={handleImage}
            />

            <span className={styles.fileName}>
              {image ? image.name : "선택된 이미지가 없습니다."}
            </span>
          </div>
        </div>

        {/* 이미지 미리보기 */}
        {preview && (
          <div className={styles.previewBox}>
            <img
              src={preview}
              alt="이미지 미리보기"
              className={styles.previewImage}
            />
          </div>
        )}

        <button type="submit" className={styles.submitButton}>
          게시하기
        </button>
      </form>
    </section>
  );
}

export default StoryUploadForm;
