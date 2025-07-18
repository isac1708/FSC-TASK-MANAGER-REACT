import InputLabel from "./InputLabel";
const TimeSelect = (props) => {

    return (<div className="flex flex-col gap-1 text-left ">

        <InputLabel htmlFor="time"  >Horário</InputLabel>

        <select className="px-4 py-3 border-solid border border-[#ECECEC] rounded-lg placeholder:text-sm placeholder:text-brand-text-gray outline-brand-primary"
        {...props}>
            <option value="morning">Manhã</option>
            <option value="afternoon">Tarde</option>
            <option value="night">Noite</option>
        </select>

    </div>);

}
export default TimeSelect;