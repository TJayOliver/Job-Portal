import axios from "axios";

// retrieve all jobs and display it on the jobs page
export const allJobs = (setJobs, setloading) =>{
    axios.get('http://localhost:4040/api/jobs-get')
    .then((response) => {
        setJobs(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
}

export const displayJobsOnDescriptionPage = (setJobs, setloading) =>{
    axios.get('http://localhost:4040/api/jobs-description-page-get')
    .then((response) => {
        setJobs(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
}

// retrieve featured jobs and display it on the homepage
export const featuredJobs = (setFeatured, setloading) =>{
    axios.get('http://localhost:4040/api/jobs-featured')
    .then((response) => {
        setFeatured(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
}

// retrieve all categories and display it on the jobs page
export const allCategories = (setCategories) =>{
    axios.get('http://localhost:4040/api/categories-get')
    .then((response)=>{
        setCategories(response.data)
    }).catch(error => console.error(error.message))
}

// jobdescription request
export const jobdescription = (setJobs, setloading, id) =>{
    axios.get(`http://localhost:4040/api/jobs-description/${id}`)
    .then((response) => {
        setJobs(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
};

// job categories request
export const jobscategory = (category) =>{
    axios.get(`http://localhost:4040/api/jobs-category/${category}`)
    .then((response) => {
        setJobs(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
};



// retrieve featured scholarships and display it on the homepage
export const featuredScholarships = (setFeatured, setloading) =>{
    axios.get('http://localhost:4040/api/scholarships-featured')
    .then((response) => {
        setFeatured(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
}

export const allScholarships = (setScholarship, setloading) =>{
    axios.get('http://localhost:4040/api/scholarships-get')
    .then((response) => {
        setScholarship(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
}

// retrieve scholarships articles and display it on scholarships page
export const articleScholarship = (setArticleScholarship, setloading) =>{
    axios.get('http://localhost:4040/api/articles-scholarship')
    .then((response) => {
        setArticleScholarship(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
}

// retrieve all articles
export const allArticles = (setArticles, setloading) =>{
    axios.get('http://localhost:4040/api/articles-get')
    .then((response) => {
        setArticles(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
}

// articles description page
export const articlesDescription = (setArticles, setloading, id) =>{
    axios.get(`http://localhost:4040/api/articles-description/${id}`)
    .then((response) => {
        setArticles(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
}

// retrieve main featured articles
export const MainFeaturedArticles = (setMainFeatured, setloading) =>{
    axios.get('http://localhost:4040/api/articles-mainfeatured')
    .then((response) => {
        setMainFeatured(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
}

export const featuredArticles = (setFeatured, setloading) =>{
    axios.get('http://localhost:4040/api/articles-featured')
    .then((response) => {
        setFeatured(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
}

export const mustReadArticles = (setMustRead, setloading) =>{
    axios.get('http://localhost:4040/api/articles-mustread')
    .then((response) => {
        setMustRead(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
}

export const displayArticlesOnDescriptionPage = (setArticlesonDescriptionPage, setloading) =>{
    axios.get('http://localhost:4040/api/articles-description-page-get')
    .then((response) => {
        setArticlesonDescriptionPage(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
}