"use client";


let notFound = false;

export const markNotFound = () => {
  notFound = true;
};

export const isNotFound = () => notFound;
