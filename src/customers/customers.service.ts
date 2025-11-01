import { Injectable, NotFoundException } from "@nestjs/common";
import { UpsertCustomersDTO } from "./dto/upsert-customers.dto";
import { findIndex } from "rxjs";

@Injectable()
export class CustomersService {
   private customers: Array<any>;
    static delete: any;
   // método especial - ele é chamado na criação
   constructor() {
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
    return this.customers;
   }

   create(customer: UpsertCustomersDTO) {
     let id = 1;
     if(this.customers.length != 0) {
        id = this.customers[this.customers.length - 1].id + 1
     }
     this.customers.push({
      "id": id,
      ...customer
     });

     return {
        "message": "Salvo com sucesso"
     };
   }

   delete(id: number) {
      const position = this.customers.findIndex((customer) => customer.id == id);
      if (position == -1) {
         throw new NotFoundException('Cliente não encontrado');
      }
      this.customers.splice(position, 1);
      
      return {
         "mesage": "Deletado com sucesso!"
      }
   }

   update(id: number, product: UpsertProductDTO) {
           // [ 1, 2, 3, 4 ]
           const index = this.products.findIndex((p) => p.id == id);
           if(index == -1) {
               throw new NotFoundException('Produto não encontrado!')
           }
           this.products[index] = {
               'id': this.products[index].id,
               // spread
               ...product
           }
           
           return {
               "message": "Customer Atualizado!"
           };

}