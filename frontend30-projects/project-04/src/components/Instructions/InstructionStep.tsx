import { Steps } from './InstructionsList';
import './instructionStep.css'

interface InstructionStepProps {
  step: Steps;
}

const InstructionStep = ({ step }: InstructionStepProps) => { 
  return (
    <li>
      <strong>{step.paso}: </strong>
      {step.descripcion}
    </li>
  ) 
}

export { InstructionStep }