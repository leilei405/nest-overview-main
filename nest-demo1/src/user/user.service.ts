import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user ' + JSON.stringify(createUserDto);
  }

  findAll() {
    const observable = new Observable((observer) => {
      observer.next('hello world 1');
      observer.next('hello world 2');
      observer.next('hello world 3');

      setTimeout(() => {
        observer.next('hello world 4');
        observer.complete();
      }, 2000);
    });

    observable.subscribe({
      next: (value) => {
        console.log('value', value);
      },
    });
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user${updateUserDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
