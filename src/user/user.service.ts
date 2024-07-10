import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return await this.userModel.create(createUserInput);
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.findAll();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    const user = await this.findOne(id);
    return await user.update(updateUserInput);
  }

  async remove(id: string): Promise<User> {
    const user = await this.findOne(id);
    await user.destroy();
    return user;
  }
}
