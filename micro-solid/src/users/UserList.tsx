import { useStore } from '@tanstack/solid-store';
import { createSignal, For, Show } from 'solid-js';
import userStore from './UserStore';
import { styles } from './UserList.styles';

type User = {
  id: string;
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};

export default function UserList() {
  const users = useStore(userStore);
  const [selectedUser, setSelectedUser] = createSignal<User | null>(null);
  const [isModalOpen, setIsModalOpen] = createSignal(false);
  const [hoveredRow, setHoveredRow] = createSignal<string | null>(null);
  const [hoveredButton, setHoveredButton] = createSignal<string | null>(null);
  const [formData, setFormData] = createSignal<User | null>(null);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setFormData({ ...user });
    setIsModalOpen(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => {
      if (!prev) return null;
      const newData = { ...prev };

      if (field.includes('.')) {
        const [parent, child] = field.split('.');
        if (parent === 'name') {
          newData.name = { ...newData.name, [child]: value };
        } else if (parent === 'location') {
          newData.location = { ...newData.location, [child]: value };
        }
      } else {
        (newData as any)[field] = value;
      }

      return newData;
    });
  };

  const handleDelete = (userId: string) => {
    userStore.setState((prevUsers) =>
      prevUsers.map((userArray) =>
        userArray.filter((user) => user.id !== userId)
      )
    );
  };

  const handleUpdate = () => {
    const updatedUser = formData();
    if (updatedUser) {
      userStore.setState((prevUsers) =>
        prevUsers.map((userArray) =>
          userArray.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
          )
        )
      );
      setIsModalOpen(false);
      setSelectedUser(null);
      setFormData(null);
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.tableHeaderCell}>User</th>
              <th style={styles.tableHeaderCell}>Contact</th>
              <th style={styles.tableHeaderCell}>Location</th>
              <th style={styles.tableHeaderCell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <For each={users()[0]}>
              {(user) => (
                <tr
                  style={{
                    ...styles.tableRow,
                    ...(hoveredRow() === user.id ? styles.tableRowHover : {}),
                  }}
                  onMouseEnter={() => setHoveredRow(user.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td style={styles.tableCell}>
                    <div style={styles.userInfo}>
                      <div style={styles.userAvatar}>
                        <img
                          style={styles.userAvatarImage}
                          src={user.picture.thumbnail}
                          alt=''
                        />
                      </div>
                      <div style={styles.userDetails}>
                        <div style={styles.userName}>
                          {user.name.title} {user.name.first} {user.name.last}
                        </div>
                        <div style={styles.userGender}>{user.gender}</div>
                      </div>
                    </div>
                  </td>
                  <td style={styles.tableCell}>
                    <div style={styles.contactInfo}>{user.email}</div>
                    <div style={styles.contactSubInfo}>{user.phone}</div>
                    <div style={styles.contactSubInfo}>{user.cell}</div>
                  </td>
                  <td style={styles.tableCell}>
                    <div style={styles.contactInfo}>{user.location.city}</div>
                    <div style={styles.contactSubInfo}>
                      {user.location.country}
                    </div>
                    <div style={styles.contactSubInfo}>
                      {user.location.state}
                    </div>
                  </td>
                  <td style={styles.tableCell}>
                    <button
                      onClick={() => handleEdit(user)}
                      style={{
                        ...styles.actionButton,
                        ...(hoveredButton() === `edit-${user.id}`
                          ? styles.actionButtonHover
                          : {}),
                      }}
                      onMouseEnter={() => setHoveredButton(`edit-${user.id}`)}
                      onMouseLeave={() => setHoveredButton(null)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      style={{
                        ...styles.deleteButton,
                        ...(hoveredButton() === `delete-${user.id}`
                          ? styles.deleteButtonHover
                          : {}),
                      }}
                      onMouseEnter={() => setHoveredButton(`delete-${user.id}`)}
                      onMouseLeave={() => setHoveredButton(null)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </div>

      <Show when={isModalOpen()}>
        <div style={styles.modalOverlay}>
          <div style={styles.modalContainer}>
            <div>
              <h3 style={styles.modalTitle}>Edit User</h3>
              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Title</label>
                  <input
                    type='text'
                    value={formData()?.name.title || ''}
                    onInput={(e) =>
                      handleInputChange('name.title', e.currentTarget.value)
                    }
                    style={styles.formInput}
                    placeholder='Title'
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>First Name</label>
                  <input
                    type='text'
                    value={formData()?.name.first || ''}
                    onInput={(e) =>
                      handleInputChange('name.first', e.currentTarget.value)
                    }
                    style={styles.formInput}
                    placeholder='First Name'
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Last Name</label>
                  <input
                    type='text'
                    value={formData()?.name.last || ''}
                    onInput={(e) =>
                      handleInputChange('name.last', e.currentTarget.value)
                    }
                    style={styles.formInput}
                    placeholder='Last Name'
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Gender</label>
                  <input
                    type='text'
                    value={formData()?.gender || ''}
                    onInput={(e) =>
                      handleInputChange('gender', e.currentTarget.value)
                    }
                    style={styles.formInput}
                    placeholder='Gender'
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Email</label>
                  <input
                    type='email'
                    value={formData()?.email || ''}
                    onInput={(e) =>
                      handleInputChange('email', e.currentTarget.value)
                    }
                    style={styles.formInput}
                    placeholder='Email'
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Phone</label>
                  <input
                    type='tel'
                    value={formData()?.phone || ''}
                    onInput={(e) =>
                      handleInputChange('phone', e.currentTarget.value)
                    }
                    style={styles.formInput}
                    placeholder='Phone'
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Cell</label>
                  <input
                    type='tel'
                    value={formData()?.cell || ''}
                    onInput={(e) =>
                      handleInputChange('cell', e.currentTarget.value)
                    }
                    style={styles.formInput}
                    placeholder='Cell'
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>City</label>
                  <input
                    type='text'
                    value={formData()?.location.city || ''}
                    onInput={(e) =>
                      handleInputChange('location.city', e.currentTarget.value)
                    }
                    style={styles.formInput}
                    placeholder='City'
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>State</label>
                  <input
                    type='text'
                    value={formData()?.location.state || ''}
                    onInput={(e) =>
                      handleInputChange('location.state', e.currentTarget.value)
                    }
                    style={styles.formInput}
                    placeholder='State'
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Country</label>
                  <input
                    type='text'
                    value={formData()?.location.country || ''}
                    onInput={(e) =>
                      handleInputChange(
                        'location.country',
                        e.currentTarget.value
                      )
                    }
                    style={styles.formInput}
                    placeholder='Country'
                  />
                </div>
              </div>
            </div>
            <div style={styles.modalActions}>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  ...styles.cancelButton,
                  ...(hoveredButton() === 'cancel'
                    ? styles.cancelButtonHover
                    : {}),
                }}
                onMouseEnter={() => setHoveredButton('cancel')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                style={{
                  ...styles.saveButton,
                  ...(hoveredButton() === 'save' ? styles.saveButtonHover : {}),
                }}
                onMouseEnter={() => setHoveredButton('save')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
}
