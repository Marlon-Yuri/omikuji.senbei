//////////////////////////////MEU BISCOITO DA SORTE/////////////////////////////////////////
import React, { Component } from "react";
import styled from 'styled-components'
import Img from './img/biscoito.png'
import  './App.css'



const Btn = styled.button`
width:5.5vw;
height:11vh;
border-radius: 50%;
position:absolute;
left:98%;
top:10%;
font-weight:bolder;
font-size:1vw;
border-style:none;
background-color:#4682B4;
&:hover{
  cursor:pointer;
  transform: scale(1.1); 

}
@media (max-width: 900px) {
  top:50%;
  width:11vw;
  font-size:1.6vw;
}
@media (max-width: 460px) {
  top:89%;
  left:46%;
  width:16.6vw;
  font-size:1.6vw;
}
`
const Myimage = styled.img`
width:35vw;
@media (max-width: 900px) {
  width:53vw;
}
@media (max-width: 460px) {
  width:60vw;
  position:absolute;
  left:11%;
}
`
const BoxImg = styled.div`
width:70vw;
display:flex;
justify-content:space-between;
height:60vh;
position:relative;
`

export default class App extends Component{

state = {
    frases:['Todos os cogumelos são comestíveis, alguns uma vez só', 'Pense como um boleto. Um boleto sempre vence!',
    'Se a sua barriga não quer ficar chapada, fique você.',
    'O importante não é ganhar, o que importa é competir sem perder, nem empatar.',
    'Não é seu signo que te atrapalha, você que é preguiçoso mesmo. Pare de usar o horóscopo como desculpa e comece a agir.', 
    'Vamos trabalhar. Afinal, nascemos bonitos, não ricos.','Café para mudar aquilo que posso, vinho para aceitar aquilo que não posso.',
    'Por pior que seja o buraco em que você se encontra, sorria. Porque ainda não tem terra por cima.', 
    'Corra atrás dos seus sonhos com a mesma pressa que você corre atrás do busão.',
    'Levanta, senão as formigas vão comer esse docinho que caiu no chão!',
    'Quem levanta cedo, tem mais tempo para se frustrar.',
    'Não leve a vida muito a sério, você não vai sair vivo dela.',
    'Ninguém pode ser sábio de estômago vazio.',
    'Você vive pedindo mil coisas, mas na verdade só precisa de uma: um espelho para ver se começa a se enxergar.',
    'Quando tenho um problema, me pergunto: O que Jesus faria nesse caso? Então me faco de morto e desapareço por três dias.',
    'Não confio em pessoas que gostam de cachorro, mas confio totalmente num cachorro quando ele não gosta de uma pessoa.',
    '“Só se vive uma vez” – argumento muito utilizado para convencer alguém a fazer uma cagada.',
    'Dizem que a felicidade vem das coisas pequenas. Então olhe para o seu salário e seja feliz.',
    'Ontem sonhei com você, hoje vou rezar antes de dormir.',
    'Faça a boa ação do dia: Quando você ver um casal se beijando em público, grite “Eu sabia que você estava me traindo!” e saia correndo chorando.',
    'Existe uma grande diferença entre amor, paixão e fogo no rabo.',
    'Piolho e dinheiro, quem tem não diz.',
    'Há males que vêm para o bem… mas a maioria vêm para o mal mesmo',
    'Se você pensa que é muito pequeno para fazer diferença, tente dormir em um quarto fechado com um mosquito.'
       ], // UM ESPAÇO COM NÚMEROS OU FRASES ALEATORIOS 
    resultado:'' // ESPAÇO PRA RECEBER A FRASE SORTEADA
}

// getRamdom = (min,max)=> 
// Math.floor(Math.random() * (max - min + 1)) + min

//PRA RETORNAR UM NÚMERO ALEATÓRIO ENTRE 0 E 5...PRECISO MULTIPLICAR O Math.random PELO VALOR MÁXIMO QUE QUERO (5)
//MATH.FLOOR ARREDONDA O NÚMERO GERADO PELO RANDOM PRA BAIXO (2.44344334 = 2)

randomIndex = (maiorValor, menorValor) =>{
    return (
        Math.floor(Math.random() * (maiorValor - menorValor)) + menorValor
    )
}

//getWord = ()=>
//this.setState({resultado: this.state.frases[this.randomIndex(0, this.state.frases.length)] })

//CRIO UMA FUNÇÃO PRA ALTERAR O RESULTADO PRA MINHA NOVA LISTA RANDOMIZADA
randomSentence = () => {
    this.setState({resultado: this.state.frases[this.randomIndex(0, this.state.frases.length)]})
}


    render(){
        return(
            <div className="Container">
            <BoxImg>
            <Myimage src={Img}/>
            <Btn onClick={this.randomSentence}><strong>OPEN</strong></Btn>
            </BoxImg>        
            <h1 className="sentence">{this.state.resultado}</h1>
            </div>
        )
    }
}