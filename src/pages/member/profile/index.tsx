import ProfileMemberView from "@/components/views/member/Profile";
import userServices from "@/services/user";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useSession } from "next-auth/react";
import { User } from "@/types/user.type";

type PropTypes = {
  setToaster: Dispatch<SetStateAction<{}>>;
};

const ProfileMemberPage = ({ setToaster }: PropTypes) => {
  const [profile, setProfile] = useState<User | {}>({});
  const session: any = useSession();
  useEffect(() => {
    if (session.data?.accessToken && Object.keys(profile).length === 0) {
      const getProfile = async () => {
        const { data } = await userServices.getProfile(
          session.data?.accessToken
        );

        setProfile(data.data);
      };
      getProfile();
    }
  }, [profile, session]);
  return (
    <div>
      <ProfileMemberView
        profile={profile}
        setProfile={setProfile}
        session={session}
        setToaster={setToaster}
      />
    </div>
  );
};

export default ProfileMemberPage;
