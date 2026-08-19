function StoryList({ stories }) {
  return (
    <>
      <h1>list component</h1>
      <section>
        <ul>
          {stories.map((story) => (
            <li key={story.id}>
              <h3>{story.writer}</h3>
              {story.imageUrl &&
                <img src={`http://localhost:8080${story.imageUrl}`}></img>
              }
              <p>{story.content}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
export default StoryList;
