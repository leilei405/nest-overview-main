import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { filter, interval, map, Observable, of, take } from 'rxjs';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user ' + JSON.stringify(createUserDto);
  }

  findAll() {
    // 1. 订阅发布任务
    // const observable = new Observable((observer) => {
    //   observer.next('hello world 1');
    //   observer.next('hello world 2');
    //   observer.next('hello world 3');

    //   setTimeout(() => {
    //     observer.next('hello world 4');
    //     observer.complete();
    //   }, 2000);
    // });

    // observable.subscribe({
    //   next: (value) => {
    //     console.log('value', value);
    //   },
    // });
    // 2. interval
    // interval(1000)
    //   .pipe(take(10))
    //   .subscribe((value) => {
    //     console.log('value', value);
    //   });
    // // 3. of
    // of(1000)
    //   .pipe(
    //     map((value) => ({
    //       num: value * 2,
    //     })),
    //     filter((value) => {
    //       return value.num > 5;
    //     }),
    //   )
    //   .subscribe((value) => {
    //     console.log('value', value);
    //   });

    // // 4. interval
    // const subs = interval(1000)
    //   .pipe(
    //     map((value) => ({
    //       num: value * 2,
    //     })),
    //     filter((value) => {
    //       return value.num > 5;
    //     }),
    //   )
    //   .subscribe((value) => {
    //     console.log('value', value);
    //     if (value.num > 10) {
    //       subs.unsubscribe();
    //     }
    //   });

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
