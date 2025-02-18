"use client"
import { useMutation } from '@apollo/client';
import { Modal, Button, Group } from '@mantine/core';
import { useEffect } from 'react';
import { DELETE_USERS } from '../mutation/mutation';
import toast from 'react-hot-toast';

export default function DeleteUserModal({data, opened, close}: any) {

  const [deleteUser, {data: dataDelete, loading: loadingDelete}] = useMutation(DELETE_USERS);

    useEffect(() =>{
        console.log(data)
    }, [data])
    const handleDelete= () =>{
        deleteUser({
            variables:{
                id: data?.id
            },
            onCompleted: (data) =>{
                close()
                toast.success("Operation sucessful")
            },
            onError: (err) =>{
                console.log(err)
                toast.error("Operation failed")
            }
        })
    }
  return (
    <>
      <Modal opened={opened} onClose={close} title={<p style={{color: "#404040"}}>Supprimer Utilisateur</p>}>
        {/* Modal content */}
        <p style={{ fontWeight: 600, color: "#404040"}}> Etes vous vraiment sur de vouloir supprimer cette utilisateur? </p>
        <Group grow mt={15}>
            <Button color={"#0B8F23"} onClick={handleDelete}  > Supprimer </Button>
            <Button  color="#0B8F23" variant='outline' onClick={close} > Annuler </Button>
        </Group>
      </Modal>

    </>
  );
}