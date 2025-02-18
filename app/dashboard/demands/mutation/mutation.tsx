import { gql } from "@apollo/client";


export const INSERT_DEMANDE = gql`
mutation MyMutation($client_id: uuid!, $service_id: uuid = "", $status_id: uuid!) {
  insert_service_requests_one(object: {client_id: $client_id, service_id: $service_id, status_id: $status_id}) {
    id
  }
}`;