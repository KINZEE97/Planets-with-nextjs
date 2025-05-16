/* eslint-disable @next/next/no-img-element */

"use client";
import { deletePlanetAction } from "@/actions/planets-action";
import styles from "./styles.module.css";
import { Planet } from "@/models/Planets";

export interface PlanetItemsProps {
    planet: Planet;
}

export function PlanetItem({ planet }: PlanetItemsProps) {
    return (
        <div className={styles.planet}>
            <h2>{planet.name}</h2>
            <img
                src={planet.imageUrl}
                alt={planet.name}
                width={320}
                height={180}
                style={{ objectFit: "cover" }}
            />
            <p>{planet.description}</p>
            <button
                type="button"
                className={styles.deleteBtn}
                onClick={() => deletePlanetAction(planet.id)}
            >
                Excluir
            </button>
        </div>
    );
}
