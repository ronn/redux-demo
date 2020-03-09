import * as React from 'react'

const TodoTable = ({todos}) => (<div>
    <table width="100%" border="10">
        <thead>
        <tr>
            <td><b>User ID</b></td>
            <td><b>ID</b></td>
            <td><b>Title</b></td>
            <td><b>Completed</b></td>
        </tr>
        </thead>
        <tbody id="leaderboard-table">
        {todos.map(todo => <tr key={todo.id}>
            <td>{todo.userId}</td>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.completed}</td>
        </tr>
        )}
        </tbody>
    </table>
</div>)

export default TodoTable