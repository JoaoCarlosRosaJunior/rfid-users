import { User } from "../entities/User";

// New concept: DTO => Data to Transfer. É quando recebemos dados de request e transformamos em objeto para conversar com outros repositorios
interface ICreateUserDTO {
  id_tag: number;
  name: string;
  permission: string;
  github_link: string;
}

interface IUserRepository {
  findByName(name: String): Promise<User>;
  list(): Promise<User[]>;
  create({
    id_tag,
    name,
    permission,
    github_link,
  }: ICreateUserDTO): Promise<void>;
  findByID(id_tag: number): Promise<User>;
}

export { IUserRepository, ICreateUserDTO };
