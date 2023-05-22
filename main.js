
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");

let scroll = this.scrollY;
window.addEventListener("scroll", (event) => {
    scroll = this.scrollY;
    
});

function Height() {
    window.scrollTo({
        top: scroll 
    });
}

function next() {
    window.location.href = '#end';
    Height();
}

function prev() {
    window.location.href = '#invi';
    Height();
}


btnNext.onclick = next;
btnPrev.onclick = prev;