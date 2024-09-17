import React from "react";
import StatusBar from "./statusBar";
import { useLocation} from "react-router-dom";
import { Gift, CircleUserRound, Megaphone } from "lucide-react";

export default function Header() {
  let { pathname } = useLocation();
  let path = pathname.split('/')[1];
  console.log(path);
  const routeName = path === '' ? 'Home' : path.charAt(0).toUpperCase() + path.slice(1);
  return (
    <div className='sticky top-0 left-0 w-full z-50 backdrop-blur-md'>
      <StatusBar />
      <header className="flex justify-between dark:text-white items-center px-4 py-1 text-xs">
        <h1 className="font-bold">{routeName}</h1>
        <div className="flex items-center gap-2">
          <div className="px-2 rounded-full flex items-center gap-1 shadow border py-0.5">
            <Gift size={16} /> <p className="text-red-500">392</p>
          </div>
          <p className="text-green-500 bg-green-100 px-2 shadow border rounded-full py-0.5">
            ₹10
          </p>
          <p className="text-neutral-800 bg-neutral-100 px-2 shadow border rounded-full py-0.5">
            ₹100
          </p>
          <CircleUserRound size={25} />
        </div>
      </header>
      <div className="bg-blue-100 overflow-hidden flex text-nowrap">
          <div className="flex items-center ml-4 animate-marquee gap-2">
            <Megaphone size={16} className="text-green-600" />
            <span className="text-blue-900 text-sm font-light whitespace-nowrap">
              Taskplanet: Get 10 points on every referral!
            </span>
          </div>
      </div>
    </div>
  );
}
