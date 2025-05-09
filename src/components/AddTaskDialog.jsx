import { useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import InputLabel from "./InputLabel";
import "./AddTaskDialog.css";


import Input from "./input";
import Button from "./Button";

const AddTaskDialog = ({ isOpen, handleClose }) => {
  const nodeRef = useRef();

  const content = (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="add-task-dialog"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className="fixed left-0 backdrop-blur top-0 bottom-0 flex h-screen w-screen items-center justify-center"
      >
        <div className="p-5 rounded-xl text-center bg-white shadow">
          <h2 className="text-[#35383E] font-semibold text-xl">
            Adicionar nova tarefa
          </h2>
          <p className="text-[#9A9C9F] text-sm font-normal mt-1 mb-4">
            Adicione uma nova tarefa para a sua lista de tarefas
          </p>
          <div className="flex flex-col space-y-4 w-[336px]">
            <Input id="title" label="Título" placeholder="Insira o título da tarefa" />

            <div className="flex flex-col gap-1 text-left ">

              <InputLabel htmlFor="time"  >Horário</InputLabel>

              <select className="px-4 py-3 border-solid border border-[#ECECEC] rounded-lg placeholder:text-sm placeholder:text-[#9A9C9F] outline-[#00ADB5]">
                <option value="morning">Manhã</option>
                <option value="afternoon">Tarde</option>
                <option value="evening">Noite</option>
              </select>

            </div>
            <Input id="description" label="Descrição" placeholder="Descreva a tarefa" />
            <div className="flex gap-3">
              <Button className="w-full" size="large" variant="ghost" onClick={handleClose}>
                Cancelar
              </Button>
              <Button className="w-full" size="large">
                Salvar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );

  return createPortal(content, document.body);
};

export default AddTaskDialog;
