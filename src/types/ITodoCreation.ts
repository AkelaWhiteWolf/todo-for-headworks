export interface ITodoCreation {
  addTodo: (label: string, category: string, isDone?: boolean) => void;
  categories: string[];
  addCategory: (category: string) => void;
}
