import { Injectable, NotFoundException } from "@nestjs/common";
import { UpsertCustomersDTO } from "./dto/upsert-customer.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Customers } from "./customers.entity";
import { Repository } from "typeorm";

@Injectable()
export class CustomersService {
   customers: Array<any>;
   // método especial - ele é chamado na criação
   constructor(
      @InjectRepository(Customers)
      private customersRepository: Repository<Customers>
   ) {
     this.customers = [
        {
            "id": 1,
            "nome": "Félix",
            "email": "felix@gmail.com",
            "idade": 18
        }
     ]
   }

   get() {
    return this.customersRepository.find();
   }

   async create(customer: UpsertCustomersDTO) {
           const newCustomer = this.customersRepository.create(customer);
           await this.customersRepository.save(newCustomer);
   
           return {
               "message": "Cliente criado com sucesso!"
           };
    }

    async update(id: number, customer: UpsertCustomersDTO) {  
        const foundProduct = await this.customersRepository.findOne({
            where: {id}
        })

        if(!foundProduct) {
            throw new NotFoundException('Cliente não encontrado!');
        }

        await this.customersRepository.update(id, customer);

            return {
                "message": "Cliente Atualizado!"
            };
    }

    async delete(id: number) {
        await this.customersRepository.delete(id)
        return {
            "message": "Cliente excluido"
        }
    }

}