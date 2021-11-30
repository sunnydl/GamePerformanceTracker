import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

export const EmblemAvatar = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.background.alternate,
    border: `${theme.spacing(0.5)} solid`,
    borderColor: theme.palette.background.alternate,
}));
