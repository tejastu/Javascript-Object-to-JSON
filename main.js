function main(){

    let convertCustomerModelIntoJson = function(customerModelPara){
      return JSON.stringify(customerModelPara);
    }
    this.getCustomerData = function(){
        //login model
        let customerLoginModelObj = new customerLoginModel();

        customerLoginModelObj.username = "tejas123";
        customerLoginModelObj.password="microsoft";
       
        //communication model
        let customerCommunicationModel1 = new customerCommunicationModel();

        customerCommunicationModel1.emailId = "tejasparab100@gmail.com";
        customerCommunicationModel1.mobileNo = "9004760067";

        let customerCommunicationModel2 = new customerCommunicationModel();

        customerCommunicationModel2.emailId = "tejasparab500@gmail.com";
        customerCommunicationModel2.mobileNo = "8108750038";
         
        let customerCommunicationCollectionObj= new Array();
        customerCommunicationCollectionObj.push(customerCommunicationModel1);
        customerCommunicationCollectionObj.push(customerCommunicationModel2);

        // address model
        let customerAddressModel1 = new customerAddressModel();
        customerAddressModel1.city= "Bhandup";
        customerAddressModel1.pincode="400078";

        let customerAddressModel2 = new customerAddressModel();
        customerAddressModel2.city= "kokan";
        customerAddressModel2.pincode="500893";

        let customerAddressModelCollectionObj = new Array();
        customerAddressModelCollectionObj.push(customerAddressModel1);
        customerAddressModelCollectionObj.push(customerAddressModel2);










        //main model
      let  customerModelObj = new customerModel();
        
        customerModelObj.firstname = "Tejas";
        customerModelObj.lastname = "Parab";
        customerModelObj.dateOfBirth = "11.02.2000";

        //encapulate of parent object
        customerModelObj.login = customerLoginModelObj;
        customerModelObj.communicationCollection = customerCommunicationCollectionObj;
        customerModelObj.addressCollection =customerAddressModelCollectionObj; 


        console.log(customerModelObj);

        let customerModelJson = convertCustomerModelIntoJson(customerModelObj);
        console.log(customerModelJson);

    }
}
let mainObj =new main();
mainObj.getCustomerData();