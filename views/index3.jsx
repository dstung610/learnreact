import React from 'react';
    // LEARN HOW PROPS WORKS
    // <ChildComponent some-attribute="this gets passed">So does this</ChildComponent>
    // In ChildComponent, access the value "this gets passed" by {this.props.some-attribute}. And {this.props.children} to get "So does this"
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
      }
    }
    
    class TodoForm extends React.Component {
        render(){
            return (
                <div className='todoForm'>
                    I am a TodoForm.
                </div>
            );
        }
    }
