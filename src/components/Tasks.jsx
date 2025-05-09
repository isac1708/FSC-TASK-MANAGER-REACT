import { useState } from "react";
import Button from "./Button";
import { TrashIcon, AddIcon, SunIcon, CloudSunIcon, MoonIcon } from "../assets/icons";
import TasksSeparator from "./TasksSeparator";
import TASKS from "../constants/tasks";
import TaskItem from "./TaskItem";
import { toast } from "sonner";
import AddTaskDialog from "./AddTaskDialog";

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false);

  const morningTasks = tasks.filter((task) => task.time === "morning");
  const afternoonTasks = tasks.filter((task) => task.time === "afternoon");
  const nightTasks = tasks.filter((task) => task.time === "night");

  const handleTaskDeleteClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    toast.success("Tarefa deletada com sucesso!");
  };
  const handleDialogClose = () => {
    setAddTaskDialogIsOpen(false);
  }

  const handleTaskCheckBoxClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) return task;

      switch (task.status) {
        case "not_started":
          toast.success("Tarefa iniciada com sucesso!");
          return { ...task, status: "in_progress" };
        case "in_progress":
          toast.success("Tarefa concluída com sucesso!");
          return { ...task, status: "done" };
        case "done":
          toast.success("Tarefa reiniciada com sucesso!");
          return { ...task, status: "not_started" };
        default:
          return task;
      }
    });

    setTasks(newTasks);
  };

  return (
    <div className="w-full px-8 py-16 space-y-6">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">Minhas Tarefas</span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar tarefas
            <TrashIcon />
          </Button>

          <Button onClick={() => setAddTaskDialogIsOpen(true)} variant="primary">
            <AddIcon />
            Nova tarefa
          </Button>

          <AddTaskDialog
            isOpen={addTaskDialogIsOpen}
            handleClose={handleDialogClose} />
        </div>
      </div>

      <div className="rounded-xl bg-white p-6">
        {/* MANHÃ */}
        <div className="space-y-3">
          <TasksSeparator title="Manhã" icon={<SunIcon />} />
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleTaskCheckBoxClick={handleTaskCheckBoxClick}
              handleTaskDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>

        {/* TARDE */}
        <div className="my-6 space-y-3">
          <TasksSeparator title="Tarde" icon={<CloudSunIcon />} />
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleTaskCheckBoxClick={handleTaskCheckBoxClick}
              handleTaskDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>

        {/* NOITE */}
        <div className="space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />} />
          {nightTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleTaskCheckBoxClick={handleTaskCheckBoxClick}
              handleTaskDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Tasks;
