import { DemandTable } from "@/app/components/demandsTable";
import { Paper, Select, Group } from "@mantine/core";



export default function Page(){

    return(
        <main className="flex min-h-full flex-col gap-3">  
            <p style={{fontWeight: 800, fontSize: "large", color: "#404040"}}> Gestion demande </p>
            <Paper radius='md' shadow='md'>
                <div className={'flex flex-col gap-5 pl-3 pr-3'}>
                    <Group justify={'end'}>
                        <Select placeholder='Exporter' data={[]} />
                    </Group>
                    
                    <Group>
                        <Select placeholder='filtrer par pays' data={[]} />
                        <Select placeholder='filtrer par type' data={[]} />
                    </Group>
                    
                </div>
                <DemandTable />
            </Paper>
        </main>
    )
}