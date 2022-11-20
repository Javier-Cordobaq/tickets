import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const TableUsers = ({ users }) => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'documentNumber', headerName: 'Número de documento', width: 130 },
        { field: 'meetType', headerName: 'Modo reunion', width: 130 },
        { field: 'shift', headerName: 'Turno', width: 130 },
    ];

    const rows = users?.map(c => ({ id: c.id, name: c.name, documentNumber: c.documentNumber, meetType: c.meetType, shift: c.shiftLetter + c.shiftNumber }))

    return (
        <div style={{ height: '100%', width: '100%' }}>
            {users !== null ?
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    style={{ color: 'white' }}
                    localeText={{
                        toolbarDensity: 'Size',
                        toolbarDensityLabel: 'Size',
                        toolbarDensityCompact: 'Small',
                        toolbarDensityStandard: 'Medium',
                        toolbarDensityComfortable: 'Large',
                    }}
                    components={{
                        Toolbar: GridToolbar,
                    }}
                /> : <h1>Cargando...</h1>
            }
        </div>
    );
}

export default TableUsers