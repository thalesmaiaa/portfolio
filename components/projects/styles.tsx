import { theme } from "../../theme/theme";

export const styles = {
    projectsTitle: {
        mb: 3,
        color: "#E7F6F2",
        fontFamily: "Roboto Mono",
        fontWeight: 700,
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px"
        }
    },

    projectArea: {
        "&:hover": {
            cursor: "pointer"
        },
        mr: 3,
        mb: 3
    },

    projectName: {
        // textTransform: "capitalize",
        display: "flex"
    },

    projectDescription: {
        // color: "#E7F6F2",
        fontFamily: "Poppins",
        fontWeight: "700",
    }

}