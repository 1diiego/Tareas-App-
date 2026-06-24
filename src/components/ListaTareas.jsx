import React, { Fragment, useEffect, useRef, useState } from "react";
import { v4 as uuid_v4 } from "uuid";
import { Formulario } from "./Formulario";
import "./ListaTareas.css";


export function ListaTareas() {
    const [descripcion, setDescripcion] = useState("");
    const [titulo, setTitulo] = useState("");
    const [importante, setImportante] = useState(false);
    const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem("tareas");

      return tareasGuardadas
        ? JSON.parse(tareasGuardadas)
        : [];});


    useEffect(() => {console.log("Guardando...", tareas); localStorage.setItem("tareas", JSON.stringify(tareas));}, [tareas]);
    
    function eliminarTarea(id) {
    setTareas(
        tareas.filter((tarea) => tarea.id !== id)
    );
}

    function agregarTarea() {
    if (titulo.trim() === "") return;

    setTareas([
      ...tareas,
      {
        id: uuid_v4(),
        titulo: titulo,
        descripcion: descripcion,
        importante
      }]);


    setTitulo("");
    setDescripcion("");
    setImportante(false);}

return (
    <Fragment>
      <div className="container-fluid px-5 pt-4">
        <h2 className="colortitulo">Simulador de notas adhesivas :D</h2>
          <Formulario
          titulo={titulo}
          setTitulo={setTitulo}
          descripcion={descripcion}
          setDescripcion={setDescripcion}
          importante={importante}
          setImportante={setImportante}
          agregarTarea={agregarTarea}
/>
  

        <div className="ContenedorNotas">
        {tareas.map((tarea) => (
        <div className={tarea.importante ? "nota importante" : "nota"}
        
        key={tarea.id}>
        <strong>{tarea.titulo}</strong>
        <p>{tarea.descripcion}</p>
      
        
        <div className="BotonEliminar">
        <button className="btn btn-danger ms-2"
        onClick={() => eliminarTarea(tarea.id)}>X</button>
        </div>

        </div>))}

        </div>

            

      </div>
    </Fragment>
  );
}


