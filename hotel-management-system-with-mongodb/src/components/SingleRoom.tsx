import React,{ useEffect } from 'react'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers'
import { useParams } from 'react-router';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../store/actions';
import { IAllReservations, IReservation, IRoom } from '../interfaces/interfaces';


export default function SingleRoom() {
    const [selectedFromDate, setSelectedFromDate] = React.useState<Date | null>(
        new Date(),
      );
      const [selectedToDate, setSelectedToDate] = React.useState<Date | null>(selectedFromDate || new Date());
      const [isOverlapping,setIsOverlapping] = React.useState<boolean>(false)
      const state = useSelector((state:IAllReservations)=>state)
      console.log("NurState",state)
      
      const [fullName,setFullName] = React.useState<string>("")
      const [note,setNote] = React.useState<string>("")
      const {id} = useParams<{id:string}>()
      const dispatch = useDispatch()

    //   useEffect(() => {
    //    console.log(setCurrentReservations(state.reservations.filter(item=>{if(item.id.toString() === id) return item.reservations})))
    //    console.log(currentReservations)
    //   }, [])

      useEffect(() => {
        const currentReservations = state.reservations.filter(item=>{if(item.id.toString() === id) return item.reservations})
        if(currentReservations.length > 0 && selectedToDate !== null) {
            currentReservations[0].reservations.forEach(item=> {
                if((item.from <= selectedToDate!.toISOString().substring(0, 10)) && (selectedFromDate!.toISOString().substring(0, 10) <= item.to)) {
                    setIsOverlapping(true)
              } else {
                setIsOverlapping(false)
              }
            })
        }  
      }, [selectedFromDate,selectedToDate])
      
      const handleDateFromChange = (date: Date | null) => {
        setSelectedFromDate(date);
      };

      const handleDateToChange = (date: Date | null) => {
        setSelectedToDate(date);
      };

      const handleSubmitData = () => {
          dispatch(addReservation(
              {id:Math.random(),
                roomId:parseInt(id),
                reservedBy:fullName,
                from:selectedFromDate!.toISOString().substring(0, 10),
                to:selectedToDate!.toISOString().substring(0, 10),
                notes:note
            }
            ))
        }

    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{width:"50%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
        <h3>Room {id} reservation</h3>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="from"
            format="MM/dd/yyyy"
            value={selectedFromDate}
            onChange={handleDateFromChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="To"
            format="MM/dd/yyyy"
            value={selectedToDate}
            onChange={handleDateToChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            minDate={selectedFromDate || new Date()}
          />
        </Grid>
        <Grid style={{marginTop:20}} container justify="space-around">
        <TextField value={fullName} onChange={e=>setFullName(e.target.value)} id="name" type="text" placeholder="Name Surname"/>
        </Grid>
        <Grid container justify="space-around">
        <TextField value={note} onChange={e=>setNote(e.target.value)} id="note" type="text" placeholder="Note"/>
        </Grid>
        <Grid style={{marginTop:20}}>
            {isOverlapping ? <h4><b>Sorry this date ranges is overlapping with other reservation!</b></h4> : null}
             <Button disabled={isOverlapping} variant="contained" color="primary" onClick={handleSubmitData}>
               Submit
             </Button>
      </Grid>   
      </MuiPickersUtilsProvider>
      </div>
      </div>
    )
}
