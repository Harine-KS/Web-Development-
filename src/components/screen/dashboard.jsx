import { AccountBalance, AccountBox, AccountTree, ArrowDownward, ArrowDropDown, ArrowUpward, Assignment, AssignmentOutlined, CurrencyExchange, Menu, MonetizationOn, Padding, Search, ShoppingBag, ShoppingBagOutlined, Upcoming } from '@mui/icons-material'
import { Card, Container, Divider, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Dashboard({ mobileOpen }) {

    const cardComponentValues = [{
        icon: <CurrencyExchange sx={{ fontSize: { lg: '50px', md: '50px', sm: '40px', xs: '25px' }, fill: '#306338' }} />,
        name: 'Earning',
        amount: '$198k',
        value: '37.8%',
        arrow: <ArrowUpward sx={{ fontSize: '15px', fill: 'green', mt: 0.2, mr: 0.1 }} />,
        color: '#c7f0bd'
    }, {
        icon: <AssignmentOutlined sx={{ fontSize: { lg: '50px', md: '50px', sm: '40px', xs: '25px' }, fill: '#ae6ae6' }} />,
        name: 'Orders',
        amount: '$2.4k',
        value: '37.8%',
        arrow: <ArrowDownward sx={{ fontSize: '15px', fill: 'red', mt: 0.2, mr: 0.1 }} />,
        color: '#e6d8e6'
    }, {
        icon: <AccountTree sx={{ fontSize: { lg: '50px', md: '50px', sm: '40px', xs: '25px' }, fill: '#6c88f0' }} />,
        name: 'Balance',
        amount: '$2.4k',
        arrow: <ArrowDownward sx={{ fontSize: '15px', fill: 'red', mt: 0.2, mr: 0.1 }} />,
        value: '37.8%',
        color: '#d5f2ea'
    }, {
        icon: <ShoppingBagOutlined sx={{ fontSize: { lg: '50px', md: '50px', sm: '40px', xs: '25px' }, fill: '#f52cc6' }} />,
        name: 'Total Sales',
        amount: '$89k',
        value: '37.8%',
        arrow: <ArrowUpward sx={{ fontSize: '15px', fill: 'green', mt: 0.2, mr: 0.1 }} />,
        color: '#fac3ed'
    }]
    function CardComponent({ details }) {
        return (
            <>
                {/* <Card> */}
                <Grid container lg={12} md={12} sm={12} xs={12} display='flex' px={{ lg: 1.5, md: 2.4, sm: 1, xs: 0.9 }} py={{ lg: 2.4, md: 1.8, sm: 1.5, xs: 1.5 }} columnGap={{ sm: 2, xs: 0.5 }} boxShadow={1} borderRadius={3} bgcolor='white'>
                    <Grid item alignSelf='center' p={{ lg: 1.8, md: 1.8, sm: 1.2, xs: 0.8 }} borderRadius={12} bgcolor={details.color}>
                        <IconButton >
                            {details.icon}
                        </IconButton>
                    </Grid>
                    <Grid item alignSelf='center' >
                        <Typography variant='caption' color='#9fa39b'>{details.name}</Typography>
                        <Typography fontSize={{ sm: '18px', xs: '15px' }} fontWeight='bold' sx={{ lineHeight: 1.1 }}>{details.amount}</Typography>
                        <Grid item display='flex'   >
                            {details.arrow}
                            <Typography alignSelf='center' variant='caption' fontWeight="bold" color={details.name == 'Orders' || details.name == 'Balance' ? 'red' : 'green'}>{details.value}
                                <span style={{ color: 'black', fontWeight: 'normal' }} > this month </span>
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>

                {/* </Card> */}
            </>
        )
    }
    const BarChartComponent = () => {
        const CustomBar = (props) => {
            const { x, y, width, height, value } = props;
            // setColor(value);
            const borderRadius = 10;
            const barColor = value > 94 ? '#2d31ad' : '#ebf0e9';

            return (
                <g>
                    <rect x={x} y={y} width={width} height={height} rx={borderRadius} ry={borderRadius} fill={barColor} />
                </g>
            );
        };

        const CustomXAxisTick = (props) => {
            console.log(props);
            const { x, y, payload, data } = props;
            console.log('payload', payload.value, x)
            // let boldvalue = data.filter((item) => item.value > 94);
            // console.log(boldvalue, 'boldvalue')
            const isBold = payload.value == 'Aug';

            return (
                <g transform={`translate(${x},${y})`}>
                    <text
                        x={0}
                        y={0}
                        dy={16}
                        textAnchor="end"
                        // fill={data.map((x)=>x.value>94) ? 'black' : 'gray'}
                        fontWeight={isBold ? 'bold' : 'normal'}
                    >
                        {payload.value}
                    </text>
                </g>
            );
        };

        const data = [
            { name: 'Jan', value: 59 },
            { name: 'Feb', value: 45 },
            { name: 'Mar', value: 90 },
            { name: 'Apr', value: 60 },
            { name: 'May', value: 75 },
            { name: 'Jun', value: 30 },
            { name: 'Jul', value: 85 },
            { name: 'Aug', value: 95 },
            { name: 'Sep', value: 90 },
            { name: 'Oct', value: 78 },
            { name: 'Nov', value: 88 },
            { name: 'Dec', value: 80 },
        ];
        return (
            <Grid container p={2} >
                <Grid item display='flex' justifyContent='space-between' lg={12} md={12} sm={12} xs={12}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant='h6' fontWeight={'bold'}>Overview</Typography>
                    </Grid>

                    <Grid item lg={2.3} md={3.8} sm={4} xs={5.3}>
                        <TextField size='small' placeholder='Quartely'
                            sx={{ '& input': { padding: 0.4, ml: 1, fontSize: '15px' }, bgcolor: '#ebf0e9' }}
                            InputProps={{ endAdornment: <ArrowDropDown fontSize='small' />, }}
                        />
                    </Grid>
                </Grid>
                <Typography color='#c6c9c3' lineHeight={0.9} variant='caption'>Monthly Earning</Typography>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={data} >
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <Bar shape={<CustomBar />} dataKey="value" style={{ borderRadius: 6 }} barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
            </Grid>
        );
    };
    ChartJS.register(ArcElement);
    const DoughnutChart = () => {
        const data = {
            labels: ['Category A', 'Category B', 'Category C'],
            datasets: [
                {
                    data: [65, 35],
                    backgroundColor: ['#a224f0', '#ebf0e9',],
                    hoverBackgroundColor: ['#a224f0', '#ebf0e9',],
                },

            ],
        };

        const options = {
            cutout: '70%', // Adjust the cutout size to create a doughnut effect
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                },
            },
            height: 50,
        };

        return (
            <>

                <Grid container sx={{ justifyContent: 'center', height: '300px' }}>
                    <Grid item lg={12} md={12} sm={12} xs={12} mt={3.1} ml={2.5} >
                        <Typography textAlign='left' lineHeight={0.7} variant='h6' fontWeight='bold'>Customers</Typography>
                        <Typography variant='caption' color={'#9fa39b'}>Customers that buy products</Typography>
                    </Grid>
                    <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ position: 'relative', width: '200px' }}>
                            <Doughnut data={data} options={options} />
                            <div style={{ position: 'absolute', top: '50%', left: '55%', transform: 'translate(-50%, -50%)' }}>
                                <Typography variant="h6" lineHeight={1.3} ml={1.3} color="primary" fontWeight='bold'>65%</Typography>
                                <Typography fontSize={'12px'} textAlign='left' mr={3}>Total New</Typography>
                                <Typography lineHeight={0.9} textAlign='left' fontSize={'12px'}>Customers</Typography>
                            </div>
                        </div>
                    </Grid>
                </Grid >
            </>

        );
    };
    return (
        <>
            <Container maxWidth='100%'>
                <Grid container mt={2} rowGap={2.5}>
                    <Grid item display={{ xs: 'flex', sm: 'none' }} xs={12} justifyContent='space-between' >
                        <Grid item display='flex' xs={8}>
                            <IconButton onClick={() => mobileOpen()}>
                                <Menu />
                            </IconButton>
                            <Typography alignSelf='center'>Hello Shahrukh 👋,</Typography>
                        </Grid>
                        <Grid item xs={4} alignSelf='center'>
                            <TextField size='small' placeholder='Search'
                                sx={{ '& input': { padding: 0.3, fontSize: '15px', }, bgcolor: 'white' }}
                                InputProps={{ startAdornment: <Search fontSize='small' />, }} />
                        </Grid>
                    </Grid>

                    <Grid container display={{ xs: 'none', sm: 'flex' }} justifyContent='space-between' lg={12} md={12} sm={12}>
                        <Typography fontWeight='bold' variant='body1'> Hello Shahrukh 👋, </Typography>
                        <TextField size='small' placeholder='Search'
                            sx={{ '& input': { padding: 0.4, fontSize: '15px', }, bgcolor: 'white' }}
                            InputProps={{ startAdornment: <Search fontSize='small' />, }} />
                    </Grid>

                    <Grid container display={'flex'} justifyContent={{ lg: 'space-between', md: 'space-around', sm: 'space-between', xs: 'space-around' }} rowGap={2} lg={12} md={12} sm={12} >
                        {cardComponentValues.map((item) => {
                            return (
                                <Grid item display='flex'>
                                    <CardComponent details={item} />
                                </Grid>
                            )
                        })}
                    </Grid>

                    <Grid container lg={12} md={12} sm={12} columnGap={{ lg: 3, md: 2, sm: 3, xs: 3 }} rowGap={2} display={'flex'} justifyContent={{ lg: 'space-between', md: 'center' }}>
                        <Grid item lg={7.8} md={7.8} sm={12} xs={12} boxShadow={2} bgcolor='white' borderRadius={4}>
                            <BarChartComponent />
                        </Grid>
                        <Grid item lg={3.8} md={3.8} sm={12} xs={12} boxShadow={2} bgcolor='white' borderRadius={4} justifyContent='center' alignSelf='center' height={'320px'}>
                            <DoughnutChart />
                        </Grid>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Card sx={{ borderRadius: '18px 18px 0 0', boxShadow: '0 1px 8px rgba(0, 0, 0, 0.1)' }}>
                            <Grid container rowGap={2} p={{ md: 3, xs: 1.5 }} lg={12} md={12} sm={12} xs={12}>
                                <Grid container display='flex' justifyContent='space-between'>
                                    <Grid item lg={9} md={6.7} sm={6.1} xs={5}>
                                        <Typography fontWeight='bold'>Product Sell</Typography>
                                    </Grid>
                                    <Grid item display='flex' columnGap={{ lg: 3, md: 3, sm: 1, xs: 1 }} lg={3} md={5.3} sm={5.9} xs={6.8}>
                                        <TextField size='small' placeholder='Search'
                                            sx={{ '& input': { padding: 0.3, fontSize: '15px', }, bgcolor: '#ebf0e9' }}
                                            InputProps={{ startAdornment: <Search fontSize='small' />, }} />
                                        <TextField
                                            size='small'
                                            placeholder='Last 30 days'
                                            sx={{
                                                '& input': { padding: 0.3, ml: 1, fontSize: '15px' },
                                                bgcolor: '#ebf0e9'
                                            }}
                                            InputProps={{
                                                endAdornment: <ArrowDropDown fontSize='small' />,
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container display='flex' justifyContent='space-between' >
                                    <Grid item lg={8} md={7} sm={6} xs={5}>
                                        <Typography color='#9fa39b'>Product Name</Typography>
                                    </Grid>
                                    <Grid item display='flex' justifyContent={'space-between'} lg={3} md={4} sm={5.3} xs={6.5}>
                                        <Typography color='#9fa39b'>Stock</Typography>
                                        <Typography color='#9fa39b' ml={{ md: 2 }}>Price</Typography>
                                        <Typography color='#9fa39b'>Total Sales</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Divider />
                            <Grid container>
                                <Grid container display='flex' justifyContent='space-between' px={3} py={2}>
                                    <Grid item display={{ sm: 'flex' }} lg={8} md={6} sm={5.8} xs={4} columnGap={2}>
                                        <img src='https://ik.imagekit.io/ikmedia/backlit.jpg' alt="alt" width={'70px'} style={{ borderRadius: '10px' }} />
                                        <Grid item alignSelf='center'>
                                            <Typography fontWeight='bold'>Abstract 3D</Typography>
                                            <Typography color='#9fa39b' fontSize='13px' variant='body2' lineHeight={1.1} flexWrap={{ xs: 'wrap' }}>Lorem ipsum dolor sir amet, consectetur adipiscing elit.</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={3.5} md={5} sm={5.8} xs={7.5} display='flex' justifyContent='space-around' alignSelf={{ sm: 'end', xs: 'center' }}>
                                        <Typography >32 in stock</Typography>
                                        <Typography fontWeight='bold'>$ 45.99</Typography>
                                        <Typography>20</Typography>
                                    </Grid>
                                </Grid>

                                <Grid container display='flex' justifyContent='space-between' px={3} py={2}>
                                    <Grid item display={{ sm: 'flex' }} lg={8} md={6} sm={5.8} xs={4} columnGap={2}>
                                        <img src='https://ik.imagekit.io/ikmedia/backlit.jpg' alt="alt" width={'70px'} style={{ borderRadius: '10px' }} />
                                        <Grid item alignSelf='center'>
                                            <Typography fontWeight='bold'>Abstract 3D</Typography>
                                            <Typography color='#9fa39b' fontSize='13px' variant='body2' lineHeight={1.1} flexWrap={{ xs: 'wrap' }}>Lorem ipsum dolor sir amet, consectetur adipiscing elit.</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={3.5} md={5} sm={5.8} xs={7.5} display='flex' justifyContent='space-around' alignSelf={{ sm: 'end', xs: 'center' }}>
                                        <Typography >32 in stock</Typography>
                                        <Typography fontWeight='bold'>$ 45.99</Typography>
                                        <Typography>20</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>

            </Container >
        </>
    )
}
