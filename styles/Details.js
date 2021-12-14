const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: '120px',

    h1: {
      fontWeight: '700',
      fontSize: '32px',
      fontStyle: 'normal',
      mb: '15px'
    },


    p: {
      fontSize:'16px',
      fontWeight: '400'
    }
  },

  containerOne: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  containerOneDescription: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    maxWidth: "700px",
    padding: "32px",

    
  },

  containerTwo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  containerTwoDescription: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "700px",
    padding: "32px",
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mt: ['35px', '35px', '35px', '90px'],
    padding: '20px',
    
  }
};

export default styles;
