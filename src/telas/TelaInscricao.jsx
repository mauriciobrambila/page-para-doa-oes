import Pagina from "../templates/Pagina";
import Fichario from "../formulario/Fichario";
import TabelaDoadores from "../tabelas/TabelaDoadores";
import { useState, useEffect } from "react";
import { Alert, Container, Spinner } from "react-bootstrap";
import { urlBase } from '../utilitarios/assets';

export default function TelaInscricao(props) {
    const [doadores, setDoadores] = useState([]);
    const [exibirTabela, setExibirTabela] = useState(true);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [spinner, setSpinner] = useState(false);



    useEffect(() => {
        fetch(urlBase + "/doadores", {
            method: "GET",
            headers: { 'Content-type': 'application/json' }
        }).then((resposta) => {
            return resposta.json();
        }).then((dados) => {
            if (Array.isArray(dados)) {

                setDoadores(dados);
            }
            else {
                //falhou
            }
        });

        if (TabelaDoadores || !exibirTabela) {
            setSpinner(true)
        }

        setTimeout(() => {
            setSpinner(false);
        }, 500);


    }, [exibirTabela]);

    return (
        <Pagina>
            <Container className="border m-6">
                <Alert variant={"secondary"} className="text-center m-3">
                    <font size="6"><strong>Cadastro de Doadores</strong></font></Alert>
                {
                    spinner ?
                        <div style={{zIndex:'9', width:'100%', height:'800px', backgroundColor:'rgba(255,255,255,.9)', display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <Spinner
                                animation="border"
                                role="status"
                                variant="primary"
                            />
                        </div>
                        :
                        exibirTabela ?
                            <TabelaDoadores
                                listaDoadores={doadores}
                                setDoadores={setDoadores}
                                exibirTabela={setExibirTabela}
                                setSpinner={setSpinner}
                                />
                            :
                            <Fichario listaDoadores={doadores}
                                setDoadores={setDoadores}
                                exibirTabela={setExibirTabela}
                                modoEdicao={modoEdicao}
                                setModoEdicao={setModoEdicao} />
                }
            </Container>
        </Pagina>
    );
}