import { gql } from "@apollo/client";


export const GET_SERVICES = gql`
query MyQuery {
  service {
    service_name
    id
  }
}`;