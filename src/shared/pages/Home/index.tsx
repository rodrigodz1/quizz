import { Form } from "@unform/web";
import React, { useRef } from "react";
import { Input } from "../../components/Input";

const Home: React.FC = () => {
  const formRef = useRef(null);
  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <Input name="username" placeholder="Escolha um nome de usuário" />
        <Input name="password" placeholder="Escolha uma senha forte" />
        <Input
          name="passwordConfirmation"
          placeholder="Confirme sua senha forte"
        />
        <button type="submit">Save</button>
      </Form>
    </div>
  );
};

export { Home };
