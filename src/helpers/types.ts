type UsersData =
    | UserDescription[]
    | null
  
type FilterAgeConditions = {
    from: number,
    to?: number
}

interface UserName {
    first: string,
    last: string
}

interface UserLocation {
    city: string,
    state: string,
    country: string
}

interface UserDescription {
    login: {
        uuid: string
    },
    gender: string,
    name: UserName,
    location: UserLocation,
    email: string,
    dob: {
        date: string,
        age: string
    },
    phone: string,
    picture: {
        medium: string
    }    
}

interface CardProps {
    user: UserDescription;
    removeUser(id: string): void;
}

export type {
    UserLocation, 
    UserDescription, 
    UserName,
    FilterAgeConditions,
    UsersData,
    CardProps
}