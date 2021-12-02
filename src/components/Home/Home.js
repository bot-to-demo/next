import React from 'react';
import { useState } from 'react';
import BlogSlider from '../Slider/BlogSlider';
import AwardsSlider from '../Slider/AwardsSlider';
import TeamSlider from '../Slider/TeamSlider';
import ReviewsSlider from '../Slider/ReviewsSlider';
import ProjectsSlider from '../Slider/ProjectsSlider';
import ClientsSlider from '../Slider/ClientsSlider';
import UnitSpace from '../Icons/UnitSpace';
import HomeServicesItem from './HomeServicesItem';
import Achievements from '../Achievements';

const Home = () => {
	const [isActive, setActive] = useState(false);

	const toggleReedMore = () => {
		setActive(!isActive);
	};

	return (
		<>
			<section className='bg-black-900'>
				<div className='relative flex items-center h-full overflow-hidden'>
					<div className='absolute w-full h-screen'>
						<img
							src='/assets/images/bg-home.jpg'
							alt=''
							className='cover-img'
						/>
					</div>
					<div className='flex custom-container z-10'>
						<div className='mr-24 flex-shrink-0 hidden xl:block'>
							<UnitSpace clazz={'w-108 h-43'} fill={'#FAFAFA'} />
						</div>
						<div className='z-10 flex justify-between w-full'>
							<div className='max-w-1/5xl flex flex-col justify-between text-default'>
								<h1 className='uppercase text-1.7 sm:text-5.5xl leading-8 sm:leading-48 mb-3 sm:mb-8'>
									Modern solutions
								</h1>
								<p className='leading-7'>
									Our team consists of highly qualified
									designers, software engineers, and QA
									engineers. All of them ready to use their
									experience for your project and provide you
									with flexible and qualitative solutions for
									your business.
								</p>
							</div>
							<div
								role='button'
								className='btn-rotate writing-vertical-lr hidden xl:block'>
								get in touch
							</div>
						</div>
					</div>
					<a
						href='#services'
						className='absolute bottom-7 z-10 left-2/4 bg-hollow-arrow bg-center bg-cover w-5 h-3.5 animate-bounce hidden sm:inline-block'
						id='services'></a>
				</div>
			</section>
			<section className='bg-black-900'>
				<div className='text-default py-21 sm:py-32 xl:py-64'>
					<div className='custom-container mb-21 sm:mb-32 xl:mb-64'>
						<h5 className='uppercase text-1.3 sm:text-5xl font-bold leading-7 sm:leading-58 mb-7.8'>
							Services
						</h5>
						<HomeServicesItem />
					</div>
					<div className='custom-container'>
						<Achievements />
					</div>
					<div className='pt-21 sm:pt-32 xl:pt-64'>
						<h5 className='uppercase text-1.3 sm:text-5xl font-bold leading-7 sm:leading-58 custom-container mb-9 sm:mb-11.8 xl:mb-24'>
							CLIENTS
						</h5>
						<div className='bg-alabaster-100 max-w-screen-2xl mx-auto shadow-slider flex items-center overflow-hidden relative sm:static'>
							<div className='custom-container my-10 sm:my-18 static sm:relative pb-8 sm:pb-0'>
								<ClientsSlider />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='bg-black-900'>
				<div className='mb-16'>
					<h5 className='uppercase text-1.3 sm:text-5xl text-default font-bold leading-7 sm:leading-58 mb-11.8 xl:mb-20 custom-container'>
						PROJECTS AND REVIEWS
					</h5>
					<div className='fraction-container'>
						<ProjectsSlider />
					</div>
				</div>
				<div className='custom-container mb-21 sm:mb-32 xl:mb-48/5 relative reviews-container'>
					<ReviewsSlider />
				</div>
			</section>
			<section className='bg-black-900'>
				<div className='text-default custom-container pb-21 sm:pb-32 xl:pb-64'>
					<h5 className='uppercase text-1.3 sm:text-5xl font-bold leading-7 sm:leading-58 mb-11.8 xl:mb-20'>
						What we offer
					</h5>
					<p
						className={`text-sm sm:leading-7 text-alabaster-400 mb-6 sm:mb-12 ${
							isActive ? '' : 'line-clamp-7'
						}`}>
						One morning, when Gregor Samsa woke from troubled
						dreams, he found himself transformed in his bed into a
						horrible vermin. He lay on his armour-like back, and if
						he lifted his head a little he could see his brown
						belly, slightly domed and divided by arches into stiff
						sections. The bedding was hardly able to cover it and
						seemed ready to slide off any moment. His many legs,
						pitifully thin compared with the size of the rest of
						him, waved about helplessly as he looked. "What's
						happened to me? " he thought. It wasn't a dream. His
						room, a proper human room although a little too small,
						lay peacefully between its four familiar walls. A
						collection of textile samples lay spread out on the
						table - Samsa was a travelling salesman - and above it
						there hung a picture that he had recently cut out of an
						illustrated magazine and housed in a nice, gilded frame.
						It showed a lady fitted out with a fur hat and fur boa
						who sat upright, raising a heavy fur muff that covered
						the whole of her lower arm towards the viewer. Gregor
						then turned to look out the window at the dull weather.
						Drops of rain could be heard hitting the pane, which
						made him feel quite sad. "How about if I sleep a little
						bit longer and forget all this nonsense", he thought,
						but that was something he was unable to do because he
						was used to sleeping on his right, and in his present
						state couldn't get into that position. However hard he
						threw himself onto his right, he always rolled back to
						where he was. He must have tried it a hundred times,
						shut his eyes so that he wouldn't have to look at the
						floundering legs, and only stopped when he began to feel
						a mild, dull pain there that he had never felt before.
						"Oh, God", he thought, "what a strenuous career it is
						that I've chosen! Travelling day in and day out. Doing
						business like this takes much more effort than doing
						your own business at home, and on top of that there's
						the curse of travelling, worries about making train
						connections, bad and irregular food, contact with
						different people all the time so that you can never get
						to know anyone or become friendly with them. It can all
						go to Hell! " He felt a slight itch up on his belly;
						pushed himself slowly up on his back towards the
						headboard so that he could lift his head better; found
						where the itch was, and saw that it was covered with
						lots of little white spots which he didn't know what to
						make of; and when he tried to feel the place with one of
						his legs he drew it quickly back because as soon as he
						touched it he was overcome by a cold shudder. He slid
						back into his former position. "Getting up early all the
						time", he thought, "it makes you stupid. You've got to
						get enough sleep. Other travelling salesmen live a life
						of luxury. For instance, whenever I go back to the guest
						house during the morning to copy out the contract, these
						gentlemen are always still sitting there eating their
						breakfasts. I ought to just try that with my boss; I'd
						get kicked out on the spot. But who knows, maybe that
						would be the best thing for me. If I didn't have my
						parents to think about I'd have given in my notice a
						long time ago, I'd have gone up to the boss and told him
						just what I think, tell him everything I would, let him
						kn
					</p>
					<div className='flex items-center'>
						<div
							className='group uppercase text-sm flex items-center'
							onClick={toggleReedMore}
							role='button'>
							<p className='xl:group-hover:opacity-75 xl:transition-opacity'>
								{isActive ? 'show less' : 'reed more'}
							</p>
							<div
								className={`xl:group-hover:opacity-75 xl:transition-opacity bg-hollow-arrow bg-center bg-cover w-3 h-2 ml-3.5 transition-transform duration-300 ease-in-out ${
									isActive ? 'rotate-180' : ''
								}`}></div>
						</div>
					</div>
				</div>
			</section>
			<section className='bg-black-900'>
				<div className='text-default mb-28 sm:mb-36 xl:mb-64 xl:static relative'>
					<h5 className='custom-container uppercase text-1.3 sm:text-5xl font-bold leading-7 sm:leading-58 mb-9 sm:mb-11.8 xl:mb-21.2'>
						OUR TEAM
					</h5>
					<div className='custom-container xl:relative team-container'>
						<TeamSlider />
					</div>
				</div>
			</section>
			<section className='bg-black-900'>
				<div className='text-default'>
					<h6 className='custom-container mb-3 sm:mb-4 sub-title'>
						Our Awards
					</h6>
					<div className='bg-alabaster-100 max-w-screen-2xl mx-auto shadow-slider flex items-center mb-24 sm:mb-21'>
						<div className='custom-container relative awards-container'>
							<AwardsSlider />
						</div>
					</div>
				</div>
				<div className='text-default'>
					<h6 className='custom-container mb-6 sm:mb-10 sub-title'>
						Latest in Blog
					</h6>
					<div className='max-w-screen-2xl mx-auto shadow-slider flex items-center pb-21 sm:pb-32 xl:pb-21'>
						<div className='mx-auto max-w-screen-xl pr-0 xl:pr-8 pl-4 md:pl-8 w-full relative'>
							<BlogSlider />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
