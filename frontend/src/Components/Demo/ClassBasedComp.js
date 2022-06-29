import { Component } from 'react';

class ClassBasedComp extends Component {

    constructor(props) {
        super(props)
        console.log("[CONSTRUCTOR]")
        this.state = {
            counter: 0,
            todos: []
        }
    }

    componentDidMount() {
        console.log("[COMPONENT DID MOUNT]");
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(todoList => {
                console.log(todoList.slice(1, 10));
                this.setState({
                    todos: todoList.slice(1, 10)
                })
            })
            .catch(console.log)
    }

    componentDidUpdate() { console.log("[COMPONENT DID UPDATE]") }

    counterIncreaseHandler = () => this.setState({ counter: this.state.counter + 1 })

    shouldComponentUpdate(nextProps, nextState) {
        console.log("SHOULD COMPONENT UPDATE");
        return true
    }

    componentWillUnmount() { console.log("[COMPONENT WILL UNMOUNT]") }

    render() {
        console.log("[RENDER]")
        return (
            <div className='container'>
                <p className='display-4'>Counter : {this.state.counter}</p>
                <button onClick={this.counterIncreaseHandler}>Increase</button>
                <hr />
                <ul className='list-group'>
                    {this.state.todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
                </ul>
            </div>
        )
    }

}

export default ClassBasedComp;