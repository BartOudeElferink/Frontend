// Het script mag pas uitgevoerd worden wanneer de pagina geladen is.

document.addEventListener("DOMContentLoaded", function (keuze) {

   var projectknop = document.querySelector('#projectknop');
    var projectcontent = document.querySelector('#project');
     var stageknop = document.querySelector('#stageknop');
    var stagecontent = document.querySelector('#stage');

    //    We voegen de class .hidden toe aan de #content met javascript.
    //    Als javascript niet beschikbaar is wordt de content dus NIET verborgen.
    projectcontent.classList.add('hidden');

    //    Wanneer er op de button geklikt wordt voeren we een functie uit.
    projectknop.addEventListener("click", function () {

        //        Als de button nu aangevinkt is wordt het menu zichtbaar, en anders verborgen

        if (projectknop.checked) {
            projectcontent.classList.remove('hidden');

        } else {
            projectcontent.classList.add('hidden');
        }
    });

    stagecontent.classList.add('hidden');

    stageknop.addEventListener("click", function () {

        if (stageknop.checked) {
            stagecontent.classList.remove('hidden');

        } else {
            stagecontent.classList.add('hidden');
        }
    });
});

