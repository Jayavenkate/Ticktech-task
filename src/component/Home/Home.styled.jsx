import { Button, styled } from "@mui/material";

export const GridFirstContainer = styled("div")(({ theme }) => ({
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexWrap: "wrap-reverse",
    [theme.breakpoints.down("md")]: {
        alignItems: "center",
        justifyContent: "center",
    },
}));
export const GridImage = styled("img")({
    maxWidth: "500px",
    height: "400px",
    objectFit: "contain"

});
export const PElement = styled("p")({
    fontSize: "40px",
    fontWeight: 700,
    margin: 0
});

export const PElementSpan = styled("span")({
    fontSize: "36px",
    fontWeight: "bold",
    color: "#737373"
});

export const Description = styled("p")({
    maxWidth: "350px"
});
export const ButtonOne = styled(Button)({
    background: "#ff7043",
    color: "#fff",
    textTransform: "none",
    boxShadow: "0px 8px 12px rgba(255, 112, 67, 0.3)",
    border: "3px solid #fff",
    borderRadius: "10px",
    height: "50px",
    width: "150px",
    cursor: "pointer",
    '&:hover': {
        background: "#ff7043",
    }
});

export const ButtonTwo = styled(Button)({
    background: "#212121",
    color: "#fff",
    textTransform: "none",
    boxShadow: "0px 8px 12px rgba(255, 112, 67, 0.3)",
    border: "3px solid #fff",
    borderRadius: "10px",
    height: "50px",
    width: "150px",
    cursor: "pointer",
    '&:hover': {
        background: "#212121",
    }
});

export const ButtonDiv = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: '20px',
    [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    },
}));

export const NameContainer = styled("div")({
    width: "50%"
});
export const IconContainer = styled("div")({
    display: "flex",
    flexDirection: "row",
    // border: '1px solid',

});