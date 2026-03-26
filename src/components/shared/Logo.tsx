import Image from "next/image";
import logo from "@/assets/skillbridge_logo.png";

const Logo = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <Image
        src={logo}
        alt="site-logo"
        height={100}
        width={100}
        loading="eager"
      />
      <div>
        <h1 className="font-bold text-2xl text-shadow-2xs">
          {" "}
          <span className="text-sky-700">Skill</span> Bridge
        </h1>
      </div>
    </div>
  );
};

export default Logo;
