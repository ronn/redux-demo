import * as React from 'react'
import TodoTable from "./todoTable"
import {Request} from "./../model/Request"
import {searchTodos} from "../modules/todos";

export default class TodoComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            request: Request.NONE,
            todos: []
        }
    }

    render() {
        return (<div>
            <button onClick={() => this.search()}>
                Search!
            </button>
            {
                this.state.request !== Request.SUCCESS
                    ? <div>
                        {this.state && this.state.request === Request.ERROR
                            ? 'There was an error retrieving TODOs'
                            : (
                                this.state.request === Request.PENDING
                                    ? 'Loading...'
                                    : 'Please search some Todos :)'
                            )}
                    </div>
                    : <TodoTable
                        todos={this.state.todos}
                    />
            }
                </div>)
    }
    search = () => {
        this.setState({request: Request.PENDING})

        searchTodos()
            .then(todos => {
                this.setState({
                    request: Request.SUCCESS,
                    todos
                })
            }).catch(error => {
                this.setState({request: Request.ERROR})
                console.log("An error has occurred: " + error)
        } );
    }
}