import React from "react";
import { Icon } from "@iconify/react";
import { Fab, useTheme, Zoom } from "@mui/material";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = React.useState(false);
  const theme = useTheme();

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Zoom
      key={""}
      in={showTopBtn}
      timeout={transitionDuration}
      style={{
        transitionDelay: `100ms`,
      }}
      unmountOnExit
    >
      <Fab
        size="small"
        color="secondary"
        aria-label="add"
        onClick={goToTop}
        style={{ position: "fixed", bottom: 20, right: 10 }}
      >
        <Icon icon="bytesize:chevron-top" color="#fff" width={18} height="24" />
      </Fab>
    </Zoom>
  );
};
export default ScrollToTop;
