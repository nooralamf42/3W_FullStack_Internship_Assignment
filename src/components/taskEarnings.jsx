import React from 'react'
import { motion } from "framer-motion";
export default function TaskEarnings({task}) {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
<ul className="list-decimal list-inside tracking-tighter font-semibold space-y-2 leading-5 mt-3 relative z-50">
        <li>You will get {task?.points} points on submission of proof of task in form of screenshot.</li>
        <li>You will earn your points on successful verification of your task by the task creator.</li>
        <li>Task verification can take upto 24 hours to 48 hours.</li>
      </ul>
    </motion.div>
  )
}
