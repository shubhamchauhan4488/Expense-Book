import moment from 'moment'
import filtersReducer from '../../reducers/filters'

//action of type 'INIT' is the first action dispatched by the redux store, as checked in redux-devtools
//i.e when this action is dispatched we will recieve filter object with default values
test("Should set default filter values" ,() => {
    const result = filtersReducer(undefined,{type : 'INIT'})
    expect(result).toEqual({
        text : '',
        sortBy : 'date',
        startDate : moment().startOf('month'), 
        endDate : moment().endOf('month')
    })
})
test("Should set sortby to 'amount' " ,() => {
    const result = filtersReducer(undefined,{type : 'SORT_BY_AMOUNT'})
    expect(result.sortBy).toBe('amount')
}
)

//since by default the value of sort by is 'date'
// we nned to pass an filtersReducer object with different sortBy value in order to check whether the action is actually working
// startDate : undefined, 
// endDate : undefined
// b'cause we dont care about startDate and endDate for this test case
test("Should set sortby to 'date' " ,() => {
    const filterReducerObject = {
        text : '',
        sortBy : 'amount',
        startDate : undefined, 
        endDate : undefined
    }
    const result = filtersReducer(filterReducerObject,{type : 'SORT_BY_DATE'})
    expect(result.sortBy).toBe('date')
}
)

test("Should set text to 'rent' " ,() => {

    const result = filtersReducer(undefined, {type : 'TextFilter',
    filterText : 'rent'})
    expect(result.text).toBe('rent')
}
)

test("Should set startDate " ,() => {

    const result = filtersReducer(undefined, {type : 'SET_START_DATE',
    startDate : moment(0).toString()})
    expect(result.startDate).toBe(moment(0).toString())
}
)

test("Should set endDate " ,() => {

    const result = filtersReducer(undefined, {type : 'SET_END_DATE',
    endDate : moment(0)})
    expect(result.endDate).toEqual(moment(0))
}
)