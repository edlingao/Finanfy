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
          <PriceCard name='Entrada' quantity={12000}/>
          <PriceCard name='Entrada' quantity={12000}/>
          <PriceCard name='Entrada' quantity={12000}/>
          <PriceCard name='Entrada' quantity={12000}/>
        </Header>
        <Scroller>
          <CollapsableCard date={'Hoy 12 de Marzo'}>
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
          </CollapsableCard>
          <CollapsableCard date={'Hoy 12 de Marzo'}>
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
          </CollapsableCard>
          <CollapsableCard date={'Hoy 12 de Marzo'}>
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
          </CollapsableCard>
          <CollapsableCard date={'Hoy 12 de Marzo'}>
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
            <ExpenseCard name='hola' date={'123'} quantity={123}  />
          </CollapsableCard>
        </Scroller>
        <Menu home/>
      </View>
    </>
  )
}
