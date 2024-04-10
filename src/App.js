import { useState } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import {
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";

import { Column } from "./components/Colums";

import "./App.css";
import MobileList from "./components/MobileList";
import { Task } from "./components/Task";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
    { id: 4, title: "Learn how to center a div" },
    { id: 5, title: "Learn how to center a div" },
    { id: 6, title: "Learn how to center a div" },
    { id: 7, title: "Learn how to center a div" },
    { id: 8, title: "Learn how to center a div" },
  ]);

  const addTask = (title) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
  };

  console.log("tasks", tasks);

  return (
    <div className="App">
      <h1>My Tasks ✅</h1>
      <MobileList
        items={tasks}
        dragable
        onDragEnd={(items) => setTasks(items)}
        itemRender={(item) => (
          <Task id={item.id} title={item.title} key={item.id} />
        )}
      />

      {/* <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <Column id="toDo" tasks={tasks} />
      </DndContext> */}
    </div>
  );
}
