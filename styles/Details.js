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
    
    '&:hover': {
transform: 'scaleX(-2)',
cursor: 'pointer',
backgroundColor: 'orange',

    }
}
}


export default styles