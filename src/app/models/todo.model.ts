export class Todo {
  id: string;
  name: string;
  description: string;

  constructor(id: string, name: string, description: string, isCompleted: boolean) {
      this.id = id;
      this.name = name;
      this.description = description;
  }
}