import { useCallback, useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./App.module.scss";
import { url } from "./helpers/helperFn";
import { UsersData, UserDescription } from "./helpers/types";

function App() {
  const [usersData, setUsersData] = useState<UsersData>(null);
  const [query, setQuery] = useState('');

  const getUsersData = async () => {
    setUsersData(null);
    const response = await fetch(url);
    const jsonData = await response.json();
    setUsersData(jsonData.results);
  };

  const search = (users: UserDescription[]): UserDescription[] | [] => {
    return users.filter( user => 
      user.name.first.toLowerCase().includes(query) ||
      user.name.last.toLowerCase().includes(query) ||
      user.email.includes(query) ||
      user.dob.date.includes(query) ||
      user.phone.includes(query) ||
      user.location.city.includes(query) ||
      user.location.country.includes(query) ||
      user.location.state.includes(query)
    )
  }

  useEffect(() => {
    getUsersData();
  }, []);

  const deleteUser = useCallback((id: string): void => {
    setUsersData(
      (prevUsers) =>
        prevUsers && prevUsers.filter((user) => user.login.uuid !== id)
    );
  }, []);

  return (
    <>
      <header>
        <input className={styles.search} type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)}/>
        <button className={styles.refresh} onClick={getUsersData}>
          Refresh users
        </button>
      </header>

      {usersData ? (
        <div className={styles.content}>
          <div className={styles.cards}>
            {search(usersData).map((user) => (
              <Card key={user.login.uuid} user={user} removeUser={deleteUser} />
            ))}
          </div>

          <Sidebar usersData={usersData} />
        </div>
      ) : (
        <div className={styles.loader}>Loading...</div>
      )}
    </>
  );
}

export default App;