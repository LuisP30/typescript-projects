type User = { username: string, password: string };
type VerifyUserFn = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return user.username === sentValue.username && user.password === sentValue.password;
};

const bdUser = { username: 'Luis', password: '1234' };
// bdUser não tem o tipo User especificamente, mas possui a estrutura necessária que User tem
// Assim como sentUser. Dessa forma não são gerados erros
const sentUser = { username: 'Luis', password: '1234' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn)
