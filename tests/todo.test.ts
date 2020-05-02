import { Selector } from "testcafe";
import * as selector from "../src/selectors/index";
import * as pages from "../src/pageObjects/index";


fixture('Test TodoMVC App')
    .page('http://todomvc.com/examples/vanillajs/')


test.skip('Create todo', async t => {
    await t
        .maximizeWindow()
        .typeText(selector.input, 'write blog post about JS')
        .pressKey('enter')

    await t
        .maximizeWindow()
        .expect(selector.todoItems.count)
        .eql(1)

    await t
        .maximizeWindow()
        .expect(selector.firstTodoItem.textContent)
        .contains('write blog post about JS')
})


test.skip('Edit todo', async t => {
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
})


test.skip('Delete todo', async t => {
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
})


test('Complete one todo', async () => {
    await pages.completeOneTodo();
})


test.skip('Show active/completed todos', async t => {
    await t
        .typeText(selector.input, 'write blog post about JS')
        .pressKey('enter')

        .typeText(selector.input, 'buy some beer')
        .pressKey('enter')

    await t
        .click(selector.todoItems.nth(0).find('.toggle'))

    await t
        .expect(selector.todoItems.count)
        .eql(2)

    // when click on show active
    await t
        .click(selector.showActiveLink)

    await t
        .expect(selector.todoItems.nth(0).textContent)
        .contains('buy some beer')

    // when click on show completed
    await t
        .click(Selector(selector.showCompletedLink))

    await t
        .expect(selector.firstTodoItem.textContent)
        .contains('write blog post about JS')
})


test('Complete all todos', async () => {
    await pages.completeAllTodo();
})


test('Delete all completed todos', async () => {
    await pages.deleteAllCompletedTodo();
})
