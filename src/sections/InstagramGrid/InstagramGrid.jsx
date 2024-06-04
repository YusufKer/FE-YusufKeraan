import { dummyData } from "./data"

export default function InstagramGrid(){

    const renderCards = () => dummyData.map(item => (
        <a className={`block bg-red-100 ${item.video ? 'col-span-2 row-span-2' : ''}`}>
            <feature>
                { 
                item.video ? 
                    <video src={item.src} loop autoPlay={true} className="w-full h-full object-cover" muted/>  : 
                    <img className="h-full w-full object-cover object-right" src={item.src} alt="" /> 
                }
            </feature>
        </a>
    ))

    return(
        <section className="contain space-y-[13px]">
            <h2 className="font-np-bold text-feature-5-mobile lg:text-feature-5">What's happening on Instagram</h2>
            <p className="text-sm leading-none">Don't miss out on the latest news and updates from Under Armour.</p>
            <div className="grid sm:col-span-2 lg:grid-cols-4 gap-4">
                { renderCards() }
            </div>
        </section>
    )
}