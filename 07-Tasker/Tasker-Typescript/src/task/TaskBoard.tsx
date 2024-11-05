import { useState } from "react";
import TaskList from "./TaskList";
import { DefaultTask } from "../interface/taskInterface";
import TaskActions from "./TaskActioin";
import ModalAddTask from "./ModalAddTask";
import SearchTask from "./SearchTask";

const defaultTask: DefaultTask[] = [
  {
    id: crypto.randomUUID(),
    title: "one",
    description:
      "There is a dreamy boy whose name is Bappa There is a dreamy boy whose name is Bappa There is a dreamy boy whose name is Bappa",
    tags: ["web", "js"],
    priority: "High",
    isFavorite: true,
  },
  {
    id: Math.random().toString(),
    title: "Two",
    description:
      "I love Bangladesh",
    tags: ["web", "js"],
    priority: "Low",
    isFavorite: false,
  },
  {
    id: Math.random().toString(),
    title: "one",
    description:
      "There is a dreamy boy whose name is Bappa There is a dreamy boy whose name is Bappa There is a dreamy boy whose name is Bappa",
    tags: ["web", "js"],
    priority: "Low",
    isFavorite: false,
  },
];

const TaskBoard = () => {
  const [tasks, setTasks] = useState<DefaultTask[]>(defaultTask);
  const [showAddModal, setShowAddModal] = useState<boolean | undefined>(false);
  const [taskToUpdate, setTaskToUpdate] = useState<DefaultTask | null>(null);

  const handleCloseModal = () => {
    setShowAddModal(false);
    setTaskToUpdate(null)
  };

  const handleAddEditTask = (newTask: DefaultTask, isAddTask: boolean) => {
    if (isAddTask) {
      setTasks([...tasks, newTask]);
    } else {
      const updatedTask = tasks.map((task) =>
        task.id === newTask.id ? newTask : task
      );
      setTasks(updatedTask);
    }
    setShowAddModal(false);
    setTaskToUpdate(null);
  };

  // Separate function to handle editing an existing task
  // const handleAddTask = (newTask: DefaultTask) => {
  //   setTasks([...tasks, newTask]);
  //   setShowAddModal(false);
  // };

  // Separate function to handle editing an existing task
  // const handleUpdateTask = (updatedTask: DefaultTask) => {
  //   const updatedTasks = tasks.map((task) =>
  //     task.id === updatedTask.id ? updatedTask : task
  //   );
  //   setTasks(updatedTasks);
  //   setShowAddModal(false);
  //   setTaskToUpdate(null);
  // };

  const handleEdit = (editTask: DefaultTask) => {
    console.log(editTask);
    setTaskToUpdate(editTask);
    setShowAddModal(true);
  };

  const handleFavourite = (taskId: string) => {
    // const taskIndex =tasks.findIndex(task=>{ console.log(task.id, taskId) ; return task.id ===taskId});
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const previousTask = [...tasks];

    previousTask[taskIndex].isFavorite = !previousTask[taskIndex].isFavorite;
    setTasks(previousTask);
  };

  const handleDelete = (taskId: string) => {
    console.log(taskId);
    const filterTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filterTasks);
  };

  const handleDeleteAll = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleOnSearch = (serchText: string) => {
    console.log(serchText);

    const filterTasks = tasks.filter(
      (task) =>
        task.title.toLocaleLowerCase().includes(serchText) ||
        task.description.toLocaleLowerCase().includes(serchText) ||
        task.priority.toLocaleLowerCase().includes(serchText)
    );

    setTasks([...filterTasks])
  };

  return (
    <div>
      <section className="mb-10 border  border-green-600" id="tasks">
        <p style={{ textAlign: "center", color: "white" }}>
          Taskboard Component
        </p>
        {/* //todo: Show Modal  */}
        {showAddModal && (
          <ModalAddTask
            taskToUpdate={taskToUpdate}
            onCloseClick={handleCloseModal}
            onSave={handleAddEditTask}
            // onSave1={taskToUpdate ? handleUpdateTask : handleAddTask}
          />
        )}
        <div className="container">
          <SearchTask onSearch={handleOnSearch} />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B]  px-6 py-8 md:px-9 md:py-16">
            {/* //todo: Task Action Button */}
            <TaskActions
              onClick={() => setShowAddModal(true)}
              onDeleteAll={handleDeleteAll}
            />
            <TaskList
              tasks={tasks}
              onFavourite={handleFavourite}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskBoard;
