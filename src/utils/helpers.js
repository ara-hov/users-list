export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const generateNumbers = (data) =>
  data.map((user, index) => ({ ...user, number: index + 1 }));

export const columns = [
  {
    title: '#',
    dataIndex: 'number',
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
  },
  {
    title: 'Superhero Name',
    dataIndex: 'superheroName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];

export const fakeUsersData = [
  {
    key: generateUUID(),
    firstName: 'Steve',
    lastName: 'Rogers',
    superheroName: 'Captain',
    email: 'steve@gmail.com',
    gender: 'M',
    age: 28,
  },
  {
    key: generateUUID(),
    firstName: 'Tony',
    lastName: 'Stark',
    superheroName: 'Iron Man',
    email: 'tony@gmail.com',
    gender: 'M',
    age: 33,
  },
  {
    key: generateUUID(),
    firstName: 'Bony',
    lastName: 'Stark',
    superheroName: 'Iron Man',
    email: 'tony@gmail.com',
    gender: 'M',
    age: 38,
  },
  {
    key: generateUUID(),
    firstName: 'Kony',
    lastName: 'Stark',
    superheroName: 'Iron Man',
    email: 'tony@gmail.com',
    gender: 'M',
    age: 33,
  },
];
