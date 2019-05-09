##

# Message client

This react application has for objective to display messages coming from a REST API and propose a form to write them.

This project has been generated using create-react-app see the documentation here :
https://github.com/facebook/create-react-app/blob/master/README.md

To use this project clone it and then, install the dependancies using the command :

```
yarn install
```

After the installation is complete start the development server by using the command :

```
yarn start
```

---

## Files structures

```
├───public
└───src
    ├───actions
    ├───api
    ├───components
    │   ├───messages
    │   └───svg
    ├───reducers
    └───style

```

- The **public** folder contains statics files
- The **src** folder contains the source files
  - **actions** contains the redux action creator and the action types
  - **api** contains the configuration of the base url of the API used
  - **components** contains the application components
    - **messages** contains all the messages related components
    - **svg** contains components returning svg icons
  - **reducers** contains the reducers files returning new state after actions have been called
  - **style** contains the .scss files for the application style

---

---

## Components

**src\components\App.js**

### 1. App

This component is the root of the application, where the router is declared and the routes associated to components

- The "/" path render the MessageList component, the list of messages
- The "/show/:id" path render the MessageShow component, show a unique message depending on id
- The "/create" path render the MessageCreate for the creation of a message
  The router take the history object from history.js as a parameter.

---

**src\components\Menu.js**

### 1. Menu

Menu

Component responsible for navigating between views

There's 3 view

- The root view "/" displaying all the messages
- The show view "/show/:id" show a message with the id :id
- The create view "/create" for message creation

The component make use of _NavLink_ from _react-router-dom_ to show active link

---

**src\components\messages\MessageList.js**

### 1. MessageList

This component return the list of all the messages
The messages are objects in an array fetched from redux the redux store using _fetchMessages_ action

This component return the _MessagePagination_ component passing all the messages as a props to build a list of messages.

---

**src\components\messages\MessageListElement.js**

### 1. MessageListElement

This component render a list item representing a message

It take an object _message_ as a props and render an overview of it.
The content is truncate is there is an overflow.

| Property | Type   | Required | Default value | Description |
| :------- | :----- | :------- | :------------ | :---------- |
| message  | object | no       |               |

---

**src\components\messages\MessagePagination.js**

### 1. MessagePagination

This component formats the message list by dividing it into pages for better readability

The component takes 2 props, _messages_ and _divider_.
The _messages_ are passed by the parent component as an array of object in props.
A _divider_ is also passed as props to specify how many messages are shown by pages

The component has a _chunkedData_ and _currentIndex_ state propriety
The _chunkedData_ is the results of messages data chunked into arrays
The _currentIndex_ keep track of the page selected by the user

In order to display chunked data the component use several helper functions :

_chunkData()_ return the data as arrays whose number depends on the props _divider_

_nextPage()_ and _prevPage()_ are used to navigate between pages

_renderChunkedData()_ return only the list of messages of the active page, loop on them and return a component for each of them

_getPosition()_ return the number of messages displayed on screen and the total of messages

The component make the list scroll on top when the component is updated

The view render buttons to navigate between pages and the list of messages for the active page

| Property    | Type    | Required | Default value | Description |
| :---------- | :------ | :------- | :------------ | :---------- |
| divider     | number  | no       | 25            |
| dataToChunk | arrayOf | no       |               |

---

**src\components\messages\MessageShow.js**

### 1. MessageShow

This component is connected to the redux store displays and single message fetched from it.

The message is an object fetched from redux the redux store using _fetchMessage_ action

---

**src\components\svg\IconInbox.js**

### 1. IconInbox

Return an svg icon inbox taking width, height and fill color as props.

| Property | Type   | Required | Default value               | Description |
| :------- | :----- | :------- | :-------------------------- | :---------- |
| width    | string | no       | &lt;See the source code&gt; |
| height   | string | no       | &lt;See the source code&gt; |
| fill     | string | no       | &lt;See the source code&gt; |

---

**src\components\svg\IconSend.js**

### 1. IconSend

Return an svg icon inbox taking width, height and fill color as props.

| Property | Type   | Required | Default value               | Description |
| :------- | :----- | :------- | :-------------------------- | :---------- |
| width    | string | no       | &lt;See the source code&gt; |
| height   | string | no       | &lt;See the source code&gt; |
| fill     | string | no       | &lt;See the source code&gt; |

---

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
