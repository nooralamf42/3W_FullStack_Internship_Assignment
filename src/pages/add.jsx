import React from 'react'
import { motion } from "framer-motion";
export default function Add() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} exit={{opacity: 0}} className='flex justify-center items-center h-full bg-red-200'><h1 className='text-2xl font-bold'>Add Page</h1></motion.div>
  )
}
