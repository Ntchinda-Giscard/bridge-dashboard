import { gql } from "@apollo/client";

export const INSERT_USERS = gql`
mutation InsertUser($email: String!, $mot_passe: String!, $nom: String!, $prenom: String!, $sexe: bpchar!, $telephone: bpchar!, $role_id: uuid!, $country: String!) {
  insert_users_one(object: {email: $email, mot_passe: $mot_passe, nom: $nom, prenom: $prenom, sexe: $sexe, telephone: $telephone, role_id: $role_id, country: $country}) {
    id
  }
}`;