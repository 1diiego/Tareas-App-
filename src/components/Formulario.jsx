import React from "react";

export function Formulario({
  titulo,
  setTitulo,
  descripcion,
  setDescripcion,
  importante,
  setImportante,
  agregarTarea
})
{
    return(
    <>
      <div className="input-group my-4">
        <input
        type="text"
        className="form-control"
        placeholder="Ingrese el titulo de la tarea"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        />
      </div>

      <div className="input-group my-4">
        <input
        type="text"
        className="form-control"
        placeholder="Ingrese la descripcion de la tarea"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        />
      </div >
        <div className="importantee">
        <input
        type="checkbox"
        checked={importante}
        onChange={(e) => setImportante(e.target.checked)}/>

        <label className="ms-2">Marcar como Importante</label>
        </div>
    

      <div className="my-4">
        <button className="btn btn-success" onClick={agregarTarea}>Agregar Nota</button>
      </div>
    </>
  );
}