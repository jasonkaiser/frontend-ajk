document.addEventListener("click", function(e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        myModal.show();
    }
})

var div = document.getElementById('gallery-button');
var button = document.getElementById('button-gallery');
var display = 0;

function hideShow(){
    if(display == 1){
        div.style.display = 'block';
        display = 0;
        if (button.innerText === 'Show Gallery') {
            button.innerText = 'Hide Gallery'; 
        }
        div.style.opacity = 1;
 
    }
    else
    {
        div.style.opacity = 0;
        div.style.transition = 1;
       
        display = 1;
        button.innerText = 'Show Gallery';
    
        
 

    }
}
