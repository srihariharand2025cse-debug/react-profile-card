import ProfileImage from "./ProfileImage";
import Skills from "./Skills";
import SocialLinks from "./SocialLinks";

function ProfileCard() {
  return (
    <div className="profile-card">
      <ProfileImage />
      <h2>Sri Hariharan</h2>
      <p>Computer Science Engineering Student</p>
      <Skills />
      <SocialLinks />
    </div>
  );
}

export default ProfileCard;