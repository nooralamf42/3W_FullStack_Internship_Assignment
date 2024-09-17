import React from "react";
import ImageUpload from "./imageUpload";
import { Share, Link } from "lucide-react";
import { motion } from "framer-motion";

export default function TaskDetails({ task, open }) {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} className="text-left w-full relative z-10">
      <h1 className="font-bold leading-none tracking-tighter text-lg text-center mr-2 my-2"> Task Name : {task?.task}</h1>
      <ul className="list-decimal list-inside tracking-tighter">
        <li>{task?.task?.slice(0, -2)}.</li>
        <li>Screenshot it.</li>
        <li>Submit the screenshot of proof.</li>
      </ul>
      <a href="#" className="flex items-center text-md text-blue-500 bg-white/70 rounded-lg my-1 w-fit p-1 px-2 gap-2 active:scale-95 transition-all duration-200">Task Link <Link size={16} /></a>
      <div className="flex justify-between mb-2">
        <h2 className="text-lg font-semibold italic">Points : {task?.points}</h2>
        <div className="flex items-center gap-2 rounded-lg w-fit px-2 py-1 bg-green-400 text-white">
          <a href="#">Share</a>
          <Share size={22} />
        </div>
      </div>
      <ImageUpload isOpen={open} />
    </motion.div>
  );
}
