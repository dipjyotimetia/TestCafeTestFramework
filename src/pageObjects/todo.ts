import { t, Selector } from "testcafe";
import * as selector from "../selectors/index";


export const createToDo = async () => {
    await t
        .maximizeWindow()
        .typeText(selector.input, 'write blog post about JS')
        .pressKey('enter');

    await t
        .maximizeWindow()
        .expect(selector.todoItems.count)
        .eql(1);

    await t
        .maximizeWindow()
        .expect(selector.firstTodoItem.textContent)
        .contains('write blog post about JS')
};

export const editTodo = async () => {
    await t
        .typeText(selector.input, 'write blog post about JS')
        .pressKey('enter')

    await t
        .doubleClick(selector.firstTodoItem)
        .selectText(selector.editInput, 6)
        .pressKey('backspace')
        .typeText(selector.editInput, 'something different')
        .pressKey('enter')

    await t
        .expect(selector.firstTodoItem.textContent)
        .contains('write something different')
};

export const deleteTodo = async () => {
    await t
        .typeText(selector.input, 'write blog post about JS')
        .pressKey('enter')

        .typeText(selector.input, 'buy some beer')
        .pressKey('enter')

    await t
        .expect(selector.todoItems.count)
        .eql(2)

    await t
        .hover(selector.firstTodoItem)
        .click(selector.todoItems.nth(0).find('.destroy'))

    await t
        .expect(selector.todoItems.count)
        .eql(1)

    await t
        .expect(selector.firstTodoItem.textContent)
        .contains('buy some beer')
};

export const completeOneTodo = async () => {
    await t
        .typeText(selector.input, 'write blog post about JS')
        .pressKey('enter')

        .typeText(selector.input, 'buy some beer')
        .pressKey('enter')

    await t
        .click(selector.todoItems.nth(0).find('.toggle'))

    await t
        .expect(selector.todoItems.nth(0).hasClass('completed'))
        .ok()

    await t
        .expect(selector.todoItems.count)
        .eql(2)
};


export const completeAllTodo = async () => {
    await t
        .typeText(selector.input, 'write blog post about JS')
        .pressKey('enter')

        .typeText(selector.input, 'buy some beer')
        .pressKey('enter')

        .typeText(selector.input, 'watch a movie')
        .pressKey('enter')

        .typeText(selector.input, 'go to a meeting')
        .pressKey('enter')

    await t
        .expect(selector.todoItems.count)
        .eql(4)
        .expect(selector.completedTodos.count)
        .eql(0)

    await t
        .click(selector.completeAll)

    await t
        .expect(selector.completedTodos.count)
        .eql(4)
}

export const deleteAllCompletedTodo = async () => {
    let todos = ['write blog post about JS', 'buy some beer', 'watch a movie', 'go to a meeting']

    for (let todo of todos)
        await t
            .typeText(selector.input, todo)
            .pressKey('enter')

    await t
        .expect(selector.todoItems.count)
        .eql(todos.length)

    await t
        .click(selector.completeAll)
        .click(selector.deleteCompleted)

    await t
        .expect(selector.todoItems.count)
        .eql(0)
}