let urlName=document.getElementById('nameInput');
let urlPath=document.getElementById('urlInput');

let urlsContainer=[] //we create a container for our data which is an array we will save our 
// object here 

if(localStorage.getItem('allUrl'))///if it's not null , null by default is false , so here if this condition is not nul it will show , if it's null nothing will be shown
    {
urlsContainer=JSON.parse(localStorage.getItem('allUrl')) // do this
displayurls() /// display products that are saved in local storage
}

function addUrls() /// here we add our data from input (id's) and save values comes from user in this object
{
let url={
    name:urlName.value, // when user type data here it will be saves in name where i'll save it
    category:urlPath.value,
}
urlsContainer.push(url)
displayurls() 
localStorage.setItem('allUrl',JSON.stringify(urlsContainer))
}
function displayurls()// this function to show data that are saved in the browser using the data we already saved it as an object in array
{
let cartona=''
for(let i=0;i<urlsContainer.length;i++){
    cartona+=`
    <tr>
    <td>${i + 1}</td>
    <td>${urlsContainer[i].name}</td>
    <td><a class="btn bg-purple visit" href="${urlsContainer[i].category}" target="_blank"><i class="fa-solid fa-eye"></i> Visit</a></td>
    <td><button class="btn bg-danger delete-btn" onclick="deleteUrl(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
</tr>`  
    
}
document.getElementById('tableContent').innerHTML=cartona
}
function deleteUrl(index){
    urlsContainer.splice(index,1);
    displayurls()
    localStorage.setItem('allUrl',JSON.stringify(urlsContainer))  
}