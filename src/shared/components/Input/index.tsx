import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { FormInput } from "./style";

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ name, placeholder, type, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <FormInput
      name={name}
      ref={inputRef}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export { Input };
