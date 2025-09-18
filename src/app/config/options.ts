import { TodoStatus } from "../interfaces/todos.interfaces";
import { traductions } from "../utils/traductions";

export const formOptions: {name: string, value: TodoStatus}[] = [
    {value: 'empty', name: traductions['empty'] },
    {value: 'in-progress', name: traductions['in-progress'] },
    {value: 'finished', name: traductions['finished'] },
]