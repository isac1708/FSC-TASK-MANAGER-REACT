import CheckIcon from "../assets/icons/check.svg?react";
import LoaderIcon from "../assets/icons/LoaderIcon";
import DetailsIcon from "../assets/icons/details.svg?react";



const TaskItem = ({task,handleTaskCheckBoxClick}) => {
    const getStatusClasses=()=>{
        if(task.status === "done"){
            return "bg-[#00ADB5]   text-[#00ADB5]";
        }
        if(task.status === "in_progress"){
            return "bg-[#FFAA04]  text-[#FFAA04]";
        }
        if(task.status === "not_started"){
            return "bg-[#35383e] bg-opacity-10 text-[#35383e]";
        }
        
    };
   
   return( <div className={`transition flex items-center gap-2 bg-opacity-10 px-4 py-3 rounded-xl text-sm justify-between ${getStatusClasses()}`} >
    <div className="flex items-center gap-2">
    <label className={`relative flex h-7 w-7 cursor-pointer items-center  justify-center rounded-lg ${getStatusClasses()}`}>
        <input type ="checkbox" 
        checked={task.status==="done"}  
        className="absolute h-full w-full curso-pointer opacity-0"
        onChange={() => handleTaskCheckBoxClick(task.id)}
         />
        {task.status==="done" && <CheckIcon/>}
        {task.status==='in_progress' && <LoaderIcon className= "animate-spin"/>}
    </label>
    {task.title}
    </div>
    <a  href="#" className="hove-opacity-75 transition "> <DetailsIcon/> </a>
</div>);
}
export default TaskItem;