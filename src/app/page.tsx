import { CardAluno } from "./componentes/CardAluno";
import { students } from "./dados/students";

export default function ListaEstudantes (){
  return (
    <div className="bg-black text-white h-screen w-screen ">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-5">Lista de estudantes</h1>
        <CardAluno students={students}/>
      </div>
    </div>
  )
}