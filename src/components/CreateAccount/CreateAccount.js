import img1 from "../../assets/Screenshot 2023-12-28 074610.png";
import './CreateAccount.scss';

export default function CreateAccount({setSection}) {
    return (
        <div className="flex">
            <MainCreate setSection={setSection}/>
            <Image/>
        </div>
    )
}

function MainCreate({setSection}) {
    return (
        <div className="md:w-3/5 w-full pt-7 relative">
            <div class="ml-4 flex-grow border-t border-gray-500"></div>
            <div className="ml-20 mt-10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Monday_logo.svg/2560px-Monday_logo.svg.png" alt='logo' className="w-24 h-5 mb-14"/>
                <h1 className="text-3xl mb-7">Create your account</h1>
                <form className="flex flex-col gap-5 w-96">
                    <div className="flex flex-col gap-1 input-group">
                        <label for="name">Full name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your full name" className="focus:border-red-500 focus:border-1 focus:outline-none px-4 py-2 border border-gray-400 rounded-sm"/>
                        <h1 className="helper-text">Enter your full name</h1>
                    </div>
                    <div className="flex flex-col gap-1 input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter at least 8 characters" className="focus:border-red-500 focus:border-1 focus:outline-none px-4 py-2 border border-gray-400 rounded-sm"/>
                        <h1 className="helper-text">Use strong password *, /, \,</h1>
                    </div>
                    <div className="flex flex-col gap-1 input-group">
                        <label for="account-name" >Account name</label>
                        <input type="text" id="account-name" name="account-name" placeholder="For example, company's or department's name" className="focus:border-red-500 focus:border-1 focus:outline-none px-4 py-2 border border-gray-400 rounded-sm"/>
                        <h1 className="helper-text">Enter your account name</h1>
                    </div>
                </form>
            </div>
            <button onClick={() => setSection(prev => prev + 1)} className="active:scale-75 transform transition duration-300 ease-in-out flex gap-1 items-center absolute -bottom-16 md:bottom-10 right-10 bg-blue-700 text-white px-4 py-2 rounded-sm">
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