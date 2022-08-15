import { theme } from "../../theme/theme";

export const styles = {
    
    skillsTitle: {

        mb: 3,
        color: "#E7F6F2",
        fontFamily: "Roboto Mono",
        fontWeight: 700,
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px"
        }
    },

    skillsColor: {
        color: "#E7F6F2"
    },

    skillsArea: {
        display: "flex",

    },

    skillsList: {
        width: "20%",
    },

    skillsItem: {
        justifyContent: "center"
    },

    
}