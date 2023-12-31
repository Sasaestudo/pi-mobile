import { StyleSheet } from 'react-native';


const estilos = StyleSheet.create({

  containerInterno: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  input: {
    width: "70%",
    height:50,
  },
  busca: {
    flex: 0,
    width: 280,
    borderRadius:20,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  titulo: {
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 20,
  },
   botao:{
    backgroundColor:"black",
    width:80,
    height:40,
    marginTop:0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10
  },
  botaoTexto:{
    fontWeight:"bold",
    fontSize: 15,
    color: "orange",
    marginHorizontal:10,
  },
   botaoCuidador:{
    backgroundColor:"black",
    width:70,
    height:30,
    marginTop:20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10
  },
  botaoTextoCuidador:{
    fontWeight:"bold",
    fontSize: 14,
    color: "orange"
  },
  botaoExcluir:{
    backgroundColor:"red",
    width:70,
    height:30,
    marginTop:20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10
  },
  botaoTextoExcluir:{
    fontWeight:"bold",
    fontSize: 14,
    color: "white"
  },
  botaoFim: {
    flexDirection: 'row',
    marginTop:20,
  },
  listaCuidadores:{
    margin:10,
    padding:10,
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    borderRadius:10
  },
  linha: {
    width: '68%',
    height: 2,
    justifyContent: 'center',
    backgroundColor: 'orange',
    marginTop: 12,
  },
  linha2: {
    width: '35%',
    height: 2,
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  petItem: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center'
  },
  petImage: {
    width: 50,
    height: 50,
  },
  imagemPetLista: {
    height: 30,
    width: 30,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center'
  },
  containerPerfil:{
    marginTop: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column'
  },
  listaPetPerfil:{
    flexDirection: 'row',

  },

});

export default estilos