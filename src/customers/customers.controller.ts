import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CustomersService } from "./customers.service";
import { UpsertCustomersDTO } from "./dto/upsert-customers.dto"
// @ -> é um decorator
// Eles são uma 
// função (ou método) que modificam 
// o comportamento de outra função passada, 
// retornando uma nova função.
@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}
    
    @Get()
    showAll() {
        return {
            'customers': this.customersService.get()
        }
    }

    @Post()
    create(@Body() bodyCustomer: UpsertCustomersDTO) {
        return this.customersService.create(bodyCustomer);
    }

    @Delete(':id')
    delete(@Param('id') customersID: number) {
            return this.customersService.delete(customersID);
    }

    @Put(':id')
    update(@Param('id') customerId: number, @Body() updateCustomers: UpsertCustomersDTO) {
        return this.customersService.update(customerId, updateCustomers);
    }
}