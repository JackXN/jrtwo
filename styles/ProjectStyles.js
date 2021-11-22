const styles =   { 
container: {
    height: '100%',
    textAlign:'center',
    fontFamily: 'Catamaran, sans-serif',
Title: {
    color: 'red',
}


},
containerTwo: {
    display: 'flex',
    flexDirection: ['column', 'row', 'row'],
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap:'wrap',

},
projectCard: {
    height: '400px',
    width: '300px',
    borderRadius: '10px',
    margin: '1rem',
    color: 'white',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    cursor: 'pointer',
},
projectHeader: {
backgroundColor: '#232322',
fontFamily: 'Catamaran, sans-serif',
padding: '16px',
// margin: '10px',
display: 'flex',
flexDirection: 'column',
textAlign: 'left',
borderRadius: '10px',
}
}

export default styles;