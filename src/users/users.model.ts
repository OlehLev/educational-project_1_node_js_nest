import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Post } from "src/posts/posts.model";
import { Role } from "src/roles/roles.model";
import { UserRole } from "src/roles/user-roles-model";

interface UserCreationAttrs {
    email: string,
    password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example: '1', description: 'unique id' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'user@ukr.net', description: 'unique email' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: '12345678', description: 'password' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({ example: 'true', description: 'ban or not ban' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banner: boolean;

    @ApiProperty({ example: 'Useed bad words', description: 'banReason' })
    @Column({ type: DataType.STRING, defaultValue: false })
    bunReason: string;

    @BelongsToMany(()=> Role, () => UserRole)
    roles: Role[];

    @HasMany(() => Post)
    posts: Post[];

}