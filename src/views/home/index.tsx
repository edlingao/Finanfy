import { CollapsableCard } from 'components/collapsableCard';
import { ExpenseCard } from 'components/expenseCard';
import { Header } from 'components/header';
import { Menu } from 'components/menu';
import { Scroller } from 'components/scroller';
import { View } from 'components/view';
import React from 'react';
import { PriceCard } from '../../components/priceCard/index';

import './home.scss';

export function Home() {
  return (
    <>
      <View context='home' >
        <Header >
          <PriceCard name='EntradaEntradaEntradaEntradaEntradaEntrada' quantity={12000} yellow fluid/>
          <PriceCard name='Entrada' quantity={12000}/>
          <PriceCard name='Entrada' quantity={12000} yellow/>
          <PriceCard name='Entrada' quantity={12000}/>
          <PriceCard name='Entrada' quantity={12000} yellow/>
        </Header>
        <Scroller>
          <CollapsableCard date={'HOLA'}>
            <ExpenseCard date={'HOLA'} name={"Coppel"} quantity={21.00} />
          </CollapsableCard>
        </Scroller>
        <Menu home/>
      </View>
    </>
  )
}
