import { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

export default function Doacao(props) {
  const [validado, setValidado] = useState(false);
  function manipulaSubmissao(evento) {
    const form = evento.currentTarget;
    if (form.checkValidity()) {
      setValidado(false);
    }
    else {
      setValidado(true);
    }
    evento.preventDefault();
    evento.stopPropagation();
  }
  return (
    <>
      <Container className="text-center">
        <h4><strong><font color="purple">Registro de Doações</font></strong></h4>
      </Container>

      <Form noValidate validated={validado} onSubmit={manipulaSubmissao}>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formNome">
              <Form.Label><strong>Nome completo</strong></Form.Label>
              <Form.Control type="text" placeholder="Informe o nome" required />
              <Form.Control.Feedback type="invalid">
                Preencha o nome corretamente
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formCPF">
              <Form.Label><strong>CPF</strong></Form.Label>
              <Form.Control type="text" placeholder="000.000.000-00" required />
              <Form.Control.Feedback type="invalid">
                Preencha o CPF
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formTelefone">
              <Form.Label><strong>Telelefone</strong></Form.Label>
              <Form.Control type="text" placeholder="Telefone" required />
              <Form.Control.Feedback type="invalid">
                Digite seu telefone
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-2" controlId="formValor">
              <Form.Label><strong>R$</strong></Form.Label>
              <Form.Control type="text" placeholder="R$ 000,00" required />
              <Form.Control.Feedback type="invalid">
                Digite um valor
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-2" controlId="formutensilios">
              <Form.Label><strong>Utensílios</strong></Form.Label>
              <Form.Control type="text" placeholder=" Fraldas, roupas, utensilios, etc " required />
              <Form.Control.Feedback type="invalid">
                Digite o que deseja doar
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formObservações">
              <Form.Label><strong>Observações sobre a doação</strong></Form.Label>
              <Form.Control type="text" placeholder="Deixe sua menssagem" required />
              <Form.Control.Feedback type="invalid">
                Deixe sua menssagem
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <col-2>
            <center><Button type="submit"><strong>Salvar</strong></Button></center>
          </col-2>
        </Row>
        <center><h3>Para primeira doação preencha o fichario fazendo o seu cadastro</h3></center>
      </Form>
    </>
  );
}