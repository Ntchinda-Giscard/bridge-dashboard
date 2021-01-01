"use client"
import { UserTable } from "@/app/components/userTable";
import { Paper, Select, Group, Button, TextInput, rem } from "@mantine/core";
import { IconSearch } from '@tabler/icons-react';
import AddUser from "./components/addUserModal";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import DeleteUserModal from "./components/deleteUserModal";

export default function Page(){
    const [addOpenedUser, { open: openAddUser, close: closeUser }] = useDisclosure(false);
    const [openedDelete, { open: openDelete, close: closeDelete }] = useDisclosure(false);
    const [deleteData, setDeleteData] = useState();

    const handleDelete= (v: any) =>{
        setDeleteData(v)
        openDelete()
    }


    return(
        <main className="flex min-h-full flex-col gap-3">
            <AddUser 
                opened = {addOpenedUser}
                close={closeUser}
            />
            <DeleteUserModal
                data={deleteData}
                opened = {openedDelete}
                close={closeDelete}
            />
            <p style={{fontWeight: 800, fontSize: "large", color: "#404040"}}> Utitlisateur </p>
            <Paper radius='md' shadow='md'>
                <div className={'flex flex-col gap-5 pl-3 pr-3'}>
                    <Group justify="end">
                        <Select placeholder='filtrer par pays' data={[]}/>
                    </Group>
                    <div className={'flex flex-col md:flex-row justify-between aling-center '}>
                        <TextInput
                            rightSection={<IconSearch style={{width: rem(16), height: rem(16)}} />}
                            placeholder='Exporter'
                        />
                        <Button
                            color={'#0B8F23'}
                            onClick={openAddUser}
                        >
                            Ajouter un utilisateur
                        </Button>
                    </div>

                </div>
                <UserTable
                    onDelete={(v:any) =>handleDelete(v)}
                />
            </Paper>
        </main>
    )
}