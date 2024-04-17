import { UserDescription, FilterAgeConditions, UserLocation, UserName } from './types'

const url: string = "https://randomuser.me/api/?results=500&inc=login,name,email,phone,picture,location,dob,gender";

function getNumberOfGenderType(users: UserDescription[], genderType = 'male'): string {
  const usersNumber = users?.filter( user => user.gender === genderType).length || 0;

  const pluralUsers = usersNumber === 1 ? ' user' : ' users';

  return usersNumber + pluralUsers;
}

function getNumberOfAgeUsers(users: UserDescription[], filterCondition: FilterAgeConditions): string {
  const usersNumber = users?.filter( user => {
    const age = Number(user.dob.age);
    if(filterCondition.to === undefined) {
      return filterCondition.from <= age  
    } else {
      return filterCondition.from <= age && filterCondition.to >= age
    }
  }).length || 0;
  const pluralUsers = usersNumber === 1 ? ' user' : ' users';

  return usersNumber + pluralUsers;
}

function getAddress(location: UserLocation): string {
  const {city, state, country} = location;

  return `${city}, ${state}, ${country}`;
}

function getFullname(name: UserName): string {
  const {first, last} = name;

  return `${first} ${last}`;
}

function getDateOfBirth(date: string): string {
  const dateOfBirth = new Date(date);

  return dateOfBirth.toLocaleString('default', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export {
  url,
  getNumberOfGenderType,
  getNumberOfAgeUsers,
  getDateOfBirth,
  getFullname,
  getAddress
}