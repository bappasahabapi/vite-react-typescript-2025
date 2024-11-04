import { useState } from "react";
import { DefaultTask } from "../interface/taskInterface";

interface ModalProps {
  onSave: (task: DefaultTask,isAdd:boolean) => void;
  onCloseClick: () => void;
  taskToUpdate: DefaultTask | null;
  // onSave1?: (task: DefaultTask,isAdd:boolean) => void;
}

const ModalAddTask = ({
  onCloseClick,
  onSave,
  // onSave1,
  taskToUpdate,
}: ModalProps) => {
  const [task, setTask] = useState<DefaultTask>(taskToUpdate ||{
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    isFavorite: false,
  });

  const [isAdd] = useState<boolean>(taskToUpdate === null);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    const updatedValue = name === "tags" ? value.split(",") : value;
    setTask({
      ...task,
      [name]: updatedValue,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    onSave(task,isAdd); // Call onSave with the current task
  };

  return (
    <div className="bg-black shadow-lg bg-opacity-70 h-3/4 w-full z-60 absolute top-0 left-0 ">
      <form
        //  onSubmit={(e)=>{
        //   e.preventDefault();
        //   onSave(task)
        // }}
        onSubmit={handleSubmit}
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/4 left-1/3"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAdd ? "Add New Task" : "Update Task"}
        </h2>

        <div className="mb-9 text-right text-xl font-bold text-white lg:mb-11 lg:text-[18px]">
          <button
            onClick={onCloseClick}
            className="rounded bg-red-600 px-4 py-2  text-white transition-all hover:opacity-80 "
          >
            Close
          </button>
        </div>
        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              id="title"
              required
              name="title"
              value={task.title}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              id="description"
              required
              name="description"
              value={task.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                id="tags"
                required
                name="tags"
                value={task.tags}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                value={task.priority}
                onChange={handleChange}
                id="priority"
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center gap-6 lg:mt-20">
          <button
            onClick={() => onSave(task,isAdd)}
            type="submit"
            className="rounded bg-green-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            
            {/* ✅ Save Task */}
            {isAdd ? "✅ Add Task" : " Update Task"}

          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalAddTask;
