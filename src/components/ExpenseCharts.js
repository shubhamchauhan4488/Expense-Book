// import CanvasJS, {pie} from 'canvasjs';
import React, {Component} from "react";
import {Bar, Line, Pie} from "react-chartjs-2";
import getVisibleExpenses from '../selectors/expenses'
import { connect } from "react-redux";


class ExpenseCharts extends Component {	

	constructor(props){
		super(props)

		this.state = {
			householdSum : '',
			utilitiesBillsSum : '',
			rentSum : '',
			entertainmentSum : '',
			healthSum : '',
			transportSum : '',
			educationSum : '',
			miscellaneousSum : ''
		}
		this.setChartData = this.setChartData.bind(this)
	}

	setChartData(props){

		let householdSum = props.expenses.filter((expense) => {
			return expense.category === 'Household'
		}).map((expense) =>  expense.amount)
		.reduce((sum, value) =>  sum + value, 0)

		let utilitiesBillsSum = props.expenses.filter((expense) => {
			return expense.category === 'Utilities Bill'
		}).map((expense) =>  expense.amount)
		.reduce((sum, value) =>  sum + value, 0)

		let rentSum = props.expenses.filter((expense) => {
			return expense.category === 'Rent'
		}).map((expense) =>  expense.amount)
		.reduce((sum, value) =>  sum + value, 0)
		
		let entertainmentSum = props.expenses.filter((expense) => {
			return expense.category === 'Entertainment'
		}).map((expense) =>  expense.amount)
		.reduce((sum, value) =>  sum + value, 0)
	
		let healthSum = props.expenses.filter((expense) => {
			return expense.category === 'Health'
		}).map((expense) =>  expense.amount)
		.reduce((sum, value) =>  sum + value, 0)

		let transportSum = props.expenses.filter((expense) => {
			return expense.category === 'Transport'
		}).map((expense) =>  expense.amount)
		.reduce((sum, value) =>  sum + value, 0)

		let educationSum = props.expenses.filter((expense) => {
			return expense.category === 'Education'
		}).map((expense) =>  expense.amount)
		.reduce((sum, value) =>  sum + value, 0)

		let miscellaneousSum = props.expenses.filter((expense) => {
			return expense.category === 'Miscellaneous'
		}).map((expense) =>  expense.amount)
		.reduce((sum, value) =>  sum + value, 0)

		this.setState({
			householdSum : householdSum/100,
			utilitiesBillsSum : utilitiesBillsSum/100,
			rentSum : rentSum/100,
			entertainmentSum : entertainmentSum/100,
			healthSum : healthSum/100,
			transportSum : transportSum/100,
			educationSum : educationSum/100,
			miscellaneousSum : miscellaneousSum/100
		})
	}

	componentWillReceiveProps(nextProps) {
		this.setChartData(nextProps)
	}

	componentDidMount(){
		this.setChartData(this.props)
	}

	render() {

		const chartData = {
						labels : ['Household', 'Utilities Bill', 'Rent', 'Entertainment', 'Health', 'Transport','Education', 'Miscellaneous'],
						datasets  : [ {
							label : 'Expenses',
							data : [
								this.state.householdSum, 
								this.state.utilitiesBillsSum, 
								this.state.rentSum,
								this.state.entertainmentSum,
								this.state.healthSum,
								this.state.transportSum,
								this.state.educationSum,
								this.state.miscellaneousSum],
							backgroundColor : [
								'rgba(221,28,28,0.6)',
								'rgba(77,218,234,0.6)',
								'rgba(52, 122, 42,0.6)',
								'rgba(242, 238, 116,0.6)',
								'rgba(200, 116, 242,0.6)',
								'rgba(219, 168, 189,0.6)',
								'rgba(255,45,152,0.6)',
								'rgba(255,9,132,0.6)'
							]
						 }
						]
					};
		return (
			<div className = "charts">
				<Bar 
				data = {chartData}
				options = {{
					title : {
						display : true,
						text : "Category wise expenses",
						fontSize : 25
					},
					legend : {
						display :true,
						position : 'right'
					}
				}}
				/>
			</div>
		)
	}
}
		   
const mapStateToProps = (state) => {
	return{
		expenses : getVisibleExpenses(state.expenses, state.filters)
	}
}
	
 export default connect(mapStateToProps)(ExpenseCharts);