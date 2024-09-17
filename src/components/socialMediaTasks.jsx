import React from "react";
import {
  InstagramLogo,
  FacebookLogo,
  XLogo,
  YoutubeLogo,
  TelegramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
export default function SocialMediaTasks() {
  return (
    <div className="m-2 mb-8">
      <h1 className="text-md font-semibold tracking-wider mb-4">
        Social Media Tasks
      </h1>
      <div className="grid grid-cols-3 items-center gap-2 text-xs">
        <Link to="tasks/instagram" className="relative w-fit">
          <div className="bg-gradient-to-tr from-red-600 to-purple-700 rounded-full w-fit p-3">
            <InstagramLogo size={42} color="white" />
          </div>
            <p className="p-1 px-1.5 mt-2
             rounded-full bg-green-500 text-neutral-100 font-semibold absolute -top-3 -right-4 text-xs">+105</p>
            <h className="text-neutral-900 absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white/50 rounded-full text-md px-3 py-2 bg-opacity-10 backdrop-blur-sm">Instagram</h>
        </Link>
        <Link to="tasks/facebook" className="relative w-fit">
          <div className="bg-blue-600 rounded-full w-fit p-3">
            <FacebookLogo size={42} color="white" />
          </div>
            <p className="p-1 px-1.5 mt-2
             rounded-full bg-green-500 text-neutral-100 font-semibold absolute -top-3 -right-4 text-xs">+200</p>
            <h className="text-neutral-900 absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white/50 rounded-full text-md px-3 py-2 bg-opacity-10 backdrop-blur-sm">Facebook</h>
        </Link>
        <Link to="tasks/x" className="relative w-fit">
          <div className="bg-neutral-900 rounded-full w-fit p-3">
            <XLogo size={42} color="white" />
          </div>
            <p className="p-1 px-1.5 mt-2
             rounded-full bg-green-500 text-neutral-100 font-semibold absolute -top-3 -right-4 text-xs">+180</p>
            <h className="text-neutral-900 absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white/50 rounded-full text-md px-5 py-2 bg-opacity-10 backdrop-blur-sm">X</h>
        </Link>
        <Link to="tasks/youtube" className="relative w-fit mt-6">
          <div className="bg-red-600 rounded-full w-fit p-3">
            <YoutubeLogo size={42} color="white" />
          </div>
            <p className="p-1 px-1.5 mt-2
             rounded-full bg-green-500 text-neutral-100 font-semibold absolute -top-3 -right-4 text-xs">+195</p>
            <h className="text-neutral-900 absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white/50 rounded-full text-md px-3 py-2 bg-opacity-10 backdrop-blur-sm">YouTube</h>
        </Link>
        <Link to="tasks/telegram" className="relative w-fit mt-6">
          <div className="bg-sky-600 rounded-full w-fit p-3">
            <TelegramLogo size={42} color="white" />
          </div>
            <p className="p-1 px-1.5 mt-2
             rounded-full bg-green-500 text-neutral-100 font-semibold absolute -top-3 -right-4 text-xs">+300</p>
            <h className="text-neutral-900 absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white/50 rounded-full text-md px-3 py-2 bg-opacity-10 backdrop-blur-sm">Telegram</h>
        </Link>
        <Link to="tasks/linkedin" className="relative w-fit mt-6">
          <div className="bg-sky-700 rounded-full w-fit p-3">
            <LinkedinLogo size={42} color="white" />
          </div>
            <p className="p-1 px-1.5 mt-2
             rounded-full bg-green-500 text-neutral-100 font-semibold absolute -top-3 -right-4 text-xs">+109</p>
            <h className="text-neutral-900 absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white/50 rounded-full text-md px-3 py-2 bg-opacity-10 backdrop-blur-sm">Linkedin</h>
        </Link>
      </div>
    </div>
  );
}
