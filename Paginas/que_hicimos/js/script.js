document.addEventListener('DOMContentLoaded', () => {
    const dates = document.querySelectorAll('.date');
    let currentlyMoved = null;

    dates.forEach(date => {
        date.addEventListener('mouseenter', function() {
            // Regresa la opacidad del .info anterior
            if (currentlyMoved) {
                currentlyMoved.classList.remove('moved');
                const prevInfo = currentlyMoved.nextElementSibling;
                if (prevInfo && prevInfo.classList.contains('info')) {
                    prevInfo.classList.remove('info-opacity'); // Remover la clase info-opacity del elemento anterior
                }
            }

            // Mueve el nuevo elemento y muestra su .info
            this.classList.add('moved');
            const relatedInfo = this.nextElementSibling;
            if (relatedInfo && relatedInfo.classList.contains('info')) {
                relatedInfo.classList.add('info-opacity'); // Agrega la clase info-opacity al elemento actual
            }
            currentlyMoved = this;
        });
    });

    // Opcional: Para que el elemento regrese a su posición cuando se salga del área de los elementos .date
    document.addEventListener('mouseleave', function(event) {
        if (!event.target.classList.contains('date')) {
            if (currentlyMoved) {
                currentlyMoved.classList.remove('moved');
                const relatedInfo = currentlyMoved.nextElementSibling;
                if (relatedInfo && relatedInfo.classList.contains('info')) {
                    relatedInfo.classList.remove('info-opacity'); // Remover la clase info-opacity cuando el mouse sale del área
                }
                currentlyMoved = null;
            }
        }
    });
});
