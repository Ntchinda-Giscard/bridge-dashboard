"use client"
import { useMutation, useQuery } from '@apollo/client';
import { Modal, Button, TextInput, Group, Stack, Select, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import axios from "axios";
import toast from 'react-hot-toast';

export default function AddUser({opened, close}: any) {
    
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          firstname: "",
          lastname: "",
          email: '',
          password: '',
          phone_number: "",
          country: [],
          sexe: [],
          role: [],
        },
    
        validate: {
            firstname: (value) => ( value.length < 3 ? "Firtname must be 3 character at least" : null),
            lastname: (value) => ( value.length < 3 ? "Lastname must be 3 character at least" : null),
            password: (value) => ( value.length < 3 ? "Lastname must be 3 character at least" : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            phone_number: (value) => (/^[0-9][0-9]{8}$/.test(value)? null : 'Invalid phone number'),

        },
    });
        
    const [countries, setCountries] = useState([]);
    const [roles, setRoles] = useState([])

 
    function handleSubmit(values: any){
        console.log(values)

    }

    useEffect(() => {

        // const dataRoles = dataRole?.roles?.map((r: { id: string; name: string; }) =>({
        //     value: r?.id,
        //     label: r?.name
        // }))

        // setRoles(dataRoles)

    }, []);

  return (
    <>
      <Modal opened={opened} size="lg" onClose={close} title= {<p style={{color: "#404040"}}> Ajouter Utilisateur </p>}>
        {/* Modal content */}
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>

            <Group justify="flex-end" mt="md" grow>
                <Button bg={"#0B8F23"} type="submit">Soumettre</Button>
                <Button color={"#0B8F23"} variant='outline' onClick={close} >Annuler</Button>
            </Group>
        </form>
      </Modal>


    </>
  );
}