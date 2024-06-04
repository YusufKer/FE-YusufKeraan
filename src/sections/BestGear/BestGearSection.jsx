import Carousel from "../../components/Carousel";
import { dummyData } from "./data.js";

export default function BestGearSection(){

    const renderCards = () => dummyData.map(item => <>
        <div key={item.title} className="min-w-[230px]">
            <figure style={{backgroundImage:`url(${item.imageSRC})`}} className="w-full aspect-square bg-yellow-300">
                <img src={item.imageSRC} alt={item.title} className="w-full h-full object-contain"/>
            </figure>
            <a className="underline text-xs font-np-bold" href={item.link}>Shop Now</a>
        </div>
        </>)

    return (
        <section className="contain space-y-[13px]">
            <h2 className="font-np-bold text-feature-5-mobile lg:text-feature-5">Our best gear</h2>
            <p className="text-sm leading-none">Unlock your potential with the best UA Gear</p>
            <Carousel>
                { renderCards() }
            </Carousel>
        </section>
    )
}