import StatsGrid from "../components/statGrid";

export default function Page(){

    return(
        <>
            <main className="flex min-h-full flex-col gap-3">
                <p style={{fontWeight: 800, fontSize: "large", color: "#404040"}}> Tableau de bord </p>
                <StatsGrid />
            </main>
        </>
    )
}