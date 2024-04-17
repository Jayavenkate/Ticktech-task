import { AppBar, Button, IconButton, styled } from "@mui/material";

export const AppbarContainer = styled(AppBar)({
    flexGrow: 1,
    backgroundColor: "#fff",
    color: "black",
    boxShadow: "none"
})

export const ButtonDiv = styled(Button)(({ theme }) => ({
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
        display: "none"

    },
}));

export const IconButtonDiv = styled(IconButton)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "flex"

    },
}));