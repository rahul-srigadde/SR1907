import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class Users {
  @PrimaryGeneratedColumn({ name: 'id' })
  readonly id: number

  @Column({ name: 'fullName' })
  readonly fullName: string;

  @Column({ name: 'mobileNo' })
  readonly mobileNo: string;

  @Column({ name: 'emailId' })
  readonly emailId: string;

  @Column({ name: 'jobType' })
  readonly jobType: string;

  @Column({ name: 'dateOfBirth' })
  readonly dateOfBirth: string;

  @Column({ name: 'preferredLocation' })
  readonly preferredLocation: string;
}
