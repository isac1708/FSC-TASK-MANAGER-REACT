import InputLabel from "./InputLabel";
const TimeSelect = () => {

    return (<div className="flex flex-col gap-1 text-left ">

        <InputLabel htmlFor="time"  >Horário</InputLabel>

        <select className="px-4 py-3 border-solid border border-[#ECECEC] rounded-lg placeholder:text-sm placeholder:text-[#9A9C9F] outline-[#00ADB5]">
            <option value="morning">Manhã</option>
            <option value="afternoon">Tarde</option>
            <option value="evening">Noite</option>
        </select>

    </div>);

}
export default TimeSelect;