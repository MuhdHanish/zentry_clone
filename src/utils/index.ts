import React from "react";

export const getTextFromReactNode = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return node.toString();
    if (Array.isArray(node)) return node.map(getTextFromReactNode).join("");
    if (React.isValidElement(node)) return getTextFromReactNode((node as React.ReactElement<any>).props.children);
    return "";
};
