import { Form } from "@unform/web";
import React, { useRef } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container } from "./style";

const Home: React.FC = () => {
  const formRef = useRef(null);
  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <h1>Quizz - Cadastro</h1>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <Input name="username" placeholder="Seu usuário" type="text" />
        <Input name="password" placeholder="Senha forte" type="password" />
        <Input
          name="passwordConfirmation"
          placeholder="Confirme sua senha forte"
          type="password"
        />
        <Button type="submit">Confirmar</Button>
      </Form>
    </Container>
  );
};

export { Home };
