
import { CheckIcon, LoaderIcon, DetailsIcon, TrashIcon } from "../assets/icons";
import Button from "../components/Button";



const TaskItem = ({ task, handleTaskCheckBoxClick, handleTaskDeleteClick }) => {
    const getStatusClasses = () => {
        if (task.status === "done") {
            return "bg-brand-primary   text-brand-primary";
        }
        if (task.status === "in_progress") {
            return "bg-[#FFAA04]  text-[#FFAA04]";
        }
        if (task.status === "not_started") {
            return "bg-brand-dark-blue bg-opacity-10 text-brand-dark-blue";
        }

    };

    return (<div className={`transition flex items-center gap-2 bg-opacity-10 px-4 py-3 rounded-xl text-sm justify-between ${getStatusClasses()}`} >
        <div className="flex items-center gap-2">
            <label className={`relative flex h-7 w-7 cursor-pointer items-center  justify-center rounded-lg ${getStatusClasses()}`}>
                <input type="checkbox"
                    checked={task.status === "done"}
                    className="absolute h-full w-full curso-pointer opacity-0"
                    onChange={() => handleTaskCheckBoxClick(task.id)}
                />
                {task.status === "done" && <CheckIcon />}
                {task.status === 'in_progress' && <LoaderIcon className="animate-spin" />}
            </label>
            {task.title}
        </div>
        <div className="flex items-center gap-2">
            <Button color="ghost" onClick={() => handleTaskDeleteClick(task.id)}>
                <TrashIcon className="text-red-500" />
            </Button>
            <a href="#" className="hove-opacity-75 transition "> <DetailsIcon /> </a>
        </div>
    </div>);
}
export default TaskItem;