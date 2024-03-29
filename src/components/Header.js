import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
      ul: {
        margin: 0,
        padding: 0,
      },
      li: {
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      //backgroundColor: 'rebeccapurple'
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor: theme.palette.grey[200],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  }));

export default function Header() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                <Link variant="h6" color="inherit" href="/" noWrap className={classes.toolbarTitle}>
                    Mock Company
                </Link>
                <nav>
                    <Link variant="button" color="textPrimary" href="/pricing" className={classes.link}>
                        Redirect
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Enterprise
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Support
                    </Link>
                </nav>
                <Button href="/login" color="primary" variant="outlined" className={classes.link}>
                    Login
                </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}