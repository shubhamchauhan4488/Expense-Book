import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

const now = moment();
console.log(now.format("MMMM Do, YYYY"));

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    //While testing moment() will result in a different result from what was in the previos snapshot,
    //So testing willl fail , hence we mock moment.js
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      category: props.expense ? props.expense.category : "Household",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calenderFocused: false,
      error: ""
    };
    this.isSelected = this.isSelected.bind(this);
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => {
      return {
        description: description
      };
    });
  };
  onNoteChange = e => {
    // e.persist();
    // this.setState(() => {
    //     return{
    //         note : e.target.value
    //     }
    // })

    // OR
    const note = e.target.value;
    this.setState(() => {
      return {
        note: note
      };
    });
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      //d{1,} will prevent us from entering numbers 0 to 1 i.e 0.122
      this.setState(() => {
        return {
          amount: amount
        };
      });
    }
  };
  onCategoryChange = e => {
    const category = e.target.value;
    this.setState(() => {
      return {
        category: category
      };
    });
  };
  onDateChange = createdAt => {
    this.setState(() => {
      if (createdAt) {
        return {
          createdAt: createdAt
        };
      }
    });
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => {
      return {
        calenderFocused: focused
      };
    });
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => {
        return {
          error: "Please enter both description and amount"
        };
      });
    } else {
      this.setState(() => {
        return {
          error: ""
        };
      });
      //accessing the onSubmit function which is passed as props from <addexpense> and
      //passing the new expense to the <Addexpense> so that it can be added to redux store
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        note: this.state.note,
        category: this.state.category,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  isSelected(category) {
    if (this.state.category) {
      return this.state.category === category ? true : false;
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form-error">{this.state.error}</p>}

        <input
          type="text"
          className="text-input"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />

        <input
          type="text"
          className="text-input"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />

        <select className="text-input" onChange={this.onCategoryChange}>
          <option value="Household" selected={this.isSelected("Household")}>
            Household
          </option>
          <option value="Rent" selected={this.isSelected("Rent")}>
            Rent
          </option>
          <option
            value="Utilities Bill"
            selected={this.isSelected("Utilities Bill")}
          >
            Utility Bills
          </option>
          <option
            value="Entertainment"
            selected={this.isSelected("Entertainment")}
          >
            Entertainment
          </option>
          <option value="Health" selected={this.isSelected("Health")}>
            Health
          </option>
          <option value="Transport" selected={this.isSelected("Transport")}>
            Transport
          </option>
          <option value="Education" selected={this.isSelected("Education")}>
            Education
          </option>
          <option
            value="Miscellaneous"
            selected={this.isSelected("Miscellaneous")}
          >
            Miscellaneous
          </option>
        </select>

        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className="textarea-input"
          placeholder="Add a note for this expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    ); //button put inside div to exclude it from the styling of the direct descendants of form
  }
  // isOutsideRange = {() => false} takes day as an argument, but we want to show every day so we just return false
  //numberOfMonths = {1} means how many months u want to show on the datepicker
}
