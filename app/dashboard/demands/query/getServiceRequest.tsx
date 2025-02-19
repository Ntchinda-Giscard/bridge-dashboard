import { gql } from "@apollo/client";


export const GET_SERVICES_REQ = gql`
query MyQuery {
  service_requests {
    id
    service {
      service_name
      id
    }
    user {
      id
      nom
      prenom
      email
      telephone
    }
    request_status {
      status_name
      id
    }
    request_date
  }
}`;