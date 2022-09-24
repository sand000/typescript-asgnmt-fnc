interface data { 
title: string;
staus: boolean;
id: number;
}

type obj1={
    firstname: string;
    lastname?: string;
}
// function
const getName = ({firstname, lastname}:obj1) => {
   if(lastname){
    return firstname + " " + lastname;
   }else{
    return firstname;
   }
}


interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state:string;
    postalCode: string | number;
    country:string;
}

type PersonDetails = {
    pre? : "Mr" | "Mrs" | "Miss";
    phones : Array<number>;
    addresses : Array<string | number>;
    email? : string | symbol | number;
    firstname: string;
    lastname: string;
    middlename? : string;
}

const PhoneBook = ({pre,phones, addresses,email,firstname, lastname, middlename}:PersonDetails) =>{
   return {pre:"mr",phones:1234435345, addresses:"fertgrre",email:"a@gmail.com",firstname:"sand",lastname:"kush"}
}