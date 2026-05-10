import withLayoutMain from '@/libs/components/layout/LayoutHome';
import { Box, Container, Stack } from '@mui/material';
import { NextPage } from 'next';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useDeviceDefect from '@/libs/hooks/useDeviceDetect';
const Home: NextPage = () => {
    //DEVICE: MOBILE vs PS 
    const device = useDeviceDefect();

    if(device === "mobile") {
        return <Stack>HOMEPAGE MOBILE</Stack>;
    } else {
          return (
      
    <Stack className={"home-page"}>
        <Stack>
          <Stack className='container'>Trend Properties</Stack>
      </Stack>
      <Stack>
          <Stack className='container'>Popular Properties</Stack>
      </Stack>
      <Stack>
          <Stack className='container'>Advertisment</Stack>
      </Stack>
      <Stack>
          <Stack className='container'>Top Properties</Stack>
      </Stack>
      <Stack>
          <Stack className='container'>Top Agents</Stack>
      </Stack>
   </Stack>
      
  );
    }

};

export default withLayoutMain(Home);