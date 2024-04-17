import { memo, useState } from "react";
import deleteIcon from "../../assets/deleteIcon.svg";
import classNames from "classnames";
import styles from "./Card.module.scss";
import { CardProps } from "../../helpers/types";
import {
  getFullname,
  getDateOfBirth,
  getAddress,
} from "../../helpers/helperFn";

const Card: React.FC<CardProps> = memo(({ user, removeUser }) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  return (
    <div
      className={classNames(styles.card, { [styles.active]: isPressed })}
      onClick={() => setIsPressed((prev) => !prev)}
    >
      <div className={styles.avatar}>
        <img src={user.picture.medium} alt="Avatar" />
      </div>
      <div className={styles.name}>{getFullname(user.name)}</div>
      <a href={`mailto:${user.email}`} className={styles.email} id="email">
        {user.email}
      </a>

      <div className={styles.phoneData}>Phone No</div>
      <a href={`tel:${user.phone}`} className={styles.phone} data-user="phone">
        {user.phone}
      </a>
      <div className={styles.birthdayData}>Birthday</div>
      <div className={styles.birthday}>{getDateOfBirth(user.dob.date)}</div>
      <address className={styles.addressData}>Address</address>
      <address className={styles.address}>{getAddress(user.location)}</address>

      {isPressed && (
        <button
          className={styles.button}
          type="button"
          onClick={() => removeUser(user.login.uuid)}
        >
          <img
            src={deleteIcon}
            className={styles.buttonDelete}
            alt="Delete button"
          />
        </button>
      )}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
