import enzyme from "enzyme";
import getExpenseTotal from '../../selectors/expenses-total'
import expensesArray from "../testData/expenses";

test("Should test expenses total and return 0 as no expense is sent", () => {
    const result = getExpenseTotal([]);
    expect(result).toBe(0);
})

test("Should test expenses total as 1 expense is sent", () => {
    const result = getExpenseTotal([expensesArray[0]]); //making it an array b'cause we rae using array funtions in the selector
    expect(result).toBe(195);
})

test("Should test expenses total as expenses is sent", () => {
    const result = getExpenseTotal(expensesArray);
    expect(result).toBe(135940);
})