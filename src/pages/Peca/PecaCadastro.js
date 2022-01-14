import { FormPeca } from "../../components/Peca/FormPeca";
import { useParams } from "react-router-dom";

export default function PecaCadastro() {
    const { id } = useParams();
    return (
        // Make a form to create a new peca and send it to the server

        <div>
            <FormPeca id={id}></FormPeca>
        </div>
    )
}