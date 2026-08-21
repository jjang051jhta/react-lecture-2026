import { useState } from "react";
import styles from "../css/StoryUploadForm.module.css";
import useAuthStore from "../store/useAuthStore";
import toast from "react-hot-toast";

function StoryUploadForm({ loadStories }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const accessToken = useAuthStore((state) => state.accessToken);
  const member = useAuthStore((state) => state.member);

  // 이미지 선택
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);

    // 이미지 미리보기
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
  };

  // 게시글 등록
  const saveStory = async (e) => {
    e.preventDefault();

    // 로그인 확인
    if (!accessToken || !member) {
      toast.error("로그인이 필요합니다.");
      return;
    }

    // 내용 확인
    if (content.trim() === "") {
      toast.error("내용을 작성해 주세요.");
      return;
    }

    const formData = new FormData();

    formData.append("writer", member.userName);
    formData.append("content", content);

    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch("http://localhost:8080/api/stories", {
        method: "POST",

        headers: {
          Authorization: `Bearer ${accessToken}`,
        },

        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "게시글 등록에 실패했습니다.");
        return;
      }

      console.log(data);

      // 입력값 초기화
      setContent("");
      setImage(null);
      setPreview(null);

      toast.success("게시글이 등록되었습니다.");

      // Story 목록 다시 가져오기
      loadStories();
    } catch (error) {
      console.log(error);

      toast.error("게시글 등록 중 오류가 발생했습니다.");
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
            value={member ? member.userName : ""}
            disabled
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
