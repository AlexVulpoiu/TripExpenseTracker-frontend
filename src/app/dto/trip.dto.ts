import {UserDto} from "./user.dto";

export class TripDto {
  id: number;
  title: string;
  location: number;
  startDate: Date;
  endDate: Date;
  usersDto: Array<UserDto>;
}
