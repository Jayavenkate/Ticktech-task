
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Icon, Moon, Light } from "../../data";
import { AppbarContainer, ButtonDiv, IconButtonDiv } from "./NavBar.styled";
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseTheme } from "../context/ThemeContext";

export const NavBar = () => {
    const { isDarkMode, toggleTheme, colors } = UseTheme();

    const pages = [{
        id: 1,
        name: 'Home',
        link: "/"
    },
    {
        id: 2,
        name: 'About',
        link: "/about"
    },
    {
        id: 3,
        name: 'Resume',
    },
    {
        id: 4,
        name: 'Skills',
    },
    {
        id: 5,
        name: 'Projects',
    },
    {
        id: 6,
        name: 'Contact',
    }];
    const [anchorElNav, setAnchorElNav] = useState(null);
    const navigate = useNavigate()
    const appBarStyle = {
        backgroundColor: isDarkMode ? colors.dark : colors.light,
        color: isDarkMode ? '#fff' : '#000',
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleMenuItemClick = (pageLink) => {
        navigate(pageLink);
        handleCloseNavMenu();
    };

    return (
        <>
            <AppbarContainer position="fixed" style={appBarStyle}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        {Icon}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ANISH KUMAR SINHA
                    </Typography>
                    <ButtonDiv color="inherit" onClick={() => navigate("/")}>Home</ButtonDiv>
                    <ButtonDiv color="inherit" onClick={() => navigate("/about")}>About</ButtonDiv>
                    <ButtonDiv color="inherit" >Resume</ButtonDiv>
                    <ButtonDiv color="inherit">Skills</ButtonDiv>
                    <ButtonDiv color="inherit">Projects</ButtonDiv>
                    <ButtonDiv color="inherit">Contact</ButtonDiv>
                    {/* <Button color="inherit">{Moon}</Button> */}
                    <Button color="inherit" onClick={toggleTheme}>
                        {isDarkMode ? Light : Moon}
                    </Button>
                    <div>
                        <IconButtonDiv
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButtonDiv>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.id} onClick={() => handleMenuItemClick(page.link)}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                </Toolbar>
            </AppbarContainer>
        </>
    );
};
