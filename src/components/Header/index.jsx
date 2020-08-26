import React from 'react';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './style.scss';
import AddRecord from '../AddRecord';

const Header = ({ deleteUsers, addRecord, searchUsers, inputValue }) => {
  return (
    <header className='header'>
      <Button danger onClick={deleteUsers}>
        Delete
      </Button>
      <AddRecord addRecord={addRecord} />
      <Input
        placeholder='Search...'
        prefix={<SearchOutlined />}
        onChange={searchUsers}
        value={inputValue}
      />
    </header>
  );
};

export default Header;
