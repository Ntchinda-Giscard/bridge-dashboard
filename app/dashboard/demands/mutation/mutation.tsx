import { gql } from "@apollo/client";


export const INSERT_DEMANDE = gql`
mutation MyMutation($client_id: uuid!, $service_id: uuid = "", $status_id: uuid!="9ffa573e-8183-49ce-9fdb-53ab2daa9223") {
  insert_service_requests_one(object: {client_id: $client_id, service_id: $service_id, status_id: $status_id}) {
    id
  }
}`;