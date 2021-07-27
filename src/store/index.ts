/* 
    The global data store will be contained in the store directory - in this case, Redux.
    Each feature will have a folder, which will contain the Redux Toolkit slice, as well as actions and tests.
    This setup can also be used with regular Redux, you would just create a .reducers.js file and .actions.js file instead of a slice.
    If you're using sagas, it could be .saga.js instead of .actions.js for Redux Thunk actions.
*/

//  in index.js you would configure the store.

/* 
    You can also add something like a ui section of the store to handle
    modals, toasts, sidebar toggling, and other global UI state,
    which I find better than having const [isOpen, setIsOpen] = useState(false) all over the place.
*/
