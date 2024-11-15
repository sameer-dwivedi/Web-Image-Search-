let container = document.getElementById("container");
let searchbox = document.getElementById("searchbox");
let search_results = document.getElementById("search-results");
let search_field = document.getElementById("search-field");
let search_btn = document.getElementById("search-btn");
let more_results = document.getElementById("more-results");
// console.log(search_field.value);
let keyword="";
let page =1;
let accesskey="4dPLgnm9rkfhQ9IVF_jsrSqHZ3-5FIkzHH-_MHfKFo0";
async function showimg() {
    keyword=search_field.value;
    // console.log(query);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;
    let response=await fetch(url);
    let data=await response.json();
    // console.log(data);
    let results=data.results;
    results.map((result)=>{
        let image=document.createElement('img');
        image.src=result.urls.small;
        let imagelink=document.createElement('a');
        imagelink.href=result.links.html;
        imagelink.target="_blank";
        imagelink.append(image);
        search_results.appendChild(imagelink);
    })
    
}
function search(e) {
    // e.preventDefault();
    page=1;
    showimg();
    more_results.style.display="inline-block";
}
function showmore() {
    page=page+1;
    showimg();
    search_results.scrollBy=20;
}