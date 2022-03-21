import { Header } from 'components/header';
import { View } from 'components/view';
import React from 'react';
import { PriceCard } from '../../components/priceCard/index';

import './home.scss';

export function Home() {
  return (
    <>
      <View context='home' >
        <Header >
          <PriceCard name='Entrada' quantity={12000}/>
          <PriceCard name='Entrada' quantity={12000}/>
          <PriceCard name='Entrada' quantity={12000}/>
          <PriceCard name='Entrada' quantity={12000}/>
          <PriceCard name='Entrada' quantity={12000}/>
          <PriceCard name='Entrada' quantity={12000}/>
        </Header>
      </View>
    </>
  )
}
