import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex text-2xl gap-x-4">
      <Link href="https://github.com/rasfa98" target="_blank">
        <FaGithub />
      </Link>

      <Link href="https://www.linkedin.com/in/rasmus-falk/" target="_blank">
        <FaLinkedin />
      </Link>

      <Link href="mailto:1998.rasmus.falk@gmail.com" target="_blank">
        <FaEnvelope />
      </Link>
    </div>
  );
};

export default Socials;
