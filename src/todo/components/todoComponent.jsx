import * as React from 'react'
import TodoTable from "./todoTable"
import {Request} from "./../model/Request"
import {fetchTodos} from "../modules/todos";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class TodoComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <button onClick={() => this.props.fetchTodos()}>
                Search!
            </button>
            {
                this.props.request !== Request.SUCCESS
                    ? <div>
                        {this.props.request === Request.ERROR
                            ? 'There was an error retrieving TODOs'
                            : (
                                this.props.request === Request.PENDING
                                    ? 'Loading...'
                                    : 'Please search some Todos :)'
                            )}
                    </div>
                    : <TodoTable
                        todos={this.props.todos}
                    />
            }
                </div>)
    }
  /*  search = () => {

        alert(this.props.todos.length)

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
    }*/
}

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos || [],
    request: state.request || Request.NONE
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTodos
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoComponent)



