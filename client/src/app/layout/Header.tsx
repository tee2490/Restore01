import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton, List, ListItem, Switch } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

export default function Header(props: any) {
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            direction: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Switch
              defaultChecked
              onChange={props.handleMode}
              color="default"
            />

            <Typography variant="h6">TEE-RESTORE</Typography>
          </Box>

          <List sx={{ display: "flex" }}>
            {midLinks.map(({ title, path }) => (
              <ListItem
                key={title}
                component={NavLink}
                to={path}
                sx={navStyles}
              >
                {title}
              </ListItem>
            ))}
          </List>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton size="large" color="inherit">
              <Badge color="secondary" badgeContent={4}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <List sx={{ display: "flex" }}>
              {rightLinks.map(({ title, path }) => (
                <ListItem
                  key={title}
                  component={NavLink}
                  to={path}
                  sx={navStyles}
                >
                  {title}
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
