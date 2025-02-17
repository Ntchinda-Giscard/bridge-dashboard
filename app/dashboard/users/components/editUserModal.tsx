"use client"
import { Modal, Button, TextInput, Group, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';


export default function EditUser({opened, close}: any) {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          firstname: null,
          lastname: null,
          id_card_number: null,
          service: null,
          department: null,
          employee: null,
          phone_number: null,
          visitors: null,
          reason: null,
          vehicle: null
        },
    
        validate: {
            // firstname: (value) => ( value.length < 3 ? "Firtname must be 3 character at least" : null),
            // lastname: (value) => ( value.length < 3 ? "Lastname must be 3 character at least" : null),
            // id_card_number: (value) => ( value.length < 5 ? "Lastname must be 3 character at least" : null),
            // phone_number: (value) => (/^6[0-9]{8}$/.test(value)? null : 'Invalid phone number'),
        },
      });

 
    function handleSubmit(values: any){
        console.log(values)
    }


  return (
    <>
      <Modal opened={opened} size="lg" onClose={close} title= {<p style={{color: "#404040"}}> Modofier Utilisateur </p>}>
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
                        label="Numero de CNI"
                        placeholder="..."
                        key={form.key('id_card_number')}
                        {...form.getInputProps('id_card_number')}
                        styles={{
                            label:{
                                color: "#404040"
                            }
                        }}
                    />
                    <TextInput
                        withAsterisk
                        label="Numero de téléphone"
                        placeholder="6xxxxxx"
                        key={form.key('phone_number')}
                        {...form.getInputProps('phone_number')}
                        styles={{
                            label:{
                                color: "#404040"
                            }
                        }}
                    />
                </Group>
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