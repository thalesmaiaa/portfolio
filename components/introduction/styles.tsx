import { theme } from "../../theme/theme";

export const styles = {
    skillsContainer: {
        height: "40vh",
        width: "100%",
    },

    name: {
        fontFamily: "Roboto",
        fontWeight: "900",
        color: "#E7F6F2",
        mt: 12 ,
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px"
        }
    },

    presentation: {
        fontFamily: "Roboto Mono",
        fontWeight: "700",
        mt: 12,
        color: "#E7F6F2",
        [theme.breakpoints.down("sm")]: {
            fontSize: "18px"
        }

    }
}