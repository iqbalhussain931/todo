import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {

  private todos = [
    'Todo 1',
    'Todo 2',
    'Todo 3'
  ];
  private archivedTodos = [];

  constructor(public http: HttpClient) {

  }

  editTodo(todo,index) {
    this.todos[index] = todo
  }


  archiveTodo(todoIndex) {
    let todoToBeArchived = this.todos[todoIndex];
    this.todos.splice(todoIndex);
    this.archivedTodos.push(todoToBeArchived);
  }

  getArchiveTodos() {
    return this.archivedTodos;
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

}
