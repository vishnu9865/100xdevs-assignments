/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require('express');
const bodyParser = require('body-parser');
const todos = require('./todos.json');
const fs = require('node:fs');
const path = require('node:path');
const { v4: uuidv4 } = require('uuid');

function writeToFile(todoList) {
  fs.writeFileSync(path.join(__dirname, '/todos.json'), JSON.stringify(todoList, null, 2));
}

const app = express();

app.use(bodyParser.json());

app.get('/todos', (req, res, next) => {
  try {
    res.send(todos);
  } catch (e) {
    next(e);
  }
});

app.get('/todos/:id', (req, res, next) => {
  try {
    const todo = todos.find(todo => todo.id === req.params.id);
    if (todo) {
      res.send(todo);
    } else {
      res.status(404).send('Todo not found');
    }
  } catch (e) {
    next(e);
  }
});

app.post('/todos', (req, res, next) => {
  try {
    const newData = {
      id: uuidv4(),
      title: req.body.title,
      completed: req.body.completed,
      description: req.body.description
    }
    todos.push(newData);
    writeToFile(todos);
    res.status(201).send(newData);
  } catch (e) {
    next(e);
  }
});

app.put('/todos/:id', (req, res, next) => {
  try {
    const newData = {};
    Object.keys(req.body).forEach((value, index) => {
      newData[value] = req.body[value];
    });
    const modifiedTodosList = [...todos.map(todo => {
      if (todo.id === req.params.id) {
        return {
          ...todo,
          ...newData
        }
      }
      return todo
    })]
    writeToFile(modifiedTodosList);
    res.status(200).send(modifiedTodosList.find(item => item.id === req.params.id));
  } catch (e) {
    next(e);
  }
})

app.delete('/todos/:id', (req, res, next) => {
  try {
    const modifiedTodosList = [
      ...todos.filter(todo => todo.id !== req.params.id)
    ];
    writeToFile(modifiedTodosList);
    res.status(200).send(todos.find(item => item.id === req.params.id));
  } catch (e) {
    next(e);
  }
})

// use this below code only after registering all the routes with app object, only then it will work
app.use((err, req, res, next) => {
  // console.error(err);
  res.status(500).send(
    err.message
      ? {
        message: 'Internal Server Error',
        error: err.message
      }
      : 'Internal Server Error');
});

// app.listen(3001);

module.exports = app;