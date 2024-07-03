function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;

    // Ocultar todas las tab-content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    }

    // Remover la clase "active" de todos los tab-buttons
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }

    // Mostrar el contenido actual y agregar la clase "active" al botón correspondiente
    document.getElementById(tabName).className += " active";
    evt.currentTarget.className += " active";
}

// Mostrar por defecto el primer tab al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-button").click();
});