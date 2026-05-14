let nåverende = 1;

function slide(retning) {
    const spor = document.querySelector(".karusellspor");
    const bokser = document.querySelectorAll(".boks")
    const boksBredde = bokser[0].offsetWidth;

    bokser[nåverende].classList.remove("active");
    nåverende += retning;

    if (nåverende < 0) nåverende = bokser.length - 1; // hopper til siste
    if (nåverende >= bokser.length) nåverende = 0;     // hopper til første

    bokser[nåverende].classList.add("active");

    spor.style.transform = `translateX(-${nåverende * boksBredde - boksBredde}px)`;
}