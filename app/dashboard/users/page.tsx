import { UserTable } from "@/app/components/userTable";
import { Paper, Select, Group, Button, TextInput, rem } from "@mantine/core";
import { IconSearch } from '@tabler/icons-react';

export default function Page(){

    return(
        <main className="flex min-h-full flex-col gap-3">
            <p style={{fontWeight: 800, fontSize: "large", color: "#404040"}}> Utitlisateur </p>
            <Paper radius='md' shadow='md'>
                <div className={'flex flex-col gap-5 pl-3 pr-3'}>
                    <Group>
                        <Select placeholder='filtrer par pays' data={[]}/>
                    </Group>
                    <div className={'flex flex-col md:flex-row justify-between aling-center '}>
                        <TextInput
                            rightSection={<IconSearch style={{width: rem(16), height: rem(16)}} />}
                            placeholder='Exporter'
                        />
                        <Button radius={'md'} color={'green'}>Ajouter un utilisateur </Button>
                    </div>

                </div>
                <UserTable/>
            </Paper>
        </main>
    )
}