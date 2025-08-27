import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import "./StepForm.css";

type Step = 0 | 1 | 2;

const initialValues = {
  email: "",
  senha: "",
  confirmacao: "",
  nome: "",
  sobrenome: "",
  nascimento: "",
  endereco: "",
};

export default function StepForm() {
  const [step, setStep] = useState<Step>(0);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [completed, setCompleted] = useState<boolean[]>([false, false, false]);
  const [showModal, setShowModal] = useState(false);

  
  function validate(currentStep = step) {
    const newErrors: { [key: string]: string } = {};
    if (currentStep === 0) {
      if (!values.email) newErrors.email = "Email obrigatório";
      else if (!/\S+@\S+\.\S+/.test(values.email)) newErrors.email = "Email inválido";
      if (!values.senha) newErrors.senha = "Senha obrigatória";
      if (!values.confirmacao) newErrors.confirmacao = "Confirme a senha";
      if (values.senha && values.confirmacao && values.senha !== values.confirmacao)
        newErrors.confirmacao = "Senhas diferentes";
    }
    if (currentStep === 1) {
      if (!values.nome) newErrors.nome = "Nome obrigatório";
      if (!values.sobrenome) newErrors.sobrenome = "Sobrenome obrigatório";
    }
    if (currentStep === 2) {
      if (!values.endereco) newErrors.endereco = "Endereço obrigatório";
    }
    return newErrors;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  }

  function handleStepChange(newStep: Step) {
    setStep(newStep);
  }

  function handleNext() {
    const newErrors = validate(step);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const newCompleted = [...completed];
      newCompleted[step] = true;
      setCompleted(newCompleted);
      setStep((prev) => (prev < 2 ? (prev + 1) as Step : prev));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    // previne o comportamento padrão(enviar o formulário)
    e.preventDefault();
    // Valida todas as etapas
    let allValid = true;
    const allCompleted = [false, false, false];
    for (let i = 0; i < 3; i++) {
      const errs = validate(i as Step);
      if (Object.keys(errs).length > 0) allValid = false;
      else allCompleted[i] = true;
    }
    setCompleted(allCompleted);
    if (allValid) setShowModal(true);
    else setErrors(validate(step));
  }

  
  function getTabClass(idx: number) {
    if (completed[idx]) return "step-tab-btn completed";
    if (step === idx) return "step-tab-btn selected";
    if (Object.keys(validate(idx as Step)).length > 0) return "step-tab-btn error";
    return "step-tab-btn";
  }

  return (
    <form onSubmit={handleSubmit} className="step-form-main">
      <div className="step-tabs">
        <button type="button" className={getTabClass(0)} onClick={() => handleStepChange(0)}>
          Etapa 1
        </button>
        <button type="button" className={getTabClass(1)} onClick={() => handleStepChange(1)}>
          Etapa 2
        </button>
        <button type="button" className={getTabClass(2)} onClick={() => handleStepChange(2)}>
          Etapa 3
        </button>
      </div>
      <div className="step-form-content">
        {step === 0 && <StepOne values={values} errors={errors} onChange={handleChange} />}
        {step === 1 && <StepTwo values={values} errors={errors} onChange={handleChange} />}
        {step === 2 && <StepThree values={values} errors={errors} onChange={handleChange} />}
      </div>
      <div className="step-form-actions">
        {step < 2 && (
          <button type="button" onClick={handleNext} className="adopt-btn">
            Avançar
          </button>
        )}
        <button
          type="submit"
          className="adopt-btn"
          disabled={!completed.every(Boolean)}
        >
          Enviar
        </button>
      </div>
      {showModal && (
        <div className="step-form-modal">
          <div className="step-form-modal-content">
            <h2>Cadastro enviado com sucesso!</h2>
            <button className="adopt-btn" onClick={() => setShowModal(false)}>Fechar</button>
          </div>
        </div>
      )}
    </form>
  );
}