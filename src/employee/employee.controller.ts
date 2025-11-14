import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { UpsertEmployeeDTO } from './dto/upsert-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('/')
  create(@Body() createEmployeeDto: UpsertEmployeeDTO) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get('/')
  findAll() {
    return this.employeeService.findAll();
  }

  @Get('/')
  findOne(@Param('id') employeeID: string) {
    return this.employeeService.findOne(+employeeID);
  }

  @Patch(':id')
  update(@Param('id') employeeID: string, @Body() updateEmployeeDto: UpsertEmployeeDTO) {
    return this.employeeService.update(+employeeID, updateEmployeeDto);
  }

  @Put(':id')
  updateAll(@Param('id') employeeID: string, @Body() updateBody: UpsertEmployeeDTO) {
    return this,this.employeeService.update(+employeeID, updateBody)
  }

  @Delete(':id')
  remove(@Param('id') employeeID: string) {
    return this.employeeService.delete(+employeeID);
  }
}
