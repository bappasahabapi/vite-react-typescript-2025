import { FaStar } from "react-icons/fa6";
import { DefaultTask } from "../interface/taskInterface";


const tagBackground: string[] = [
  "#FF5733A8", "#33FF57A8", "#3357FFA8", "#FF33A1A8", "#A133FFA8",
  "#33FFA1A8", "#57FF33A8", "#FF573DA8", "#5733FFA8", "#FF3357A8",
  "#33A1FFA8", "#A1FF33A8", "#FF33A1A8", "#57FFA1A8", "#A15733A8",
  "#FFA133A8", "#33A1FFA8", "#33FF57A8", "#A1A133A8", "#5733A1A8",
  "#A1FF57A8", "#33FFA8A8", "#5733FFA8", "#A1A157A8", "#FF5733A8",
  "#33FFA157", "#A157FFA8", "#FF573AA8", "#A1FF33A8", "#FF33A1A8",
  "#3357FFA8", "#5733FFA8", "#A133FFA8", "#FF573DA8", "#33A1FFA8",
  "#A1FFA157", "#5733A1A8", "#A1FF57A8", "#33FFA8A8", "#57FF33A8",
  "#FF33A1A8", "#A1FFA8A8", "#57FFA1A8", "#5733FFA8", "#A1FF33A8"
];




interface TaskListProps {
  tasks: DefaultTask[];
  onFavourite: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: DefaultTask) => void;
}

const TaskList = ({ tasks, onFavourite, onDelete, onEdit }: TaskListProps) => {
  return (
    <div>
      <div className="overflow-auto">
        <table className="table-fixed overflow-auto xl:w-full text-white">
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                {" "}
                Title{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                {" "}
                Description{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                {" "}
                Tags{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                {" "}
                Priority{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                {" "}
                Options{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr
                key={task.id}
                className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
              >
                <td>
                  <button onClick={() => onFavourite(task.id)}>
                    {task.isFavorite ? (
                      <FaStar color="red" size={20} />
                    ) : (
                      <FaStar color="gray" />
                    )}
                  </button>
                </td>
                <td style={{ textAlign: "start" }}>{task?.title}</td>
                <td>
                  <div>{task?.description}</div>
                </td>
                <td>
                  <ul className="flex justify-center gap-1.5 flex-wrap">
                  {task.tags.map((tag,i) => {
                        const randomIndex = Math.round(
                          Math.random() * (tagBackground.length - 1)
                        );
                        return(
                        <li key={i}>
                          <span
                            style={{ background: tagBackground[randomIndex] }}
                            className="inline-block h-5 whitespace-nowrap rounded-[45px]  px-2.5 text-sm capitalize text-[#F4F5F6]"
                          >
                            {tag}
                          </span>
                        </li>);
                      })}
                  </ul>
                </td>
                <td className="text-center">{task.priority}</td>
                <td>
                  <div className="flex items-center justify-center space-x-3">
                    <button
                      onClick={() => onDelete(task.id)}
                      className="text-red-500 hover:bg-gray-500 "
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => onEdit(task)}
                      className="text-blue-500 "
                    >
                      Edit
                    </button>
                    {/* <button className="text-blue-500 ">
                      <CiEdit color="aqua" />
                    </button> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
