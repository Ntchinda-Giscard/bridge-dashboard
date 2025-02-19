import { gql } from "@apollo/client";


export const INSERT_DEMANDE = gql`
mutation MyMutation($client_id: uuid!, $service_id: uuid = "", $status_id: uuid!="9ffa573e-8183-49ce-9fdb-53ab2daa9223") {
  insert_service_requests_one(object: {client_id: $client_id, service_id: $service_id, status_id: $status_id}) {
    id
  }
}`;

export const UPDATE_CANCEL = gql`
mutation MyMutation($id: uuid = "", $status_id: uuid = "c56723be-ae07-4c3f-b08d-2de015bb452d") {
  update_service_requests_by_pk(pk_columns: {id: $id}, _set: {status_id: $status_id}) {
    id
  }
}`;


export const UPDATE_CHECK = gql`
mutation MyMutation($id: uuid = "", $status_id: uuid = "f8b7a29c-a3e3-4eec-a1b9-74c350b8fe61") {
  update_service_requests_by_pk(pk_columns: {id: $id}, _set: {status_id: $status_id}) {
    id
  }
}`;