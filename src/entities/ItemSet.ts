import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity("item_set", { schema: "lolector" })
export class ItemSet {
  @PrimaryGeneratedColumn({ type: "int", name: "no" })
  no: number;

  @Column("int", { name: "user_uid" })
  userUid: number;

  @Column("varchar", { name: "name", length: 50 })
  name: string;

  @Column("json", { name: "contents" })
  contents: object;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @OneToMany(() => User, (user) => user.itemSetNo2)
  users: User[];
}
