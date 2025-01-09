import { UsersTable } from "@/app/components/demandsTable";


export default function Page(){

    return(
        <main className="flex min-h-full flex-col gap-3">  
            <p style={{fontWeight: 800, fontSize: "large", color: "#404040"}}> Gestion demande </p>
            <UsersTable />
        </main>
    )
}