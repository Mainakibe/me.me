// upload button clicked
let uploadButton = document.querySelector('.plus')
let uploadContainer = document.querySelector('.upload')
let container = document.querySelector('.container')

uploadButton.addEventListener('click',()=>{
    uploadButton.classList.add('active')
    uploadContainer.style.display='flex'
    container.style.backgroundColor='rgba(255, 255, 255, 0.15)'
    container.style.filter='blur(3px)'
})