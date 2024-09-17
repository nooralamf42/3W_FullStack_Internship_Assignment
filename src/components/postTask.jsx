import { useState } from "react";
import TaskEarnings from "./taskEarnings";
import TaskDetails from "./taskDetails";
import TaskDisclaimer from "./taskDisclaimer";
import { X } from "lucide-react";
import { motion } from "framer-motion";
export default function PostTask({socialMediaName, logo, taskType}) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  const [selectedTask, setSelectedTask] = useState({})

  const handleClose = () => {
    setOpen(false);
    setActiveTab('details');
  };
  const handleOpen = (task) => {
    setOpen(true);
    console.log(activeTab)
    setSelectedTask(task)
  };
  let tasksData = [
    {
      task: "Share with 5 Friends 🤝",
      points: 10,
    },
    {
      task: "Monthly Leaderboard Winner 🥳",
      points: 10,
    },
    {
      task: "Share with 10 Friends 🤝",
      points: 10,
    },
    {
      task: "Earn Daily to win BIG REWARDS 😎",
      points: 10,
    },
    {
      task: "Claim 10 Points Every Hour 🤯",
      points: 10,
    },
    {
      task: "Weekly Leaderboard Priza 🥳",
      points: 10,
    },

    {
      task: "Like Post & Earn 10 Points 🤩",
      points: 10,
    },
    {
        task: `Like Task Planet ${socialMediaName} Post😊`,
        points: 25,
    },
    {
        task: `Show Love : Like Task Planet ${socialMediaName} Post and Get 20 Points 🤩`,
        points: 20,
    },

  ];

  const commentData = [
    {
      task: "Monthly Leaderboard Winner 🥳",
      points: 10,
    },
    {
      task : "Refer with 5 Friends 🤝",
      points : 15,
    },
    {
      task : "Earn Big Win Daily 🤩",
      points : 15,
    },
    {
      task : "Claim 10 Points Every Hour 🤯",
      points : 15,
    },
    {
      task : "Weekly Leaderboard Prize 🥳",
      points : 15,
    },
    {
      task : "Comment on Task Planet Post 🤩",
      points : 15,
    },
    {
      task : "Comment on Post🤩",
      points : 25,
    }
  ]

  const shareData = [
    {
      task : "Follow Triple W Solutions 🤝",
      points : 10,
    },
    {
      task : `Stay Updated: Follow Task Planet on ${socialMediaName}🤝`,
      points : 10,
    }
  ]

  if (taskType === 'post-comment') {
    tasksData = commentData
  }
  if (taskType === 'post-share') {
    tasksData = shareData
  }
  return <motion.div initial={{opacity: 0}} animate={{opacity: 1} } exit={{opacity: 0}} transition={{duration: 0.5}} className={`m-2 overflow-hidden ${open && 'max-h-[415px]'}`}>
    <div className="flex items-center gap-2 mb-2 justify-center">
    <div className="w-10">{logo}</div>
    <h1 className="text-lg font-semibold bg-gradient-to-tr from-black to-neutral-500 bg-clip-text text-transparent">{socialMediaName} Tasks</h1>
    </div>
    {
        tasksData.map((task, index) => (
            <div key={index} className="p-2 border rounded-xl mb-2 bg-white/50  bg-opacity-10 backdrop-blur-sm">
                <p className="text-sm tracking-tighter">{task.task}</p>
                <p className="font-semibold mt-1">{task.points} Points</p>
                <button className="bg-blue-500 active:scale-95 transition-all duration-200 w-full text-white px-2 py-1 rounded-md mt-2" onClick={()=>handleOpen(task)}>Start Task</button>
            </div>
        ))
    }
    <dialog className="absolute inset-0 h-full w-full bg-transparent backdrop-blur-md z-[100] overflow-hidden" open={open} onClose={handleClose} aria-labelledby="simple-dialog-title" aria-describedby="alert-dialog-description">
        <div className="p-4 rounded-lg shadow-lg flex flex-col pt-10 items-center h-full">
            <nav className="w-full mb-2">
              <ul className="flex justify-between border rounded-lg cursor-pointer relative z-50 tracking-tighter">
                <li onClick={()=>setActiveTab('details')} className={`${activeTab ==='details' && 'bg-gray-200'} rounded-lg px-2 p-1`}>
                  Details
                </li>
                <li onClick={()=>setActiveTab('earnings')} className={`${activeTab ==='earnings' && 'bg-gray-200'} rounded-lg px-2 p-1`}>
                  Earnings
                </li>
                <li onClick={()=>setActiveTab('disclaimer')} className={`${activeTab ==='disclaimer' && 'bg-gray-200'} rounded-lg px-2 p-1`}>
                  Disclaimer
                </li>
              </ul>
            </nav>
            {
              activeTab === 'details' ? <TaskDetails task={selectedTask} logo={logo} open={open}/> :  activeTab === 'earnings' ? <TaskEarnings task={selectedTask}/> : <TaskDisclaimer task={selectedTask}/>
            }
            <button onClick={handleClose} className="absolute z-50 bottom-2 w-fit left-1/2 -translate-x-1/2 right-2 bg-black/50 rounded-full"><X size={50} color="white" /></button>
            <div className="absolute top-0 right-0 w-fit scale-[200%] pt-20 pr-8 blur-[0.5px] -rotate-12 z-0">
              {logo}
            </div>
        </div>
    </dialog>
  </motion.div>;
}
