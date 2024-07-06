import type {CollectionEntry } from "astro:content";
interface PortfolioHomeContentProps {
    portfolios: [CollectionEntry<'portfolios'> ]
}
const PortfolioHomeContent: React.FC<PortfolioHomeContentProps> = ({ portfolios }) => {
    return (
        <article className="grid md:grid-cols-2 px-5 lg:px-20 gap-5 relative">
            {
                portfolios.map(item => (
                    <div className="shadow-lg relative overflow-hidden rounded-lg group" key={item.slug}>
                        <img src={item.data.image.src} alt={item.slug} width={item.data.image.width} height={300} className={`object-cover h-52 xl:h-72 object-top rounded-lg w-full`}/>
                        <div className="absolute group-hover:max-h-full max-h-0 h-[60%] transition-all duration-500 from-gray-800 to-blue-500 -right-10 bottom-0 blur-[60px] bg-gradient-to-t dark:blur-[180px] dark:to-gray-900 w-full" />
                        <div className="absolute bottom-0 w-full min-h-full flex items-center justify-center text-center p-3 font-roboto group-hover:backdrop-blur-sm">
                            <span  className="border-2 px-4 py-2 rounded-full text-white group-hover:translate-x-0 duration-500 transition-all translate-x-[500px]">
                                {item.data.title}
                            </span>
                        </div>
                    </div>
                ))
            }

        </article>)
}
export default PortfolioHomeContent