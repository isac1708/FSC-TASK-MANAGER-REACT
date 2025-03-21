import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react"
import TrashIcon from "../assets/icons/trash.svg?react"
import SunIcon from "../assets/icons/sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import CloudSunIcon from "../assets/icons/cloud-sun.svg?react";
const Tasks = () => {
  return (
    <div className=" w-full py-16 px-8">
      

     <div className="flex w-full justify-between">

     <div>
        <span className="text-xs font-semibold text-[#00ADB5] ">Minhas Tarefas</span>
        <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
      </div>

      <div className="flex items-center gap-3 ">

      <Button variant= "ghost"> 
          Limpar Tarefas
          <TrashIcon/>
        </Button>

        <Button>
        Adicionar Tarefa
        <AddIcon/>
        </Button>

      </div>
     </div>
     {/*LISTA DE TAREFAS*/}
     <div className="p-6 bg-white rouded-xl">
      <div className="space-y-3">
        <div className=" flex  gap-1 pb-5 border-b border-solid border-[#E0E0E0]">
         <SunIcon/>
        <p className="text-[#9A9C9F] text-sm">Manhã</p>
      </div>
      </div>
        <div className="space-y-3 my-6">
          <div className=" flex  gap-1 pb-5 border-b border-solid border-[#E0E0E0]">
           <CloudSunIcon/>
           <p className="text-[#9A9C9F]  text-sm">Tarde</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className=" flex  gap-1 pb-5 border-b border-solid border-[#E0E0E0]">
           <MoonIcon/>
           <p className="text-[#9A9C9F]  text-sm">Noite</p>
          </div>
        </div>
     
     </div>
    </div>
  );
};

export default Tasks;