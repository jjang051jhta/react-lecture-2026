import { useState } from "react";

function LikeState() {
  const [like, setLike] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setLike(!like);
        }}
      >
        {like ? "좋아요❤️" : "좋아요🤍"}
      </button>
    </>
  );
}
export default LikeState;
