var curr=1;
var x=null;
function slide(){
  
    document.getElementById("ab").addEventListener("click",()=>{
        console.log("ab check")
        autoBackword()
    })
    document.getElementById("prev").addEventListener("click",()=>{
        console.log("prev check")
        prev()
    })
    document.getElementById("stop").addEventListener("click",()=>{
        console.log("stp check")
        stop()
    })
    document.getElementById("fwd").addEventListener("click",()=>{
        console.log("fwd check")
        fwd()
    })
    document.getElementById("af").addEventListener("click",()=>{
        console.log("af check")
        autoForward()
    })
}


function autoBackword(){
    
    x=setInterval(()=>{
        console.log("ab is running")
        if(curr==1){
            curr=3
        }else{
            curr-=1
        }
        document.getElementById("imag").src=`https://cyf-image-carousel.netlify.app/sample-images/kitten${curr}.jpg`

        
    },2000)
}
function prev(){


        if(curr==1){
            curr=3
        }else{
            curr-=1
        }
        document.getElementById("imag").src=`https://cyf-image-carousel.netlify.app/sample-images/kitten${curr}.jpg`
   
        
    }
function fwd(){


        if(curr==3){
            curr=1
        }else{
            curr+=1
        }
        document.getElementById("imag").src=`https://cyf-image-carousel.netlify.app/sample-images/kitten${curr}.jpg`

    }
function stop(){
        clearInterval(x)
        document.getElementById("imag").src=`https://cyf-image-carousel.netlify.app/sample-images/kitten${curr}.jpg`

        
    }

function autoForward(){

    console.log("autof ",curr)
    x=setInterval(()=>{
        console.log("af is running")

        if(curr==3){
            curr=1
        }else{
            curr+=1
        }
        document.getElementById("imag").src=`https://cyf-image-carousel.netlify.app/sample-images/kitten${curr}.jpg`
        
    },2000)
}

window.onload=slide