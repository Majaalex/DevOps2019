import React, { useState, useEffect } from 'react';
import Form from './components/form';
import Content from './components/content';
import './interface/css/general.scss';
import trainService from './services/trains'

function App() {

   // LOCAL STATE
   const [ state, dispatch ] = useState({})

   // FORM RESPONSE
   const response = (value) => {
      trainService.getData(value)
         .then(result => {
            console.log(result)
         
         // TPE = TAMPERE
         // KR = KARJAA
         // EPO = ESPOO

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
            status: 404,
            reason: error
         })
      })
   }

   useEffect(() => {
    trainService.getData("TPE")
    .then(res => {
      dispatch({
        status: res.status,
        data: res.data
      })
    })
   }, [dispatch])

   return (
      <div id={ 'wrapper' }>
         <div>
            <div id={ 'header' }>Trains from Helsinki</div>
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