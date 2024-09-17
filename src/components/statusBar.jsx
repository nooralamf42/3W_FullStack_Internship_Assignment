import React, { useState, useEffect } from 'react';
import { Battery, Wifi, SignalMedium } from 'lucide-react';

const StatusBar = () => {
    const time = new Date().toLocaleTimeString().toLocaleUpperCase()
    const [timeNow, setTimeNow] = useState(time)
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeNow(new Date().toLocaleTimeString().toLocaleUpperCase());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
  return (
    <div className="flex items-center justify-between backdrop-blur-lg bg-opacity-0 text-black h-7 px-4 rounded-t-xl">
      <div className="flex items-center space-x-1">
        <span className="text-xs  font-semibold">{timeNow}</span>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl"></div>
      <div className="flex items-center space-x-2">
        <SignalMedium size={14} />
        <Wifi size={14} />
        <Battery size={14} />
      </div>
    </div>
  );
};

export default StatusBar;