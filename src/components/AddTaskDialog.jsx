import { createPortal } from "react-dom";

const AddTaskDialog = ({isOpen}) => {

    if(!isOpen) return null;

return createPortal(
    <div className="fixed left-0 backdrop-blur top-0 bottom-0 flex h-screen w-screen items-center justify-center ">
      <div className="p-5 rounded-xl text-center bg-white shadow">
        <h2 className="text-[#35383E] font-semibold text-xl">
            Adicionar nova tarefa
        </h2>
        <p className="text-[#9A9C9F] text-sm font-normal mt-1">
            Adicione uma nova tarefa para a sua lista de tarefas
        </p>
      </div>
    </div>,
    document.body
)
}

export default AddTaskDialog;