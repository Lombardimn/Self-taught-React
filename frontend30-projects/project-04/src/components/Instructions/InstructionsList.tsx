import './instructionsList.css'
import { InstructionStep } from './InstructionStep'


export interface Steps {
  paso: string;
  descripcion: string;
}

interface InstructionsListProps  {
  steps: Steps[];
}

const InstructionsList = ({ steps }: InstructionsListProps ) => {
  return (
    <section>
      <h2>Instrucciones</h2>
      <ol>
        {
          steps.map((stepObj) => (
            <InstructionStep key={stepObj.paso} step={stepObj} />
          ))
        }
      </ol>
    </section>
  )
}

export { InstructionsList }