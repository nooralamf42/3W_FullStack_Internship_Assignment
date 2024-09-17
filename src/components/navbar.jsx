import React, { useState } from 'react';
import { Home, ClipboardList, Plus, Settings, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavItem = ({ icon, label, isActive, onClick }) => (
  <Link
    to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
    className={`flex flex-col items-center justify-center w-1/5 cursor-pointer ${
      isActive ? 'text-white' : 'text-blue-200'
    }`}
    onClick={onClick}
  >
    {icon}
    {isActive && <span className="text-xs mt-1">{label}</span>}
  </Link>
);

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { icon: <Home size={24} />, label: 'Home' },
    { icon: <ClipboardList size={24} />, label: 'Tasks' },
    { icon: <Plus size={24} />, label: 'Add' },
    { icon: <Settings size={24} />, label: 'Settings' },
    { icon: <Gamepad2 size={24} />, label: 'Games' },
  ];

  const activeIndex = navItems.findIndex((item) => item.label === activeTab);

  return (
    <div className="sticky z-50 bottom-0 left-0 right-0 bg-blue-600 text-white p-2 rounded-t-xl">
      <div className="flex justify-between items-center relative">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isActive={activeTab === item.label}
            onClick={() => setActiveTab(item.label)}
          />
        ))}
        <div 
          className="absolute -top-2 h-1 bg-white rounded-full transition-all duration-300 ease-in-out"
          style={{
            width: '20%',
            left: `${activeIndex * 20}%`,
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;