//get elements
const removeImg=document.getElementById('removeImg');
const refreshImg=document.getElementById('refreshImg');
const collection = document.querySelectorAll('.collection img');//returns node list
const collageArea=document.getElementById('collageArea');

// //reload images
$('#refreshImg').click(function(){
    document.getElementById('holder').innerHTML='';
   getImages(getRandomNumber())
})

getImages(1)

function getRandomNumber() {
    var x = Math.floor((Math.random() * 10) + 1);
    return x
}

function getImages(p){
    fetch(`https://api.unsplash.com/photos?page=${p}&client_id=_wChPaD1XboPFxC4-pFjJDDCHL-kBuiI64dc8afCH34`)
    .then(response =>
        response.json()
    )
    .then(photos => {
        let i = 0;
        for (let i = 0; i <9; i++) {
            const photo = photos[i];
            let t=`<img src="${photo.urls.thumb}" onclick="imgClick('${photo.urls.thumb}')" alt="${photo.alt_description}">`
            document.getElementById('holder').innerHTML+=t;            
        }
    })
}

function imgClick(src){
    console.log(src)
    let newImg=document.createElement('img');
    newImg.setAttribute('src',src);
    collageArea.appendChild(newImg);
    newImg.classList.add('collageImage');
    $(function(){
        $('.collageImage').draggable({
            containment: 'parent'
        });
    });
}

//remove images 
$('#removeImg').click(function(){
    collageArea.innerHTML=''
})
