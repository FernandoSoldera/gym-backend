import { PhysicalEvaluation } from "./PhysicalEvaluation";

export class User {

	constructor(id: number, name: string, email: string, role: string, sex: string, birthday: Date, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.sex = sex;
    this.birthday = birthday;
    this.password = password;
	}

  id: number;
  name: string;
  email: string;
  role: string;
  sex: string;
  birthday: Date;
  password: string;
  physicalEvaluations: PhysicalEvaluation[] | undefined;

}
