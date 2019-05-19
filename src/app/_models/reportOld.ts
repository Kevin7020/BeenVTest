export class report {
  bvids : [];
  dob : string;
  gender : string;
  jobs : jobs;
  educations : [ ];
  images : [ ];
  social : social;
}

export class report_inf {
  query_id : null;
  report_id : string;
  response_time : number;
  proxy_flags : []
}

export class names {
  full : string;
  parts : {
     salutation : string;
     first_name : string;
     middle_name : string;
     last_name : string;
     suffix : string;
  }
  first_seen : string;
  last_seen : string;
}

export class addresses {
  latitude : number;
  longitude : number;
  precision :string;
  property_record_available : null;
  full : string;
  parts : {  
     house_number : string;
     pre_direction : string;
     street_name : string;
     street_type : string;
     post_direction : string;
     unit : string;
     city : string;
     state : string;
     zip : string;
     zip4 : string;
     country : string;
  };
  type : string;
  first_seen : string;
  last_seen : string;
}

export class jobs {
  jobs : [];
}

export class emails {
  EmailAddr : [];
}

export class social {
  social : [];
}