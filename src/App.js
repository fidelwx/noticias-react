import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import ListaNoticias from './components/ListaNoticias'
import Formulario from './components/Formulario'

export default class App extends Component {
    state = { 
        noticias : []
     }

    componentDidMount(){
        this.consultarNoticias();
    }

    consultarNoticias = async (categoria = 'general') => {
        const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=4599b874de4742598526eb340abedfcd`;
    
        const respuesta = await fetch(url);
        const noticias = await respuesta.json();

        this.setState({
            noticias : noticias.articles
        })
    }

    render() {
        return (
            <Fragment>
                <Header 
                    titulo = 'Noticias React API'
                />
                <div className="container white contenedor-noticias">
                    <Formulario
                        consultarNoticias={this.consultarNoticias}
                    />
                    <ListaNoticias 
                        noticias={this.state.noticias}
                    />
                </div>
            </Fragment>
        )
    }
}
