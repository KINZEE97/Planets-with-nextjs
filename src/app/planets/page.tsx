import { PlanetForm } from "@/components/PlanetForm";
import styles from "./page.module.css";
import { PlanetItem } from "@/components/PlanetItem";
import { getPlanets } from "@/models/Planets";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Planetas | Planets APP",
};

export default async function Home() {
    const planets = await getPlanets();

    return (
        <div className={styles.page}>
            <h1>Planetas</h1>
            <div className={styles.container}>
                <Suspense fallback={<h2>Carregando o formulario...</h2>}>
                    <PlanetForm />
                </Suspense>

                <section className={styles.planets}>
                    {planets.map((planet) => (
                        <PlanetItem key={planet.id} planet={planet} />
                    ))}
                </section>
            </div>
        </div>
    );
}
