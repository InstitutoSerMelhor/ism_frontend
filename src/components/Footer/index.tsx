import { Grid, Typography } from '@mui/material';
import Image from 'next/image'
import facebook from '../../assets/socialIcons/facebook.svg';
import instagram from '../../assets/socialIcons/instagram.svg';
import linkedin from '../../assets/socialIcons/linkedin.svg';
import Link from 'next/link';

const Footer = () => {
    return (
        <Grid container bgcolor='#172554' display='flex' justifyContent="center" padding="70px">

            <Grid item xs={4} display='flex' flexDirection="column" gap={4}>
                <Grid item xs={12}>
                    <Typography color='#ffff' fontWeight="bold" variant="h6">
                        Conheça mais o ISM
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography color='#ffff'>
                        <Link href="mailto:institutosermelhor@gmail.com" className="text-white underline"> institutosermelhor@gmail.com</Link>
                    </Typography>
                    <Typography color='#ffff'>
                        (11) XXXX-XXXX
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography color='#ffff'>
                        Segunda a Sexta, das 8h às 17h
                    </Typography>
                    <Typography color='#ffff'>
                        CNPJ: 09.040.440/0001-47
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography color='#ffff'>
                        Razão Social: Instituto Ser Melhor
                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={4} display='flex' flexDirection="column" gap={4}>
                <Typography color='#ffff' fontWeight="bold" variant="h6">
                    Mapa do Site
                </Typography>
                <Grid item xs={12} display="flex" flexDirection="column">
                    <Link href="/" className="text-white"> Home</Link>
                    <Link href="/JoinUs" className="text-white"> Junte-se a nós</Link>
                    <Link href="/About" className="text-white"> Sobre nós</Link>
                    <Link href="/News" className="text-white"> Notícias</Link>
                    <Link href="/Contact" className="text-white"> Contato</Link>
                </Grid>
            </Grid>

            <Grid item xs={4} display='flex' flexDirection="column" gap={4}>
                <Typography color='#ffff' fontWeight="bold" variant="h6">
                    Redes Sociais
                </Typography>
                <ul className='flex flex-row space-x-4'>
                    <li>
                        <a href='https://www.facebook.com/institutosermelhor' target='_blank'>
                            <Image
                                src={facebook}
                                alt="Facebook"
                                width={40}
                            />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/instsermelhor/' target='_blank'>
                            <Image
                                src={instagram}
                                alt="Instagram"
                                width={40}
                            />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/company/institutosermelhor' target='_blank'>
                            <Image
                                src={linkedin}
                                alt="LinkedIn"
                                width={40}
                            />
                        </a>
                    </li>
                </ul>
            </Grid>

        </Grid>
    )
}

export default Footer
