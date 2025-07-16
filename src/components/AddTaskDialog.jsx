import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./AddTaskDialog.css";
import { v4 } from "uuid";


import Input from "./input";
import Button from "./Button";
import TimeSelect from "./TimeSelect";

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [time, setTime] = useState();
 
  
  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const nodeRef = useRef();

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      //setTitle("");
     
      setTime("");
      setErrors([]);
      setSubmitted(false);
    }
  }, [isOpen]);

  const handleSaveClick = () => {
    setSubmitted(true);
    const newErrors = [];

    console.log("Título via ref:", titleRef.current?.value);
    console.log("Descrição via ref:", descriptionRef.current?.value);

    if (!titleRef.current?.value.trim()) {
      newErrors.push({ inputName: "title", message: "O título é obrigatório" });
    }
    if (!descriptionRef.current?.value.trim()) {
      newErrors.push({ inputName: "description", message: "A descrição é obrigatória" });
    }

    console.log({ newErrors });

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    handleSubmit({
      id: v4(),
      title: titleRef.current?.value,
      description,
      time,
      status: "not_started",
    });

    handleClose();

  };

  const titleError = errors.find(error => error.inputName === "title");
  const descriptionError = errors.find(error => error.inputName === "description");


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
            <Input
              id="title"
              label="Título"
              placeholder="Insira o título da tarefa"
              errorMessage={submitted ? titleError?.message : undefined}
              ref={titleRef}
            />

            <TimeSelect value={time} onChange={event => setTime(event.target.value)} />

            <Input
              id="description"
              label="Descrição"
              placeholder="Descreva a tarefa"
              errorMessage={submitted ? descriptionError?.message : undefined}
              ref={descriptionRef}
            />


            <div className="flex gap-3">
              <Button className="w-full" size="large" variant="ghost" onClick={handleClose}>
                Cancelar
              </Button>
              <Button
                className="w-full"
                size="large"
                onClick={() => {
                  handleSaveClick();
                }}
              >
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
