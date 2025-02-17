import { gql } from "@apollo/client";


export const LOGIN_USER = gql`
query LoginUser($email: String!, $mot_passe: String!) @cached {
  users(where: {email: {_eq: $email}, mot_passe: {_eq: $mot_passe}}) {
    telephone
    sexe
    role_id
    prenom
    nom
    mot_passe
    id
    email
    date_naisse
    created_at
    country
    role {
      id
      name
    }
  }
}`;