import { createTheme } from '@mui/material/styles';

// TODO: all palettes (except primary, secondary) are using the default MUI
//       color scheme, implement custom colors
export const themeLight = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#18a0fb',
            contrastText: '#fff',
        },
        secondary: {
            main: '#fff',
            contrastText: '#18a0fb',
        },
        error: {
            main: '#d32f2f',
            contrastText: '#fff',
        },
        warning: {
            main: '#ed6c02',
            contrastText: '#fff',
        },
        info: {
            main: '#0288d1',
            contrastText: '#fff',
        },
        success: {
            main: '#2e7d32',
            contrastText: '#fff',
        }
    }
});

// export const themeDark = createTheme({
//     palette: {
//         mode: 'dark',
//         primary: {

//         },
//         secondary: {

//         },
//         error: {

//         },
//         warning: {

//         },
//         info: {

//         },
//         success: {
            
//         }
//     }
// });