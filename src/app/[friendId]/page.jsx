import Image from "next/image";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdOutlineTextsms } from "react-icons/md";
import { PiArchiveBold } from "react-icons/pi";
import { RiNotificationSnoozeLine } from "react-icons/ri";

const Friend = async ({ params }) => {
  const { friendId } = await params;

  const res = await fetch("http://localhost:3000/friends.json");
  const users = await res.json();

  const friend = users.find((user) => user.id === Number(friendId));
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
  } = friend;

  return (
    <div className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto ">
        <div className=" flex flex-col md:grid md:grid-cols-3 gap-6 mx-10 md:mx-0">
          <div className="col-span-1">
            <div className="bg-[#FFFFFF] text-center gap-2 flex flex-col py-8 rounded-md shadow">
              <div className="flex justify-center">
                <Image
                  src={picture}
                  alt="user image"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <p className="text-[20px] font-semibold">{name}</p>
              <span
                className={`text-white ${status === "overdue" ? "bg-[#EF4444]" : status === "on-track" ? "bg-[#244D3F]" : status === "almost due" ? "bg-[#EFAD44]" : ""} p-2 rounded-[100px] font-medium capitalize mx-auto`}
              >
                {status}
              </span>

              <ul className="flex justify-center gap-2">
                {tags.map((tag, index) => {
                  return (
                    <li
                      key={index}
                      className="text-[#244D3F] bg-[#CBFADB] p-2 rounded-[100px] font-medium"
                    >
                      {tag.toUpperCase()}
                    </li>
                  );
                })}
              </ul>

              <span className="text-[#64748B] text-[16px]">&quot;{bio}&quot;</span>
              <span className="text-[#64748B] text-sm">Preferred: {email}</span>
            </div>
            <div className=" text-center space-y-2 flex flex-col my-4">
              <span className="bg-[#FFFFFF] rounded-md shadow p-4 text-[#1F2937] text-[16px] font-medium flex gap-2 items-center justify-center hover:scale-105 transition-transform duration-200">
                <RiNotificationSnoozeLine /> Snooze 2 Weeks
              </span>
              <span className="bg-[#FFFFFF] rounded-md shadow p-4 text-[#1F2937] text-[16px] font-medium flex gap-2 items-center justify-center hover:scale-105 transition-transform duration-200">
                <PiArchiveBold /> Archive
              </span>
              <span className="bg-[#FFFFFF] rounded-md shadow p-4 text-[#EF4444] text-[16px] font-medium flex gap-2 items-center justify-center hover:scale-105 transition-transform duration-200">
                <FaRegTrashAlt /> Delete
              </span>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col md:grid md:grid-cols-3 gap-6 ">
              <div className="text-[12px] text-[#64748B] bg-[#FFFFFF] text-center flex flex-col py-8 rounded-md shadow">
                <span className="text-[30px] text-[#244D3F]">
                  {days_since_contact}
                </span>
                <span className="text-[#64748B] text-[18px]">
                  Days Since Contact
                </span>
              </div>
              <div className="text-[12px] text-[#64748B] bg-[#FFFFFF] text-center flex flex-col py-8 rounded-md shadow">
                <span className="text-[30px] text-[#244D3F]">{goal}</span>
                <span className="text-[#64748B] text-[18px]">Goal (Days)</span>
              </div>
              <div className="text-[12px] text-[#64748B] bg-[#FFFFFF] text-center flex flex-col py-8 rounded-md shadow">
                <span className="text-[30px] text-[#244D3F]">
                  {next_due_date}
                </span>
                <span className="text-[#64748B] text-[18px]">Next Due</span>
              </div>
            </div>
            <div className="bg-[#FFFFFF] rounded-md shadow my-4 p-4 flex flex-col gap-4">
              <div className="flex justify-between">
                <div className="text-[#244D3F] text-[20px] font-medium">
                  Relationship Goal
                </div>
                <button
                  className={`flex items-center py-2 px-4 text-[16px] rounded-sm hover:scale-105 transition-transform duration-200 font-medium text-[#1F2937] bg-[#F8FAFC] border border-[#E9E9E9]`}
                >
                  Edit
                </button>
              </div>
              <div>
                <span className="text-[#64748B] text-[18px]">
                  Connect every
                </span>{" "}
                <span className="font-semibold text-[18px]">{goal} days</span>
              </div>
            </div>
            <div className="bg-[#FFFFFF] rounded-md shadow my-4 p-4 flex flex-col gap-4">
              <div className="text-[#244D3F] text-[20px] font-medium">
                Quick Check-In
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#F8FAFC] p-4 rounded-md flex flex-col  items-center gap-2 hover:scale-105 transition-transform duration-200">
                  <span className="text-3xl">
                    <BiPhoneCall />
                  </span>
                  <span className="text-[18px]">Call</span>
                </div>
                <div className="bg-[#F8FAFC] p-4 rounded-md flex flex-col  items-center gap-2 hover:scale-105 transition-transform duration-200">
                  <span className="text-3xl">
                    <MdOutlineTextsms />
                  </span>
                  <span className="text-[18px]">Text</span>
                </div>
                <div className="bg-[#F8FAFC] p-4 rounded-md flex flex-col  items-center gap-2 hover:scale-105 transition-transform duration-200">
                  <span className="text-3xl">
                    <HiOutlineVideoCamera />
                  </span>
                  <span className="text-[18px]">Video</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
