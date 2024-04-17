import { Grid, styled } from "@mui/material";

export const DivContainer = styled(Grid)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "45px",
    [theme.breakpoints.down("md")]: {

    },
}));
export const PElement = styled("p")(({ theme }) => ({
    fontSize: "26px",
    [theme.breakpoints.down("md")]: {

    },
    [theme.breakpoints.down("sm")]: {

    },
}));
export const HorizontalDiv = styled("div")({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
});
export const HorizontalLine = styled("div")({
    borderBottom: "1px solid #212121",
    width: "400px",
});
export const ContentDiv = styled("div")({
    maxWidth: "600px",
});
export const ColorsDiv = styled("div")({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
});

export const DivWrapper = styled(Grid)({
    display: "flex",
    flexDirection: "row",
});

export const LastImageWrapper = styled(Grid)({
    display: "flex",
    justifyContent: "flex-end",
});
export const Description = styled('p')(({ theme }) => ({
    color: "#757575",
    [theme.breakpoints.down("md")]: {

    },
    [theme.breakpoints.down("sm")]: {

    },
}));
export const SpanDescription = styled('span')({
    color: "#212121",
    padding: "0px 10px",

});


export const RectangleImageDiv = styled("img")(({ theme }) => ({
    width: "300px",
    [theme.breakpoints.down("md")]: {

    },
    [theme.breakpoints.down("sm")]: {

    },
}));