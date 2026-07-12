import Image from "next/image";
import Video from "../assets/video.png";
import Call from "../assets/call.png";
import Text from "../assets/text.png";

const TimeLineCard = ({ timeLine }) => {
  const formattedDate = new Date(timeLine.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="flex gap-4 items-center p-4 bg-[#FFFFFF] rounded-md shadow">
      <Image
        src={
          timeLine.type === "video"
            ? Video
            : timeLine.type === "call"
              ? Call
              : timeLine.type === "text"
                ? Text
                : ""
        }
        alt="Video icon"
      />
      <div className="flex flex-col">
        <span>
          {timeLine.type} with {timeLine.name}
        </span>
        <span className="text-[#64748B]">{formattedDate}</span>
      </div>
    </div>
  );
};

export default TimeLineCard;
