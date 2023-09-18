"use client";
import Grid from '@mui/material/Grid/Grid'
import React, { createContext } from 'react';
import Image from 'next/image'
import imgHands from '../../assets/img_hands.png'
import '../../styles/tailwind.css';
import { TextField, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

const JoinUs = () => {
    const { register, handleSubmit } = useForm<any>();
    const onSubmit: SubmitHandler<any> = async data => {
        console.log(data);
    };
    return (
        <Grid container>
            <Grid item xs={8} minHeight='80vh' display='flex' alignItems='center' justifyContent='center'>
                <div className="rounded-full shadow-custom p-4 bg-green-600" style={{ width: '472px', height: '433px' }}>
                    <div className="relative" style={{ width: '450px', height: '300px' }}>
                        <Image
                            src={imgHands}
                            alt="Logo do Instituto ISM"
                            className='ml-12'
                        />
                    </div>
                </div>
            </Grid>
            <Grid item xs={4} display='flex' alignItems='center' container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid item>
                        <Typography fontSize={32} fontWeight='bold' color='#2369F6' justifyContent='center' display='flex'>
                            Junte-se a Nós
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography fontSize={35} fontWeight='bold' color='#0038AA'>
                            Ajude a ampliar o Instituto
                        </Typography>
                    </Grid>
                    <Grid item paddingTop={5}>
                        <Typography fontSize={17} >
                            Nome
                        </Typography>
                        <TextField fullWidth required {...register("name")} />
                    </Grid>
                    <Grid item paddingTop={3}>
                        <Typography fontSize={17} >
                            Email
                        </Typography>
                        <TextField fullWidth required {...register("email")} />
                    </Grid>
                    <Grid item paddingTop={3}>
                        <Typography fontSize={17} >
                            Diga em poucas palavras, como você poderia ajudar <br />
                            o <b>Instituto Ser Melhor</b>
                        </Typography>
                        <TextField fullWidth multiline rows={5} required {...register("description")} />
                    </Grid>
                    <Grid item xs={12} paddingTop={3}>
                        <button className='bg-green-600 w-full text-white rounded-lg p-4' type='submit'>
                            Enviar
                        </button>
                    </Grid>


                </form>
            </Grid>
        </Grid>
    )
}

export default JoinUs