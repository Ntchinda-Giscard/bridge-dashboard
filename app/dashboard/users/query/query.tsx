import { gql } from "@apollo/client";

export const GET_ROLES = gql`
query GetRoles {
  roles {
    id
    name
  }
}`;

export const GET_USERS = gql`
query MyQuery($limit: Int, $offset: Int) {
  users(limit: $limit, offset: $offset) {
    id
    country
    email
    mot_passe
    nom
    prenom
    role {
      id
      name
    }
    role_id
    sexe
    telephone
    created_at
  }
}`;