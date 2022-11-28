
function slide(){
    var curr=1
    setInterval(()=>{
        console.log(document.getElementById("imag").currentSrc)
        document.getElementById("imag").src=`https://cyf-image-carousel.netlify.app/sample-images/kitten${curr}.jpg`
        if(curr==3){
            curr=1
        }else{
            curr+=1
        }
        
    },2000)
}
slide()