import React from "react";

export const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
};

export const formatDate = (date) => {
    return date.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
};