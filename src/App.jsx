import React, { useState, useEffect } from 'react';
import UsersList from './components/UsersList';
import Header from './components/Header';
import { fakeUsersData, generateNumbers, generateUUID } from './utils/helpers';

function App() {
  const [usersData, setUsersData] = useState(generateNumbers(fakeUsersData));
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (localStorage.getItem('usersData')) {
      setUsersData(JSON.parse(localStorage.getItem('usersData')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('usersData', JSON.stringify(usersData));
  }, [usersData]);

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const deleteUsers = () => {
    const filteredUsers = usersData.filter((user) => {
      return !selectedRowKeys.includes(user.key);
    });
    setUsersData(generateNumbers(filteredUsers));
  };

  const addRecord = (addedData) => {
    setUsersData(
      generateNumbers([...usersData, { ...addedData, key: generateUUID() }])
    );
  };

  const checkSearchValue = (type, currentValue) => {
    return type
      .toLowerCase()
      .trim()
      .includes(currentValue.toLowerCase().trim());
  };

  const searchUsers = (e) => {
    const currentValue = e.target.value;
    setInputValue(currentValue);
    const searchedUsers = usersData.filter(
      (user) =>
        checkSearchValue(user.firstName, currentValue) ||
        checkSearchValue(user.lastName, currentValue)
    );
    setFilteredUsers(generateNumbers(searchedUsers));
  };

  return (
    <div>
      <Header
        deleteUsers={deleteUsers}
        addRecord={addRecord}
        searchUsers={searchUsers}
        inputValue={inputValue}
      />
      <UsersList
        onSelectChange={onSelectChange}
        selectedRowKeys={selectedRowKeys}
        usersData={inputValue.length ? filteredUsers : usersData}
      />
    </div>
  );
}

export default App;
