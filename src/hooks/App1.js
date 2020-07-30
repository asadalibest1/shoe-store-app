import React from'react';
import PageOne from './pages/page1';
import PageTwo from'./pages/page2';
import PageThree from'./pages/page3';

import {TransProvider} from './Store';

export default function App1(){
   return(
   <>
         <TransProvider>
                <PageOne />
                <PageTwo />
                <PageThree />
        </TransProvider>
   </>
   )
}