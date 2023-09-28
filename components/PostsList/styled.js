
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
export const PostGrid = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(2),
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(5),
}));


export const PostListItem  = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 'fit-content',
    border: 'none',
    width: '100%',
    lineHeight: '60px',
    borderRadius: '33px',
    background: 'linear-gradient(145deg, #0e0f17, #10121c)',
    boxShadow:  '17px 17px 48px #090b10, -17px -17px 48px #151724',
}));
