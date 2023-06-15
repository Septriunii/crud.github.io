import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full py-4 text-center sticky top-0">
        <h1 className="mb-0">TASK APP CRUD</h1>
      </div>
      <div className="w-full  mt-20">
        <TaskList />
      </div>
    </div>
  );
};

export default App;
