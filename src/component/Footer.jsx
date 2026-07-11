import Image from "next/image";
import LogoFooter from "../assets/logo-xl.png";
import FacebookLogo from "../assets/facebook.png";
import InstagramLogo from "../assets/instagram.png";
import TwitterLogo from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className="pt-20 pb-7.5 bg-[#244D3F] text-white ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <Image src={LogoFooter} alt="Keen Keeper Logo" />
          <p className="opacity-80 mt-4">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-6">
          <p>Social Links</p>
          <div className="flex gap-3 mt-2">
            <Image src={FacebookLogo} alt="Keen Keeper Logo" />
            <p className="opacity-80 mt-4"></p>
            <Image src={InstagramLogo} alt="Keen Keeper Logo" />
            <p className="opacity-80 mt-4"></p>
            <Image src={TwitterLogo} alt="Keen Keeper Logo" />
            <p className="opacity-80 mt-4"></p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between opacity-80">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-5 md:gap-8 lg:gap-15 pt-3 md:pt-0">
            <span>Privacy Policy </span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
