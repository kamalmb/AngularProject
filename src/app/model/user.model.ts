export interface User {
  results: UserResult[];
  info: UserInfo;
}

export interface UserResult {
  gender: string;
  name: UserName;
  location: UserLocation;
  email: string;
  login: UserLogin;
  dob: UserDob;
  registered: UserRegistered;
  phone: string;
  cell: string;
  id: UserId;
  picture: UserProfilePicture;
  nat: string;
}

export interface UserName {
  title: string;
  first: string;
  last: string;
}

export interface UserLocation {
  street: UserStreet;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: UserCoordinates;
  timezone: UserTimezone;
}

export interface UserStreet {
  number: number;
  name: string;
}

export interface UserCoordinates {
  latitude: string;
  longitude: string;
}

export interface UserTimezone {
  offset: string;
  description: string;
}

export interface UserLogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface UserDob {
  date: Date;
  age: number;
}

export interface UserRegistered {
  date: Date;
  age: number;
}

export interface UserId {
  name: string;
  value: string;
}

export interface UserProfilePicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface UserInfo {
  seed: string;
  results: number;
  page: number;
  version: string;
}
