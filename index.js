//let url = "https://fakestoreapi.com/products/1";

//let url = "https://api.imgur.com/3/gallery/hot/1/1?showViral=true&mature=true&album_previews=true";
let home = document.getElementById("home");

let url = "https://api.unsplash.com/photos/?client_id=PSUYYrJVa_xzB3LRwAgciYU4EPZM9_fNoA61RRTVLZY";

let x = fetch(url);

x.then(function(res)
{
    return res.json();
})
.then(function(res)
{
    appendData(res);
})
.catch(function(err)
{
    console.log(err);
})

function appendData(res)
{
    //console.log(res);

    res.map(function(el)
    {   
        console.log(el);
        let div = document.createElement("div");
        let image = document.createElement("img");
        let title = document.createElement("p");

        image.src = el.urls.regular;
        title.innerText = "lorem ipsum";
        div.append(image,title);
        home.append(div);
        //console.log(el.urls.regular);
    })
}

