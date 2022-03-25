import { Header } from 'components/header';
import { Menu } from 'components/menu';
import { PriceCard } from 'components/priceCard';
import { Scroller } from 'components/scroller';
import { View } from 'components/view';
import React from 'react';

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
        
      </Scroller>
      <Menu add />
    </View>
  )
}
