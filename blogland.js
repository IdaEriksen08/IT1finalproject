const lesKnapp = document.querySelector(".les")
const lesKnapp2 = document.querySelector(".les2")
const lesmer = document.querySelector("#lesmer")
const lesMer = document.querySelector("#lesMer")

lesKnapp.addEventListener("click", function() {
    lesmer.classList.toggle("active")

    if (lesmer.classList.contains("active")) {
        lesKnapp.innerHTML = "LES MER"
    } else {
        lesKnapp.innerHTML = "LES MINDRE"
    }

})

lesKnapp2.addEventListener("click", function() {
    lesMer.classList.toggle("active")

    if (lesMer.classList.contains("active")) {
        lesKnapp2.innerHTML = "LES MER"
    } else {
        lesKnapp2.innerHTML = "LES MINDRE"
    }

})