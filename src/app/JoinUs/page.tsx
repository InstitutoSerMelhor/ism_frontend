"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { TextField, Typography, Grid } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import '../../styles/tailwind.css';
import imgHands from '../../assets/img_hands.svg'
import NavBar from '@/components/NavBar';

const JoinUs = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const { register, handleSubmit } = useForm<any>();
    const onSubmit: SubmitHandler<any> = async data => {
        console.log(data);
    };
    const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 1200);
    };

    //Checando largura   
    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <section>
            <NavBar beTransparent={false} />
        <Grid container padding={10}>
            <Grid item xs={12} md={12} lg={6} xl={7} maxHeight={isSmallScreen ? '300px' : '700px'} display='flex' alignItems='center' justifyContent='center'>
                <div className="relative" style={{ width: `${isSmallScreen ? '20vw' : '33vw'}` }}>
                    <Image
                        src={imgHands}
                        alt="Mãos"
                        className={isSmallScreen ? 'ml-5' : 'ml-12'}
                    />
                </div>
            </Grid>
            <Grid item md={12} lg={6} xl={5} display='flex' alignItems='center' justifyContent='center' container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid item xs={12}>
                        <Typography fontSize={isSmallScreen ? 28 : 32} fontWeight='bold' color='#2369F6' justifyContent='center' display='flex'>
                            Junte-se a Nós
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography fontSize={isSmallScreen ? 25 : 35} fontWeight='bold' color='#0038AA' justifyContent='center' display='flex'>
                            Ajude a ampliar o Instituto
                        </Typography>
                    </Grid>
                    <Grid item paddingTop={5} xs={12}>
                        <Typography fontSize={17} >
                            Nome
                        </Typography>
                        <TextField fullWidth required {...register("name")} />
                    </Grid>
                    <Grid item paddingTop={3} xs={12}>
                        <Typography fontSize={17} >
                            Email
                        </Typography>
                        <TextField fullWidth required {...register("email")} />
                    </Grid>
                    <Grid item paddingTop={3} xs={12}>
                        <Typography fontSize={17} >
                            Diga em poucas palavras, como você poderia ajudar <br />
                            o <b>Instituto Ser Melhor</b>
                        </Typography>
                        <TextField fullWidth multiline rows={5} required {...register("description")} />
                    </Grid>
                    <Grid item xs={12} paddingTop={3}>
                        <button className='bg-green-600 hover:bg-green-700 w-full text-white rounded-lg p-4 transition duration-900 ease-in-out' type='submit'>
                            Enviar
                        </button>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    </section>
    )
}

export default JoinUs