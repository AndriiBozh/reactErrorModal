import User from "./User";

const Users = (prop) => {
  return (
    <div>
      <ul>
        {prop.users.map((el) => (
          <li key={Math.random()}>
            <User name={el.name} age={el.age} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
