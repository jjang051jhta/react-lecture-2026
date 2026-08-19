import styles from "../css/StoryList.module.css";

function StoryList({ stories }) {
  return (
    <>
      <h2 className={styles.title}>Story</h2>

      <section className={styles.storySection}>
        {stories.length === 0 ? (
          <p className={styles.empty}>등록된 스토리가 없습니다.</p>
        ) : (
          <ul className={styles.storyList}>
            {stories.map((story) => (
              <li key={story.id} className={styles.storyItem}>
                {/* 작성자 */}
                <div className={styles.header}>
                  <div className={styles.avatar}>{story.writer?.charAt(0)}</div>

                  <h3 className={styles.writer}>{story.writer}</h3>
                </div>

                {/* 이미지 */}
                {story.imageUrl && (
                  <div className={styles.imageBox}>
                    <img
                      src={`http://localhost:8080${story.imageUrl}`}
                      alt={story.content}
                      className={styles.storyImage}
                    />
                  </div>
                )}

                {/* 내용 */}
                <div className={styles.contentBox}>
                  <p className={styles.content}>
                    <strong>{story.writer}</strong> {story.content}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default StoryList;
