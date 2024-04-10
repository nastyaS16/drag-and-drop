import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React from "react";

const MobileList = ({ dragable, itemRender, items, onDragEnd }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getTaskPos = (id) => items.findIndex((item) => item.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    onDragEnd((items) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(items, originalPos, newPos);
    });
  };

  const renderItems = () => {
    return dragable ? (
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item) => itemRender(item))}
        </SortableContext>
      </DndContext>
    ) : (
      items.map((item, index) => (
        <div key={index} id={item.id}>
          {itemRender(item)}
        </div>
      ))
    );
  };
  return <div>{items.length > 0 ? renderItems() : "empty"}</div>;
};

export default MobileList;
