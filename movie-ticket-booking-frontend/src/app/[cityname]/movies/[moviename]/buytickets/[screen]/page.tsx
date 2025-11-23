"use client"
import './SelectSeat.css';
import { useState } from "react";
import React from 'react'

const page = () => {
    const [userInfo, setUserInfo] = React.useState({
  name: "",
  email: "",
  phone: "",
 });

    const movie = {
        moviename: 'Jawan',
        language: 'Hindi',
        type: 'Action/Thriller',
        screen: '4Dx',
        date: new Date(),
        screens:[
            {
                name: 'Screen 1',
                location: 'PVR Cinemas, Forum Mall, Koramangala'
            },
            {
                name: 'Screen 2',
                location: 'PVR Cinemas, Forum Mall, Koramangala'
            },
            {
                name: 'Screen 3',
                location: 'PVR Cinemas, Forum Mall, Koramangala'
            }
        ]
    }

    const screen = {
        name: 'Screen 1',
        location: 'PVR Cinemas, Forum Mall, Koramangala',
        timeslots: [
            // 10:00 AM
            {
                time: '10:00 AM',
                seats:[
                    // Platinum
                    {
                        type: 'platinum',
                        rows:[
                            // Row 1
                            {
                                rowname: 'H',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '1' },
                                            { type:'seat', status:'available', seat_id: '2' },
                                            { type:'seat', status:'available', seat_id: '3' },
                                            { type:'seat', status:'unavailable', seat_id: '4' },
                                            { type:'seat', status:'available', seat_id: '5' },
                                            { type:'seat', status:'available', seat_id: '6' },
                                            { type:'seat', status:'available', seat_id: '7' },
                                            { type:'seat', status:'unavailable', seat_id: '8' },
                                            { type:'seat', status:'available', seat_id: '9' },
                                            { type:'seat', status:'available', seat_id: '10' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '11' },
                                            { type:'seat', status:'available', seat_id: '12' },
                                            { type:'seat', status:'unavailable', seat_id: '13' },
                                            { type:'seat', status:'available', seat_id: '14' },
                                            { type:'seat', status:'available', seat_id: '15' },
                                            { type:'seat', status:'available', seat_id: '16' },
                                            { type:'seat', status:'available', seat_id: '17' },
                                            { type:'seat', status:'unavailable', seat_id: '18' },
                                            { type:'seat', status:'available', seat_id: '19' },
                                            { type:'seat', status:'available', seat_id: '20' }
                                        ]
                                    }
                                ]
                            },
                            // Row 2
                            {
                                rowname: 'G',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'unavailable', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'unavailable', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'unavailable', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'unavailable', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            },
                            // Row 3
                            {
                                rowname: 'F',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '41' },
                                            { type:'seat', status:'available', seat_id: '42' },
                                            { type:'seat', status:'available', seat_id: '43' },
                                            { type:'seat', status:'available', seat_id: '44' },
                                            { type:'seat', status:'available', seat_id: '45' },
                                            { type:'seat', status:'available', seat_id: '46' },
                                            { type:'seat', status:'unavailable', seat_id: '47' },
                                            { type:'seat', status:'available', seat_id: '48' },
                                            { type:'seat', status:'available', seat_id: '49' },
                                            { type:'seat', status:'unavailable', seat_id: '50' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'unavailable', seat_id: '51' },
                                            { type:'seat', status:'available', seat_id: '52' },
                                            { type:'seat', status:'available', seat_id: '53' },
                                            { type:'seat', status:'available', seat_id: '54' },
                                            { type:'seat', status:'available', seat_id: '55' },
                                            { type:'seat', status:'available', seat_id: '56' },
                                            { type:'seat', status:'unavailable', seat_id: '57' },
                                            { type:'seat', status:'available', seat_id: '58' },
                                            { type:'seat', status:'available', seat_id: '59' },
                                            { type:'seat', status:'available', seat_id: '60' }
                                        ]
                                    }
                                ]
                            }
                        ],
                        price: 500
                    },
                    // Gold
                    {
                        type: 'gold',
                        rows:[
                            {
                                rowname: 'I',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'unavailable', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'unavailable', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'unavailable', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'unavailable', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'J',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'unavailable', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'unavailable', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'unavailable', seat_id: '36' },
                                            { type:'seat', status:'unavailable', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'K',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'unavailable', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'unavailable', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'unavailable', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'unavailable', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            }

                        ],
                        price:300
                    },
                    // Silver
                    {
                        type: 'silver',
                        rows:[
                            {
                                rowname: 'A',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '41' },
                                            { type:'seat', status:'available', seat_id: '42' },
                                            { type:'seat', status:'available', seat_id: '43' },
                                            { type:'seat', status:'available', seat_id: '44' },
                                            { type:'seat', status:'available', seat_id: '45' },
                                            { type:'seat', status:'available', seat_id: '46' },
                                            { type:'seat', status:'available', seat_id: '47' },
                                            { type:'seat', status:'available', seat_id: '48' },
                                            { type:'seat', status:'available', seat_id: '49' },
                                            { type:'seat', status:'available', seat_id: '50' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '51' },
                                            { type:'seat', status:'available', seat_id: '52' },
                                            { type:'seat', status:'available', seat_id: '53' },
                                            { type:'seat', status:'available', seat_id: '54' },
                                            { type:'seat', status:'available', seat_id: '55' },
                                            { type:'seat', status:'available', seat_id: '56' },
                                            { type:'seat', status:'available', seat_id: '57' },
                                            { type:'seat', status:'available', seat_id: '58' },
                                            { type:'seat', status:'available', seat_id: '59' },
                                            { type:'seat', status:'available', seat_id: '60' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'B',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'C',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            }
                        ],
                        price: 200
                    }
                ]
            },
            // 1:00 PM
            {
                time: '1:00 PM',
                seats:[
                    // Platinum
                    {
                        type: 'platinum',
                        rows:[
                            // Row 1
                            {
                                rowname: 'D',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '1' },
                                            { type:'seat', status:'available', seat_id: '2' },
                                            { type:'seat', status:'available', seat_id: '3' },
                                            { type:'seat', status:'available', seat_id: '4' },
                                            { type:'seat', status:'available', seat_id: '5' },
                                            { type:'seat', status:'available', seat_id: '6' },
                                            { type:'seat', status:'available', seat_id: '7' },
                                            { type:'seat', status:'available', seat_id: '8' },
                                            { type:'seat', status:'available', seat_id: '9' },
                                            { type:'seat', status:'available', seat_id: '10' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '11' },
                                            { type:'seat', status:'available', seat_id: '12' },
                                            { type:'seat', status:'available', seat_id: '13' },
                                            { type:'seat', status:'available', seat_id: '14' },
                                            { type:'seat', status:'available', seat_id: '15' },
                                            { type:'seat', status:'available', seat_id: '16' },
                                            { type:'seat', status:'available', seat_id: '17' },
                                            { type:'seat', status:'available', seat_id: '18' },
                                            { type:'seat', status:'available', seat_id: '19' },
                                            { type:'seat', status:'available', seat_id: '20' }
                                        ]
                                    }
                                ]
                            },
                            // Row 2
                            {
                                rowname: 'E',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            },
                            // Row 3
                            {
                                rowname: 'F',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '41' },
                                            { type:'seat', status:'available', seat_id: '42' },
                                            { type:'seat', status:'available', seat_id: '43' },
                                            { type:'seat', status:'available', seat_id: '44' },
                                            { type:'seat', status:'available', seat_id: '45' },
                                            { type:'seat', status:'available', seat_id: '46' },
                                            { type:'seat', status:'available', seat_id: '47' },
                                            { type:'seat', status:'available', seat_id: '48' },
                                            { type:'seat', status:'available', seat_id: '49' },
                                            { type:'seat', status:'available', seat_id: '50' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '51' },
                                            { type:'seat', status:'available', seat_id: '52' },
                                            { type:'seat', status:'available', seat_id: '53' },
                                            { type:'seat', status:'available', seat_id: '54' },
                                            { type:'seat', status:'available', seat_id: '55' },
                                            { type:'seat', status:'available', seat_id: '56' },
                                            { type:'seat', status:'available', seat_id: '57' },
                                            { type:'seat', status:'available', seat_id: '58' },
                                            { type:'seat', status:'available', seat_id: '59' },
                                            { type:'seat', status:'available', seat_id: '60' }
                                        ]
                                    }
                                ]
                            }
                        ],
                        price: 500
                    },
                    // Gold
                    {
                        type: 'gold',
                        rows:[
                            {
                                rowname: 'K',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'L',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'M',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            }
                        ],
                        price:300
                    },
                    // Silver
                    {
                        type: 'silver',
                        rows:[
                            {
                                rowname: 'N',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '41' },
                                            { type:'seat', status:'available', seat_id: '42' },
                                            { type:'seat', status:'available', seat_id: '43' },
                                            { type:'seat', status:'available', seat_id: '44' },
                                            { type:'seat', status:'available', seat_id: '45' },
                                            { type:'seat', status:'available', seat_id: '46' },
                                            { type:'seat', status:'available', seat_id: '47' },
                                            { type:'seat', status:'available', seat_id: '48' },
                                            { type:'seat', status:'available', seat_id: '49' },
                                            { type:'seat', status:'available', seat_id: '50' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '51' },
                                            { type:'seat', status:'available', seat_id: '52' },
                                            { type:'seat', status:'available', seat_id: '53' },
                                            { type:'seat', status:'available', seat_id: '54' },
                                            { type:'seat', status:'available', seat_id: '55' },
                                            { type:'seat', status:'available', seat_id: '56' },
                                            { type:'seat', status:'available', seat_id: '57' },
                                            { type:'seat', status:'available', seat_id: '58' },
                                            { type:'seat', status:'available', seat_id: '59' },
                                            { type:'seat', status:'available', seat_id: '60' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'O',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'P',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            }
                        ],
                        price: 200
                    }
                ]
            },
            // 4:00 PM
            {
                time: '4:00 PM',
                seats:[
                    // Platinum
                    {
                        type: 'platinum',
                        rows:[
                            {
                                rowname: 'Q',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '1' },
                                            { type:'seat', status:'available', seat_id: '2' },
                                            { type:'seat', status:'available', seat_id: '3' },
                                            { type:'seat', status:'available', seat_id: '4' },
                                            { type:'seat', status:'available', seat_id: '5' },
                                            { type:'seat', status:'available', seat_id: '6' },
                                            { type:'seat', status:'available', seat_id: '7' },
                                            { type:'seat', status:'available', seat_id: '8' },
                                            { type:'seat', status:'available', seat_id: '9' },
                                            { type:'seat', status:'available', seat_id: '10' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '11' },
                                            { type:'seat', status:'available', seat_id: '12' },
                                            { type:'seat', status:'available', seat_id: '13' },
                                            { type:'seat', status:'available', seat_id: '14' },
                                            { type:'seat', status:'available', seat_id: '15' },
                                            { type:'seat', status:'available', seat_id: '16' },
                                            { type:'seat', status:'available', seat_id: '17' },
                                            { type:'seat', status:'available', seat_id: '18' },
                                            { type:'seat', status:'available', seat_id: '19' },
                                            { type:'seat', status:'available', seat_id: '20' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'R',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'S',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            }
                        ],
                        price: 500
                    },
                    // Gold
                    {
                        type: 'gold',
                        rows:[
                            {
                                rowname: 'T',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'U',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'V',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            }

                        ],
                        price:300
                    },
                    // Silver
                    {
                        type: 'silver',
                        rows:[
                            {
                                rowname: 'W',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '41' },
                                            { type:'seat', status:'available', seat_id: '42' },
                                            { type:'seat', status:'available', seat_id: '43' },
                                            { type:'seat', status:'available', seat_id: '44' },
                                            { type:'seat', status:'available', seat_id: '45' },
                                            { type:'seat', status:'available', seat_id: '46' },
                                            { type:'seat', status:'available', seat_id: '47' },
                                            { type:'seat', status:'available', seat_id: '48' },
                                            { type:'seat', status:'available', seat_id: '49' },
                                            { type:'seat', status:'available', seat_id: '50' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '51' },
                                            { type:'seat', status:'available', seat_id: '52' },
                                            { type:'seat', status:'available', seat_id: '53' },
                                            { type:'seat', status:'available', seat_id: '54' },
                                            { type:'seat', status:'available', seat_id: '55' },
                                            { type:'seat', status:'available', seat_id: '56' },
                                            { type:'seat', status:'available', seat_id: '57' },
                                            { type:'seat', status:'available', seat_id: '58' },
                                            { type:'seat', status:'available', seat_id: '59' },
                                            { type:'seat', status:'available', seat_id: '60' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'X',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'Y',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            }
                        ],
                        price:200
                    }
                ]
            },
            // 7:00 PM
            {
                time: '7:00 PM',
                seats:[
                    // Platinum
                    {
                        type: 'platinum',
                        rows:[
                            {
                                rowname: 'Z',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '1' },
                                            { type:'seat', status:'available', seat_id: '2' },
                                            { type:'seat', status:'available', seat_id: '3' },
                                            { type:'seat', status:'available', seat_id: '4' },
                                            { type:'seat', status:'available', seat_id: '5' },
                                            { type:'seat', status:'available', seat_id: '6' },
                                            { type:'seat', status:'available', seat_id: '7' },
                                            { type:'seat', status:'available', seat_id: '8' },
                                            { type:'seat', status:'available', seat_id: '9' },
                                            { type:'seat', status:'available', seat_id: '10' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '11' },
                                            { type:'seat', status:'available', seat_id: '12' },
                                            { type:'seat', status:'available', seat_id: '13' },
                                            { type:'seat', status:'available', seat_id: '14' },
                                            { type:'seat', status:'available', seat_id: '15' },
                                            { type:'seat', status:'available', seat_id: '16' },
                                            { type:'seat', status:'available', seat_id: '17' },
                                            { type:'seat', status:'available', seat_id: '18' },
                                            { type:'seat', status:'available', seat_id: '19' },
                                            { type:'seat', status:'available', seat_id: '20' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'AA',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'AB',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            }
                        ],
                        price: 500
                    },
                    // Gold
                    {
                        type: 'gold',
                        rows:[
                            {
                                rowname: 'AC',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'AD',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'AE',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            }
                        ],
                        price:300
                    },
                    // Silver
                    {
                        type: 'silver',
                        rows:[
                            {
                                rowname: 'AF',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '41' },
                                            { type:'seat', status:'available', seat_id: '42' },
                                            { type:'seat', status:'available', seat_id: '43' },
                                            { type:'seat', status:'available', seat_id: '44' },
                                            { type:'seat', status:'available', seat_id: '45' },
                                            { type:'seat', status:'available', seat_id: '46' },
                                            { type:'seat', status:'available', seat_id: '47' },
                                            { type:'seat', status:'available', seat_id: '48' },
                                            { type:'seat', status:'available', seat_id: '49' },
                                            { type:'seat', status:'available', seat_id: '50' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '51' },
                                            { type:'seat', status:'available', seat_id: '52' },
                                            { type:'seat', status:'available', seat_id: '53' },
                                            { type:'seat', status:'available', seat_id: '54' },
                                            { type:'seat', status:'available', seat_id: '55' },
                                            { type:'seat', status:'available', seat_id: '56' },
                                            { type:'seat', status:'available', seat_id: '57' },
                                            { type:'seat', status:'available', seat_id: '58' },
                                            { type:'seat', status:'available', seat_id: '59' },
                                            { type:'seat', status:'available', seat_id: '60' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'AG',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'AH',
                                cols:[
                                    {
                                        seats:[
                                            { type:'seat', status:'available', seat_id: '21' },
                                            { type:'seat', status:'available', seat_id: '22' },
                                            { type:'seat', status:'available', seat_id: '23' },
                                            { type:'seat', status:'available', seat_id: '24' },
                                            { type:'seat', status:'available', seat_id: '25' },
                                            { type:'seat', status:'available', seat_id: '26' },
                                            { type:'seat', status:'available', seat_id: '27' },
                                            { type:'seat', status:'available', seat_id: '28' },
                                            { type:'seat', status:'available', seat_id: '29' },
                                            { type:'seat', status:'available', seat_id: '30' }
                                        ]
                                    },
                                    {
                                        seats: [
                                            { type:'seat', status:'available', seat_id: '31' },
                                            { type:'seat', status:'available', seat_id: '32' },
                                            { type:'seat', status:'available', seat_id: '33' },
                                            { type:'seat', status:'available', seat_id: '34' },
                                            { type:'seat', status:'available', seat_id: '35' },
                                            { type:'seat', status:'available', seat_id: '36' },
                                            { type:'seat', status:'available', seat_id: '37' },
                                            { type:'seat', status:'available', seat_id: '38' },
                                            { type:'seat', status:'available', seat_id: '39' },
                                            { type:'seat', status:'available', seat_id: '40' }
                                        ]
                                    }
                                ]
                            }
                        ],
                        price:200
                    }
                ]
            }
        ]
    }

    const generateSeatLayout = () => {
        const x = screen.timeslots.findIndex((t:any)=>t.time === selectedTime.time )
        return screen.timeslots[x].seats.map((seatType, index)=>(
            <div className='seat-type' key={index}>
                <h2>{seatType.type} - Rs.{seatType.price}</h2>
                <div className='seat-rows'>
                    {seatType.rows.map((row, rowIndex)=>(
                        <div className='seat-row' key={rowIndex}>
                            <p className='rowname'>row {row.rowname} </p>
                            <div className='seat-cols'>
                                {row.cols.map((col, colIndex)=>(
                                    <div className='seat-col' key={colIndex}>
                                        {col.seats.map((seat, seatIndex) => {
                                            let seatClass = '';
                                            let onClickHandler = undefined;
                                            if (seat.status === 'available') {
                                                const isSelected = selectedSeats.find((s:any) =>
                                                    s.row === row.rowname && s.seat_id === seat.seat_id && s.col === colIndex
                                                );
                                                seatClass = isSelected ? 'seat-selected' : 'seat-available';
                                                onClickHandler = () => selectdeselectseat({
                                                    row: row.rowname,
                                                    col: colIndex,
                                                    seat_id: seat.seat_id,
                                                    price: seatType.price
                                                });
                                            } else if (seat.status === 'unavailable' || seat.status === 'not-available') {
                                                seatClass = 'seat-unavailable';
                                            } else if (seat.status === 'selected') {
                                                seatClass = 'seat-selected';
                                            }
                                            return (
                                                <span
                                                    key={seatIndex}
                                                    className={seatClass}
                                                    onClick={onClickHandler}
                                                >
                                                    {seatIndex + 1}
                                                </span>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))
    }

    const [selectedTime, setSelectedTime] = React.useState<any>(screen.timeslots[0]);
    const [selectedSeats, setSelectedSeats] = React.useState<any[]>([
        {
            row: 'H', col: 0, seat_id: '1', price: 500
        },
        {
            row: 'G', col: 0, seat_id: '21', price: 500
        }
    ]);
    const [showModal, setShowModal] = useState(false);


    const [seatPrices, setSeatPrices] = React.useState({
        platinum: 0,
        gold: 0,
        silver: 0,
    });

    // Add after existing states
    const [ticketData, setTicketData] = React.useState<{ qrImage?: string, pdfUrl?: string, message?: string } | null>(null);
    const [bookingInProgress, setBookingInProgress] = React.useState(false);


  React.useEffect(() => {
  const fetchSeatPrices = async () => {
    try {
      const response = await fetch("http://localhost:8000/movie/seat-prices");
      const data = await response.json();
      setSeatPrices(data);
      console.log("Fetched seat prices:", data);
    } catch (error) {
      console.error("Error fetching seat prices:", error);
    }
  };

  fetchSeatPrices();
 }, []);

    const selectdeselectseat = (seat: any) => {
        const isselected = selectedSeats.findIndex((s: any) =>
            s.row === seat.row && s.col === seat.col && s.seat_id === seat.seat_id
        );
        if (isselected !== -1) {
            // Deselect seat
            setSelectedSeats(prev => prev.filter((s: any) =>
                !(s.row === seat.row && s.col === seat.col && s.seat_id === seat.seat_id)
            ));
            console.log('Deselected seat:', seat);
        } else {
            // Select seat
            setSelectedSeats(prev => [...prev, seat]);
            console.log('Selected seat:', seat);
        }
    }

    // ✅ Calculate total dynamically
 const totalAmount = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

 // ✅ Razorpay Payment Handler
const handlePayment = async () => {
  if (totalAmount <= 0) {
    alert("Please select seats first!");
    return;
  }

  setShowModal(true); // 👈 open modal instead of directly paying
};

const handleConfirmPayment = async () => {
  if (!userInfo.name || !userInfo.email || !userInfo.phone) {
    alert("Please fill all your details before proceeding.");
    return;
  }

  try {
    const response = await fetch("http://localhost:8000/movie/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalAmount }),
    });

    const order = await response.json();

    const options = {
      key: "rzp_test_RbNHQfuJcMDjR4",
      amount: order.amount,
      currency: order.currency,
      name: "Movie Ticket Booking",
      description: "Booking for movie seats",
      order_id: order.id,
      handler: async function (response: any) {
     try {
       alert("✅ Payment successful!");
       console.log("Razorpay response:", response);
       setBookingInProgress(true);

      // 1) create booking in backend (same as you had)
      const bookingRes = await fetch("http://localhost:8000/movie/bookticket", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        showTime: selectedTime.time,
        showDate: new Date(),
        movieId: movie,
        screenId: screen,
        seats: selectedSeats,
        totalPrice: totalAmount,
        paymentId: response.razorpay_payment_id,
        paymentType: "Razorpay",
        name: userInfo.name,
        email: userInfo.email,
        phone: userInfo.phone,
      }),
     });

      const bookingJson = await bookingRes.json();
    console.log("Booking response:", bookingJson);

    // 2) call ticket generator
    const ticketRes = await fetch("http://localhost:8000/movie/generate-ticket", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: userInfo.name,
        email: userInfo.email,
        phone: userInfo.phone,
        movieName: movie.moviename,
        showTime: selectedTime.time,
        seats: selectedSeats.map((s) => s.row + s.seat_id),
        totalPrice: totalAmount,
      }),
    });

    const ticketJson = await ticketRes.json();
    console.log("Ticket response:", ticketJson);

    if (ticketJson && ticketJson.success) {
      setTicketData({
        qrImage: ticketJson.data.qrImage,
        pdfUrl: ticketJson.data.pdfUrl,
        message: ticketJson.message,
      });

      // Close payment modal
      setShowModal(false);
    } else {
      alert("Booking saved but ticket generation failed.");
    }
    } catch (error) {
    console.error("Error in ticket flow:", error);
    alert("Something went wrong.");
    } finally {
    setBookingInProgress(false);
    }},
      prefill: {
        name: userInfo.name,
        email: userInfo.email,
        contact: userInfo.phone,
      },
      theme: { color: "#ff4b2b" },
    };

    const razor = new (window as any).Razorpay(options);
    razor.open();
    setShowModal(false); // close modal after payment opens
  } catch (err) {
    console.error("Payment error:", err);
    alert("Payment failed. Please try again.");
  }
};




  return (
    <div className='selectseatpage'>
        <div className='s1'>
            <div className='head'>
                <h1>{movie.moviename} - {movie.language}</h1>
                <h3>{movie.type}</h3>

            </div>

        </div>

        <div className='selectseat'>
            <div className='timecont'>
                {screen.timeslots.map((time: any, index: number)=>(
                    <h3 className={selectedTime.time === time.time ? 'time selected' : 'time'} key={index} onClick={()=>setSelectedTime(time)}>
                        {time.time}
                    </h3>
                ))}
            </div>
            <div className='indicators'>
                <div>
                    <span className='seat-unavailable'></span>
                    <p>Not available</p>
                </div>
                <div>
                    <span className='seat-available'></span>
                    <p>Available</p>
                </div>
                <div>
                    <span className='seat-selected'></span>
                    <p>Selected</p>
                </div>
            </div>
            {generateSeatLayout()}

            <div className='totalcont'>
             < h2>Total Amount: ₹{totalAmount}</h2>
            <button onClick={handlePayment} className='pay-btn'>
                 Pay Now
                 </button>

               {showModal && (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Enter your details</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={userInfo.name}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={userInfo.phone}
          onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
        />

        <div className="modal-actions">
          <button onClick={handleConfirmPayment} className="confirm-btn">
            Confirm & Pay ₹{totalAmount}
          </button>
          <button onClick={() => setShowModal(false)} className="cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )}
  {/* 🎟️ Ticket Popup after successful payment */}
{ticketData && (
  <div className="ticket-popup-overlay">
    <div className="ticket-popup">
      <h2>Your Ticket 🎫</h2>

      {/* QR Code */}
      {ticketData.qrImage && (
        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <img src={ticketData.qrImage} alt="QR Code" style={{ width: '180px', height: '180px' }} />
        </div>
      )}

      {/* PDF Download */}
      {ticketData.pdfUrl && (
        <p style={{ textAlign: 'center' }}>
          <a
            href={`http://localhost:8000${ticketData.pdfUrl}`}
            target="_blank"
            rel="noreferrer"
            style={{ color: '#ff4b2b', fontWeight: 'bold' }}
          >
            Download Ticket PDF
          </a>
        </p>
      )}

      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        {ticketData.message || "Ticket generated successfully!"}
      </p>

      <div className="ticket-actions">
        <button
          onClick={() => setTicketData(null)}
          className="confirm-btn"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}


  
   </div>


            
        </div> 
    </div>
  )
}

export default page
