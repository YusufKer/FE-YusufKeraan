import videoSRC from "./video.mp4";
import videoSRCMobile from "./videoMobile.mp4";

export default function Banner(){
    return (
        <section className="relative grid lg:grid-cols-5">
            <div className="lg:hidden">
                <video 
                    src={videoSRCMobile}
                    loop 
                    autoPlay={true}
                    className="w-full h-full object-cover" 
                /> 
            </div>
            <div className="hidden lg:block lg:col-span-3 min-h-[75vw] lg:min-h-0">
                <video 
                    src={videoSRC}
                    loop 
                    autoPlay={true}
                    className="w-full h-full object-cover" 
                /> 
            </div>
            <div className="@container banner-background-image h-full bg-white lg:bg-[#F0F0FA] lg:col-span-2 bg-contain bg-no-repeat bg-right-bottom">
                <div className="lg:@md:bg-black/10 lg:@xl:bg-transparent px-4 lg:px-[30px] h-full space-y-5 lg:space-y-[30px] pt-[26px] sm:pt-10 lg:py-10">
                    <h1 className="font-np-bold-cond text-feature-1-mobile lg:text-feature-1 lg:max-w-[333px] uppercase">check out our latest gear</h1>
                    <p className="md:max-w-[500px] lg:max-w-[238px] text-xs leading-tight">Advanced tech, superior comfort and all performance is what our latest UA gear is all about. Built to go further, push hard and break your boundaries.</p>
                    <button className="bg-black text-white py-4 px-16 w-full sm:w-fit">Shop UA New Arrivals</button>
                </div>
            </div>
        </section>
    )
}