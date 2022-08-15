import { theme } from "../../theme/theme";

export const styles = {
    content: {
        color: "#E7F6F2",
        fontFamily: "Poppins",
        fontWeight: "800",
        mb: 3,
        [theme.breakpoints.down("sm")]: {
            fontSize: "12px"
        }
    },

    aboutTitle: {
        mb: 3,
        color: "#E7F6F2",
        fontFamily: "Roboto Mono",
        fontWeight: 700,
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px"
        }
        
    },

    

    
}