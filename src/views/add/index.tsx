import React from 'react';
import { Header } from 'components/header';
import { Menu } from 'components/menu';
import { PriceCard } from 'components/priceCard';
import { Scroller } from 'components/scroller';
import { View } from 'components/view';
import { Input } from 'components/input';

import './add.scss';

export function Add() {
  return (
    <View context='home' >
      <Header >
        <PriceCard name='EntradaEntradaEntradaEntradaEntradaEntrada' quantity={12000} yellow fluid/>
        <PriceCard name='Entrada' quantity={12000}/>
        <PriceCard name='Entrada' quantity={12000} yellow/>
        <PriceCard name='Entrada' quantity={12000}/>
        <PriceCard name='Entrada' quantity={12000} yellow/>
      </Header>
      <Scroller>
        <p className="main-title font-size-goliat text-align-center color-blue-font">REGSITRAR GASTO NUEVO</p>
        <Input title='Nombre del gasto' placeholder='Nombre del gasto' />
      </Scroller>
      <Menu add />
    </View>
  )
}
