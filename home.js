//stories slider
let stories = document.querySelector('.stories')
let innerStories = document.querySelector('.inner-stories')

let pressed = false
let startX;
let x;

stories.addEventListener('mousedown',(e)=>{
    pressed=true
    startX = e.offsetX-innerStories.offsetLeft
    innerStories.style.cursor='grabbing'
})
stories.addEventListener('mouseenter',()=>{
    innerStories.style.cursor='grab';
})
stories.addEventListener('mouseleave',()=>{
    innerStories.style.cursor='default';
    
})
stories.addEventListener('mouseup',()=>{
    pressed = false
    innerStories.style.cursor='grab';
    
})
stories.addEventListener('mousemove',(e)=>{
    if(!pressed) return;
    e.preventDefault()
    x = e.offsetX
    innerStories.style.left=`${x-startX}px`   

    checkWidthBoundary()
})

function checkWidthBoundary(){
    let outerWidth = stories.getBoundingClientRect()
    let innerWidth = innerStories.getBoundingClientRect()

    if(parseInt(innerStories.style.left)>0){
        innerStories.style.left = '0px'
    }else if(innerWidth.right<outerWidth.right){
        innerStories.style.left = `-${innerWidth.width-outerWidth.width}px`
    }
}
checkWidthBoundary()

// posts slider
let posts = document.querySelector('.posts')
let innerPosts = document.querySelector('.inner-posts')

let isDown = false
let startY;
let y;


posts.addEventListener('mousedown',(e)=>{
    isDown=true
    startY=e.offsetY-innerPosts.offsetTop
    posts.style.cursor='grabbing'
})
posts.addEventListener('mousedown',()=>{
    posts.style.cursor='grab'
})
posts.addEventListener('mouseleave',()=>{
    posts.style.cursor='default'
})
posts.addEventListener('mouseup',()=>{
    isDown=false
    posts.style.cursor='grab'
})
posts.addEventListener('mousemove',(e)=>{
    if(!isDown) return
    e.preventDefault()

    y = e.offsetY

    innerPosts.style.top= `${y-startY}px`
    checkHeightBoundary()

})

function checkHeightBoundary(){
    let outerHeight = posts.getBoundingClientRect()
    let innerHeight = innerPosts.getBoundingClientRect()


    if(parseInt(innerPosts.style.top)>0){
        innerPosts.style.top = '0px'
    }else if(innerHeight.bottom<outerHeight.bottom){
        innerPosts.style.top = `-${innerHeight.height-outerHeight.height}px`
    }
}
checkHeightBoundary()

// home button clicked
let homeButton = document.querySelector('.home')

homeButton.addEventListener('click',(e)=>{
    homeButton.classList.add('active')
})

// share button clicked
let shareButton = document.querySelector('.share')
let shareContainer = document.querySelector('.share-wrapper')
let container = document.querySelector('.container')

shareButton.addEventListener('click',()=>{
    shareContainer.style.display='flex'
    container.style.backgroundColor='rgba(255, 255, 255, 0.15)'
    container.style.filter='blur(3px)'
})
