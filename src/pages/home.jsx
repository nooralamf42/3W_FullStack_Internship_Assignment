import SwiperComponent from "../components/swiper";
import Dashboard from "../components/dashboard";
import SocialMediaTasks from "../components/socialMediaTasks";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <Dashboard />
        <SwiperComponent />
        <SocialMediaTasks />
        <SwiperComponent />
    </motion.div>
  )
}
