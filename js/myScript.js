const progress=document.querySelector('.progress-bar');

setTimeout(()=>{
    progress.style.opacity=1;
    progressr.style.width=progress.getAttribute('data-done')+'%';
},500)

