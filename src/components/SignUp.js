import img1 from '../assets/Screenshot 2023-12-28 074610.png';
import google from '../assets/icons8-google-48.png';

export default function SignUp() {
    return (
        <div className='h-full flex'>
            <SignUpSection/>
            <Image/>
        </div>
    )
}

function SignUpSection() {
    return (
        <div className='md:w-3/5 w-full left-0 flex flex-col items-center justify-center'>
            <h1 className="text-3xl hidden md:block">Welcome to monday.com</h1>
            <h1 className="text-2xl my-20 md:hidden block">Create new account</h1>
            <h3 className="mb-5 hidden md:block">Get started - it's free. No credit card needed</h3>
            <div className='flex flex-col gap-3 w-screen px-4 md:px-0 md:w-80'>
                <button className="flex text-sm gap-3 items-center justify-center rounded-sm border border-gray-400 md:w-80 py-2 transform transition duration-300 ease-in-out hover:bg-slate-300 active:scale-75">
                    <img src={google} className="w-8 h-8"alt='google'/>
                    Continue with Google
                </button>
                <div class="flex items-center">
                    <div class="flex-grow border-t border-gray-300"></div>
                    <div class="mx-4 text-gray-500">Or</div>
                    <div class="flex-grow border-t border-gray-300"></div>
                </div>
                <input type='email' placeholder='name@company.com' className='relative border border-gray-400 px-4 py-1'/>
                <button className='active:scale-75 transform transition duration-300 ease-in-out md:block hidden w-80 py-2 bg-blue-500 text-white rounded-sm' onClick={() => window.location = "/create"}>Continue</button>
                <button className='active:scale-75 transform transition duration-300 ease-in-out py-2 bg-blue-500 text-white rounded-sm md:hidden' onClick={() => window.location = "/create"}>Create acount</button>
            </div>
            <div className='mt-10 hidden md:block'>
                <h3 className='max-w-60 mx-auto'>By proceeding, you agree to the</h3> 
                <h3 className='max-w-64 mx-auto'><a href='/'>Terms of Service</a> and <a href=''>Privacy Policy</a></h3>
            </div>
            <div className='mt-40 hidden md:block'>
                <h3>Already have an account? <a>Log in</a></h3>
            </div>
        </div>  
    )
}

function Image() {
    return (
        <img src={img1} alt='img1' className='hidden md:block h-screen right-0 md:w-2/5'/>
    )
}