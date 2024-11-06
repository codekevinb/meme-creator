const access key=""
const formEl=document.querySelector("form")
const inputEl=document.getElementById("search-input")
const searchResults=document.querySelector("search-results")
const showMore=document.getElementById("show-more-button")


let inputData=""
let page=1;
function search images(){
  inputData=inputEl.ariaValueMax;
  const url=`https:api.unplash.com/search/photos?page=${page}&query=${inputData}&client-id=${accessKey}`
}
const response =await fetch(url)
const data =awai response.json()
