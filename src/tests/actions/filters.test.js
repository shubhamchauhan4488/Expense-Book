import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters'
import moment from 'moment'

test("Should setup setStartDate filter action object", () => {
    const result = setStartDate(moment(0));
    expect(result).toEqual({
        type : "SET_START_DATE",
        startDate : moment(0)
    })
})

test("Should setup setEndDate filter action object", () => {
    const result = setEndDate(moment(0));
    expect(result).toEqual({
        type : "SET_END_DATE",
        endDate : moment(0)
    })
})

test("Should setup setTextFilter action object with default value", () => {
    const filterText = ''
    const result = setTextFilter(filterText)
    expect(result).toEqual({
        type : "TextFilter",
        filterText : filterText
    })
})

test("Should setup setTextFilter action object with provided value", () => {
    const filterText = 'Bill'
    const result = setTextFilter(filterText)
    expect(result).toEqual({
        type : "TextFilter",
        filterText : filterText
    })
})


test("Should setup sortbydate action object with provided value", () => {
    const result = sortByDate()
    expect(result).toEqual({
        type : "SORT_BY_DATE"
    })
})

test("Should setup sortbyamount action object with provided value", () => {
    const result = sortByAmount()
    expect(result).toEqual({
        type : "SORT_BY_AMOUNT"
    })
})