import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        // Complete aqui
        const user = this.usersRepository.findById(user_id);

        if (!user) {
            throw new Error("User does not exists!");
        }

        if (!user.admin) {
            throw new Error("User is not a admin!");
        }

        const allUsers = this.usersRepository.list();

        return allUsers;
    }
}

export { ListAllUsersUseCase };
