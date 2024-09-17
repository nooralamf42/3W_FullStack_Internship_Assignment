import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  InstagramLogo,
  FacebookLogo,
  XLogo,
  YoutubeLogo,
  TelegramLogo,
  LinkedinLogo,
  NumberCircleOne,
  NumberCircleTwo,
  NumberCircleThree,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
export default function Tasks() {
  const { socialMedia } = useParams();
  console.log(socialMedia)
  const points = {
    "facebook" : 200,
    "instagram" : 105,
    "x" : 180,
    "youtube" : 195,
    "telegram" : 300,
    "linkedin" : 109,
  }
  let logo;
  const taskName = socialMedia[0].toUpperCase() + socialMedia.slice(1);
  switch (socialMedia) {
    case "facebook":
      logo = <FacebookLogo size={80} color="white" className="p-2 absolute bottom-0 right-0 -rotate-45 blur-[1px]"/>;
      break;
    case "instagram":
      logo = <InstagramLogo size={80} color="white" className="p-2 absolute bottom-0 right-0 -rotate-45 blur-[1px]"/>;
      break;
    case "x":
      logo = <XLogo size={80} color="white" className="p-2 absolute bottom-0 right-0 -rotate-45 blur-[1px]"/>;
      break;
    case "youtube":
      logo = <YoutubeLogo size={80} color="white" className="p-2 absolute bottom-0 right-0 -rotate-45 blur-[1px]"/>;
      break;
    case "telegram":
      logo = <TelegramLogo size={80} color="white" className="p-2 absolute bottom-0 right-0 -rotate-45 blur-[1px]"/>;
      break;
    case "linkedin":
      logo = <LinkedinLogo size={80} color="white" className="p-2 absolute bottom-0 right-0 -rotate-45 blur-[1px]"/>;
      break;
    default:
      break;
  }
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} exit={{opacity: 0}} className="p-2 overflow-x-hidden space-y-4 overflow-y-hidden">
      <h1 className="text-xl tracking-tighter text-gray-50 font-semibold tracking-loose text-center mt-2">
        {taskName} Task
      </h1>
      <div className="backdrop-blur-lg bg-neutral-800/30 relative flex items-start gap-2 p-2 rounded-lg justify-center shadow-xl">
        <div>
          <NumberCircleOne size={32} color="white" />
          {logo}
        </div>
        <p className="text-white px-2 p-1 rounded-full bg-green-400 absolute -top-1 -right-3 rotate-45">+{points[socialMedia]}</p>
        <div className="s">
          <p className="text-white tracking-tight font-semibold">{taskName} Post Like</p>
          <h1 className="text-white tracking-tight">Like Any Post &</h1>
          <h1 className="italic text-yellow-200 tracking-tight leading-none">
            Earn Exciting Rewards & Points
          </h1>
          <Link to={`/tasks/${socialMedia}/post-like`} className="inline-block mt-2 bg-yellow-400 text-yello-800 rounded-lg p-2 font-semibold tracking-tigher active:scale-95 transition-all duration-300">Complete Task</Link>
        </div>
      </div>

      <div className="backdrop-blur-lg bg-neutral-800/30 relative flex items-start gap-2 p-2 rounded-lg justify-center shadow-xl">
        <div>
          <NumberCircleTwo size={32} color="yellow" />
          {logo}
        </div>
        <p className="text-white px-2 p-1 rounded-full bg-green-400 absolute -top-1 -right-3 rotate-45">+150</p>
        <div className="s">
          <p className="text-white tracking-tight font-semibold">{taskName} Post Comment</p>

          <h1 className="text-white tracking-tight">Comment Any Post &</h1>
          <h1 className="italic text-yellow-200 tracking-tight leading-none">
            Earn Exciting Rewards & Points
          </h1>
          <Link to={`/tasks/${socialMedia}/post-comment`} className="inline-block mt-2 bg-yellow-400 text-yello-800 rounded-lg p-2 font-semibold tracking-tigher active:scale-95 transition-all duration-300">Complete Task</Link>
        </div>
      </div>
      <div className="backdrop-blur-lg bg-neutral-800/30 relative flex items-start gap-2 p-2 rounded-lg justify-center shadow-xl">
        <div>
          <NumberCircleThree size={32} color="rgb(18, 255, 125) "  />
          {logo}
        </div>
        <p className="text-white px-2 p-1 rotate-45 rounded-full bg-green-400 absolute -top-1 -right-3">+150</p>
        <div className="s">
          <p className="text-white tracking-tight font-semibold">{taskName} Profile Follow</p>

          <h1 className="text-white tracking-tight">Like Any Post &</h1>
          <h1 className="italic text-yellow-200 tracking-tight leading-none">
            Earn Exciting Rewards & Points
          </h1>
          <Link to={`/tasks/${socialMedia}/profile-follow`} className="inline-block mt-2 bg-yellow-400 text-yello-800 rounded-lg p-2 font-semibold tracking-tigher active:scale-95 transition-all duration-300">Complete Task</Link>
        </div>
      </div>
    </motion.div>
  );
}
