import UserList from './users/UserList';

function App() {
  let reactUserList: HTMLDivElement | undefined;

  return (
    <main class='flex flex-row  bg-white p-5 gap-5'>
      {/* <Counter /> */}
      <UserList />
      <div ref={reactUserList} />
    </main>
  );
}

export default App;
