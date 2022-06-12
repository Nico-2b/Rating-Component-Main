window.addEventListener("DOMContentLoaded", () => {

const notes = document.querySelectorAll(".note")
const btn = document.querySelector("button");
const container = document.querySelector(".content")
notes.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        const note = e.target;
        if(note.classList.contains("active")) {
            note.setAttribute("class", "note")
        } else {

            notes.forEach((n) => {
                n.setAttribute("class", "note")
            })
            note.setAttribute("class", "note active")
        }
       
    })
})


btn.addEventListener("click", async (e) => {
    try {
        var r = document.querySelector(".active")
        if(r) {

          const response =  await fetch(`/form/${r.id}`)
            const data  = await response.text();
            var main = document.querySelector("main");
            
         main.innerHTML = data;
        } else {
            r = 0;
        const response =    await fetch(`/form/${r}`)
            const data  = await response.text();
            var error = document.querySelector(".error");
            
         error.innerHTML = data;
        }
    } catch (error) {
        throw error;
    }
   
})























})