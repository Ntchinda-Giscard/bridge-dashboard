"use client"
import { useMutation, useQuery } from '@apollo/client';
import { Modal, Button, TextInput, Group, Stack, Select, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import axios from "axios";
import { INSERT_USERS } from '../mutation/mutation';
import { GET_ROLES } from '../query/query';
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
    const [roles, setRols] = useState([])

    const {data: dataRole, loading: loadRole, error: errRole} = useQuery(GET_ROLES)

 
    function handleSubmit(values: any){
        console.log(values)
        insertUser({
            variables:{
                email: values?.email,
                mot_passe: values?.password,
                nom: values?.firstname,
                prenom: values?.lastname,
                sexe: values?.sexe,
                telephone: values?.phone_number,
                role_id: values?.role,
                country: values?.country


            },
            onCompleted: () =>{
                toast.success("Operation successs")
            },
            onError: (err) =>{
                toast.error(`Error: ${err}`)
            }
        })
    }

    useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            // Map the data to the format expected by the Mantine Select component
            const countryData = response.data.map((country: { cca2: any; name: { common: any; }; }) => ({
              value: country.name.common,  // Use country code as value
              label:`${ country.name.common} - ${country.cca2}`
            }));
            // Optionally sort the countries alphabetically
            countryData.sort((a: { label: string; }, b: { label: any; }) => a.label.localeCompare(b.label));
            setCountries(countryData);
          } catch (error) {
            console.error('Error fetching countries:', error);
          } finally {
          }
        };
    
        fetchCountries();

        const dataRoles = dataRole?.roles?.map((r: { id: string; name: string; }) =>({
            value: r?.id,
            label: r?.name
        }))

    }, [dataRole]);
    const [insertUser, {loading: loadInsert}] = useMutation(INSERT_USERS);

  return (
    <>
      <Modal opened={opened} size="lg" onClose={close} title= {<p style={{color: "#404040"}}> Ajouter Utilisateur </p>}>
        {/* Modal content */}
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <Stack gap={5} >
                <Group grow>
                    <TextInput
                        withAsterisk
                        label="Nom"
                        placeholder="firstname"
                        key={form.key('firstname')}
                        {...form.getInputProps('firstname')}
                        styles={{
                            label:{
                                color: "#404040"
                            }
                        }}
                    />
                    <TextInput
                        withAsterisk
                        label="Prénom"
                        placeholder="lastname"
                        key={form.key('lastname')}
                        {...form.getInputProps('lastname')}
                        styles={{
                            label:{
                                color: "#404040"
                            }
                        }}
                    />
                </Group>
                <Group grow>
                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="..."
                        key={form.key('email')}
                        {...form.getInputProps('email')}
                        styles={{
                            label:{
                                color: "#404040"
                            }
                        }}
                    />
                    <TextInput
                        withAsterisk
                        label="Numero de téléphone"
                        placeholder="xxxxxx"
                        key={form.key('phone_number')}
                        {...form.getInputProps('phone_number')}
                        styles={{
                            label:{
                                color: "#404040"
                            }
                        }}
                    />
                </Group>
                <Select
                    mt={'lg'}
                    withAsterisk
                    radius={'sm'}
                    data={countries}
                    label="Pays"
                    placeholder="select"
                    searchable
                    key={form.key('country')}
                    {...form.getInputProps('country')}
                    styles={{
                        label:{color: "#404040"},
                        option:{color: "#404040"}
                    }}
                />
                <Select
                    mt={'lg'}
                    withAsterisk
                    radius={'sm'}
                    data={['Homme', "Femme"]}
                    label="Genre"
                    placeholder="select"
                    searchable
                    key={form.key('sexe')}
                    {...form.getInputProps('sexe')}
                    styles={{
                        label:{color: "#404040"},
                        option:{color: "#404040"}
                    }}
                />
                <PasswordInput 
                    withAsterisk
                    label="Mot de passe"

                    key={form.key('password')}
                    {...form.getInputProps('password')}
                    styles={{
                        label:{
                            color: "#404040"
                        }
                    }}
                />
            </Stack>
            


        <Group justify="flex-end" mt="md" grow>
            <Button bg={"#0B8F23"} type="submit">Soumettre</Button>
            <Button color={"#0B8F23"} variant='outline' onClick={close} >Annuler</Button>
        </Group>
        </form>
      </Modal>


    </>
  );
}