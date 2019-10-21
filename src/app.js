import React, { useState, useEffect } from 'react';
import Form from './components/form';
import Content from './components/content';
import './interface/css/general.scss';
import { fetch } from './funcs/fetch';

function App({ sample }) {

   // LOCAL STATE
   const [ state, dispatch ] = useState({})

   // IF SAMPLE DATA WAS GIVEN, USE IT
   useEffect(() => {
      if (sample !== undefined) {
         dispatch(sample)
      }
   }, [])

   // FORM RESPONSE
   const response = (value) => {
      fetch(value).then(result => {
         
         // TPE = TAMPERE
         // KR = KARJAA
         // EPO = ESPOO

         // TRYING TO WAKE UP THE AWS BOT

         // IF NO DATA WAS FOUND
         if (result.data.errorMessage !== undefined) {
            dispatch({
               status: 204,
               reason: result.data.errorMessage
            })

         // OTHERWISE, PROCEED NORMALLY
         } else {
            dispatch({
               data: result.data,
               status: result.status
            })
         }

      // ON ERROR
      }).catch(error => {
         dispatch({
            status: 404
         })
      })
   }

   return (
      <div id={ 'wrapper' }>
         <div>
            <div id={ 'header' }>Trains from Uganda</div>
            <Form
               placeholder={ 'Where would you like to go?' }
               response={ response }
            />
            <Content query={ state } />
         </div>
      </div>
   )
}

export default App;