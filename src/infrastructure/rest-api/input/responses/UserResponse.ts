export class UserResponse {

	constructor(id: number, name: string, email: string, role: string, gender: string, birthday: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.gender = gender;
    this.birthday = birthday;
	}

  id: number;
  name: string;
  email: string;
  role: string;
  gender: string;
  birthday: string;

}