import React from "react";

interface StepOneProps {
  values: {
    email: string;
    senha: string;
    confirmacao: string;
  };
  errors: {
    email?: string;
    senha?: string;
    confirmacao?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepOne: React.FC<StepOneProps> = ({ values, errors, onChange }) => (
  <div>
    <div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={onChange}
        className={errors.email ? "error" : ""}
      />
      {errors.email && <div className="error">{errors.email}</div>}
    </div>
    <div>
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        value={values.senha}
        onChange={onChange}
        className={errors.senha ? "error" : ""}
      />
      {errors.senha && <div className="error">{errors.senha}</div>}
    </div>
    <div>
      <input
        type="password"
        name="confirmacao"
        placeholder="Confirmação de senha"
        value={values.confirmacao}
        onChange={onChange}
        className={errors.confirmacao ? "error" : ""}
      />
      {errors.confirmacao && <div className="error">{errors.confirmacao}</div>}
    </div>
  </div>
);

export default StepOne;