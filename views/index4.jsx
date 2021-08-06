import React from 'react';
import PropTypes from 'prop-types';
    // LEARN propTypes
    //     Let's learn to validate that our components get passed all the necessary properties.

    // As you build and rely on common components (buttons, form fields etc.), it's
    // helpful to ensure the components are being used correctly. You can do this by specifying propTypes.

    // First, you will need to install the prop-types package
    export default class TodoBox extends React.Component {
        render() {
            return (
                <div className = "todoBox">
                    <h1>Todos</h1>
                    <TodoList />
                    <TodoForm />
                </div>
            );
          }
    }
    
    class TodoList extends React.Component {
        render() {
            return (
                <div className="todoList">
                    <table style={{border: "2px solid black"}}>
                        <tbody>
                        <Todo title="Shopping">Milk</Todo>
                        <Todo title="Hair cut">13:00</Todo>
                        <Todo title="Learn React">15:00</Todo>
                        </tbody>
                    </table>
                </div>
            );
        }
    }
    
    class Todo extends React.Component {
      render(){
          return (
              <tr>
                  <td style={{border: '1px solid black'}}>{this.props.title}</td>
                  <td style={{border: '1px solid black'}}>{this.props.children}</td>
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
                </div>
            );
        }
    }
