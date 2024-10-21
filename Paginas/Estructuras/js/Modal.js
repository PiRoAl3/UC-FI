// Obtén todos los botones "Read More"
const botonesAbrirModal = document.querySelectorAll(".taller");

// Obtén todos los modales
const modales = document.querySelectorAll(".modal");

// Recorre cada botón "Read More"
botonesAbrirModal.forEach((boton, index) => {
    // Asocia un evento al hacer clic en el botón
    boton.addEventListener("click", () => {
        // Muestra el modal correspondiente
        modales[index].showModal();
        document.querySelector('.pagina').classList.add('paginaOpacity');
    });
});

// Obtén todos los botones "cerrar" de los modales
const botonesCerrarModal = document.querySelectorAll(".cerrar-modal");

const botonesCruzModal = document.querySelectorAll(".close-btn");

// Recorre cada botón "cerrar"
botonesCerrarModal.forEach((boton, index) => {
    // Asocia un evento al hacer clic en el botón
    boton.addEventListener("click", () => {
        // Cierra el modal correspondiente
        modales[index].close();
        document.querySelector('.pagina').classList.remove('paginaOpacity');
    });
});

// Recorre cada botón "cerrar"
botonesCruzModal.forEach((boton, index) => {
    // Asocia un evento al hacer clic en el botón
    boton.addEventListener("click", () => {
        // Cierra el modal correspondiente
        modales[index].close();
        document.querySelector('.pagina').classList.remove('paginaOpacity');
    });
});

//Cerrar los modales al hacer clic fuera de estos
modales.forEach((modales, index) => {
    window.addEventListener("click", () => {
        if(window.target == modales[index]){
            modales[index].close();
            document.querySelector('.pagina').classList.remove('paginaOpacity');
        }
    })
})
 