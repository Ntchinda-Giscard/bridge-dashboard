"use client"
import { useMutation, useQuery } from '@apollo/client';
import { Modal, Button, TextInput, Group, Stack, Select, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import axios from "axios";
import toast from 'react-hot-toast';
import { CLIENT_USER } from '../query/getClientUser';
import { GET_SERVICES } from '../query/getService';
import { INSERT_DEMANDE } from '../mutation/mutation';

export default function AddDemand({opened, close}: any) {

  const {data: dataClient, error: errClients, loading: loadClients} = useQuery(CLIENT_USER);
  const {data: dataService, error: errService, loading: loadService} = useQuery(GET_SERVICES);
  const [insertDemande, {loading: loadInsertDemande}] = useMutation(INSERT_DEMANDE);
    
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          clients: [],
          service: [],
        },
    
        validate: {
          clients: (value) => ( value.length < 1 ? "Firtname must be 3 character at least" : null),
          service: (value) => ( value.length < 1 ? "Lastname must be 3 character at least" : null),


        },
    });
        
    const [services, setServices] = useState([]);
    const [clients, setClients] = useState([])

 
    function handleSubmit(values: any){
        console.log(values);
        insertDemande({
          variables:{
            client_id: values?.clients,
            service_id: values?.service
          },
          onCompleted: () =>{
            toast.success("Operation successful")
            close();
            form.reset();
          },
          onError: () =>{
            toast.error("Operation failed")
          }
        });

    }

    useEffect(() => {

        const dataServices = dataService?.service?.map((r: { id: string; service_name: string; }) =>({
            value: r?.id,
            label: r?.service_name
        }));

        const dataClients = dataClient?.users?.map((c: { id: any; nom: any; prenom: any; }) =>({
          value: c?.id,
          label: `${c?.nom} ${c?.prenom}`
      }))

        setServices(dataServices)
        setClients(dataClients)

    }, [dataService, dataClient]);

  return (
    <>
      <Modal opened={opened} size="lg" onClose={close} title= {<p style={{color: "#404040"}}> Ajouter Utilisateur </p>}>
        {/* Modal content */}
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>

          <Select
            mt={'lg'}
            withAsterisk
            radius={'sm'}
            data={clients}
            label="Clients"
            placeholder="Clients"
            searchable
            key={form.key('clients')}
            {...form.getInputProps('clients')}
            styles={{
                label:{color: "#404040"},
                option:{color: "#404040"}
            }}
          />
          <Select
            mt={'lg'}
            withAsterisk
            radius={'sm'}
            data={services}
            label="Service"
            placeholder="select"
            searchable
            key={form.key('service')}
            {...form.getInputProps('service')}
            styles={{
                label:{color: "#404040"},
                option:{color: "#404040"}
            }}
          />

            <Group justify="flex-end" mt="md" grow>
                <Button bg={"#0B8F23"} loading={loadInsertDemande} type="submit">Soumettre</Button>
                <Button color={"#0B8F23"} variant='outline' onClick={close} >Annuler</Button>
            </Group>
        </form>
      </Modal>


    </>
  );
}