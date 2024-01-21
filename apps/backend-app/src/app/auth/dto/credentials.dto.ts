import { IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CredentialsDto {
    @IsString()
    @IsEmail()
    email: string;
    
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(8)
    @MaxLength(32)
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        { message: 'The password is too weak' }
    )
    password: string;
}