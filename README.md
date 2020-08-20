### **Project 3 for GA's 622 cohort**

**Team:**

Mahlet Bogale<br>
Pamela Gilmour<br>
Xavier Luján<br>
Tabitha Perry<br>
_Squad Leader:_ Hou Chia

<br>

## Project Description

Tern is a to-do list app. As a user you can create to-do list items, view and organize them by priority, mark the tasks as complete, as well as editing, and deleting the items. The user can view a list of your completed to-do items.

[This is the Backend repo+planning](https://github.com/tern-app/backend)<br>
[This is the Frontend repo+planning](https://github.com/tern-app/frontend)

<br>
<br>

# Tern app backend

## API

We are building our own API with MongoDB, Mongoose and Express. The backend is deployed using AtlasDB and [Heroku](https://stark-depths-63601.herokuapp.com/tasks/). In order to maintain data consistency we developed a schema. This allows us to always save our data in the same format. Here's an example of how the data is returned:

    {
    	"title": "First to-do",
    	"body": "This is the body of the to do",
    	"createdDate": "2020-08-18",
    	"priority": 1,
    	"completed": false,
    	"completedDate": "2020-08-18",
    	"dueDate": "due date string"
    },
    {
    	"title": "First to-do",
    	"body": "This is the body of the to do",
    	"priority": 1,
    	"createdDate": "2020-08-18",
    	"dueDate": "due date string",
    	"completed": false,
    	"completedDate": "2020-08-18"
    }

<br>
<br>

## Request Response Cycle Diagram

<img src="https://github.com/tern-app/planning/blob/master/images/tern-request-response-cycle-diagram.png?raw=true" alt="Home view" width="400"/>
