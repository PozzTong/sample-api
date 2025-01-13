import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  dod: string;

  @Column()
  address: string;

  @Column({ default: true })
  isActive: boolean;
}
// 2819