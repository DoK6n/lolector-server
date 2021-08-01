import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ItemSet } from "./ItemSet";

@Index("item_set_no", ["itemSetNo"], {})
@Entity("user", { schema: "lolector" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "uid" })
  uid: number;

  @Column("varchar", { name: "email", length: 256 })
  email: string;

  @Column("varchar", { name: "password", length: 20 })
  password: string;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("int", { name: "item_set_no", nullable: true })
  itemSetNo: number | null;

  @ManyToOne(() => ItemSet, (itemSet) => itemSet.users, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "item_set_no", referencedColumnName: "no" }])
  itemSetNo2: ItemSet;
}
