//Libraries
import Image from "next/image";
import { useRouter } from "next/navigation";

//Components
import HeaderHamburger from "./HeaderHamburger";

//Images
import logo from "../Assets/Images/logo.png";

export default function Header() {
  const router = useRouter();

  const goToSignIn = () => {
    router.push("/authentication-portal");
  };

  const goToSignUp = () => {
    router.push("/become-a-contractor");
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10 bg-[rgba(255,255,255,0.8)] backdrop-blur-md pt-2 pb-2">
        <div className="flex justify-center items-center h-[70px]">
          <div className="flex justify-between w-[90vw] sm:w-[90vw] md:w-[90vw] lg:w-[90vw] xl:w-[60vw] 2xl:w-[60vw]">
            <Image
              src={logo}
              alt="Logo"
              className="w-[25vw] sm:w-[15vw]  md:w-[13vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[5.5vw]"
            />
            <div className="flex self-center">
              <div className="md:hidden">
                <HeaderHamburger />
              </div>
              <div className="hidden md:flex gap-5 self-center gap-5">
                <button className="btn text-[#485424]" onClick={goToSignIn}>
                  Sign up / Log in
                </button>
                <button
                  className="btn bg-[#485424] text-white"
                  onClick={goToSignUp}
                >
                  Become a Contractor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
