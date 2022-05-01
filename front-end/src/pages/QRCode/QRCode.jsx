import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import './styleQr.css'
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import qrcode from '../../assets/qrcode.png'

function backPage() {
  window.history.back()
}

export default function QRCode() {
    return (
        <Container>
        <Header></Header>
        <div className='container'>
            <div className='qrpart'>
                <div className='qrpart__content'>
                    <img src={qrcode} alt=""/>
                </div>
            </div>
            <div className='login__buttons'> 
                <CustomButton text='Confirmar'  className='yellow'></CustomButton>
            </div>
            <div className='back_button'>
                <button onClick={() => backPage()}>Voltar</button>
            </div>
        </div>
        <Footer></Footer>
        </Container>
    )
    }