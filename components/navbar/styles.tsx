import { theme } from "../../theme/theme";

export const styles = {
    
    navContainer: {
        height: "10vh",
        color: "#E7F6F2",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        ml: 3,
        mr: 3,
        [theme.breakpoints.down("sm")]: {
            m: 0
        }
    },
    
    codeIcon: {
        color: "#E7F6F2",
        marginLeft: 2
    },

    linksArea: {
        display: "flex",
        flexDirection: "row"
    },

    links: {
        color: "#E7F6F2",
        marginRight: 2,
        fontFamily: "Poppins",
        fontSize: "20px",
        fontWeight: "800"
    }
}