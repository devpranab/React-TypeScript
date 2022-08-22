import React from 'react';

type DataFetchTypeProps = {
    status: "loading" | "error" | "success";
};

const DataFetch = ({status}: DataFetchTypeProps) => {
    if(status === "loading"){
        return <h3>Data is loading...</h3>;

    }else if(status === "error"){
        return <h3>Error, Data could not fetch</h3>;
        
    }
    return (
        <div>
            <h3>Fetch successfully</h3>
        </div>
    );
};

export default DataFetch;