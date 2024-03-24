export class UserRequest {
  constructor(name: string, email: string, role: string, sex: string, birthday: Date, password: string) {
    this.name = name;
    this.email = email;
    this.role = role;
    this.sex = sex;
    this.birthday = birthday;
    this.password = password;
	}

  name: string;
  email: string;
  role: string;
  sex: string;
  birthday: Date;
  password: string;
}