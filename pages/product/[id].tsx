import React from "react";
import { useRouter } from "next/router";

function ProductItem() {
  const {
    query: { id },
  } = useRouter();

  return <h1>Esta es la pagina del producto: {id}</h1>;
}

export default ProductItem;
