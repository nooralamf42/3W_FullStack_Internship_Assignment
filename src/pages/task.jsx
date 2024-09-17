import React from 'react'
import { motion } from "framer-motion";
import { useParams } from 'react-router-dom'
import {
    InstagramLogo,
    FacebookLogo,
    XLogo,
    YoutubeLogo,
    TelegramLogo,
    LinkedinLogo,
  } from "@phosphor-icons/react";
import PostTask from '../components/postTask';

export default function Task() {
    const {socialMedia, task} = useParams()
    let logo;
    const socialMediaName = socialMedia[0].toUpperCase() + socialMedia.slice(1);
    switch (socialMedia) {
      case "facebook":
        logo = <FacebookLogo size={40} color="white" className=""/>;
        break;
      case "instagram":
        logo = <InstagramLogo size={40} color="white" className=""/>;
        break;
      case "x":
        logo = <XLogo size={40} color="white" className=""/>;
        break;
      case "youtube":
        logo = <YoutubeLogo size={40} color="white" className=""/>;
        break;
      case "telegram":
        logo = <TelegramLogo size={40} color="white" className=""/>;
        break;
      case "linkedin":
        logo = <LinkedinLogo size={40} color="white" className=""/>;
        break;
      default:
        break;
    }

    return <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} exit={{opacity: 0}}><PostTask taskType={task} socialMediaName={socialMediaName} logo={logo} /></motion.div>
  }
 

