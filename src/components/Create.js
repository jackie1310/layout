import { useState } from "react";
import CreateAccount from "./CreateAccount/CreateAccount";
import Role from "./Role/Role";
import SocialAds from "./SocialAds/SocialAds";

export default function Create() {
    const [section, setSection] = useState(1);

    if (section === 1) return <CreateAccount setSection={setSection}/>
    else if (section === 2) return <Role setSection={setSection}/>
    else if (section === 3) return <SocialAds setSection={setSection}/>
}