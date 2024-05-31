import videoBg from '../assets/videoBg.mp4';

export default function Main() {
    
    return (
        <div className="main">
            <video className="w-full" src={videoBg} autoPlay loop muted/>
                <div className="content flex justify-center items-center">
                    <h1 className="sm:text-6xl text-3xl font-extrabold mt-14 shadow-xl sm:shadow-2xl font-title animate-float text-transparent bg-clip-text bg-gradient-to-r from-primary-color to-secondary-color">
                        New Delivery
                    </h1>
                    <p className="sm:text-xl text-lg shadow-md sm:shadow-lg font-body animate-float text-clear-white mb-10">
                        Your interplanetary delivery system
                    </p>
                </div>
        </div>
    )
}
