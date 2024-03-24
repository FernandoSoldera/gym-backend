import { User } from "../../../../../domain/entity/User";
import { UserDTO } from "../../jpa/dto/UserDTO";

export class UserDtoToUser {
    static convertAll(userDto: UserDTO[]): User[] {
        const users: User[] = [];
        
        userDto.forEach((userDto) => {
            users.push(new User(userDto.id, userDto.name, userDto.email, userDto.role, userDto.sex, userDto.birthday, userDto.password));
        })

        return users;
    }

    static convert(userDto: UserDTO): User {
        return new User(userDto.id, userDto.name, userDto.email, userDto.role, userDto.sex, userDto.birthday, userDto.password);
    }
}