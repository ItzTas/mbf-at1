import { AppBar, Toolbar, Typography } from '@mui/material';

export default function CustomAppBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">E-Commerce</Typography>
            </Toolbar>
        </AppBar>
    );
}

