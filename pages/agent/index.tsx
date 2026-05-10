import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDefect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const AgentList: NextPage = () => {

  const device = useDeviceDefect();

    if(device === "mobile") {
        return <Stack>AGENT MOBILE</Stack>;
    } else {
  return (
        <div style={{margin:"20px 0"}}>
          <Stack className={"container"}> AGENT</Stack>
        </div>
  );
};
};

export default withLayoutBasic(AgentList);