import React from "react";

interface StepThreeProps {
  values: {
    endereco: string;
  };
  errors: {
    endereco?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepThree: React.FC<StepThreeProps> = ({ values, errors, onChange }) => (
  <div>
    <div>
      <input
        type="text"
        name="endereco"
        placeholder="Endereço completo"
        value={values.endereco}
        onChange={onChange}
        className={errors.endereco ? "error" : ""}
      />
      {errors.endereco && <div className="error">{errors.endereco}</div>}
    </div>
  </div>
);

export default StepThree;