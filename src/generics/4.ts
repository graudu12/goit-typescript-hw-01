type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): void {
  const defaultUser: User = {
    name: '',
    surname: '',
    email: '',
    password: '',
  };
  const updateUserData = {
    ...defaultUser,
    ...initialValues,
  };
  console.log(updateUserData);
  // Оновлення користувача
}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});
