import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchCategories } from "./store/actions/categories";
//import { fetchCategories } from "./store/actions/categories";
import { connect } from "react-redux";
import categories from './store/reducers/categories';

class App extends Component {
  
  state= {
    categories:[]
  }

  componentDidMount() {
    const { fetchCategories } = this.props;
    console.log(fetchCategories())
    // this.setState({
    //   categories:  fetchCategories()
    // })

  }
  render() {
    const { categories } = this.state;
    return (
      <div className="App">
        {/* <ol className='contact-list'>
          {categories.map((category) => (
            <li key={category.id} className='contact-list-item'>


            </li>
          ))}
        </ol> */}
        
      </div>
    );
  }
}

const mapStateToProps = categories => {
  return {
    categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  };
};

// function mapDispatchToProps (dispatch) {
//   return {
//     selectRecipe: (data) => dispatch(addRecipe(data)),
//     remove: (data) => dispatch(removeFromCalendar(data))
//   }
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
