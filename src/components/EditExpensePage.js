import React from 'react';

const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
        This is from EditExpensePage and the you are looking at expense for ID : {props.match.params.id}
        </div>
    )
}
   

export default EditExpensePage;