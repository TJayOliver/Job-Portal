import axios from "axios";

// retrieve all jobs and display it on the jobs page
export const allJobs = async(setJobs, setloading, signal) =>{
    try{
        const response = await axios.get('http://localhost:4040/api/jobs-get', {signal});
        setJobs(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
}

// retrieve jobs and display it on jobs description page
export const displayJobsOnDescriptionPage = async(setJobs, setloading, signal) =>{
    try{
        const response = await axios.get('http://localhost:4040/api/jobs-description-page-get', {signal});
        setJobs(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
}

// retrieve featured jobs and display it on the homepage
export const featuredJobs = async(setFeatured, setloading, signal) =>{
    try{
        const response = await axios.get('http://localhost:4040/api/jobs-featured', {signal});
        setFeatured(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
}

// retrieve all categories and display it on the jobs page
export const allCategories = async(setCategories, signal) =>{
    try{
        const response = await axios.get('http://localhost:4040/api/categories-get', {signal});
        setCategories(response.data)
    }catch(error){
        console.error(error.message)
    }
}

// retrieve jobs description and display it  on jobs description page
export const jobdescription = async(setJobs, setloading, id, signal) =>{
    try{
        const response = await axios.get(`http://localhost:4040/api/jobs-description/${id}`, {signal});
        setJobs(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
};

// job categories request
export const jobscategory = async(category, signal) =>{
    try{
        const response = await axios.get(`http://localhost:4040/api/jobs-category/${category}`, {signal});
        setJobs(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
};



// retrieve featured scholarships and display it on the homepage
export const featuredScholarships = async(setFeatured, setloading, signal) =>{
    try{
        const response = await axios.get('http://localhost:4040/api/scholarships-featured', {signal});
        setFeatured(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
}

export const allScholarships = async(setScholarship, setloading, signal) =>{
    try{
        const response = await axios.get('http://localhost:4040/api/scholarships-get', {signal});
        setScholarship(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
}

// retrieve scholarships description and display it  on scholarships description page
export const scholarshipsdescription = async(setScholarship, setloading, id, signal) =>{
    try{
        const response = await axios.get(`http://localhost:4040/api/scholarships-description/${id}`, {signal});
        setScholarship(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
};

// retrieve scholarships articles and display it on scholarships page
export const articleScholarship = async(setArticleScholarship, setloading, signal) =>{
    try{
        const response = await axios.get('http://localhost:4040/api/articles-scholarship', {signal});
        setArticleScholarship(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
}

export const governmentScholarships = async(setGovernmentScholarship, setloading, signal) =>{
    try{
        const response = await axios.get('http://localhost:4040/api/scholarships/government', {signal});
        setGovernmentScholarship(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
}

export const organizationalScholarships = async(setOrganizationalScholarship, setloading, signal) =>{
    try{
        const response = await axios.get('http://localhost:4040/api/scholarships/organizational', {signal});
        setOrganizationalScholarship(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
}

export const privateScholarships = async(setPrivateScholarship, setloading, signal) =>{
    try{
        const response = await axios.get('http://localhost:4040/api/scholarships/private', {signal});
        setPrivateScholarship(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
}

export const researchScholarships = async(setResearchScholarship, setloading, signal) =>{
    try{
        const response = await axios.get('http://localhost:4040/api/scholarships/research', {signal});
        setResearchScholarship(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
}

export const internationalScholarships = async(setInternationalScholarship, setloading, signal) =>{
    try{
        const response = await axios.get('http://localhost:4040/api/scholarships/international', {signal});
        setInternationalScholarship(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }

}


// retrieve all articles
export const allArticles = async(setArticles, setloading, signal) =>{
    try{
        const response = await axios.get('http://localhost:4040/api/articles-get', {signal});
        setArticles(response.data)
        setloading(false)
    }catch(error){
        console.log(error.message)
    }
}

// articles description page
export const articlesDescription = async(setArticles, setloading, id, signal) =>{
    try{
        const response = await axios.get(`http://localhost:4040/api/articles-description/${id}`, {signal});
        setArticles(response.data)
        setloading(false)
    }catch(error){
        console.error(error.message)
    }
}

// retrieve main featured articles
export const MainFeaturedArticles = async(setMainFeatured, setloading, signal) =>{
    try{
        const response = await axios.get('http://localhost:4040/api/articles-mainfeatured', {signal});
        setMainFeatured(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
}

export const featuredArticles = async(setFeatured, setloading, signal) =>{
    try{
        const response = await axios.get('http://localhost:4040/api/articles-featured', {signal});
        setFeatured(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
}

export const mustReadArticles = async(setMustRead, setloading, signal) =>{
    try{
        const response = await axios.get('http://localhost:4040/api/articles-mustread', {signal});
        setMustRead(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
}

export const displayArticlesOnDescriptionPage = async(setArticlesonDescriptionPage, setloading, signal) =>{
    try{
        const response = await axios.get('http://localhost:4040/api/articles-description-page-get', {signal})
        setArticlesonDescriptionPage(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
}