import React from "react";

interface StepTwoProps {
  values: {
    nome: string;
    sobrenome: string;
    nascimento: string;
  };
  errors: {
    nome?: string;
    sobrenome?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ values, errors, onChange }) => (
  <div>
    <div>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={values.nome}
        onChange={onChange}
        className={errors.nome ? "error" : ""}
      />
      {errors.nome && <div className="error">{errors.nome}</div>}
    </div>
    <div>
      <input
        type="text"
        name="sobrenome"
        placeholder="Sobrenome"
        value={values.sobrenome}
        onChange={onChange}
        className={errors.sobrenome ? "error" : ""}
      />
      {errors.sobrenome && <div className="error">{errors.sobrenome}</div>}
    </div>
    <div>
      <input
        type="date"
        name="nascimento"
        placeholder="Data de nascimento"
        value={values.nascimento}
        onChange={onChange}
      />
    </div>
  </div>
);

export default StepTwo;