export class Product {
  id: string;
  details : {
    nameP : {
      caption : string;
      type : string;
      mandatory : string;
      defaultValue : string;
      validationMessage : string;
    },
    description : {
      caption : string;
      type : string;
      mandatory : string;
      defaultValue : string;
      validationMessage : string;
    },
    height : {
      caption : string;
      type : string;
      mandatory : string;
      defaultValue : string;
      validationMessage : string;
    },
    width : {
      caption : string;
      type : string;
      mandatory : string;
      defaultValue : string;
      validationMessage : string;
    },
    isSmart : {
      caption : string;
      type : string;
      mandatory : string;
      defaultValue : string;
      validationMessage : string;
    },
  }

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
