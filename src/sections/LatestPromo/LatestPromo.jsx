import Carousel from "../../components/Carousel";
import { dummyData } from "./data.js";

export default function LatestPromo(){

    const renderCards = () => dummyData.map(item => <>
        <a href={item.link} key={item.title} className="block min-w-[230px]">
            <figure style={{backgroundImage:`url(${item.imageSRC})`}} className="w-full aspect-square bg-yellow-300">
                <img src={item.imageSRC} alt={item.title} className="w-full h-full object-contain"/>
            </figure>
        </a>
        </>)

    return (
        <section className="contain space-y-[13px]">
            <h2 className="font-np-bold text-feature-5-mobile lg:text-feature-5">Discover our latest promotions</h2>
            <p className="text-sm leading-none">Get the best deals on the best gear.</p>
            <Carousel>
                { renderCards() }
            </Carousel>
        </section>
    )
}