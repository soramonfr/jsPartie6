let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
let ul_elt = document.getElementById("dayslist");

// Possibilité 1
for (let i = 0; i < days.length ; i++) {
    let li_elt = document.createElement("li");
    li_elt.textContent = days[i];
    if (days[i] === "Samedi" || days[i] === "Dimanche" ) {
        li_elt.style.fontWeight = "bold";
    }
    ul_elt.appendChild(li_elt);
}

// Possibilité 2
// days.forEach(function (val) {
//     let li_elt = document.createElement("li");
//     li_elt.textContent = val;
//     if (val === "Samedi" || val === "Dimanche" ) {
//         li_elt.style.fontWeight = "bold";
//     }
//     ul_elt.appendChild(li_elt);
// });
