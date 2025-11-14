import { IsString, IsNotEmpty } from "class-validator";

export class UpsertEmployeeDTO {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    codigo: string;
}
