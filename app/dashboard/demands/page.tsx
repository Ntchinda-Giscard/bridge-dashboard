"use client"
import { DemandTable } from "@/app/components/demandsTable";
import { Paper, Select, Group, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AddDemand from "./components/addServiceRequest";
import DeleteDemand from "./components/deleteRequest";
import { useState } from "react"
import { useQuery } from "@apollo/client";
import { GET_SERVICES_REQ } from "./query/getServiceRequest";


export default function Page(){
    const [openedAdd, { open: openAdd, close: closeAdd }] = useDisclosure(false);
    const [openedDelete, { open: openDelete, close: closeDelete }] = useDisclosure(false);
    const [opendedEdit, { open: openEdit, close: closeEdit }] = useDisclosure(false);

    const [deleteData, setDeleteData] = useState();
    const [editValue, setEditValue] = useState(null);

    const {data: dataReq, loading: loadReq, error: errReq} = useQuery(GET_SERVICES_REQ);


    const handleDelete= (v: any) =>{
        setDeleteData(v)
        openDelete()
    }

    return(
        <main className="flex min-h-full flex-col gap-3">  

            <AddDemand
                opened = {openedAdd}
                close={closeAdd}
            />
            <DeleteDemand
                opened = {openedDelete}
                close={closeDelete}
            />
            <p style={{fontWeight: 800, fontSize: "large", color: "#404040"}}> Gestion demande </p>
            <Paper radius='md' shadow='md'>
                <div className={'flex flex-col gap-5 pl-3 pr-3'}>
                    <Group justify={'end'}>
                        <Select placeholder='Exporter' data={[]} />
                    </Group>
                    <div className= {" flex flex-col md:flex-row justify-between "} >
                        <Group>
                            <Select placeholder='filtrer par pays' data={[]} />
                            <Select placeholder='filtrer par type' data={[]} />
                        </Group>

                        <Button
                            color={'#0B8F23'}
                            onClick={openAdd}
                        >
                            Ajouter une demande
                        </Button>
                    </div>
                    
                    
                </div>
                {
                    dataReq?.service_requests &&
                    <DemandTable
                        onDelete={(v:any) =>handleDelete(v)}
                        datas={dataReq?.service_requests}
                    />
                }
            </Paper>
        </main>
    )
}