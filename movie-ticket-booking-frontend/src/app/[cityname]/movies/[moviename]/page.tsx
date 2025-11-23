"use client"
import React from 'react'
import {BsShare} from 'react-icons/bs'
import {BsFillStarFill} from 'react-icons/bs'
import './MoviePage.css'
import MovieCarousel from '@/components/MovieCarousel/MovieCarousel';


import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import CelebCard from '@/components/CelebCard/CelebCard'
import {usePathname} from 'next/navigation';
import Link from 'next/link';

const MoviePage = () => {
	const pathname=usePathname();

	const movie={
		wideposter:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/param-sundari-et00426409-1756819797.jpg",
		portraitposter:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/param-sundari-et00426409-1753881029.jpg",
		title: "Jawan",
		rating:8.5,
		halls:[
			"2D",
			"3D"
		],
		languages:[
			"Hindi",
			"English",
			"Telugu"
		],
		duration: "2h 30m",
		type: "Action/thriller",
		releasedate:"Sep 3, 2023",
		cast:[
			{
				_id:"1",
				name:"Shah Rukh Khan",
				role:"Protagonist",
				imageUrl:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/sidharth-malhotra-41930-12-09-2017-03-54-10.jpg",
			},
			{
				_id:"2",
				name:"Nayanthara",
				role:"Female Lead",
				imageUrl:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/sidharth-malhotra-41930-12-09-2017-03-54-10.jpg"
			},
			{
				_id:"3",
				name:"Vijay Sethupathi",
				role:"Antagonist",
				imageUrl:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/sidharth-malhotra-41930-12-09-2017-03-54-10.jpg"
			}
		],
        crew:[
            {
                _id:"1",
                name:"Atlee",
                role:"Director",
                imageUrl:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/sidharth-malhotra-41930-12-09-2017-03-54-10.jpg"
            },
            {
                _id:"2",
                name:"G. K. Vishnu",
                role:"Cinematographer",
                imageUrl:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/sidharth-malhotra-41930-12-09-2017-03-54-10.jpg"
            },
            {
                _id:"3",
                name:"A. R. Rahman",
                role:"Music Composer",
                imageUrl:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/sidharth-malhotra-41930-12-09-2017-03-54-10.jpg"
            }
        ],
		about:" North ka swag, South ki grace - two worlds collide and sparks fly.  Dinesh Vijan presents Param Sundari, a love story directed by Tushar Jalota."


	}
  return (
	<div className ='moviepage'>
		<div className='c1' style={{
			backgroundImage:`url(${movie.wideposter})`
		    }}>

			<div className='c11'>
			<div className ='left'>
				<div className='movie_poster'
					style={{
						backgroundImage:`url(${movie.portraitposter})`
					}}
				>
					<p>In cinemas</p>
				</div>
				<div className='movie_details'> 
					<p className='title'>
						{movie.title}
					</p>
					<p className='rating'>
						<BsFillStarFill className='star' /> &nbsp;&nbsp;
						{movie.rating} / 10
					</p>
					<div className='halls_languages'>
						<p className='halls'>
							{
								movie.halls.map((hall,index)=>{
									return(
										<span key={index}>{hall}</span>
									)
								})
							}
						</p>
						<p className='language'>
							{movie.languages.map((language,index)=>{
								return(
									<span key={index}>{language}</span>
								)
							})}
						</p>






					</div>
					<p className='duration_type_releasedate'>
						<span className='duration'>
							{movie.duration}
						</span>
						<span>.</span>
						<span className='releasedate'>
							{movie.releasedate}
						</span>
					</p>
					<Link
						href={`${pathname}/buytickets`}
						className='linkstylenone'
					>
						<button className='bookbtn'>Book Tickets</button>
					</Link>
				</div>
			</div>
			<div className='right'>
				<button className='sharebtn'><BsShare className='shareicon' /> Share</button>
			</div>	
			
			
			</div>	

		</div>
		<div className='c2'>
			<h1>About the Movie</h1>
			<p> {movie.about}</p>
			<div className='line'></div>
			<h1>Cast</h1>
			<div className='circlecardslider'>
				<Swiper
					slidesPerView={1}
					spaceBetween={1}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						'@0.00':{
							slidesPerView:1,
							spaceBetween:2,
						},
						'@0.75':{
							slidesPerView:2,
							spaceBetween:2,
						},
						'@1.00':{
							slidesPerView:3,
							spaceBetween:2,
						},
						'@1.50':{
							slidesPerView:6,
							spaceBetween:2,
						},
					}}
					modules={[Pagination]}
					className="mySwiper"
                

				>
					{
						movie.cast.map((cast, index)=>{
							return(
								<SwiperSlide key={index}>
									<CelebCard {...cast} />
								</SwiperSlide>
							)
						})
					}
				</Swiper>
			</div>
			<div className='line'></div>
			<h1>Crew</h1>
			<div className='circlecardslider'>
				<Swiper
					slidesPerView={1}
					spaceBetween={1}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						'@0.00':{
							slidesPerView:1,
							spaceBetween:2,
						},
						'@0.75':{
							slidesPerView:2,
							spaceBetween:2,
						},
						'@1.00':{
							slidesPerView:3,
							spaceBetween:2,
						},
						'@1.50':{
							slidesPerView:6,
							spaceBetween:2,
						},
					}}
					modules={[Pagination]}
					className="mySwiper"
                

				>
					{
						movie.crew.map((cast, index)=>{
							return(
								<SwiperSlide key={index}>
									<CelebCard {...cast} />
								</SwiperSlide>
							)
						})
					}
				</Swiper>

			</div>
			<div className='line'></div>
			<h1> You might also like </h1>
			<MovieCarousel/>


		</div>


	</div>
	
  )
}

export default MoviePage
