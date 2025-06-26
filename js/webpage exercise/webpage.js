function createcard(title,cName,views,months,duration,thumbnail){

    let viewstr
    if (views<100000)
    {
         viewstr=`${views}K`;
    }
    else if(views>1000000)
        {
             viewstr=`${views/1000000}M`;
    }
    else 
    {
           viewstr=`${views/1000}K`;
    }

    
let html=` <div class="card">

            <div class="image">
                <img src="${thumbnail}"
                    alt="">
                     <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h3>${title}</h3>
                <p>${cName}. ${viewstr} views . ${months} months old </p>
            </div>

        </div>`
        document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + html;



}
createcard("Installing VS Code &How Websites Work| Sigma Web Development","Puru",10000000,2,"12:06","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA");
createcard("Installing VS Code &How Websites Work| Sigma Web Development","Puru",100000,2,"12:06","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA");