import { Injectable, NotFoundException } from '@nestjs/common';
import { UpsertEmployeeDTO } from './dto/upsert-employee.dto';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeeService {
  employee: Array<any>;

  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>
  ) {
    this.employee = [
      {
        "id": 1,
        "name": "Gabriel",
        "codigo": "0001"
      }
    ]
  }

  async create(createEmployee: UpsertEmployeeDTO) {
      const newEmployee = this.employeeRepository.create(createEmployee);
      await this.employeeRepository.save(newEmployee);

      return {
        "message": "Funcionário criado com sucesso!"
      }
  }

  findAll() {
    return this.employeeRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  async update(id: number, employee: UpsertEmployeeDTO) {
    const findEmployee = await this.employeeRepository.findOne({
      where: {id}
    })

    if(!findEmployee) {
      throw new NotFoundException('Funcionário não encontrado');
    }

    await this.employeeRepository.update(id, employee);

      return {
        "message": "Funcionário atualizado!"
      }

  }

  async delete(id: number) {
    await this.employeeRepository.delete(id);

    return {
      "message": "Funcionário excluido!"
    }
  }

}
