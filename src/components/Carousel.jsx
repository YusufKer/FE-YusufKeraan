export default function Carousel({ children }){
    return (
        <div className="flex lg:grid grid-cols-4 gap-2.5 overflow-auto">
            { children }
        </div>
    )
}