import React from "react";

function Item(props) {
    const peca = props.peca;
    return (
        <div style={{
            // display: "flex",
            // flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "10px",
            border: "1px solid #ccc",
        }}>
            <h1>{peca.nome}</h1>
            <h3>{peca.id}</h3>
        </div>
    )
}

export default Item;