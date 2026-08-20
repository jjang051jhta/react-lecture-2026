import { useEffect, useState } from "react";
import StoryList from "../components/StoryList";
import StoryUploadForm from "../components/StoryUploadForm";

function StoryPage() {
  const [stories, setStories] = useState([]);
  const loadStories = async () => {
    const response = await fetch("http://localhost:8080/api/stories", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    setStories(data);
  };
  useEffect(() => {
    loadStories();
  }, []);
  return (
    <>
      <StoryUploadForm loadStories={loadStories}></StoryUploadForm>
      <StoryList stories={stories}></StoryList>
    </>
  );
}
export default StoryPage;
