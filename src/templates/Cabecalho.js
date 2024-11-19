import { Alert } from "react-bootstrap";
export default function Cabecalho(props) {
    return (
        <div>
            <Alert className="text-center" variant="info">
                <h1>
                    {props.texto}
                </h1>
            </Alert>
        </div>
    );
}