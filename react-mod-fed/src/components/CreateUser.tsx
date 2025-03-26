import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import CreateUserModal from './CreateUserModal';
import type { UserFormData } from './CreateUserModal';
//@ts-ignore
import userStore from 'SolidModFed/userStore';
const CreateUser: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateUser = (userData: UserFormData) => {
    userStore.setState((prevState: any) => {
      const newUser = {
        ...userData,
        id: Math.random().toString(36).substr(2, 9), // Generate a random ID
        picture: {
          large: 'https://randomuser.me/api/portraits/men/1.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/1.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
        },
        login: {
          uuid: Math.random().toString(36).substr(2, 9),
          username: userData.name.first.toLowerCase(),
          password: 'password123',
          salt: 'salt123',
          md5: 'md5123',
          sha1: 'sha1123',
          sha256: 'sha256123',
        },
        dob: {
          date: new Date().toISOString(),
          age: 30,
        },
        registered: {
          date: new Date().toISOString(),
          age: 1,
        },
        nat: 'US',
      };

      return prevState.map((userArray: any[]) => {
        if (userArray === prevState[0]) {
          return [...userArray, newUser];
        }
        return userArray;
      });
    });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
      <Button
        variant='contained'
        color='primary'
        size='large'
        onClick={() => setIsModalOpen(true)}
        sx={{
          minWidth: '200px',
          boxShadow: 2,
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: 4,
          },
          transition: 'all 0.2s ease-in-out',
        }}
      >
        Create New User
      </Button>

      <CreateUserModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateUser}
      />
    </Box>
  );
};

export default CreateUser;
