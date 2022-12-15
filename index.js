
let example = 113
const likeamount = document.getElementById("like")
likeamount.textContent = example + " likes"
const hBtn_1 = document.getElementById("hn-1")
hBtn_1.addEventListener("click", addLike)



/* function enableLike(){                              NOT WORKING
    const hBtn0 = document.getElementById("hn0")
    const hBtn1 = document.getElementById("hn1")
    const hBtn2 = document.getElementById("hn2")
    hBtn0.addEventListener("click", addLike0)
    hBtn1.addEventListener("click", addLike1)
    hBtn2.addEventListener("click", addLike2)
} */

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const post0el = document.getElementById("p0")
const morebtn = document.getElementById("more")

morebtn.addEventListener("click", function(){
    
    
    for(let i=0; i<posts.length; i++){
        console.log(i)
        post0el.innerHTML += `<section class="postchildren">
        <div class="container container-top">
        <img class="avatar" src=${posts[i].avatar} alt="a mad lad Vangogh">
        <div class="container">
            <h2>${posts[i].name}</h2>
            <p>${posts[i].location}</p>
        </div>
     </div>
     <div class="container container-mid">
         <img class ="post" src=${posts[i].post} alt="vangogh looking toward the camera with the sad expression.">
     </div>
     <div class="container container-images">
         <img id="hn${i}" src="images/icon-heart.png" alt="heart icon">
         <img src="images/icon-comment.png" alt="comment icon">
         <img src="images/icon-dm.png" alt="dm icon">
      </div>
     <div class="container container-bot">
         <h3>${posts[i].likes} likes</h3>
         <p><span>${posts[i].username}</span> ${posts[i].comment}</p>
      </div>
      </section>`
    }
   
    /* morebtn.removeEventListener("click", function(){}, false)         /*Doesn't work yet, Need an Update!*/
    /* enableLike() */                                                   /*Doesn't work yet, Need an Update!*/
    
})


/* First Post */
function addLike() {
    example += 1
    likeamount.textContent = example + " likes"
}
/* Fist Post End */





/* function addLike0() {                                              NOT WORKING
    posts[0].likes += 1
    likeamount.textContent = posts[0].likes + " likes"
}
function addLike1() {
    posts[1].likes += 1
    likeamount.textContent = posts[1].likes + " likes"
}
function addLike2() {
    posts[2].likes += 1
    likeamount.textContent = posts[2].likes + " likes"
} */