"use client";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    return (
        <main>
            <h2>Ocorreu algum error...</h2>
            <p>{error.message}</p>
            <button type="button" onClick={() => reset()}>
                Tentar novamente
            </button>
        </main>
    );
}
