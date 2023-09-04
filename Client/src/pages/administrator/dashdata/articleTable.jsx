import ArticleTableBox from "../../../components/Dashboard/articleTableBox";

const articleTable = () =>{
    return(
        <div className="h-screen md:grid md:place-content-center bg-gray-300">
            <div className="flex h-[40rem] w-[68rem] bg-white rounded-md p-3 md:p-5 overflow-x-hidden">
                <div className=" flex flex-col md:flex-row md:flex md:flex-wrap gap-x-8 gap-y-2 justify-start">
                <ArticleTableBox />
               <ArticleTableBox />
               <ArticleTableBox />
               <ArticleTableBox />
               <ArticleTableBox />
               <ArticleTableBox />
               <ArticleTableBox />
               <ArticleTableBox />
               <ArticleTableBox />
               <ArticleTableBox />
               <ArticleTableBox />
                </div>
               
            </div>
        </div>
    )
};

export default articleTable;