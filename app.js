const images = document.querySelectorAll('.image')
const popup = document.querySelector('.popup')
const popupImg = document.querySelector('.popup .popupIMG')
const pupupClose = document.querySelector('.popup a')
const backdrop = document.querySelector('.backdrop')




images.forEach((Image,index) =>{
    Image.addEventListener('click',(e)=>{
       popup.classList.add('activePopup')
       backdrop.classList.add('active')

      

        
       popupImg.setAttribute('src', e.target.src)
    })
})
pupupClose.addEventListener('click', (e)=>{
    popup.classList.remove('activePopup')
    backdrop.classList.remove('active')

    

})