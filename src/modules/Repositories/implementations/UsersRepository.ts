import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";

import { IUserRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    id_tag,
    name,
    permission,
    github_link,
  }: ICreateUserDTO): Promise<void> {
    const userTag = this.repository.create({
      id_tag,
      name,
      permission,
      github_link,
    });

    await this.repository.save(userTag);
  }

  async list(): Promise<User[]> {
    const user = await this.repository.find();
    return user;
  }

  async findByName(name: string): Promise<User> {
    const user = await this.repository.findOne({ name });

    return user;
  }
}

export { UsersRepository };
