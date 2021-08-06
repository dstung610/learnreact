

import React from 'react';
import PropTypes from 'prop-types';
    export default class TodoBox extends React.Component {
        render() {
            return (
                <div className = "todoBox">
                    <h1>Todos</h1>
                    <TodoList data = {this.props.data}/>
                    <TodoForm />
                </div>
            );
          }
    }
    
    class TodoList extends React.Component {
        render() {
            var todo = this.props.data.map(function(obj) { return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
            return (
                <div className="todoList">
                    <table style={{border: "2px solid black"}}>
                        <tbody>
                        {todo}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
    
    class Todo extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isChecked: false
            }
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(e){     
            console.log('changed');
            this.setState({isChecked: !this.state.isChecked});
            
        }

        render(){
            let trStyle = {};
            if(this.state.checked){
                trStyle = style.checkedTodo;
            } else {
                trStyle = style.notCheckedTodo;
            };
            return (
                <tr style={trStyle}>
                    <td style={{border: "1px solid black"}}>
                            <input type="checkbox" defaultChecked={this.state.isChecked} onChange={this.handleChange}/>
                        </td>                
                    <td style={style.tableContent}>{this.props.title}</td>
                    <td style={style.tableContent}>{this.props.children}</td>
                </tr>
          );
      };
      
    }

    Todo.propTypes = {
        title: PropTypes.string.isRequired
    };
    
    class TodoForm extends React.Component {
        render(){
            return (
                <div className='todoForm'>
                    I am a TodoForm.
                    <input type={"checkbox"}/>
                </div>
            );
        }
    }

    let style = {
        checkedTodo: {
            textDecoration: "line-through"
        },
        notCheckedTodo: {
            textDecoration: "none"
        },
        tableContent: {
            border: "1px solid black"
        }
    };