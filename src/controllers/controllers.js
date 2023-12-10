let tasks = [
    { id: 1, title: 'Task 1', description: 'Description 1', completed: false, priority: 'low' },
    { id: 2, title: 'Task 2', description: 'Description 2', completed: true, priority: 'medium' },
  ];

const getAllTasks = (req,res)=>{
    return res.status(200).json(tasks);
}

const getTaskById = (req,res)=>{
    const taskId = parseInt(req.params.id);
    const task = tasks.find((t)=>t.id===taskId);
    if(task){
        return res.status(200).json(task)
    }
    else{
        return res.status(500).json({message : "Task not found"})
    }
}

const createTask = (req,res)=>{
    const {title,description,completed,priority} = req.body;
    if(!title || !description || typeof completed !== 'boolean'){
        return res.status(500).json({message : "invalid request"})
    }
    const newTask = {
        id : tasks.length+1,
        title,
        description,
        completed,
        priority: priority || 'low'
    };
    tasks.push(newTask)
    return res.status(201).json(newTask)   
}

const updateTask = (req,res)=>{
    const taskId = parseInt(req.params.id);
    const {title, description, completed, priority} = req.body;
    const taskIndex = tasks.findIndex((t)=>t.id===taskId);

    if (taskIndex !== -1) {
        tasks[taskIndex] = {
          ...tasks[taskIndex],
          title: title || tasks[taskIndex].title,
          description: description || tasks[taskIndex].description,
          completed: completed !== undefined ? completed : tasks[taskIndex].completed,
          priority: priority || tasks[taskIndex].priority,
        };
        return res.status(200).json(tasks[taskIndex]);
      } else {
        return res.status(404).json({ message: 'Task not found' });
      }
}

const deleteTask = (req,res)=>{
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter((t)=>t.id !== taskId);
    return res.status(200).json({message : "Task deleted successfully"})
}



module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};