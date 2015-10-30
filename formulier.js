// deze code heb ik geleend van www.weggeefcode.nl door HvA studenten

// Het script mag pas uitgevoerd worden wanneer de pagina geladen is.

document.addEventListener("DOMContentLoaded", function (keuze) {

   var projectknop = document.querySelector('#projectknop');
    var projectcontent = document.querySelector('#project');
     var stageknop = document.querySelector('#stageknop');
    var stagecontent = document.querySelector('#stage');

    //    Ik voeg de class .hidden toe aan de #content met javascript.
    //    Als javascript niet beschikbaar is wordt de content dus NIET verborgen.
    projectcontent.classList.add('hidden');

    // Wanneer er op de button geklikt wordt voer ik een functie uit.
    projectknop.addEventListener("click", function () {

        // Als de button nu aangevinkt is wordt het menu zichtbaar, en anders verborgen

        if (projectknop.checked) {
            projectcontent.classList.remove('hidden');
             stagecontent.classList.add('hidden');
           document.getElementById("stageknop").checked = false;

        } else {
            projectcontent.classList.add('hidden');
        }
    });

    stagecontent.classList.add('hidden');

    stageknop.addEventListener("click", function () {

        if (stageknop.checked) {
            stagecontent.classList.remove('hidden');
            projectcontent.classList.add('hidden');
            document.getElementById("projectknop").checked = false;

        } else {
            stagecontent.classList.add('hidden');
        }
    });
});

