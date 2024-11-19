import { Alert } from "react-bootstrap";
import Pagina from "../templates/Pagina";

export default function Tela404(props) {
    return (
        <Pagina>
            <Alert className="text-center" variant="danger">
                <h1>Pagina em construção</h1>
            </Alert>
        </Pagina>
    );
}