"use client";
import React from "react";
import { Button } from "../ui/button";
import { RefreshCcw } from "lucide-react";

const ReloadButton = () => {
  return (
    <Button
      onClick={() => {
        window.location.reload();
      }}
    >
      <RefreshCcw />
    </Button>
  );
};

export default ReloadButton;
