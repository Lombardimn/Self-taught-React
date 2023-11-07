import { type Todo as TodoType, TodoId } from "../types"

interface Props extends TodoType {
    onRemoveTodo: ({ id }: TodoId) => void
    onToggleComplete: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}
export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleComplete }) => {
    const handleChageCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleComplete({ 
            id, 
            completed: event.target.checked 
        })
    }
    
    
    return (
        <div className="view">
            <input 
                type="checkbox"
                className="toggle"
                checked={completed}
                onChange={handleChageCheckbox}
            />
            <label>{title}</label>
            <button 
                className="destroy" 
                onClick={() => {
                    onRemoveTodo({ id })
                }}
            ></button>
        </div>
    )
}