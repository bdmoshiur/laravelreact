import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    state = {
        counter: 0,
    };
    increment = () =>{
       let counter = this.state.counter + 1;
       this.setState({
        counter,
       });
    };
    render() { 
        return (
            <div>
                <div className="container">
                    <h2>Count-{this.state.counter}</h2>
                    <button className="btn btn-success btn-lg" onClick= {this.increment}>+</button>
                </div>
            </div>
        );
    }
}
 
export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
