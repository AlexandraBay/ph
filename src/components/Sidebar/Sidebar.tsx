import styles from "./Sidebar.module.scss";
import {
  getNumberOfGenderType,
  getNumberOfAgeUsers,
} from "../../helpers/helperFn";
import { UserDescription } from "../../helpers/types";

interface SidebarProps {
  usersData: UserDescription[];
}

const Sidebar: React.FC<SidebarProps> = ({ usersData }) => {
  return (
    <div className={styles.sidebar}>
      <h1>{usersData.length} Users</h1>
      <section>
        <p>Age Groups</p>
        <div className={styles.group}>
          <span>11 to 20</span>
          <span>{getNumberOfAgeUsers(usersData, { from: 11, to: 20 })}</span>
          <span>21 to 30</span>
          <span>{getNumberOfAgeUsers(usersData, { from: 21, to: 30 })}</span>
          <span>31 to 40</span>
          <span>{getNumberOfAgeUsers(usersData, { from: 31, to: 40 })}</span>
          <span>41 to 50</span>
          <span>{getNumberOfAgeUsers(usersData, { from: 41, to: 50 })}</span>
          <span>51+</span>
          <span>{getNumberOfAgeUsers(usersData, { from: 51 })}</span>
        </div>
      </section>
      <section>
        <p>Gender Groups</p>
        <div className={styles.group}>
          <span>Male</span>
          <span>{getNumberOfGenderType(usersData)}</span>
          <span>Female</span>
          <span>{getNumberOfGenderType(usersData, "female")}</span>
        </div>
      </section>
    </div>
  );
};

Sidebar.displayName = 'Sidebar'

export default Sidebar;
