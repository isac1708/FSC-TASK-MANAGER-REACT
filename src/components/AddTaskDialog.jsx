import { createPortal } from "react-dom";
import Input from "./input";
import Button from "./Button";

const AddTaskDialog = ({isOpen,handleClose }) => {

    if(!isOpen) return null;

return createPortal(
    <div className="fixed left-0 backdrop-blur top-0 bottom-0 flex h-screen w-screen items-center justify-center ">
      <div className="p-5 rounded-xl text-center bg-white shadow">
        <h2 className="text-[#35383E] font-semibold text-xl">
            Adicionar nova tarefa
        </h2>
        <p className="text-[#9A9C9F] text-sm font-normal mt-1 mb-4">
            Adicione uma nova tarefa para a sua lista de tarefas
        </p>
        <div className="flex flex-col space-y-4 w-[336px]">
            <Input id="title" label="Título" placeholder="Insira o titulo da tarefa"/>
            <Input id="hour" label="Horário" placeholder="Horário"/>
            <Input id="description" label="Descrição" placeholder="Descreva a tarefa"/>
            <div className="flex gap-3 ">
                <Button className="w-full" size="large" variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button className="w-full" size="large">
                    Salvar
                </Button>
            </div>
        </div>
      </div>
    </div>,
    document.body
)
}

export default AddTaskDialog;