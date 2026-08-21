import { useEffect, useState } from "react";
import StoryList from "../components/StoryList";
import StoryUploadForm from "../components/StoryUploadForm";
import useAuthStore from "../store/useAuthStore";

function StoryPage() {
  const accessToken = useAuthStore((state) => state.accessToken);
  const [stories, setStories] = useState([]);
  const loadStories = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/stories", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        console.log("스토리 조회 실패");
        return;
      }
      setStories(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadStories();
  }, [accessToken]);
  return (
    <>
      <StoryUploadForm loadStories={loadStories}></StoryUploadForm>
      <StoryList stories={stories}></StoryList>
    </>
  );
}
export default StoryPage;
