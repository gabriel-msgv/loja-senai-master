import { Injectable } from "@nestjs/common";
import { UpsertCustomersDTO } from "./dto/upsert-customer.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Customers } from "./customers.entity";
import { Repository } from "typeorm";

@Injectable()
export class CustomersService {
   private customers: Array<any>;
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
           const newProduct = this.customersRepository.create(customer);
           await this.customersRepository.save(newProduct);
   
           return {
               "message": "Cliente criado com sucesso!"
           };
       }
}