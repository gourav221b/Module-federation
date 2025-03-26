import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { SelectChangeEvent } from '@mui/material/Select';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@mui/material';

export interface UserFormData {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  location: {
    street: {
      number: string;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
}

interface CreateUserModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (userData: UserFormData) => void;
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<UserFormData>({
    gender: '',
    name: {
      title: '',
      first: '',
      last: '',
    },
    email: '',
    phone: '',
    location: {
      street: {
        number: '',
        name: '',
      },
      city: '',
      state: '',
      country: '',
      postcode: '',
    },
  });

  const handleChange = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof UserFormData] as Record<string, string>),
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth='sm' fullWidth>
      <DialogTitle>Create New User</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                value={formData.gender}
                label='Gender'
                onChange={(e: SelectChangeEvent<string>) =>
                  handleChange('gender', e.target.value)
                }
              >
                <MenuItem value='male'>Male</MenuItem>
                <MenuItem value='female'>Female</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label='Title'
              value={formData.name.title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange('name.title', e.target.value)
              }
              fullWidth
            />

            <TextField
              label='First Name'
              value={formData.name.first}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange('name.first', e.target.value)
              }
              fullWidth
            />

            <TextField
              label='Last Name'
              value={formData.name.last}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange('name.last', e.target.value)
              }
              fullWidth
            />

            <TextField
              label='Email'
              type='email'
              value={formData.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange('email', e.target.value)
              }
              fullWidth
            />

            <TextField
              label='Phone'
              value={formData.phone}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange('phone', e.target.value)
              }
              fullWidth
            />

            <TextField
              label='Street Number'
              value={formData.location.street.number}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange('location.street.number', e.target.value)
              }
              fullWidth
            />

            <TextField
              label='Street Name'
              value={formData.location.street.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange('location.street.name', e.target.value)
              }
              fullWidth
            />

            <TextField
              label='City'
              value={formData.location.city}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange('location.city', e.target.value)
              }
              fullWidth
            />

            <TextField
              label='State'
              value={formData.location.state}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange('location.state', e.target.value)
              }
              fullWidth
            />

            <TextField
              label='Country'
              value={formData.location.country}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange('location.country', e.target.value)
              }
              fullWidth
            />

            <TextField
              label='Postcode'
              value={formData.location.postcode}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange('location.postcode', e.target.value)
              }
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type='submit' variant='contained' color='primary'>
            Create User
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateUserModal;
