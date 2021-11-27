import { alpha, createTheme } from '@mui/material/styles';
declare module '@mui/material/styles/createPalette' {
    interface TypeBackground {
        default: string,
        alternate: string,
        paper: string,
    }
}

// TODO: implement custom colors for other palettes (if necessary)
let themeLight = createTheme({
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
        // error: {
        //     main: '#d32f2f',
        //     contrastText: '#fff',
        // },
        // warning: {
        //     main: '#ed6c02',
        //     contrastText: '#fff',
        // },
        // info: {
        //     main: '#0288d1',
        //     contrastText: '#fff',
        // },
        // success: {
        //     main: '#2e7d32',
        //     contrastText: '#fff',
        // },
        background: {
            default: '#fff',
            alternate: '#f2f7fd',
            paper: '#fff'
        }
    },
});

themeLight = createTheme(themeLight, {
    components: {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: alpha(
                            themeLight.palette.primary.main,
                            themeLight.palette.action.selectedOpacity * 4
                        ),
                        '&:hover': {
                            backgroundColor: alpha(
                                themeLight.palette.primary.main,
                                themeLight.palette.action.focusOpacity + themeLight.palette.action.selectedOpacity * 4
                            )
                        }
                    }
                }
            }
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

export { themeLight };