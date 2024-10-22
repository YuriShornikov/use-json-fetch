import React from "react";
import { useJsonFetch } from "./UseJsonFetch";

export const DataComponent: React.FC = () => {
    const [data, loading, error] = useJsonFetch("http://localhost:7070/data");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h3>Data:</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export const ErrorComponent: React.FC = () => {
    const [data, loading, error] = useJsonFetch("http://localhost:7070/error");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h3>Data:</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export const LoadingComponent: React.FC = () => {
    const [data, loading, error] = useJsonFetch("http://localhost:7070/loading");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h3>Data:</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};
