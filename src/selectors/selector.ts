import { Selector } from "testcafe";

export const input = Selector('.new-todo');
export const editInput = Selector('.edit');
export const todoItems = Selector('.todo-list li');
export const firstTodoItem = Selector('.todo-list li:nth-child(1);')
export const completedTodos = Selector('.completed');
export const completeAll = Selector('.toggle-all');
export const deleteCompleted = Selector('.clear-completed');
export const showActiveLink = Selector('[href="#/active"]');
export const showCompletedLink = Selector('[href="#/completed"]');