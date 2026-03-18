// btn
const allBtn = document.querySelectorAll(".btn-all")

document.getElementById("all-btn").onclick = function(){
    setActive(this)
    console.log('All tab btn');
}
document.getElementById("open-btn").onclick = function(){
    setActive(this)
    console.log('All tab btn');
}
document.getElementById("close-btn").onclick = function(){
    setActive(this)
    console.log('All tab btn');
}

function setActive(btn){
    allBtn.forEach((b) => {
     b.classList.remove('bg-gray-500','text-white')
     b.classList.add("bg-white")
    });
    btn.classList.remove("bg-white")
    btn.classList.add('bg-gray-500','text-white')
    
}