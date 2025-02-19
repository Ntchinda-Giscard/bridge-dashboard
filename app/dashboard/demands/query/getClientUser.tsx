import { gql } from "@apollo/client";


export const CLIENT_USER = gql`
query MyQuery($_eq1: uuid = "ab14d5ed-22db-4c45-a822-70a8b8b17935") {
  users(where: {role_id: {_eq: $_eq1}}) {
    nom
    prenom
    id
  }
}`;