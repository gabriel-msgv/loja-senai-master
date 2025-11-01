import { IsEmail, IsNotEmpty } from "class-validator";

export class UpsertCustomersDTO {
    @IsNotEmpty()
    nome: string;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    idade: number;
}