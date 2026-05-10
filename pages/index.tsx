import withLayoutMain from '@/libs/components/layout/LayoutHome';
import { Box, Container, Stack } from '@mui/material';
import { NextPage } from 'next';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useDeviceDefect from '@/libs/hooks/useDeviceDetect';
import { useQuery } from '@apollo/client';
import { GET_PROPERTIES } from '@/apollo/user/query';
const Home: NextPage = () => {
    const device = useDeviceDefect();


    const {
        loading: getPropertiesLoading,
        data: getPropertiesData,
        error: getPropertiesError,
        refetch: getPropertiesRefetch,
    } = useQuery(GET_PROPERTIES, {
        fetchPolicy: 'network-only',
        variables: {
            input: {
                page: 1,
                limit: 5,
                sort: "propertyRank",
                direction: "DESC",
                search: {},
            },
        },
    });

    console.log("getPropertiesData =>", getPropertiesData)

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