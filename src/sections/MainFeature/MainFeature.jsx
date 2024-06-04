export default function MainFeature(){
    return(
        <section className="contain">
            <div 
                className="
                    main-section-background-image
                    contain
                    bg-no-repeat
                    bg-contain 
                    sm:bg-cover 
                    flex 
                    justify-end 
                    items-center
                    flex-col
                    sm:flex-row
                    -mx-4
                    sm:mx-0
                " 
            >
                <div className="w-full sm:hidden bg-red-100/50 my-4" style={{aspectRatio:"393/474"}}></div>
                <div className="w-full sm:w-2/3 lg:max-w-[453px] text-black sm:text-white sm:p-[55px] space-y-5 sm:space-y-8 z-50">
                    <p className="font-np-bold-cond">Project Rock</p>
                    <h2 className="font-np-bold text-feature-2-mobile lg:text-feature-2">EVERY SIDE OF STRONG</h2>
                    <p className="text-xs">The Underground collection is inspired by the idea of a Project Rock fight club. A place where we push each other harder to make each other stronger. A drop dedicated to you and your crew. The neon colourways are a reflection of the energy we bring to every rep, every set and every challenge.</p>
                    <button className="border border-black sm:border-white sm:text-white py-4 px-16 w-full sm:w-fit">Shop Project Rock</button>
                </div>
            </div>
        </section>
    )
}