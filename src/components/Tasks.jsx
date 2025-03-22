import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react"
import TrashIcon from "../assets/icons/trash.svg?react"
import SunIcon from "../assets/icons/sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import CloudSunIcon from "../assets/icons/cloud-sun.svg?react";
import TasksSeparator from "./TasksSeparator";
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

      {/*MANHA*/}
      <div className="space-y-3">
      <TasksSeparator title="Manhã" icon= {<SunIcon/>}/>
      </div>

      {/*TARDE*/}
      </div>
        <div className="space-y-3 my-6">
          <TasksSeparator title="Tarde" icon= {<CloudSunIcon/>}/>
        </div>
        
        {/*NOITE*/}
        <div className="space-y-3">
          <TasksSeparator title="Noite" icon= {<MoonIcon/>}/>
        </div>
        </div>
     
  );
};

export default Tasks;