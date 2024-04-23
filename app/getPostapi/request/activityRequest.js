class ActivityRequest {
    constructor({
      key,
      type,
      participants,
      price,
      accessibility,
      userid,
      minprice,
      maxprice,
      minaccessibility,
      maxaccessibility,
    }) {
      this.key = key;
      this.type = type;
      this.participants = participants;
      this.price = price;
      this.accessibility = accessibility;
      this.userid = userid;
      this.minprice = minprice;
      this.maxprice = maxprice;
      this.minaccessibility = minaccessibility;
      this.maxaccessibility = maxaccessibility;
    }
  }
  
  export default ActivityRequest;