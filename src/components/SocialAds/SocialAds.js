import { useState } from "react"
import img2 from "../../assets/yellowbanner.png"

export default function SocialAds({setSection}) {
    return (
        <div className="flex">
            <MainSocial setSection={setSection}/>
            <Image/>
        </div>
    )
}

function MainSocial({setSection}) {
    const [selectedAds, setSelectedAds] = useState(null);

    return (
        <div className="md:w-3/5 w-full pt-7 relative">
            <div className="mx-10 mt-20">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Monday_logo.svg/2560px-Monday_logo.svg.png" alt='logo' className="w-24 h-5 mb-14"/>
                <h1 className="text-2xl mb-4">One last question, how did you hear about us?</h1>
                <form className="flex flex-wrap gap-5">
                    <div className="flex text-sm gap-3 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="checkbox" id="software_sites" name="software_sites" value="software_sites" checked={selectedAds === 'software_sites'} onChange={() => setSelectedAds('software_sites')}/>
                        <label>Software review sites</label>
                    </div>
                    <div className="flex text-sm gap-3 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="checkbox" id="friend" name="friend" value="friend" checked={selectedAds === 'friend'} onChange={() => setSelectedAds('friend')}/>
                        <label>Friend / Colleague</label>
                    </div>
                    <div className="flex text-sm gap-3 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="checkbox" id="billboard" name="billboard" value="billboard" checked={selectedAds === 'billboard'} onChange={() => setSelectedAds('billboard')}/>
                        <label>BillBoard / Public transit ad</label>
                    </div>
                    <div className="flex text-sm gap-3 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="checkbox" id="youtube" name="youtube" value="youtube" checked={selectedAds === 'youtube'} onChange={() => setSelectedAds('youtube')}/>
                        <label>Youtube ad</label>
                    </div>
                    <div className="flex text-sm gap-3 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="checkbox" id="linkedin" name="linkedin" value="linkedin" checked={selectedAds === 'linkedin'} onChange={() => setSelectedAds('linkedin')}/>
                        <label>LinkedIn</label>
                    </div>
                    <div className="flex text-sm gap-3 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="checkbox" id="consultant" name="consultant" value="consultant" checked={selectedAds === 'consultant'} onChange={() => setSelectedAds('consultant')}/>
                        <label>Consultant</label>
                    </div>
                    <div className="flex text-sm gap-3 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="checkbox" id="social" name="social" value="social" checked={selectedAds === 'social'} onChange={() => setSelectedAds('social')}/>
                        <label>Social media (Facebook, Instagram, Reddit, etc)</label>
                    </div>
                    <div className="flex text-sm gap-3 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="checkbox" id="search" name="search" value="search" checked={selectedAds === 'search'} onChange={() => setSelectedAds('search')}/>
                        <label>Search engine (Google, Bing, etc)</label>
                    </div>
                    <div className="flex text-sm gap-3 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="checkbox" id="tv" name="tv" value="tv" checked={selectedAds === 'tv'} onChange={() => setSelectedAds('tv')}/>
                        <label>TV / Streaming service</label>
                    </div>
                    <div className="flex text-sm gap-3 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="checkbox" id="audio" name="audio" value="audio" checked={selectedAds === 'audio'} onChange={() => setSelectedAds('audio')}/>
                        <label>Audio ad (Podcast, Spotify)</label>
                    </div>
                    <div className="flex text-sm gap-3 border px-4 py-2 rounded-3xl border-slate-400">
                        <input type="checkbox" id="other" name="other" value="other" checked={selectedAds === 'other'} onChange={() => setSelectedAds('other')}/>
                        <label>Other</label>
                    </div>
                </form>
            </div>
            <button onClick={()=> setSection(prev => prev + 1)} className="active:scale-75 transform transition duration-300 ease-in-out flex gap-1 items-center absolute -bottom-16 md:bottom-10 right-10 bg-blue-700 text-white px-4 py-2 rounded-sm">
                Continue
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </button>
            <button onClick={()=> setSection(prev => prev - 1)} className="active:scale-75 transform transition duration-300 ease-in-out flex gap-1 items-center absolute -bottom-16 md:bottom-10 left-10 border border-gray-400 px-4 py-2 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                Back
            </button>
        </div>
    )
}

function Image() {
    return (
        <img src={img2} alt='img2' className='hidden md:block h-screen right-0 md:w-2/5'/>
    )
}