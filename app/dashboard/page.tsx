"use client"
import StatsGrid from "../components/statGrid";
import {useEffect} from "react"

export default function Page(){

    useEffect(() =>{
        const token = localStorage.getItem("bridge-token");

        console.log("my bridge token", token)
    }, [])

    return(
        <>
            <main className="flex min-h-full flex-col gap-3">
                <p style={{fontWeight: 800, fontSize: "large", color: "#404040"}}> Tableau de bord </p>
                <StatsGrid />
            </main>
        </>
    )
}