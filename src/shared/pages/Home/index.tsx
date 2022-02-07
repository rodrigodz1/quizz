import { Form } from "@unform/web";
import React, { useRef } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const Home: React.FC = () => {
  const formRef = useRef(null);
  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <Input
          name="username"
          placeholder="Escolha um nome de usuário"
          type="text"
        />
        <Input
          name="password"
          placeholder="Escolha uma senha forte"
          type="password"
        />
        <Input
          name="passwordConfirmation"
          placeholder="Confirme sua senha forte"
          type="password"
        />
        <Button type="submit">Confirmar</Button>
      </Form>
    </div>
  );
};

export { Home };
