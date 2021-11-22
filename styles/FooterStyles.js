const styles = {
    listContainer: {
        listStyle: "none",
        display: "flex",
        padding: "100px",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      },
      listItem: {
        mr: ["20px"],
        fontSize: "40px",
        "&:hover": {
          transform: "translateY(-5px)",
          transition: "transform 250ms",
          color: "#F06D6A",
        },
      },
      footer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      },

}

export default styles;