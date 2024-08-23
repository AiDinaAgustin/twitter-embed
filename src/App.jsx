import  ProfileText  from "./components/ProfileText";
import ProfileFoto from "./components/ProfileFoto";
import TwitterLogo from "./components/TwitterLogo";
import DescriptionText from "./components/DescriptionText";
import LoveIcon from "./components/LoveIcon";

export default function App() {
  return (
    <div className=" w-[600px] h-72 p-8 px-10 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <ProfileFoto/>
          <section className="" id="profile-text">
            <ProfileText headingText={"John Doe"} subHeading={"realjohndoe"}/>
          </section>
        </div>
        <TwitterLogo/>
      </div>
      <DescriptionText text={"Why do they call it 'debugging' when it feels more like 'wildly guessing and hoping for the best'?"} 
                              tag={"#programming #coding #debugging"}/>
      <section className="flex items-center gap-3">
        <LoveIcon/>
        <h4 className="text-black/50">650</h4>  
        <h4 className="text-black/50">3:40 PM – Feb 24, 2022</h4>
      </section>
    </div>
  )
}