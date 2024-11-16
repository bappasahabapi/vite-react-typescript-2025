# Redux Best Practices

## 00.Three Principles of Redux

- 1: **Single source of truth**

    - The global state of your application is stored in an object tree within a single store.
- 2: **State is read-only**

    - The only way to change the state is to emit an action, an object describing what happened.
- 3: **Changes are made with pure functions**

    - To specify how the state tree is transformed by actions, you write pure reducers.

## A. Priority Rule [Essential | Medium Priority ]

- **🔥 Do Not Mutate State**

    - **Actual mutation of state values should always be avoided,** both inside reducers and in all other application code.
    
- **🔥 Reducers Must Not Have Side Effects**
    - **only `depend` on their `state` and `action` arguments,** and should only calculate and` return a new state` value based on those arguments.
    
    - **The purpose of this rule is to guarantee that reducers will behave predictably when called.**
    
    -  They must not execute any kind of `asynchronous` logic (AJAX calls, timeouts, promises), generate random values (Date.now(), Math.random()), modify variables outside the reducer, or run other code that affects things outside the scope of the reducer function. 
    
    
    

- **🔥 Do Not Put Non-Serializable Values in State or Actions**
    - **Avoid putting non-serializable values such as Promises, Symbols, Maps/Sets, functions, or class instances into the Redux store state or dispatched actions**. 
    
    - This ensures that capabilities such as debugging via the Redux DevTools will work as expected. It also ensures that the UI will update as expected.
    
- **🔥 Only One Redux Store Per App**

## B. Priority Rules: [ Strongly Recommended | Higher Priority]

- 🔥Use **Redux Toolkit** for Writing Redux Logic
- 🔥Use **Immer for Writing Immutable** Updates
- 🔥Structure Files as **Feature Folder**s with Single-File Logic
- 🔥**Put as Much Logic as Possible in Reducers:**
   - try to put as much of the logic for calculating a new state into the appropriate reducer, rather than in the code that prepares and dispatches the action      
- 🔥Reducers Should **Own the State Shape** 
- 🔥**Name State Slice**s Based On the Stored Data
    - Your object should look like `{users: {}, posts: {}}`, rather than `{usersReducer: {}, postsReducer: {}}.`
- 🔥Organize **State Structure Based on Data Types**, Not Components 
- 🔥Treat Reducers as State Machines
    - state machines", where the combination of both the current state and the dispatched action determines whether a new state value is actually calculated 
- 🔥 Normalize Complex Nested/Relational State
- 🔥 Keep State Minimal and Derive Additional Values
- 🔥 Write Meaningful Action Names
- 🔥 Allow Many Reducers to Respond to the Same Action
- 🔥 Avoid Dispatching Many Actions Sequentially
- 🔥 Use the **React-Redux Hooks API**
    - Prefer using the **React-Redux hooks API** `(useSelector and useDispatch)` as the default way to interact with a Redux store from your React components 
- 🔥 Use the Redux DevTools Extension for Debugging
    - Configure your Redux store to enable debugging with the Redux DevTools Extension. It allows you to view:
        - The history log of dispatched actions
        - The contents of each action
        - The final state after an action was dispatched
        - The diff in the state after an action
        - The function stack trace showing the code where the action was actually dispatched 
        
In addition, the DevTools allows you to do "time-travel debugging", stepping back and forth in the action history to see the entire app state and UI at different points in time.
Redux was specifically designed to enable this kind of debugging, and the DevTools are one of the most powerful reasons to use Redux.


## C. Priority Rules: [ Recommended | Low priority ] 

- 🔥 Write Action Types as domain/eventName
- 🔥 Write Actions Using the Flux Standard Action Convention
    - Should always put their data into a payload field
    - May have a meta field for additional info
    - May have an error field to indicate the action represents a failure of some kind
- 🔥 Use Action Creators
- 🔥 **Use RTK Query for Data Fetching**