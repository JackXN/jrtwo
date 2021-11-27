const styles = {

container: {
    display :'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
},

displayContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    transition: 'all ease-in 2s',
    fontSize: '30px',
    '&:hover': {
transform: 'scaleX(-2)',
cursor: 'pointer',
backgroundColor: 'orange',

    }
},

textContainer: {
    fontFamily: 'Catamaran, sans-serif',
    fontSize: '2rem',
    color: '#222f4',
}
}


export default styles