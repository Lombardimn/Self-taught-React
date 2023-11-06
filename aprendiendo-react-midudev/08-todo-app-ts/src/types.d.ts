// Se declara la interfaz del tipo de dato
export interface Todo {
    id: string
    title: string
    completed: boolean
}

export type TodoId = Pick<Todo, 'id'> 
export type TodoTitle = Pick<Todo, 'title'> 
export type TodoCompleted = Pick<Todo, 'completed'> 

// Se declara el tipo de dato para el contenedor
export type ListOfTodos = Todo[]