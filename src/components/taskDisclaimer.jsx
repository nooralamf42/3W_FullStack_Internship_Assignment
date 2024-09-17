import React from 'react'
import { motion } from "framer-motion";
export default function TaskDisclaimer() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
<ul className="list-decimal list-inside tracking-tighter font-semibold space-y-2 leading-5 mt-3 relative z-50 text-red-900">
        <li>Any fraud activity may result in blocking of your account.</li>
        <li>You must not unfollow/unlike/undo your action at least for 30 days after submission as this may lead to account suspension.</li>
      </ul>
    </motion.div>
  )
}
