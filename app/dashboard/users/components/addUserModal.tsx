"use client"
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { Modal, Button, TextInput, Group, Stack, Select, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";

export default function AddUser({opened, close}: any) {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          firstname: null,
          lastname: null,
          email: '',
          phone_number: null,
          country: []
        },
    
        validate: {
            // firstname: (value) => ( value.length < 3 ? "Firtname must be 3 character at least" : null),
            // lastname: (value) => ( value.length < 3 ? "Lastname must be 3 character at least" : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            // phone_number: (value) => (/^6[0-9]{8}$/.test(value)? null : 'Invalid phone number'),
        },
      });
        
        const [deptArr, setDept] = useState([]);
        const [servArr, setServ] = useState([]);
        const [allArr, setAll] = useState([]);
        const [arrVisitor, setAllVisitor] = useState([])
        const [arrVehicle, setArrVehicle] = useState([])
        const [loading, setLoading] = useState(true);
        const [countries, setCountries] = useState([]);

 
    function handleSubmit(values: any){
        console.log(values)
    }

    useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            // Map the data to the format expected by the Mantine Select component
            const countryData = response.data.map((country: { cca2: any; name: { common: any; }; }) => ({
              value: country.cca2,  // Use country code as value
              label: country.name.common
            }));
            // Optionally sort the countries alphabetically
            countryData.sort((a: { label: string; }, b: { label: any; }) => a.label.localeCompare(b.label));
            setCountries(countryData);
          } catch (error) {
            console.error('Error fetching countries:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchCountries();
      }, []);


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