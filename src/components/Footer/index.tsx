import { Grid, Typography } from '@mui/material';
import Image from 'next/image'
import facebook from '../../assets/socialIcons/facebook.svg';
import instagram from '../../assets/socialIcons/instagram.svg';
import linkedin from '../../assets/socialIcons/linkedin.svg';

const Footer = () => {
    return (
        <Grid container height={200} bgcolor='#172554' display='flex' alignItems='center' justifyContent='center' flexDirection='column' spacing={3}>
            <Grid item xs={6} display='flex' justifyContent='center' alignItems='self-end'>
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
            <Grid item xs={6} display='flex' justifyContent='center'>
                <Typography color='#ffff'>
                    © 2023 Instituto Ser Melhor
                </Typography>
            </Grid>

        </Grid>
    )
}

export default Footer