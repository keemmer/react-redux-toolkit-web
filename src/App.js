import { useGetAllAttractionQuery } from './services/attraction';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AttractionCard from './attractionCard';

import {useDispatch} from 'react-redux';
import { setAttractionID} from './features/attraction/attractionSlice'

function App() {
  const { data, error, isLoading } = useGetAllAttractionQuery()
  const dispatch = useDispatch();
  const columns = [
    { field: 'id', headerName: 'id', width: 50 },
    { field: 'coverimage', headerName: 'image', width: 120, renderCell: (params) => <Avatar src={params.value} variant="square" /> },
    { field: 'name', headerName: 'name', width: 200 },
    { field: 'detail', headerName: 'detail', width: 400 },
    { field: 'latitude', headerName: 'latitude', width: 100 },
    { field: 'longitude', headerName: 'longitude', width: 100 },
    { field: 'action', headerName: 'action', width: 100, renderCell: (params) => <GridActionsCellItem icon={<VisibilityIcon/>} onClick={() => dispatch(setAttractionID(params.id))} /> }
  ]
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        // <>
        //   <ul>
        //     {data.map(attraction => (
        //       <li key={attraction.id}>
        //         {attraction.name} {attraction.detail}
        //       </li>
        //     ))}
        //   </ul>
        // </>
        <Container maxWidth="lg" sx={{ p: 2 }}>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
            />
          </div>
          <div>
            <AttractionCard />
          </div>
        </Container>
      ) : null}
    </div>
  );
}

export default App;
