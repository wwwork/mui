import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, Favorite, Person } from "@mui/icons-material";

export default function BottomNavigationDemo() {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      sx={{ position: "absolute", bottom: 0 }}
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Favorites" icon={<Favorite />} />
      <BottomNavigationAction label="Profile" icon={<Person />} />
    </BottomNavigation>
  );
}
