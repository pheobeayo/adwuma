import Image from "next/image";
import zkbutton from "../../assets/alert/zkbutton.svg"

const Zkpass = () => {
    return (
        <div className="grid place-items-right">
            <Image src={zkbutton} alt="zkbutton" />
        </div>
    )
}
export default Zkpass;
