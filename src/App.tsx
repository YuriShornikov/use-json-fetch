import React from "react";
import { DataComponent, ErrorComponent, LoadingComponent } from "./components/Rendering";

export const App: React.FC = () => {
  return (
    <div>
      <h1>useJsonFetch Example</h1>
      <div>
        <h2>Data Component</h2>
        <DataComponent />
      </div>
      <div>
        <h2>Error Component</h2>
        <ErrorComponent />
      </div>
      <div>
        <h2>Loading Component</h2>
        <LoadingComponent />
      </div>
    </div>
  );
};
