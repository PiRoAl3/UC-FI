/*
@Author: Marco Antonio Moreno Guerra
@Creation date: 04/09/2020
@Last updated date: 04/09/2020
@Description:
  Este script de JS tiene como finalidad el facilitar la carga y renderización de información de los profesores del Depto de Hidráulica. 
  Además, facilita los cambios que pudieran existir; para modificaciones basta con: agregar, editar o eliminar los elementos del archivo profesores.json
  Las fotos de los profesores se encuentran en el directorio ./photos/ y tienen diversos nombres y formatos; el nombre de cada una se carga
  como propiedad de cada objeto del JSON file para obtener dicha fotografía.
*/

$(() => {
  getProfesores()
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    processJSON(data);
  })
  .catch(err => {
    console.error(err)
  })
});

let getProfesores = async () => {
  const profesores = await fetch("../assets/js/profesores_estructuras.json", {
    method: "GET"
  });
  return profesores;
};

let processJSON = profesores => {
  for (let item in profesores) {
    let teacher_subjects_text = '';
    for (let subject of profesores[item].teaching_subjects) {
      teacher_subjects_text += `<span class="badge badge-danger" style="font-size:0.75em; margin: 0.5em;">${subject.nombre}</span>`;
    }
    $('#lista-profesores').append(
      `
        <div class="col-6 col-md-4 pb-4 text-center">
          <div class="card h-100">
            <img style="max-height: 100%" loading="lazy" src="${profesores[item].photo_name || 'default_photo.png'}" class="card-img-top" alt="Foto ${item}"/>
  
            <div class="card-body text-center">
              <h5 class="card-title">${item}</h5>
              <p class="card-text">
                <span class="dip-tag-title element-content">Email:</span> <a class="extensions" href="mailto: ${profesores[item].email}" target="_blank"><span class="dip-tag-content">${profesores[item].email || 'Sin información'} </span></a><br/>
                <span class="dip-tag-title element-content">Asignaturas:</span> <span class="dip-tag-content">${teacher_subjects_text || 'Sin información'} </span><br/>
                <span class="dip-tag-title element-content">Acerca del profesor:</span> <span class="dip-tag-content">${profesores[item].about || 'Sin información'} </span><br/>
                <span class="dip-tag-title element-content">Especialización:</span> <span class="dip-tag-content">${profesores[item].specialization || 'Sin información'} </span><br/>
                <span class="dip-tag-title element-content">Sitio web:</span> <span class="dip-tag-content">${profesores[item].website || 'Sin información'} </span> 
              </p>
            </div>
          </div>
        </div>
      `
    );
  }
};