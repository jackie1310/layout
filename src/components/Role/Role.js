import { useState } from "react";
import img1 from "../../assets/Screenshot 2023-12-28 074610.png";

export default function Role({setSection}) {
    return (
        <div className="flex">
            <MainRole setSection={setSection}/>
            <Image/>
        </div>
    )
}

function MainRole({setSection}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedRole, setSelectedRole] = useState(null);

    return (
        <div className="md:w-3/5 w-full pt-7 relative">
            <div class="ml-4 flex-grow border-t border-gray-500"></div>
            <div className="mx-10 mt-20">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Monday_logo.svg/2560px-Monday_logo.svg.png" alt='logo' className="w-24 h-5 mb-14"/>
                <h1 className="text-2xl mb-4">Hey there, what brings you here today?</h1>
                <form className="flex gap-5">
                    <div className="flex text-sm gap-1 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="radio" id="work" name="work" value="work" checked={selectedOption === 'work'} onChange={() => setSelectedOption('work')}/>
                        <label>Work</label>
                    </div>
                    <div className="flex text-sm gap-1 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="radio" id="personal" name="personal" value="personal" checked={selectedOption === 'personal'} onChange={() => setSelectedOption('personal')}/>
                        <label>Personal</label>
                    </div>
                    <div className="flex text-sm gap-1 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="radio" id="school" name="school" value="school" checked={selectedOption === 'school'} onChange={() => setSelectedOption('school')}/>
                        <label>School</label>
                    </div>
                    <div className="flex text-sm gap-1 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="radio" id="nonprofits" name="nonprofits" value="nonprofits" checked={selectedOption === 'nonprofits'} onChange={() => setSelectedOption('nonprofits')}/>
                        <label>Nonprofits</label>
                    </div>
                </form>
                <h1 className="mt-14 text-2xl mb-4">What best describes your current role?</h1>
                <form className="grid md:grid-cols-4 md:grid-flow-row gap-5">
                    <div className="flex text-sm gap-1 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="radio" id="business_owner" name="business_owner" value="business_owner" checked={selectedRole === 'business_owner'} onChange={() => setSelectedRole('business_owner')}/>
                        <label>Business Owner</label>
                    </div>
                    <div className="flex text-sm gap-1 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="radio" id="team_leader" name="team_leader" value="team_leader" checked={selectedRole === 'team_leader'} onChange={() => setSelectedRole('team_leader')}/>
                        <label>Team leader</label>
                    </div>
                    <div className="flex text-sm gap-1 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="radio" id="team_member" name="team_member" value="team_member" checked={selectedRole === 'team_member'} onChange={() => setSelectedRole('team_member')}/>
                        <label>Team member</label>
                    </div>
                    <div className="flex text-sm gap-1 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="radio" id="freelancer" name="freelancer" value="freelancer" checked={selectedRole === 'freelancer'} onChange={() => setSelectedRole('freelancer')}/>
                        <label>Freelancer</label>
                    </div>
                    <div className="flex text-sm gap-1 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="radio" id="director" name="director" value="director" checked={selectedRole === 'director'} onChange={() => setSelectedRole('director')}/>
                        <label>Director</label>
                    </div>
                    <div className="flex text-sm gap-1 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="radio" id="c_level" name="c_level" value="c_level" checked={selectedRole === 'c_level'} onChange={() => setSelectedRole('c_level')}/>
                        <label>C_level</label>
                    </div>
                    <div className="flex text-sm gap-1 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="radio" id="vp" name="vp" value="vp" checked={selectedRole === 'vp'} onChange={() => setSelectedRole('vp')}/>
                        <label>VP</label>
                    </div>
                </form>
            </div>
            <button onClick={()=> setSection(prev => prev + 1)} className="active:scale-75 transform transition duration-300 ease-in-out flex gap-1 items-center absolute -bottom-16 md:bottom-10 right-10 bg-blue-700 text-white px-4 py-2 rounded-sm">
                Continue
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </button>
        </div>
    )
}

function Image() {
    return (
        <img src={img1} alt='img1' className='hidden md:block h-screen right-0 md:w-2/5'/>
    )
}