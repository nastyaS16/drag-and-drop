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
    {
      id: 1,
      title: `Я стараюсь никого не обижать и быть хорошим
    Даже за глаза человека не оскорблю
    Даже мнение чужое уважаю, предположим
    Только я никого не люблю`,
    },
    {
      id: 2,
      title: `А люди любят
    Они стоят с букетами в метро
    Как будто ждали свидания целый год
    Люди любят
    Хрусталь и столовое серебро
    Достают на юбилей, покупают коньяк и торт
    Люди любят
    Хватают гантели, крутят педали
    По утрам терпеливо выгуливают собак
    Вы думали люди не любят? Не угадали…
    Люди любят, да ещё как!`,
    },
    { id: 3, title: "333333333" },
    { id: 4, title: "444444444" },
    { id: 5, title: "5555555555" },
    { id: 6, title: "6666666666" },
    { id: 7, title: "7777777777" },
    { id: 8, title: "88888888" },
  ]);

  const addTask = (title) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
  };

  console.log("tasks", tasks);

  return (
    <div className="App">
      <h1>Sorting!!!!!!</h1>
      <MobileList
        items={tasks}
        dragable
        onDragEnd={(items) => setTasks(items)}
        itemRender={(item) => <Task item={item} key={item.id} />}
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
