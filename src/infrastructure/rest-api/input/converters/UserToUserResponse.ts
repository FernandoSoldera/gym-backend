import { User } from "../../../../domain/entity/User"
import { UserResponse } from "../responses/UserResponse"

export class UserToUserResponse {
    static convert(user: User): UserResponse {
        return new UserResponse(
            user.id,
            user.name,
            user.email,
            user.role,
            user.gender,
            user.birthday.toISOString().split('T')[0]
        )
    }
}