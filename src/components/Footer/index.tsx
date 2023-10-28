"use client";
import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Icon from '@/components/Icon/Icon';

import ism_logo from '../../../public/ism-logo.png'

const Footer = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 900);
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
        <Grid container bgcolor='#172554' className='flex flex-col lg:flex-row justify-around' paddingX={isSmallScreen ? "3rem" : "4.375rem"} paddingY="4.375rem" gap={isSmallScreen ? 12 : 0}>

            <Grid item md={4} sm={5} display='flex' flexDirection="column" alignItems={isSmallScreen ? "" : "center"}>
                <Grid item display="flex" flexDirection="column" gap={4}>
                    <Grid item>
                        <Typography color='#ffff' fontWeight="bold" variant="h6">
                            Conheça mais o ISM
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography color='#ffff'>
                            <Link href="mailto:institutosermelhor@gmail.com" className="text-white underline"> institutosermelhor@gmail.com</Link>
                        </Typography>
                        <Typography color='#ffff'>
                            (11) 4303-3948
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography color='#ffff'>
                            Segunda a Sexta, das 8h às 17h
                        </Typography>
                        <Typography color='#ffff'>
                            CNPJ: 09.040.440/0001-47
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography color='#ffff'>
                            Razão Social: Instituto Ser Melhor
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item md={4} sm={5} display='flex' flexDirection="column" alignItems={isSmallScreen ? "" : "center"}>
                <Grid item display="flex" flexDirection="column" gap={4}>
                    <Typography color='#ffff' fontWeight="bold" variant="h6">
                        Mapa do Site
                    </Typography>
                    <Grid item display="flex" className='leading-6' flexDirection="column">
                        <Link href="/" className="text-white"> Home</Link>
                        <Link href="/JoinUs" className="text-white"> Junte-se a nós</Link>
                        <Link href="/About" className="text-white"> Sobre nós</Link>
                        <Link href="/News" className="text-white"> Notícias</Link>
                        <Link href="/Contact" className="text-white"> Contato</Link>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item md={4} sm={5} display='flex' flexDirection="column" alignItems={isSmallScreen ? "" : "center"}>
                <Grid item display="flex" flexDirection="column" gap={4}>
                    <Typography color='#ffff' fontWeight="bold" variant="h6">
                        Redes Sociais
                    </Typography>
                    <ul className='flex flex-row space-x-4'>
                        <li>
                            <a href='https://www.facebook.com/institutosermelhor' target='_blank'>
                                <Icon name="facebook"/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/instsermelhor/' target='_blank'>
                                <Icon name="instagram"/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/company/institutosermelhor' target='_blank'>
                                <Icon name="linkedin"/>
                            </a>
                        </li>
                        <li>
                            <a href='https://wa.me/11981063924' target='_blank'>
                                <Icon name="whatsapp"/>
                            </a>
                        </li>
                    </ul>
                </Grid>
            </Grid>

            <Grid container display={"flex"} justifyContent={"center"}>
                <Image className='mt-9' src={ism_logo} width={70} alt='Logo do Instituto ISM' />
            </Grid>            
        </Grid>
    )
}

export default Footer
