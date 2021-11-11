import React, { useState, useEffect, useCallback } from "react";
import { FlatList, RefreshControl } from "react-native";
import { getTasks, deleteTask } from "../Api";
import TaskItem from "./TaskItem";
const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const loadTask = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTask();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    await loadTask();
  };

  const renderItem = ({ item }) => {
    return <TaskItem task={item} handleDelete={handleDelete} />;
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadTask();
    setRefreshing(false);
  });

  return (
    <FlatList
      style={{ width: "100%" }}
      data={tasks}
      keyExtractor={(item) => item.id + ""}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          colors={["#78e08f"]}
          onRefresh={onRefresh}
          progressBackgroundColor="#0a3d62"
        />
      }
    />
  );
};

export default TaskList;
