import React, { useEffect } from 'react';
import './App.css';
// import NavBar from './components/navBar';
// import MultipleCounters from './components/multipleCounters';

// import {MDCDataTable} from '@material/data-table';
// const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.tableRef = React.createRef();
//     // this.inputRef.current is null here
//   }
//   state = {
//     counters: [
//       { id: 1, value: 4 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 },
//     ],
//   };

//   handleDelete = (counterId) => {
//     const newSet = this.state.counters.filter((x) => x.id !== counterId);
//     this.setState({ counters: newSet });
//   };

//   handleReset = () => {
//     const newSet = this.state.counters.map(r => {
//       r.value = 0;
//       return r;
//     });
//     this.setState({counters: newSet})
//   };

//   handleIncrement = (counter) => {
//     const newValues = [...this.state.counters];
//     const index = newValues.indexOf(counter);
//     newValues[index] = {...counter};
//     newValues[index].value++;
//     this.setState({counters : newValues});
//   };

//   handleDecrement = (counter) => {
//     const newValues = [...this.state.counters];
//     const index = newValues.indexOf(counter);
//     newValues[index] = {...counter};
//     newValues[index].value--;
//     //this.setState({counters: newValues})
//   };

//   render() { 
//     return ( 
//     <React.Fragment>
//       <MultipleCounters 
//       key={this.state.counters.id}
//       counters={this.state.counters}
//       onReset={this.handleReset}
//       onIncrement={this.handleIncrement}
//       onDelete={this.handleDelete}
//       onDecrement={this.handleDecrement} />
      
//     </React.Fragment> );
//   }
// }

const App = () => {
  console.log("App");
  useEffect(()=>{
  console.log("Use Effect");
  }, []);

  return ( <div>Hello!</div> );
}
 
export default App;