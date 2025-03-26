import { useEffect, useRef } from 'react';
// @ts-ignore
import usersList from 'SolidModFed/UserList';
import CreateUser from './components/CreateUser';

function App() {
  const solidUserRef = useRef(null);

  useEffect(() => {
    if (solidUserRef.current) {
      usersList(solidUserRef.current);
    }
  }, []);

  return (
    <div className='flex flex-col w-full  p-5 gap-5'>
      <CreateUser />
      <div ref={solidUserRef} />
    </div>
  );
}

export default App;
