import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CustomersService } from "./customers.service";
import { UpsertCustomersDTO } from "./dto/upsert-customer.dto"
// @ -> é um decorator
// Eles são uma 
// função (ou método) que modificam 
// o comportamento de outra função passada, 
// retornando uma nova função.
@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}
    
    @Get('/')
    showAll() {
        return {
            'customers': this.customersService.get()
        }
    }

    @Post('/')
    create(@Body() bodyCustomers: UpsertCustomersDTO) {
        return this.customersService.create(bodyCustomers);
    }

    @Put(':id')
    update(@Param('id') customersID: number, @Body() updateBody: UpsertCustomersDTO) {
        return this.customersService.update(customersID, updateBody);
    }

    @Delete(':id')
    delete(@Param('id') customersID: number) {
        return this.customersService.delete(customersID);
    }

}