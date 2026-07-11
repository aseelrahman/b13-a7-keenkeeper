import Image from "next/image";
import React from "react";

const FriendCard = ({ user }) => {
  const {
    id,
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = user;
  return (
    <div className="bg-[#FFFFFF] text-center gap-2 flex flex-col py-8 rounded-md shadow">
      <div className="flex justify-center">
        <Image src={picture} alt="user image" width={100} height={100} className="rounded-full" />
      </div>
      <p className="text-[20px] font-semibold">{name}</p>
      <span className="text-[12px] text-[#64748B]">{days_since_contact}d ago</span>
      <ul className="flex justify-center gap-2">
        {tags.map((tag, index) => {
          return(<li key={index} className="text-[#244D3F] bg-[#CBFADB] p-2 rounded-[100px] font-medium">{tag.toUpperCase()}</li>);
        })}
      </ul>
      <span className={`text-white ${status === 'overdue' ? 'bg-[#EF4444]' : status === 'on-track' ? 'bg-[#244D3F]' : status === 'almost due' ? 'bg-[#EFAD44]' : ''} p-2 rounded-[100px] font-medium capitalize mx-auto`}>{status}</span>
    </div>
  );
};

export default FriendCard;
