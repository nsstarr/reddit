import { Entity, Property, PrimaryKey } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class User {
    @Field(() => Int)
    @PrimaryKey()
    id!: number;

    @Field(() => String)
    @Property({ type: "date", default: "NOW()" })
    createdAt?: Date = new Date();

    @Field(() => String)
    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt?: Date = new Date();

    @Field()
    @Property({ type: "text", unique: true })
    username!: string;

    @Property({ type: "text" })
    password!: string;

}