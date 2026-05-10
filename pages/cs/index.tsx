import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDefect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const CS: NextPage = () => {
  const [title, setTitle] = useState<string>("hello");

  const device = useDeviceDefect();

    if(device === "mobile") {
        return <Stack>CS MOBILE</Stack>;
    } else {
  return (
        <div style={{margin:"20px 0"}}>
          <Stack className={"container"}> CS</Stack>
        </div>
  );
}
};

export default withLayoutBasic(CS);