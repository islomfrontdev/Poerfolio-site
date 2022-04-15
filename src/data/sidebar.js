import { AiFillHome, AiFillProject } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPhoneSquareAlt, FaBlogger } from "react-icons/fa";
export const navData = [
  {
    text: "Home",
    to: "/home",
    icon: <AiFillHome size={24} color="#93B3D8" />,
  },
  {
    text: "Projects",
    to: "/projects",
    icon: <AiFillProject size={24} color="#93B3D8" />,
  },
  {
    text: "Contacts",
    to: "/contacts",
    icon: <FaPhoneSquareAlt size={24} color="#93B3D8" />,
  },
  {
    text: "About Me",
    to: "/about",
    icon: <BsFillPersonFill size={24} color="#93B3D8" />,
  },
  {
    text: "Blog",
    to: "/blog",
    icon: <FaBlogger size={24} color="#93B3D8" />,
  },
];
