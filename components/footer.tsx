import Socials from "./socials";

const Footer = () => {
  return (
    <footer className="py-10 flex flex-col items-center gap-y-4">
      <Socials />
      <p>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
