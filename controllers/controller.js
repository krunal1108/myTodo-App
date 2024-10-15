let storeTodoData = [];


const defaultController = (req, res) => {
    console.log("Run Default Controller.");

    res.render('index', { todos: storeTodoData });
}


const todoRun = (req, res) => {
    console.log("Run Todo Apppp.");

    const todoId = {
        id: storeTodoData.length + 1,
        todo: req.body.todo
    }

    storeTodoData = [...storeTodoData, todoId]
    console.log(storeTodoData);


    res.redirect('/');

}



const editTodoController = (req, res) => {
    console.log("Run Edit Todo Apppp.");
    let { id } = req.params;
    const singleTodo = storeTodoData.find((data) => {
        return data.id == id;
    })
    console.log("Single Todo for Edit", singleTodo);

    res.render('edit', { singleTodo });

}



const updateTodoController = (req, res) => {
    console.log("Run Update Todo Apppp.");
    let { id } = req.params;
    const { todo } = req.body;
    const singleTodo = storeTodoData.find((data) => {
        return data.id == id;
    })
    console.log("Single Todo Update", singleTodo);
    singleTodo.todo = todo;
    console.log("Single Todo Update 2", singleTodo);
    res.redirect('/');
}





const deleteTodoController = (req, res) => {
    console.log("Run Delete Todo Apppp.");
    let { id } = req.params;
    
    const deleteTodo = storeTodoData.filter((todo)=>{
        return todo.id != id;
    })

    storeTodoData = deleteTodo;

    res.redirect('/');
}







module.exports = { defaultController, todoRun, editTodoController, updateTodoController, deleteTodoController };