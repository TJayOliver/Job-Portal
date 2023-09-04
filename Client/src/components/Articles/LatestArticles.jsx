import ArticleBox from "./articleBox";

const LatestArticles = () =>{
    return(
        <>
        <div className=" mt-4 h-0.5 bg-black w-full relative">
            <div className=" w-36 h-10 bg-black p-1 ">
                <p className=" whitespace-nowrap font-bold text-white text-left ">Latest Articles
                </p>
            </div>
        </div>
        
        <div className=" flex flex-wrap gap-12 mt-14">
            <ArticleBox />
            <ArticleBox />
            <ArticleBox />
            <ArticleBox />
            <ArticleBox />
            <ArticleBox />
            <ArticleBox />
            <ArticleBox />
            <ArticleBox />
        </div>
        
        
       
        </>
    )
}

export default LatestArticles;