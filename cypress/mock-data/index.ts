export const apisMockData = {
	updateUserStatus: {
		message: 'Request Completed Successfully!',
		result: null,
		errors: null,
		status: 200,
		code: 'success',
		success: true,
	},
	getUserData: {
		message: 'Request Completed Successfully!',
		result: {
			data: {
				id: 3,
				name: 'ahsan',
				email: 'aoneahsan@gmail.com',
				newsSources: null,
				newsCategories: null,
				newsAuthors: null,
				createdAt: '2024-06-27T10:01:59.000000Z',
				updatedAt: '2024-06-27T10:01:59.000000Z',
			},
		},
		errors: null,
		status: 200,
		code: 'success',
		success: true,
	},
	searchNewsArticles: {
		message: 'Request Completed Successfully!',
		result: {
			data: {
				articlesFromNewsApiAi: {
					articles: {
						results: [
							{
								uri: '8198272705',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '12:26:12',
								dateTime: '2024-06-27T12:26:12Z',
								dateTimePub: '2024-06-27T12:25:48Z',
								dataType: 'news',
								sim: 0,
								url: 'https://ca.news.yahoo.com/boeing-gets-scolding-leaking-secret-121931212.html',
								title:
									'Boeing Gets a Scolding for Leaking Secret Probe Details',
								body: 'Boeing has gotten itself into more trouble with the feds after allegedly spilling confidential information about the investigation into January\'s terrifying door plug blowout on an Alaska Airlines flight.\n\nAn unnamed executive for the troubled plane maker told a media briefing earlier this week that missing paperwork may have caused the freak mid-air accident in January when a door plug flew off a Boeing 737 Max 9 shortly after takeoff, sparking a federal investigation and crisis within the company.\n\nBut the National Transportation Safety Board on Thursday tore into Boeing for revealing "non-public investigative information" at the briefing and also allegedly misrepresenting the entire probe by suggesting the missing paperwork was to blame. Boeing had claimed the four bolts needed to keep the door plug in place had never been installed because workers never received the paperwork telling them to do so.\n\nHow Boeing CEO\'s Catastrophic Reign Could Become Criminal\n\nIn a press release, investigators said Boeing "blatantly violated NTSB investigative regulations" with these public comments, which the NTSB described as pure speculation. The air maker was accused of "offering opinions and analysis on factors it suggested were causal to the accident."\n\nBoeing will now be iced out of the investigation, according to the NTSB, which said the company will no longer have access to investigative information on the incident. On top of that, investigators said they will refer to the violation to the Justice Department.\n\nThe scolding comes as Boeing is at the center of multiple federal investigations and whistleblower complaints over its safety record, just a few years after the plane maker dodged criminal charges in two 737 Max 8 crashes that killed 346 people.\n\nRead more at The Daily Beast.\n\nGet the Daily Beast\'s biggest scoops and scandals delivered right to your inbox. Sign up now.',
								source: {
									uri: 'ca.news.yahoo.com',
									dataType: 'news',
									title: 'Yahoo',
								},
								authors: [],
								image:
									'https://media.zenfs.com/en/thedailybeast.com/f644e91f278cf558e7598e93cd467a02',
								eventUri: null,
								sentiment: -0.4666666666666667,
								wgt: 457187172,
								relevance: 2,
							},
							{
								uri: '8198272781',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '12:26:11',
								dateTime: '2024-06-27T12:26:11Z',
								dateTimePub: '2024-06-27T12:25:51Z',
								dataType: 'news',
								sim: 0,
								url: 'https://www.walesonline.co.uk/news/wales-news/man-found-dead-house-named-29431933',
								title:
									'Man found dead in house starred in Channel 4 documentary',
								body: 'Our community members are treated to special offers, promotions and adverts from us and our partners. You can check out at any time. More info\n\nA man found dead in a house alongside the body of a woman believed to be from Wales was a paramedic who starred in a Channel 4 documentary on frontline workers, it has emerged. A murder investigation was launched after the bodies of two people were found at a home in Hednesford, Staffordshire, on Tuesday.\n\nPolice believe them to be 24-year-old Daniel Duffield from Cannock and Lauren Evans, 22, from Bridgend, though formal identification has yet to take place. West Midlands Ambulance Service has confirmed that Mr Duffield worked for them. He also appeared on Channel 4\'s 999: On the Frontline.\n\nREAD MORE:Teenager taken to hospital after Newport centre incident\n\nREAD MORE: Woman in intensive care abroad after falling ill while on holiday with boyfriend\n\nSenior operations manager Richard Barratt said: "Daniel Duffield was a well-known member of staff and always keen to help and support his colleagues. His death at such a young age is a great tragedy.\n\n"I hope Daniel\'s family can take some comfort from the hundreds of patients he helped through his time as a paramedic. Our thoughts go out to the families of both of those found at the scene." Staff at the ambulance service are being provided with specialist support as they come to terms with the death of Mr Duffield, he added.\n\nStaffordshire Police has referred itself to the Independent Office for Police Conduct after launching the murder inquiry. The force said it had made the referral to the watchdog due to "recent police contact" in relation to the deaths at a property in Alpine Drive, Hednesford, Cannock.\n\nAmbulance service staff found the bodies at about 12.30pm on Tuesday. Detective Superintendent Nicki Addison, of Staffordshire\'s major investigations department, said: "My thoughts are very much with the families at this time.\n\n"I know this news has understandably shaken the local community. I\'d like to reassure everyone that we\'ve got a specialist team of officers working extensive hours to fully investigate what happened and support the families of those affected.\n\n"We completely understand that lots of people want to know more about what happened, but we\'d like to reiterate that speculation isn\'t helpful to families at this distressing time. I would like to thank everyone who has already come forward with information and ask that people continue to get in touch if they\'ve got any information that can help us."',
								source: {
									uri: 'walesonline.co.uk',
									dataType: 'news',
									title: 'WalesOnline',
								},
								authors: [
									{
										uri: 'cathy_owen@walesonline.co.uk',
										name: 'Cathy Owen',
										type: 'author',
										isAgency: false,
									},
								],
								image:
									'https://i2-prod.walesonline.co.uk/news/wales-news/article29432280.ece/ALTERNATES/s1200/2_duffieldJPG.jpg',
								eventUri: null,
								sentiment: -0.003921568627450966,
								wgt: 457187171,
								relevance: 2,
							},
							{
								uri: '8198272802',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '12:26:10',
								dateTime: '2024-06-27T12:26:10Z',
								dateTimePub: '2024-06-27T12:25:52Z',
								dataType: 'news',
								sim: 0,
								url: 'https://www.rt.com/russia/600094-russia-condemns-bolivia-coup/',
								title:
									'Russia comments on coup attempt in Bolivia  --  RT Russia & Former Soviet Union',
								body: 'Moscow has pledged its "unwavering support" for Bolivian President Luis Arce after his government faced an attempted military coup on Wednesday.\n\nThe failed putsch was led by the commander of the Armed Forces, General Juan Jose Zuniga. His troops occupied Plaza Murillo, the central square in the Bolivian capital La Paz, and broke into the presidential palace, but faced resistance at home and rebukes internationally.\n\nRussia has condemned the attempted coup and considers it imperative that internal political disputes be settled within the framework of constitutional law, the Foreign Ministry said in a statement on Thursday.\n\n"We warn against attempts at destructive foreign interference in the domestic affairs of Bolivia and other nations. Such actions have previously led to tragic consequences for a number of countries and peoples, including in the Latin American region," the ministry added.\n\nThe statement called Bolivia a "strategic partner." Arce reiterated in late May his country\'s intention to join BRICS, a group of not-Western economies that includes Russia among its founding members.\n\nBolivia fell prey to a coup in 2019, which ousted then-President Evo Morales and put into power the government of Senator Jeanine Anez. She is now serving a prison term for crimes that her regime committed during its deadly crackdown on mass protests.\n\nArce, who assumed office in 2020, and his mentor Morales, have been at odds over the future of their political force, the Movement for Socialism. However, Morales has unequivocally condemned the attempt to oust his former ally and urged the public to mobilize against General Zuniga. The coup leader was arrested hours after he tried to usurp power.',
								source: {
									uri: 'rt.com',
									dataType: 'news',
									title: 'RT',
								},
								authors: [],
								image:
									'https://mf.b37mrtl.ru/files/2024.06/article/667d55b785f54067bc5362f6.jpg',
								eventUri: null,
								sentiment: -0.2156862745098039,
								wgt: 457187170,
								relevance: 2,
							},
							{
								uri: '8198272909',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '12:26:10',
								dateTime: '2024-06-27T12:26:10Z',
								dateTimePub: '2024-06-27T12:25:58Z',
								dataType: 'news',
								sim: 0,
								url: 'https://www.gamesradar.com/toys-collectibles/you-may-call-him-darth-teeth-but-you-cant-deny-that-this-acolyte-sith-helmet-replica-isnt-awesome/',
								title:
									"You may call him 'Darth Teeth,' but you can't deny that this Acolyte Sith helmet replica isn't awesome",
								body: "We're starting to run out of space for all these cool collectibles\n\nYou'll soon be able to grab a replica of the helmet worn by The Acolyte Sith lord, lovingly nicknamed 'Darth Teeth' by Star Wars fans.\n\nAnnounced as part of Hasbro's Star Wars The Black Series line, 'The Stranger' electronic helmet is a life-size, wearable piece with interior illumination and an hour-long display mode. As usual for Black Series, it also features highly detailed weathering and an adjustable fit so that everyone can stick The Acolyte villain's armor on their noggin. You'll be able to pre-order yours now for $99.99 from Hasbro Pulse today as of 1PM EST.\n\nBehold, the helmet of Darth Teeth (listen, I know that's not their name, but I'm sticking with it - bite me).\n\nThere isn't a firm release date for this one yet, but it'll launch at the latest by 'Fall 2025' according to the press release. These replicas normally list a worst-case launch window and come out much sooner, so don't panic just yet. It'll also cost $100, which is pricier than most Star Wars gifts but still cheaper than other Black Series collectibles have been in the past.\n\nSo far as the design goes, The Stranger helmet leans hard into what Black Series replicas are best at; down and dirty weathering. This thing is beaten to within an inch of its life, and the range always excels when that's the brief.\n\nA display mode (activated by holding down a side button for three seconds) is also a nice touch. I may be wrong, but I don't think we've seen that before.\n\nSpeaking of getting a good look, this is the best glimpse we've had of the Sith's helm - before now, it's been cloaked in shadow. Its rusty, hastily-mended aesthetic makes me wonder if the Dark Side-user in question has half-inched it from someone else, or stumbled upon it in their travels.\n\nStill reeling from the latest Acolyte episode's twist? You're not alone. The Acolyte has revealed its Sith, but Star Wars fans think there's more to it than that.",
								source: {
									uri: 'gamesradar.com',
									dataType: 'news',
									title: 'gamesradar',
								},
								authors: [
									{
										uri: 'benjamin_abbott@gamesradar.com',
										name: 'Benjamin Abbott',
										type: 'author',
										isAgency: false,
									},
								],
								image:
									'https://cdn.mos.cms.futurecdn.net/uEz6cc3kSGEKxKgEUCE88-1200-80.jpg',
								eventUri: null,
								sentiment: 0.05098039215686279,
								wgt: 457187170,
								relevance: 2,
							},
							{
								uri: '8198272814',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '12:26:10',
								dateTime: '2024-06-27T12:26:10Z',
								dateTimePub: '2024-06-27T12:25:53Z',
								dataType: 'news',
								sim: 0,
								url: 'https://www.siasat.com/ap-cm-naidu-bans-telecasting-of-tv-9-ntv-sakshi-and-10-tv-media-unions-protest-3051798/',
								title:
									'AP CM Naidu bans telecasting of TV 9, NTV, Sakshi and 10 TV; media unions protest',
								body: 'Hyderabad: From bitter politics, the fight has now spread over to media in Andhra Pradesh.\n\nPeeved at the alleged biased media coverage during Y S Jagan Mohan Reddy\'s rule and AP Assembly/Lok Sabha elections, the Telugu Desam-led NDA Government has imposed an unannounced ban on select TV channels.\n\nWhile Telugu Desam denies any wrongdoing, post elections, four Telugu news channels-TV 9, Sakshi TV, NTV, and 10 TV are off the air from cable networks. They account for nearly 60 lakh viewers through cable networks in Andhra Pradesh, a big chunk of them in rural areas. However, these channels can be viewed on satellite networks.\n\nDelhi High Court, over a petition, has ordered uninterrupted transmission of TV 9 channel in the State.\n\nNDA alliance comprising Telugu Desam led by N Chandrababu Naidu, Jana Sena led by actor Pawan Kalyan and BJP led by D Purandeshwari won a thumping majority in the Assembly selections and trounced YSRCP in one of the most bitterly and abusive elections in AP.\n\n"Our channel has been removed from the cable network by the ruling party leaders. No reasons have been given for the same. We have approached TRAI, the Union Ministry of Information and Broadcasting, and the High Court," a representative of TV 9 told Siasat.com.\n\nHe added, "Media has been facing this onslaught in both the States at times which is not correct."\n\nFollowing a writ petition filed by Associated Broadcasting Pvt. Ltd of TV 9 Telugu in Delhi High Court against Union of India and others, the court on June 24 ordered: "Accordingly, it is directed that in terms of the submission made on behalf of respondent No. 2, the transmission of the television channel, i.e., TV9 Telugu" shall continue uninterruptedly and unhindered on the same position, as existing prior to 06th June, 2024.\n\nWith regard to further grievances of the petitioner, it is noted that the petitioner has already filed applications before TDSAT."\n\nAfter the elections, the YSRCP petitioned TRAI alleging Sakshi TV Telugu and other Telugu channels like TV9, NTV, and 10TV were being blocked on cable by the NDA government, comprising TDP, BJP, and Jana Sena.\n\nYSRCP Rajya Sabha member S Niranjan Reddy lodged a complaint with the Telecom Regulatory Authority of India (TRAI).\n\nReddy alleged that the AP Cable TV Operators Association took these four channels off air following pressure from the TDP-led government in the state.\n\n"I am compelled to bring to your (TRAI) esteemed attention the illegal resolution passed by the Andhra Pradesh Cable TV Operators Association under pressure and directions from the newly formed government to permanently block several news channels," Reddy said.\n\nHe charged that TV9, NTV, 10TV and Sakshi TV were blocked \'without any lawful justification or procedural compliance.\'\n\nTV channels and newspapers were accused of being biased in their coverage of political parties, but they deny any wrongdoing.\n\nBoth former Chief Minister Y S Jagan Mohan Reddy and present Chief Minister N Chandrababu Naidu, son Nara Lokesh, and other leaders took potshots and openly accused a section of the media of being biased towards them and their parties.\n\nIt is learned that channels that backed the YSRCP government were taken off by cable operators while retaining TV5, ABN Andhra Jyothi, and ETV.\n\nBarring satellite TV service providers and others, most multi-system operators and AP Fibernet took these channels off the air. According to one operator, the action was taken before Chandrababu Naidu took oath as CM.\n\nBlocked channels enjoy high viewership in both the Telugu States of Andhra Pradesh and Telangana.\n\nTDP spokesperson T Jyothsna Tirunagari denied any wrongdoing. "TDP always believes in the freedom of speech and we give a lot of respect to the press and media. And we always believe in journalism as a strong pillar for the society and the state."\n\nShe said the first signature by the newly-elected Andhra Pradesh Speaker C Ayyannapatrudu was to revoke the suspension on ETV, ABN Andhra Jyothi, and TV5, channels which were allegedly barred from entering the House during the YSRCP regime.\n\n"We don\'t categorise channels like \'ours\' and \'theirs\' as done by former chief minister Jagan Mohan Reddy.\n\nBanning of TV channels or newspapers is nothing new in Telangana and Andhra Pradesh.\n\nDuring the tenure of Chief Minister K Chandrasekhar Rao, the entry of the representatives like ABN, and TV 9 was blocked. On the other hand, the then AP CM Jagan Mohan Reddy had put a stay on ABN, TV 5, and ETV.\n\nNow under Chief Minister N Chandrababu Naidu, TV 9, NTV, Sakshi, and 10 TV are the targets.',
								source: {
									uri: 'siasat.com',
									dataType: 'news',
									title: 'The Siasat Daily',
								},
								authors: [],
								image:
									'https://cdn.siasat.com/wp-content/uploads/2024/06/N-Chandrababu-Naidu.jpg',
								eventUri: null,
								sentiment: -0.2313725490196078,
								wgt: 457187170,
								relevance: 2,
							},
							{
								uri: '8198272703',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '12:26:09',
								dateTime: '2024-06-27T12:26:09Z',
								dateTimePub: '2024-06-27T12:25:48Z',
								dataType: 'news',
								sim: 0,
								url: 'https://ca.news.yahoo.com/delays-major-roads-12-hit-122154015.html',
								title:
									'Delays on major roads up 12% in a year to hit record level',
								body: 'Delays on England\'s motorways and major A roads have reached record levels, new figures show.\n\nJourneys on the strategic road network (SRN) were delayed by an average of 10.6 seconds per vehicle per mile (spvpm) in the 12 months to the end of March, according to Department for Transport data.\n\nThat is the longest in records dating to 2015 and is up from 9.5 spvpm in 2022/23, which was the same amount as the year to the end of February 2020, just before coronavirus travel restrictions began.\n\nThe figures are based on average delays compared with free-flow figures across all 24 hours in a day, so do not reflect the impact of congestion at peak periods.\n\nIn 2023, the major road with the longest delays was the A2270 near Eastbourne, East Sussex, at 179.3 spvpm.\n\nThe M6 Toll road in the Midlands, which costs £9.70 for a car completing the full route, had the shortest average delay at 2.7 spvpm.\n\nRAC senior policy officer Rod Dennis: "It\'s concerning to see annual delays on motorways and major A-roads appear to have hit an all-time high, but this is perhaps a further sign of just how important vehicles are to people\'s lives.\n\n"There could be a number of reasons for the increase, including higher traffic volumes - which are well on their way to returning to pre-Covid levels - and the impact of roadworks, including the rolling programme of adding new refuge areas to smart motorways.\n\n"Delays are bad for drivers and bad for the economy."\n\nDfT figures show the average speed on the SRN fell by 1.7% from 57.9 mph in the year to the end of March 2022 to 56.9 mph during the following 12 months.\n\nIn the year to the end of February 2020 the figure was 58.0 mph.\n\nSeparate statistics show road traffic levels in Britain in the year to the end of March increased by 2.1% over the previous 12 months but remained 1.8% below pre-pandemic levels.\n\nNational Highways, which is responsible for the SRN, was approached for a comment.',
								source: {
									uri: 'ca.news.yahoo.com',
									dataType: 'news',
									title: 'Yahoo',
								},
								authors: [],
								image:
									'https://s.yimg.com/ny/api/res/1.2/JetPbRykH3kn3tWXsQEeGw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU7Y2Y9d2VicA--/https://media.zenfs.com/en/pa_viral_news_uk_120/93986fc1bc2762872884861b5879c13d',
								eventUri: null,
								sentiment: -0.01960784313725494,
								wgt: 457187169,
								relevance: 2,
							},
							{
								uri: '8198272803',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '12:26:08',
								dateTime: '2024-06-27T12:26:08Z',
								dateTimePub: '2024-06-27T12:25:52Z',
								dataType: 'news',
								sim: 0,
								url: 'https://www.medscape.com/s/viewarticle/us-fda-approves-verona-pharmas-inhaled-copd-therapy-2024a1000bz0',
								title: "US FDA Approves Verona Pharma's Inhaled COPD Therapy",
								body: '(Reuters) -The U.S. Food and Drug Administration has granted approval to a treatment from Verona Pharma for a chronic lung disease that commonly affects smokers, the U.K.-based company said on Wednesday.\n\nU.S.-listed shares of the company surged 11% in extended trading.\n\nThe U.S. FDA\'s assent for the therapy, to be sold under the brand Ohtuvayre, is the company\'s first and provides a new inhaled non-steroidal treatment for chronic obstructive pulmonary disease.\n\nCOPD, a chronic condition which causes restricted airflow and breathing problems, commonly affects cigarette smokers and is also known as "smoker\'s lungs". Other contributing factors for COPD include fumes, chemicals and dust in many working environments.\n\nIt affects around 16 million Americans and is the sixth leading cause of death in the country, according to government data.\n\nVerona\'s application was backed by efficacy and safety data from two late-stage trials in which Ohtuvayre demonstrated improvements in lung function and symptoms, substantially reducing the risk of exacerbation in mild-to-severe COPD patients.\n\nThe therapy is a type of single-drug medication designed to relax the muscles around the airways, making it easier to breathe, while reducing inflammation in the lungs without using steroids.\n\n"Physicians are wildly excited about this drug because it is very safe and it helps patients breathe to a measurable extent," BTIG analyst Thomas Shrader told Reuters ahead of the regulator\'s decision.\n\nShrader estimated the drug could generate $3.6 billion in peak sales.\n\nThe company expects to have around 100 sales representatives to reach about 15,000 physicians and is "in a very good position to execute on that" if it gets approval, Chief Commercial Officer Christopher Martin told Reuters ahead of the FDA decision.\n\nThe company said it planned to provide details on pricing during an investor conference call on Thursday.\n\nThe add-on COPD drug market is seeing interest from larger drugmakers as well, especially Regeneron and Sanofi\'s blockbuster anti-inflammatory drug Dupixent, although the FDA extended its review deadline to Sept. 27 in late May.\n\n(Reporting by Pratik Jain and Sruthi Narasimha Chari in Bengaluru, additional reporting by Leroy Leo, Mariam Sunny and Nathan Gomes; Editing by Pooja Desai)',
								source: {
									uri: 'medscape.com',
									dataType: 'news',
									title: 'Medscape',
								},
								authors: [],
								image:
									'https://img.medscape.com/thumbnail_library/Social_Facebook_806x806.jpg',
								eventUri: null,
								sentiment: 0.1529411764705881,
								wgt: 457187168,
								relevance: 2,
							},
							{
								uri: '8198272877',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '12:26:08',
								dateTime: '2024-06-27T12:26:08Z',
								dateTimePub: '2024-06-27T12:25:57Z',
								dataType: 'news',
								sim: 0,
								url: 'https://investingnews.com/nextsource-materials-announces-global-anode-expansion-strategy-update-economic-results-of-proposed-battery-anode-facility-in-saudi-arabia-and-strategic-partner-process/',
								title:
									'NextSource Materials Announces Global Anode Expansion Strategy Update, Economic Results of Proposed Battery Anode Facility in Saudi Arabia, and Strategic Partner Process',
								body: 'NextSource Materials Inc. (TSX:NEXT)(OTCQB:NSRCF) ("NextSource" or the "Company") is pleased to announce an update on its global anode expansion strategy, including positive results of a technical and economic study (the "Study") for the construction of a proposed battery anode facility (BAF) located in the Kingdom of Saudi Arabia (KSA). The Company further announces it has launched a strategic partner process to consider expressions of interest it has received for funding the battery anode facilities both in the Middle East and globally\n\nAs announced in February 2023, NextSource plans to construct, in stages, multiple BAFs globally in key jurisdictions that would be capable of producing commercial scale graphite anode active material for lithium-ion batteries used in electric vehicle (EV) applications. This planned series of BAFs will leverage exclusive access to well-established proprietary anode processing technology currently supplying anode active material to major EV automotive companies (OEMs).\n\nThe key jurisdictions being evaluated for potential BAF expansions are Madagascar, the KSA, the United Arab Emirates, and North America.\n\nAnode active material comprises a range of value-added graphite products including spheronized purified graphite (SPG) and coated SPG (CSPG).\n\nStudy Results for BAF in Kingdom of Saudi Arabia\n\nStantec, a global engineering service provider and partner firm with NextSource, has completed a conceptual design and an AACE Class 5 evaluation to develop Battery Anode Facilities in selected sites in the KSA. The KSA BAF will be capable of producing natural graphite anode active material for lithium-ion batteries used in EV applications.\n\nStantec has worked in conjunction with NextSource\'s technology partners to develop a Middle East compliant plant design, using proven process technology to reduce future qualification times. The Study included an assessment of the process design and equipment, an application of relevant design standards and codes, an analysis of future operational requirements, and an environmental permitting analysis.\n\nThe highlights of the Study are as follows:\n\nThe KSA has identified graphite and anode processing as a top priority critical battery material as part of Saudi Arabia\'s "Vision 2030" - a comprehensive blueprint for the country\'s economic and social transformation, aiming to reduce its dependence on oil revenue and diversify its economy.\n\nThe KSA offers very attractive funding and operating incentives to locate value-added processing facilities in-country with an accelerated permitting and development timeframe.\n\nPresident and CEO, Craig Scherba, commented,\n\n"NextSource\'s vision is to become a global supplier of critical battery materials. We are examining a number of potential locations to develop BAFs as part of our global expansion strategy, leveraging our exclusive access to established technology to create a diversified supply of anode active materials for EVs. Developing a BAF in Saudi Arabia would position us to capitalize on the Kingdom\'s robust infrastructure, strategic location along shipping routes, and highly supportive business environment. By aligning with Saudi Arabia\'s ambitious Vision 2030 plan, we can contribute meaningfully to the country\'s development while delivering value to our shareholders and stakeholders."\n\nBattery Anode Facility Expansion Strategy\n\nThe construction of a proposed BAF in the KSA is part of the Company\'s global expansion strategy to construct BAFs in key geographic locations, each with modular production capacities, that can be expanded in lockstep with OEM demand. The Company has not made a final construction decision nor completed final site selection for the KSA BAF. The timing of a construction decision and determination of the production capacity of the KSA BAF will depend on completing site selection, executing binding offtakes for anode active material, securing project funding, and obtaining the necessary permits to initiate construction.\n\nAs previously announced, NextSource has exclusive partnership and technology licensing agreements (the "BAF Partnerships") to construct and operate value-added BAFs capable of producing natural graphite anode active material for use in EV lithium-ion batteries. NextSource\'s technology partners operate production facilities that produce anode active material for major EV battery manufacturers that supply international OEMs, such as Toyota and Tesla.\n\nSaudi Arabia\'s Vision 2030\n\nIn 2016, the KSA launched Vision 2030 as a long-term three-pillar development plan to modernize its economy and society by transforming the country into a global investment powerhouse, and as an international processing and manufacturing hub connecting three continents: Africa, Asia, and Europe.\n\nVision 2030 spans multiple sectors but with a special emphasis on the mining sector, which is the third pillar in the strategic roadmap. The KSA has ambitions to create growth diversify from oil and gas by establishing itself as a global hub for battery material processing. Notably, the KSA has prioritized graphite and anode material as key components of this ambitious plan.\n\nKSA Battery Anode Facility\n\nBased on advanced discussions with major battery manufacturers and OEMs, the Company is evaluating the accelerated construction of a large-scale BAF in the KSA capable of producing 20,000 tpa of CSPG for international OEM customers as well as OEM\'s already operating in the KSA, which includes Lucid Motors, Ceer Motors and Hyundai Motors.\n\nThe Company has commenced design work for the KSA BAF and is in the process of completing site selection in the Industrial City of Yanbu, strategically situated along major international shipping routes and supported by extensive infrastructure, including a deep-water port, industrial parks, and commercial zones. Sites under consideration are already home to a wide range of industries, including petrochemicals, refining, manufacturing, and logistics and its location offers easy access to raw materials, markets, and transportation networks, making them attractive locations for the Company to service domestic and international customers.\n\nThe KSA benefits from several strategic and economic advantages that include:\n\nThe next steps for the Company are to complete site selection and prepare a Feasibility Study, which will incorporate the front-end engineering and design (FEED) and the environmental and social impact assessment ("ESIA") permitting.\n\nAs part of the strategic partner process, the Company is in active discussions with offtake partners and several debt and equity financiers in the Middle East that have expressed interest in funding the construction of the KSA BAF. The Company has also begun the process to apply for various forms of funding available from various private and government funding institutions in the Middle East.\n\nSubject to obtaining the necessary funding and completion of the ESIA process, the Company could conceivably achieve commercial production in 16 months from initiation of construction.\n\nKSA BAF Study Economic Results\n\nThe Company has completed a technical study for a BAF plant located in the KSA with a production capacity of 20,000 tpa. Based on this work, Stantec estimatesthat capital costs and working capital investments at US$292.0 million. The post-tax economic results demonstrated an NPV of US$677.0 million using an 8% discount rate and an IRR of 20.3%. At full capacity, the KSA BAF annual revenues are estimated at $230.1 million with an EBITDA of $128.5 million.\n\nThe following presents the economic results of the KSA BAF with a production capacity of 20,000 tpa.\n\nNote: Unless otherwise noted, all monetary figures presented throughout this press release are expressed in US dollars (USD). Capital cost estimates were prepared by Stantec Inc. to a confidence level of +/- 20% to 50% and are preliminary in nature. These results should not be relied upon for investment decisions. The BAF Study is not a technical report for the purposes of National Instrument 43-101 but rather is a technical study relating to the design, construction, and operation of the KSA BAF.\n\nThe Company is designing the plant with the expectation of construction of an initial 20,000 tpa capacity followed by two expansions, resulting in a total production capacity of 100,000 tpa of CSPG material.\n\nAt a total nameplate capacity of 100,000 tpa and assuming sequential construction, the combined post-tax economic results estimated an NPV of US$3,322.6 million using an 8% discount rate and an IRR of 23.7% with a payback within 6.3 years. At full capacity, the annual revenues were estimated at US$1,085.3 million with an EBITDA of US$509.0 million. The incremental capital costs to reach 100,000 tpa is estimated to be $864.8 million.\n\nAbout Stantec\n\nStantec is headquartered in Edmonton, AB, Canada and is a publicly traded engineering and design consultancy. With over 30,000 employees in 450 offices and across 6 continents, Stantec delivers sustainable and innovative design solutions for their customers. For more information visit www.stantec.com.\n\nAbout NextSource Materials Inc.\n\nNextSource Materials Inc. is a battery materials development company based in Toronto, Canada that is intent on becoming a vertically integrated global supplier of battery materials through the mining and value-added processing of graphite and other minerals.\n\nThe Company\'s Molo Graphite Mine in Madagascar is one of the largest known and highest-quality graphite resources globally, and the only one with SuperFlake® graphite. The Molo Graphite Mine has begun production, with Phase 1 mine operations currently undergoing ramp-up to reach its nameplate production capacity of 17,000 tpa of graphite concentrate.\n\nThe Company is also developing a significant downstream graphite value-add business through the staged rollout of Battery Anode Facilities capable of large-scale production of coated, spheronized and purified graphite for direct delivery to battery and automotive customers, outside of existing Asian supply chains, in a fully transparent and traceable manner.\n\nNextSource Materials is listed on the Toronto Stock Exchange under the symbol "NEXT" and on the OTCQB under the symbol "NSRCF".\n\nFor further information about NextSource Materials, please visit our website at www.nextsourcematerials.com or contact us at +1.416.364.4911 or email Brent Nykoliation, Executive Vice President at brent@nextsourcematerials.com, Craig Scherba, President and CEO at craig@nextsourcematerials.com, or Aura Financial at nextsource@aura-financial.com.',
								source: {
									uri: 'investingnews.com',
									dataType: 'news',
									title: 'Investing News Network',
								},
								authors: [],
								image:
									'https://investingnews.com/media-library/image.jpg?id=30133784&width=1200&height=600&coordinates=0%2C82%2C0%2C83',
								eventUri: null,
								sentiment: 0.4823529411764707,
								wgt: 457187168,
								relevance: 2,
							},
							{
								uri: '8198272789',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '12:26:08',
								dateTime: '2024-06-27T12:26:08Z',
								dateTimePub: '2024-06-27T12:25:52Z',
								dataType: 'news',
								sim: 0,
								url: 'https://tass.com/world/1809373',
								title:
									"Ukrainian officials deny cholera outbreak in Kherson  --  spokesman of region's governor",
								body: 'According to Vladimir Vasilenko, wells on the right bank of the Kherson Region are not maintained due to lack of electricity\n\nGENISCHESK, June 27. /TASS/. Ukrainian officials are hiding a cholera outbreak in Kherson, trying to pass it off as typhoid fever, said Vladimir Vasilenko, spokesman for the Kherson Region governor.\n\n"Ukrainian authorities tried to disguise the cholera outbreak as typhoid fever. Cholera bacteria got into drinking water from the Dnieper. They deny the cholera outbreak and do not tell people anything about it at all," he told TASS.\n\nAccording to the spokesman, wells on the right bank of the Kherson Region are not maintained due to lack of electricity.',
								source: {
									uri: 'tass.com',
									dataType: 'news',
									title: 'TASS',
								},
								authors: [],
								image:
									'https://tass.com/img/blocks/common/tass_logo_share_ru.png',
								eventUri: null,
								sentiment: -0.1450980392156863,
								wgt: 457187168,
								relevance: 2,
							},
							{
								uri: '8198272652',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '12:26:07',
								dateTime: '2024-06-27T12:26:07Z',
								dateTimePub: '2024-06-27T12:25:47Z',
								dataType: 'news',
								sim: 0,
								url: 'https://www.wallstreet-online.de/nachricht/18225121-eqs-news-plusplus-capital-convening-of-bondholders-meeting-to-vote-on-reorganization-plan',
								title:
									"PlusPlus Capital Convening of bondholders' meeting to vote on reorganization plan",
								body: 'Tallinn, Estonia, 27 June 2024. PlusPlus Capital ("PPC"), a leading pan-Baltic and Finnish technology-driven receivables management group, convenes a meeting of bondholders for 12 July 2024 at 12.00 CEST to vote on the proposed reorganization plan for its fully owned subsidiary PlusPlus Capital Financial S.à r.l. Convening notice is shared by the clearing systems and all bondholders will receive the notice through their custodian banks. The reorganization plan can be received by the bondholder by inquiring it from PlusPlus Capital.\n\nBondholders may cast their votes within the convening period which is starting today and lasts until 12.00 noon CEST on 10 July 2024. Bondholders may also instruct the Proxy to vote on their behalf. Instructions must be received by 12.00 noon CEST on 10 July 2024. Alternatively, investors may vote through the clearing systems as instructed by the bondholders to their custodian bank, but shorter deadlines may apply.\n\nAccompanying documents are available on the Company\'s website: https://pluspluscapital.eu/\n\nThe Management Board will present the proposed reorganization plan to be voted on the bondholders meeting by means of a webcast presentation. The update call will be held in English and will be recorded.\n\nPlusPlus is a pan-Baltic and Finnish technology-driven receivables management company with offices in Tallinn, Riga, Vilnius, and Helsinki. The Company acquires overdue loans and other non-performing exposures from financial institutions and non-financial sector merchants. With its core competence in handling claims against private individuals, PlusPlus prefers diversified portfolios balanced by geography, portfolio type, and other metrics.',
								source: {
									uri: 'wallstreet-online.de',
									dataType: 'news',
									title: 'wallstreet:online',
								},
								authors: [],
								image:
									'https://assets.wallstreet-online.de/_media/6/source1280/size_645/eqs-group-1280.png',
								eventUri: null,
								sentiment: 0.03529411764705892,
								wgt: 457187167,
								relevance: 2,
							},
						],
						totalResults: 4665657,
						page: 1,
						count: 10,
						pages: 466566,
					},
				},
				articlesFromNewsApiOrg: {
					status: 'ok',
					totalResults: 0,
					articles: [],
				},
				articlesFromNYTimesApi: {
					status: 'OK',
					copyright:
						'Copyright (c) 2024 The New York Times Company. All Rights Reserved.',
					response: {
						docs: [
							{
								abstract:
									'It’s clear that Rita’s life in rural Argentina could use a bit of magic. But her willingness to bend the truth to achieve it heralds disaster.',
								web_url:
									'https://www.nytimes.com/2024/06/27/movies/chronicles-of-a-wandering-saint-review.html',
								lead_paragraph:
									'“How do I know if something is a miracle?” This is the question that Rita (Mónica Villa), a 60-something Catholic woman living in rural Argentina, poses to a search engine — though deep down, she already knows the answer. A statue that Rita found while tending to her duties as the local chapel keeper isn’t the long-lost figure of St. Rita. But it’d be a miracle if it were, and miracles mean glory, attention and prestige in her small town.',
								source: 'The New York Times',
								headline: {
									main: '‘Chronicles of a Wandering Saint’ Review: Are the Meek Blessed?',
									kicker: null,
									content_kicker: null,
									print_headline: 'Chronicles of a Wandering Saint',
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'Movies',
								_id: 'nyt://article/66bcf0ec-3548-543b-94bc-56051f46164e',
							},
							{
								abstract:
									'President Emmanuel Macron’s governing style has always been intensely top-down. But with far-right nationalists in France closing in on power, some believe he may have gone too far this time.',
								web_url:
									'https://www.nytimes.com/2024/06/27/world/europe/france-macron-snap-election-decision.html',
								lead_paragraph:
									'His prime minister was among the last to know. That is how secretive, how confined to a small group of advisers President Emmanuel Macron’s shock decision to dissolve Parliament and call French legislative elections was.',
								source: 'The New York Times',
								headline: {
									main: 'A Tiny Circle of Advisers Helped Prod Macron to Take a Giant Risk',
									kicker: 'News Analysis',
									content_kicker: null,
									print_headline: null,
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'World',
								_id: 'nyt://article/c60f68f4-549d-57ae-acd7-3da67fbee313',
							},
							{
								abstract:
									'As the planet warms, atoll nations like the Maldives seemed doomed to shrink. Scientists have begun to tell a surprising new story.',
								web_url:
									'https://www.nytimes.com/2024/06/27/briefing/maldives-atolls-climate-change.html',
								lead_paragraph:
									'We humans have settled in all sorts of precarious environments: parched deserts, barren tundra, high mountains. None are precarious in quite the same way as atolls, the tiny, low-lying islands that dot the tropics. As the planet warms and the oceans rise, atoll nations like the Maldives, the Marshall Islands and Tuvalu have seemed doomed to vanish, like the mythical Atlantis, into watery oblivion.',
								source: 'The New York Times',
								headline: {
									main: 'A Surprising Climate Find',
									kicker: null,
									content_kicker: null,
									print_headline: null,
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'Briefing',
								_id: 'nyt://article/e48c0d8f-9c12-53cb-b324-c3a58d3eece8',
							},
							{
								abstract:
									'Allegations in the world of competitive swimming raise questions about fairness in the sport.',
								web_url:
									'https://www.nytimes.com/2024/06/27/podcasts/the-daily/china-olympics-doping.html',
								lead_paragraph:
									'A new doping scandal is rocking the world of competitive swimming, as the Paris Olympics approach. These allegations are raising questions about fairness in the sport and whether the results at the summer games can be trusted.',
								source: 'The New York Times',
								headline: {
									main: 'The Doping Scandal Rocking the Upcoming Olympics',
									kicker: null,
									content_kicker: null,
									print_headline: null,
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'Podcasts',
								_id: 'nyt://article/44785a27-ddf6-5013-a9d3-36b25439b6c2',
							},
							{
								abstract: 'Plus, is the future “made in India”?',
								web_url:
									'https://www.nytimes.com/2024/06/27/podcasts/trump-biden-debate-supreme-court.html',
								lead_paragraph: 'On Today’s Episode:',
								source: 'The New York Times',
								headline: {
									main: 'Why Tonight’s Debate Is Different, and New Supreme Court Rulings',
									kicker: null,
									content_kicker: null,
									print_headline: null,
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'Podcasts',
								_id: 'nyt://article/a9a585ca-745f-5e3a-8270-21d0c28b5d21',
							},
							{
								abstract:
									'Scroll down to reveal a hint for each category of today’s Connections, or head to the comments for community hints and conversation.',
								web_url:
									'https://www.nytimes.com/2024/06/27/crosswords/connections-companion-383.html',
								lead_paragraph:
									'Good morning, dear connectors. Welcome to today’s Connections forum, where you can give and receive puzzle — and emotional — support.',
								source: 'The New York Times',
								headline: {
									main: 'The Connections Companion No. 383, June 28, 2024',
									kicker: null,
									content_kicker: null,
									print_headline: null,
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'Crosswords & Games',
								_id: 'nyt://article/7a904f93-ee7c-5c28-81ec-0faf1f3edf51',
							},
							{
								abstract:
									'The painting, “Odalisque,” was sold to the Stedelijk Museum in the early 1940s by a German-Jewish family desperate to escape the Nazis.',
								web_url:
									'https://www.nytimes.com/2024/06/27/arts/stedelijk-museum-matisse-odalisque-restitution.html',
								lead_paragraph:
									'The Stedelijk Museum in Amsterdam says it will return an Henri Matisse painting that has been in its collection since 1941 to the heirs of its former owner, a German-Jewish textile manufacturer and art patron who sold it to fund his family’s escape of the Netherlands’ Nazi occupation.',
								source: 'The New York Times',
								headline: {
									main: 'Amsterdam Museum to Return a Matisse Work Sold Under Duress in World War II',
									kicker: null,
									content_kicker: null,
									print_headline: null,
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'Arts',
								_id: 'nyt://article/b41f8ea0-9f29-574c-ae0c-8d1612ba64f6',
							},
							{
								abstract:
									'He hanged high-profile inmates in exchange for a reduction in his own robbery and murder sentences, and became a social media sensation after his release.',
								web_url:
									'https://www.nytimes.com/2024/06/27/world/asia/shahjahan-bhuiya-dead.html',
								lead_paragraph:
									'Shahjahan Bhuiya, who hanged some of Bangladesh’s highest-profile death row inmates in exchange for reductions in his own robbery and murder sentences, then briefly became a TikTok star after his release from prison, died on Monday in Dhaka.',
								source: 'The New York Times',
								headline: {
									main: 'Shahjahan Bhuiya, Executioner Turned TikTok Star, Dies in Bangladesh',
									kicker: null,
									content_kicker: null,
									print_headline: null,
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'World',
								_id: 'nyt://article/34403061-db05-5d35-b892-3d3ada556995',
							},
							{
								abstract:
									'Iranians say they have little faith their votes in Friday’s presidential election will improve their lives, and many are planning to sit it out.',
								web_url:
									'https://www.nytimes.com/2024/06/27/world/middleeast/iran-presidential-election.html',
								lead_paragraph:
									'Central Tehran is ablaze this week with posters and billboards of the six candidates in Friday’s presidential election, and the streets are jammed with buses taking supporters to campaign rallies, yet it is hard to find enthusiasm even for voting, much less for any individual candidate.',
								source: 'The New York Times',
								headline: {
									main: 'Ahead of Election, Iranian Voters Say, ‘We Have Been Going Backward’',
									kicker: null,
									content_kicker: null,
									print_headline: null,
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'World',
								_id: 'nyt://article/8723f06c-0c2a-5d6c-8eb0-f002df371b66',
							},
							{
								abstract:
									'Three bodies were discovered near the mountain’s crater, the local media reported. Separately, a professional climber fell unconscious and died.',
								web_url:
									'https://www.nytimes.com/2024/06/27/us/mount-fuji-deaths-japan-climbers.html',
								lead_paragraph:
									'At least one person died climbing Mount Fuji days before the official start of the climbing season, and three bodies were found on the mountain, the police and local media said.',
								source: 'The New York Times',
								headline: {
									main: 'Four Mount Fuji Deaths Reported Before Climbing Season Begins',
									kicker: null,
									content_kicker: null,
									print_headline: null,
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'U.S.',
								_id: 'nyt://article/6dc11b43-5388-589c-a42c-fbbcfb0e291b',
							},
						],
						meta: {
							hits: 4423,
							offset: 10,
							time: 15,
						},
					},
				},
				articlesFromTheGuardianApi: {
					response: {
						status: 'ok',
						userTier: 'developer',
						total: 6641,
						startIndex: 1,
						pageSize: 10,
						currentPage: 1,
						pages: 665,
						orderBy: 'newest',
						results: [
							{
								id: 'football/live/2024/jun/27/euro-2024-last-16-ties-all-set-england-slovakia-live',
								type: 'liveblog',
								sectionId: 'football',
								sectionName: 'Football',
								webPublicationDate: '2024-06-27T12:25:36Z',
								webTitle:
									'Euro 2024: England pair Trippier and Rice train away from main group – live',
								webUrl:
									'https://www.theguardian.com/football/live/2024/jun/27/euro-2024-last-16-ties-all-set-england-slovakia-live',
								apiUrl:
									'https://content.guardianapis.com/football/live/2024/jun/27/euro-2024-last-16-ties-all-set-england-slovakia-live',
								fields: {
									headline:
										'Euro 2024: England pair Trippier and Rice train away from main group – live',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qqjjf',
									thumbnail:
										'https://media.guim.co.uk/4edd168f6d43846b1dcfc1b6857e46af0bfdc1da/0_129_5461_3280/500.jpg',
									bodyText:
										'Marc Guehi – who for me has, comfortably, been England’s best player at this tournament so far – is due speak to the media at 1.30pm BST. We’ll bring you some of his comments later. Thoughts on this? Three Germans, one Slovenian, a Georgia goalkeeper … und keine Engländer. It’s been great to see Willy Sagnol front and centre at these Euros. As a player for France in the 2000s, he often played second fiddle to the likes of Liliam Thuram and Bixente Lizarazu. He did once start a 2006 World Cup win over Portugal – the same opponent his Georgia side stunned last night to secure a last 16 berth. Sagnol could hardly believe what his team has achieved. “It’s still a bit difficult to realise what we have done,” he told Reuters. “When we go back to our homes and holidays, I think we are going to realise at this time exactly what we have done. Today I don’t have a lot of words ... I am so proud of the players. What an image of Georgia they have shown.” Slovakia are confident they can get a result against England in the last 16. Hey, why wouldn’t they be? Slovakian sports journalist Lukas Vrablik has been on BBC Radio 5 Live today talking about the Three Lions. “I’m quite disappointed by England’s performances, especially when you look at their individual quality have at their disposal,” he said. “I thought that England would be more convincing in those games, and Slovenia managed to neutralise the danger so it gives me big hope for Slovakia. I think this England team doesn’t look that strong as it did before the tournament.” Thanks. Good to be here! On John Brewin’s piece that Will mentioned earlier, I particularly enjoyed this paragraph about Gary Lineker’s side-project footy podcast: The use of “shit” by Lineker in summarising England’s Denmark performance was hardly the Sex Pistols meet Bill Grundy but the BBC’s leading men staging their own, vin-rouge-fuelled production threatens to become one of those issues on which Amol Rajan reports for the BBC about the BBC on the BBC, quoting senior BBC sources. Thank you very much for joining me this morning. Dominic Booth will run you through the lunchtime fun. Enjoy the rest of your football-free day, people. Keir Starmer has told England fans there is “too much criticism” of Gareth Southgate’s team after their group stage performances in Euro 2024 – and urged supporters to “get behind them”. Speaking on the campaign trail in Staffordshire, he added: “Get them over the line because this is a really important competition. “England always do a bit of this at the beginning of competitions ... but it’s a brilliant squad of players, all had great seasons for their respective clubs. Just get behind the team. I want less of the criticism, more of the support.” Spain defender Nacho became the latest big name in European soccer to move to the Saudi Pro League, joining newly-promoted Al-Qadsiah after a 23-year stay at Real Madrid. Khobar-based Al-Qadsiah, who won the Saudi First Division League in 2023-24 to move up to the top flight, announced Nacho’s signing on Thursday. The 34-year-old joined Real in 2001 as a youth player and debuted for their first team in 2011. He won six Champions League titles at the Santiago Bernabeu as well as four LaLiga crowns and two Copa del Reys. Nacho will join his new club after Spain’s Euro 2024 campaign. It is reported that Anthony Gordon fell off a bike at the training camp yesterday, resulting in a grazed chin. Get some stabilisers, lad. Gareth Vaughan emails: “A lot of people (including me) have said a lot of less than flattering things about Gareth Southgate during this tournament (and long before it frankly). There is a growing noise from some sources that this is somehow vastly unfair and unjust given his previous tournament success. Well the fact is that this is both manifestly true and untrue st the same time. “Clearly Southgate has brought us a period of consistent general success (without actually winning a trophy) during his tenure. And those who would say anyone could with the players he had, ignore the fact that there have been very talented England squads before this one who also failed to win anything and were far less successful. “But the fact also remains that watching this England is a form of torture and Southgate has that haunted look on his face so reminiscent of every England manager who has spent too much time staring into the dark abyss. And recently, his decision to make certain players unstoppable no matter how poor their performances and instead select a fantasy football first 11 rather than the best team, suggests he’s cosplaying at England manager, rather than actually BEING the manager. “I’d have more respect for him if he decided to ignore all the external white noise and pick the team he deep down thinks is the best for a tournament- which is probably a 3-5-1-1 formation similar to his 2018 World Cup team. A starting 11 of Pickford - Guehi, Stones, Walker - Shaw, Bellingham, Mainoo, Rice, Saka - Bellingham/ Foden- Kane will probably enrage most fans initially but would crucially allow us to control midfield and give the team a structure that has been lacking for the past 8 games. ”But it ain’t gonna happen…” It might … A few shots from England training. “Loving today’s blog,” says Simon Klee, “and thinking about the England and Wales situation. Southgate likely to go after this tournament; Wales looking for a new head coach and are prepared to accept a non-Welshmen. Perfect for Gareth to walk from one job to the next.” I do think Southgate might be more suited to international management that club. We have the great John Brewin on the battle between ITV and BBC for our hearts and minds. France’s defenders are readying themselves to face Romelu Lukaku. France meet Belgium in Düsseldorf on Monday in a game between “neighbours who want to beat each other”, as Dayot Upamecano described it moments ago. It is a tricky tie for France, who missed out on top spot in Group D to Austria. France have conceded a single goal – a Robert Lewandowski penalty in their last match – but William Saliba knows he and Upamecano will have to be on their toes to stifle Lukaku, even if he is still searching for his first goal of the tournament. “I don’t think there are many players that like playing opposite against Lukaku,” said the Arsenal defender. “When you play against the best forwards we are happy because they bring us up to the level. We have to be really focused when we play players like that. He’s a very good player but I hope he won’t be any good against us. I haven’t played against Lukaku before but he is one of the best attackers in the world. But it is not just him, there are other players we have to defend well against.” Speaking of goalscorers, William Saliba is confident France’s forward line will find their feet in the knockout stages. They face Belgium in the last 16 after failing to score from open play in their past four matches. Their two goals in the tournament so far have been an own goal and a Kylian Mbappe penalty, which is underwhelming to say the least. “It’s true we didn’t score many goals in the group stage. When you don’t score a lot, you have to be focused,” Saliba told a press conference. “But that’s how it can be when you are playing at the highest level. But I have no doubt that the attackers will be there in the round of 16 and deliver. It’s clear that we have to be more dangerous with our set pieces, especially me. I think I haven’t even touched one, so we can do better.” And do remember to keep on top of the Golden Boot table. For more opinions on how England could change, we have Karen Carney’s column from before the Slovenia match. A little bit of surprise at England’s Blankenhain training base this morning with Kieran Trippier and Declan Rice not among the main training group. Instead, they followed individual programmes. Load management is key to Gareth Southgate’s thinking over what he hopes will be a prolonged stay in Germany and Trippier is known to have carried a minor calf problem. It did not stop him from starting against Slovenia on Tuesday, although he was substituted in the 84th minute. Rice has not missed a minute of action here so far; his appearance against Slovenia was his 123th for club and country over the past two seasons. Phil Foden remains in England where he has returned to be with his partner for the birth of their third child. Wai Ming Loh emails: “I’m a Scotland supporter, just for context ... I sent this message to two friends this morning and feel it relates nicely to your morning feed, with regards to this article “I find this really interesting. It’s not something exclusive to England of course (talk of Clarke getting the boot despite taking Scotland to successive tournaments with a bunch of ok players and a few very good ones, and can only imagine it’s even worse in eg Brazil) but I find it amusing and tiresome in equal measure how many people “know” what needs to be done, despite having zero experience or qualifications as coaches, or former players who have either never been a manager/coach (eg Ferdinand) or are particularly noted for their abject performance when they were (eg Shearer, Neville). “Southgate has taken England further than anyone other than in 1966, and actually across his tenure probably even better on average than that, in bigger events with many stronger teams. “Yes, they’re dull at the moment, but all this gnashing of teeth, etc, just beggars belief. They qualified, will quite feasibly beat the Netherlands [edit now we know Slovakia], and thus find themselves in yet another semi, and possibly a final. “Obviously, I don’t want that to happen but if it would make these people eat their words, it’d almost (but not quite) be worth it. Of course, that wouldn’t happen - lots of revisionism or forgetting their earlier complaints would see them all right behind Gaz and his Boys, long live the King, etc.” Wouldn’t life be dull without opinions? Wales are willing to appoint a non-Welshman as manager for the first time in 25 years. The Football Association of Wales has detailed the criteria required to succeed Rob Page after ending his three-and-a-half-year reign last week and invited “expressions of interest” from potential candidates. Welsh football’s governing body has confirmed it is looking for an individual with a “proven track record of delivering success at club and/or international level” and plans to cast its net far and wide. Thierry Henry, Yaya Toure and Patrick Vieira - charismatic playing greats who went through Wales’ admired coaching system - would all be welcomed to express interest by the FAW, although all three are currently in employment. “The FAW knows how important coach education is to growing the game in Wales and offers a world-renowned service through its coaching courses,” said a FWA statement. “The Uefa Pro-Licence is a pre-requisite for coaches at the top level of the game and this qualification will be required to become Cymru’s next head coach. The Pro-Licence prepares candidates to work as a modern-day manager or head coach at club or international level. It develops their leadership and interpersonal skills to successfully implement their unique management style and philosophy.” “I liked Kári Tulinius’s coastal metaphor (10.22am),” says Charles Antaki. “To carry on with it, Czech Republic were like a large displeased child trying to headbutt the seaside Punch &amp; Judy show. Happily they shan’t bother us any further. There was, though, another large displeased child on show yesterday, and he will in fact still be with us into the next round.” The news from inside the England camp is that Declan Rice and Kieran Trippier are training indoors, separately from the group. Phil Foden is also absent as he is attending the birth of his third child. The other 23 players are present and correct. Where has the sense of fun gone with Gareth Southgate? Asks Jonathan Liew. Manchester United Women are losing a lot of talent. Who is the proud owner of these tattoos? Jude Bellingham has told his England team-mates to forget about any negative supporters as he praised the fans who dragged him over the line against Slovenia despite being “absolutely dead” on his feet. Despite drawing widespread criticism for their performances at Euro 2024, England topped Group C and avoided what appears to be the much tougher half of the draw for the knockout stages. “I think you definitely draw on them for energy towards the end of games,” he said. “I felt like in the last game, I was absolutely dead but you hear them singing, hear them chanting and you can play at a level that’s not our best, it’s normal, it can happen. But I think the important thing is, when you’re wearing this badge and you’re representing those fans, is that you don’t give up and I think that they’re a constant reminder of that. “I think it’s always interesting. I know there’s a lot of negativity outside the stadium and the camp but I always feel that when we get into the stadium, it’s so different. I think it’s important that as teammates and as a team, we remember that the ones in the stadium are the ones that are going to give us the energy so don’t worry about the ones that aren’t there. We’ve obviously got to keep using that energy, using that feeling that we get from them, to be successful in this tournament.” On yer bike. Switzerland enjoy your downtime between the group and knockout stages. A bit more on Bronze’s exit from Barcelona and the equally industrious Tom Garry. Richard Hirst joins the party: “A revolutionary (or maybe a revisionist) suggestion I know, but why don’t we just leave Southgate alone to do his thing? France don’t top their group, Portugal lose to Georgia, Italy need a stoppage time goal - maybe Southgate isn’t doing too badly after all. And he has a good tournament record. Just saying.” The performances have been pretty poor, though. He needs to find a massive improvement. “Turkey have played like a man trying to cross a spit of land that will be submerged once the tide rolls in,” says Kári Tulinius. “Austria have played like the tide. It could be fabulous to watch.” “My random unscientific theory is all England managers post Sir Bobby (not including Venables and Big Sam (forgot about him) as they didn’t stay long enough) go slightly mad and try to be too clever in their selections,” suggests Will Cook (Chef to his friends). “Southgate’s started by playing 3 right backs and not taking a fit left back, not even peak Pep Champions league semifinal breakdowns would play with 3 right backs. Anyway, that’s my random thought, I should get back to work now.” Luke Shaw will be available on Sunday … “Hello from a baking hot summers day in Dubai, Will,” emails Brett Turner. “Since you asked here’s the team I’d put out - Pickford Trent Stones Guehi Walker Bellingham Rice Bowen Palmer Gordon Kane We need pace, aggression and flair to break down another stubborn team parking the bus. I’d rather have Trent in the team than Trippier when we need to create and Walker / Gordon gives us frightening pace down the left for Trent to hit with his quarterback passes. Foden can come on for Palmer and hook Kane for Watkins if he’s still not aggressive enough. |This management lark is easy! Where’s my five million quid?? “Love your work.” I have not seen much clamour for Bowen but the campaign starts here, it would seen. Dropping Saka and Foden is the bold. Some Euros adjacent news from Matt Hughes. Georgia’s celebrations in video form for those that like car horns. Which last-16 tie clash are you most looking forward to? Despite neither team looking at their best, I think France v Belgium could be decent. There is plenty of quality in the two squad and maybe they will finally show it when it truly matters. There were some fantastic scenes in Romania after they top their group to make it to the last 16. How green is the Euros? Philippe Auclair takes a look. Elsewhere it has been confirmed that England full-back Lucy Broze will leave Barcelona this summer after the conclusion of her contract. Every man and his dog will be offering up their opinions on what England should do on Sunday against Slovakia. One such person is former striker Jermain Defoe who fancies seeing a bit more Ollie Watkins in this tournament. “When Ollie Watkins came on (against Denmark), he looked really sharp,” Defoe told the PA news agency. “He is someone who can get us up the pitch because he is so dynamic. He runs in behind, the ball doesn’t only come to his feet. I would love to see see him involved a little bit more because Harry Kane can drop into that 10 position, to roam and do his stuff. Harry is such a world-class finisher and it is almost like he can play in two positions, having almost mastered the number nine position as a focal point and can then also play in at number 10 because his passing rate is one of the best.” How do we solve a problem like England? Jacob Steinberg has a big and bold suggestion: drop Jude Bellingham. The team has looked incredible unbalanced in the three group games. If Southgate wants Rice and Mainoo to sit, maybe it is best for everyone is Bellingham sits it out on Sunday. What do you think? What a night it was for Georgia. In their first European Championships and they have made the last 16. How will we all cope with a day without European Championship football? We can all see our families for a few precious and enjoy a full 24 hours of complaining how Gareth Southgate is essentially wrong about everything. We will keep you up to date with everything that happens on what should be a lovely Thursday of fun and frolics. In the meantime, here is the full list of the last-16 ties: Saturday 29 June Switzerland vs Italy (Berlin, 5pm, all times BST) Germany vs Denmark (Dortmund, 8pm) Sunday 30 June England vs Slovakia (Gelsenkirchen, 5pm) Spain vs Georgia (Cologne, 8pm) Monday 1 July France vs Belgium (Düsseldorf, 5pm) Portugal vs Slovenia (Frankfurt, 8pm) Tuesday 2 July Romania vs Netherlands (Munich, 5pm) Austria vs Turkey (Leipzig, 8pm)',
								},
								tags: [
									{
										id: 'football/euro-2024',
										type: 'keyword',
										sectionId: 'football',
										sectionName: 'Football',
										webTitle: 'Euro 2024',
										webUrl: 'https://www.theguardian.com/football/euro-2024',
										apiUrl:
											'https://content.guardianapis.com/football/euro-2024',
										references: [],
									},
									{
										id: 'football/european-championship',
										type: 'keyword',
										sectionId: 'football',
										sectionName: 'Football',
										webTitle: 'European Championship',
										webUrl:
											'https://www.theguardian.com/football/european-championship',
										apiUrl:
											'https://content.guardianapis.com/football/european-championship',
										references: [],
									},
									{
										id: 'football/football',
										type: 'keyword',
										sectionId: 'football',
										sectionName: 'Football',
										webTitle: 'Football',
										webUrl: 'https://www.theguardian.com/football/football',
										apiUrl:
											'https://content.guardianapis.com/football/football',
										references: [],
									},
									{
										id: 'sport/sport',
										type: 'keyword',
										sectionId: 'sport',
										sectionName: 'Sport',
										webTitle: 'Sport',
										webUrl: 'https://www.theguardian.com/sport/sport',
										apiUrl: 'https://content.guardianapis.com/sport/sport',
										references: [],
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'football',
									webTitle: 'Football',
									webUrl: 'https://www.theguardian.com/football',
									apiUrl: 'https://content.guardianapis.com/football',
									editions: [
										{
											id: 'football',
											webTitle: 'Football',
											webUrl: 'https://www.theguardian.com/football',
											apiUrl: 'https://content.guardianapis.com/football',
											code: 'default',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/sport',
								pillarName: 'Sport',
							},
							{
								id: 'business/live/2024/jun/27/japan-fresh-warnings-yen-38-year-low-spacex-valued-210bn-business-live',
								type: 'liveblog',
								sectionId: 'business',
								sectionName: 'Business',
								webPublicationDate: '2024-06-27T12:22:02Z',
								webTitle:
									'Financial markets at risk of ‘sharp correction’, warns Bank of England – business live',
								webUrl:
									'https://www.theguardian.com/business/live/2024/jun/27/japan-fresh-warnings-yen-38-year-low-spacex-valued-210bn-business-live',
								apiUrl:
									'https://content.guardianapis.com/business/live/2024/jun/27/japan-fresh-warnings-yen-38-year-low-spacex-valued-210bn-business-live',
								fields: {
									headline:
										'Financial markets at risk of ‘sharp correction’, warns Bank of England – business live',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qqmzp',
									thumbnail:
										'https://media.guim.co.uk/1d159073dad20491092b34324a6d2eb5b19e1cfe/760_1344_5017_3011/500.jpg',
									bodyText:
										'This chart shows why the Bank of England has concerns about private equity risk management (see earlier post)… Here’s economist Julian Jessop of the Institute of Economic Affairs on today’s financial stability report: Uncertainty caused by a global wave of elections, starting this weekend in France, risks destabilising the UK’s financial system, the Bank of England has warned. Officials are concerned about the kind of policies that newly elected governments may enforce in large economies, including the US, where Donald Trump is vying for another term as president in the run-up to the election in November. The French president Emmanuel Macron’s shock announcement of a parliamentary election, with a first round of voting on 30 June and Marine Le Pen’s far-right National Rally party forecast to make significant gains, had shown how political uncertainty could impact economic growth forecasts and cause volatility in financial markets, affecting government debt prices, the Bank’s financial policy committee (FPC) said. More here. There’s no shortage of newsy lines in today’s financial stability report. Another one, is that the Bank of England believes that risk management in the private equity sector needs improving. The BoE says an investigation of the sector showed it was facing challenges from higher borrowing costs (because increases in interest rates have hit borrowers who loaded up on debt when it was cheap). The Bank says: Although the [private equity] sector has been resilient so far, it is facing challenges in the higher rate environment. These manifest in refinancing risk as debt matures, and an increased drag on performance from higher financing costs. In response, Michael Moore, chief executive of the BVCA (British Private Equity &amp; Venture Capital Association), says: The Bank has rightly highlighted the long-term stability and resilience of the private equity industry and the vital role it has played in the UK economy for over 40 years, and we welcome their acknowledgment of the importance of the sector to the economy. Many of the Bank’s concerns are already being addressed through new regulatory activity by the FCA, and we at the BVCA remain highly engaged in these processes. Over in the US, retail giant Walgreens Boots is planning to close some underperforming US stores and cut its profit forecasts today. Walgreen Boots now expects to make an adjusted profit of $2.80 to $2.95 per share for its financial year ending August, compared with its $3.20 to $3.35 per share forecast in March. The company says it is finalizing a “significant multiyear footprint optimization program” to close certain underperforming US stores. Chief executive officer Tim Wentworth says Walgreen Boots continues to face “a difficult operating environment”, due to the pressures on US consumers. He adds: “Informed by our strategic review, we are focused on improving our core business: retail pharmacy, which is central to the future of healthcare. We are addressing critical issues with urgency and working to unlock opportunities for growth. Many of these actions will take time, but I am confident that we have the right team and the right strategy to lead a business turnaround for the Walgreens that our customers and patients need.” Today’s Financial Stability Report recognises the forthcoming French elections as a potential geopolitical risk, points out Professor Costas Milas, of the University of Liverpool’s management school: In light of the forthcoming French elections, the French cost of borrowing continues to rise -albeit slightly- over the past week as does the Italian one. My brand new piece for the LSE Business Review blog looks at the rising political uncertainty in France and assesses the risk of contagion effects in Europe and the UK through the banking channel. European and British banks have a notable exposure to French public and domestic debt (around 10% their total exposure worldwide), which (according to the Chart in the piece) has increased over time. Something for ECB’s and BoE’s monetary policymakers to keep an eye on over the next few days and weeks… The Bank of England also warns that “significant downside risks remain” from China’s property market. Today’s financial stability report points out that activity in the mainland Chinese residential property sector continues to decrease, with the prices of new and existing homes falling this year: Disorderly defaults by property developers have been avoided so far, the Bank of England says, even though some large Chinese property developers have missed bond payments without agreed extensions. Chinese authorities have put various measures into place to support the housing market, which has helped support housing demand. The Bank warns, though, that the ongoing market adjustment will weigh on China’s economy for some time – and could potentially spill over to the UK economy, saying: The adjustment in the property sector, alongside broader structural trends, is likely to weigh on growth in China for some time. Property accounts for a significant proportion of household wealth in China; much higher than in the US, for example. That means falls in sales and residential property prices are likely to continue to impact Chinese consumption and growth. There have been limited spillovers to the UK so far from the adjustment in mainland China’s property market. However, significant downside risks remain. More widespread crystallisation of risks in mainland China could lead to spillovers to the UK and other countries, and could be larger if the crystallisation of property sector vulnerabilities were to spread to other sectors in the Chinese economy. Risks could spill over to the UK financial system through channels including weaker trade, financial markets, and global risk sentiment. Today’s Bank of England’s report shows high borrowing costs still pose a threat to the stability of the financial system, points out Karim Haji, global and UK head of financial services at KPMG. Haji adds that banks need to keep supporting customers who need help: “While there are signs that a brighter economic outlook is starting to feed through to resilient consumers and businesses, the Bank of England’s report shows high borrowing costs still pose a threat to the stability of the financial system. The good news is UK banks are in rude health, with strong capital and liquidity positions allowing them to support people even if the economy does worse than expected. It is incumbent on them to continue supporting vulnerable customers.” The Bank of England is concerned that the flurry of elections taking place this year could cause financial instability. Today’s report says: Geopolitical risks remain high and there is policy uncertainty associated with elections set to take place globally. This could make the global economic outlook less certain and lead to financial market volatility. The Bank cites the drop in French government bond prices, and shares in Paris, this month after Emmanuel Macron called snap parliamentary elections. They say: Markets responded to the unexpected announcement that French parliamentary elections would be held on 30 June and 7 July. For example, the spread between French and German 10-year government bond yields rose to its highest level since 2017. The US presidential elections, in November, are also an obvious source of risk and uncertainty, with Joe Biden and Donald Trump due to face off in a debate tonight. The City has been unspooked by the UK election next week, though, with JP Morgan suggesting that a Labour election victory will be a “net positive” for financial markets. If markets suffer a sharp correction, it would hurt the cost and availability of finance to the real economy through two main channels. The BoE says. First, a sharp market correction would make it more costly and difficult for corporates to refinance maturing debt, including by reducing the value of collateral. This is particularly relevant given the large proportion of leveraged lending and high-yield market-based corporate debt that is due to mature by the end of 2025. Second, it could interact with vulnerabilities in market-based finance, which may amplify the correction. For example, it may cause large losses for leveraged market participants, which could further reduce risk appetite, or it may lead to a spike in liquidity demand and a deterioration in the functioning of core markets. Millions of UK households will be hit by rising mortgage costs over the next two years, the Bank of England says, even though interest rates may have peaked. Its new Financial Stability Reprt shows that around 30% of mortgagors are likely to see mortgage costs rise by more than £100 a month by the end of 2026. That’s because borrowers will continue to come to the end of their fixed-rate deals, meaning they’ll have to refinance onto higher rates. Today’s Report says: With continued strong income growth and low unemployment, the aggregate amount of debt held by UK households relative to their income has fallen further since Q1. That said, many UK households, including renters, are still facing pressures from the increased cost of living and higher interest rates. The share of households spending a high proportion of their income on mortgage payments is still expected to increase slightly over the next two years. But the overall share of households who are behind in paying their mortgages remains low by historical standards. It adds: Over the next four years, the vast majority of fixed-rate mortgagors were expected to refinance, most at rates higher than they currently paid. A smaller group, predominantly those on variable-rate mortgages, could see a reduction in their monthly payments. The Bank also predicts that mortgage arrears will increase further, but are likely to remain well below their early 1990s and post-GFC peaks of 4.0% and 2.4%, respectively. This is despite interest rates having risen by more since 2021 Q4 than in past tightening cycles, it adds. The Bank of England also warns that some firms will struggle with the impact of higher interest rates in the years ahead. But most UK businesses remain ‘resilient’ to the economic outlook, today’s financial stability report says: We still expect most UK businesses to continue to be resilient to the economic outlook, including high interest rates. However some firms are likely to struggle with higher borrowing costs in the coming years. Firms with a large amount of market-based debt which still needs to be refinanced, and where a high proportion of income is being spent on repayments, are likely to come under the most pressure. Newsflash: The Bank of England has warned that financial markets remain at risk of a sharp correction. In its latest financial stability report, the BoE says that high inflation, or geopolitical risks, could trigger a selloff. The Bank says risks to the UK financial system are “broadly unchanged” since the first quarter of the year. But some asset prices have continued to rise, it points out, while the risk of a sharp correction persists. European markets are up around 8% so far this year, while the US Nasdaq Composite index has surged by 18%. The report, which is designed to track the stability of the financial system, says: The prices of many assets such as shares and bonds remain high relative to historical norms, and some have continued to rise. This suggests that investors in financial markets are continuing to expect the economy to recover and inflation to fall. They are placing less weight on risks, such as geopolitical developments or continued high inflation, that might cause weaker growth or interest rates to stay higher than expected. These risks make it more likely that there could be a sharp correction in asset prices that could ultimately make it more costly and difficult for UK households and businesses to borrow. The report also warns that Global risks are material, including geopolitical risks, which remain high. Overall, UK households and businesses have remained resilient to the impact of higher interest rates. The UK banking system is strong enough to support households and businesses, even if the economy does worse than expected. The French stock market has dipped this morning, with the CAC40 share index down 0.2%. Traders are jittery ahead of the first round of voting in the national assembly elections this weekend. Joshua Mahony, chief market analyst at Scope Markets, says: European markets have kicked off a somewhat indecisive start to the day, with the German DAX providing the one glimmer of light as the likes of the FTSE 100 and CAC head lower. While we saw early gains for French stocks, the fact that we are seeing them fade once again comes as no surprise as we approach the weekend election. Yesterday saw yet another poll that pointed towards further gains for the far-right National Rally party, with a Macron loss becoming increasingly likely. Nonetheless, while the Bloomberg poll of polls has NR and its allies at 36% of the vote, the fact that this remains well below the 50% marker highlights the fact that we will likely have to wait until next Sunday to find out the result. With that in mind, traders should expect a jittery period ahead, with the fears of a fresh surge in borrowing costs and financial instability driving potential CAC and euro weakness. Over in Tokyo, the government has warned that high interest rates in the United States and Europe are hurting the yen, and risking economic damage. In a monthly report, a cabinet office official flagged that “fluctuations” in the marketss should be watched closely. The report says: “The Japanese economy is recovering at a moderate pace, although it recently appears to be pausing. “The economy could face downside risks from the effects of continued high interest rate levels in the United States and Europe. Full attentions should be given to fluctuations in the financial and capital markets.” Some analysts are forecasting that Tokyo could intervene to support the yen if it fell as low as 165 to the dollar. ING point out that the intervention two months ago was triggeed by a 10 yen move in USD/JPY. They told clients: In April, USDI/JPY had risen from a low of 150 to a high of just below 160 over a little less than a month when Japan intervened… In the past 30 days, the low was 154.60, which would by the same logic place the intervention level at 164/165. The yen is still trading over 160 to the dollar, above this new “line in the sand” of 165…. The number of job openings at UK companies has dropped by a fifth compared with a year ago, hiring platform Indeed reports. In its Mid-Year Labour Market Update, Indeed shows job postings are slowing as the labour market cools. The technology industry, and the beauty &amp; wellness sector, are among those seeing the fastest slowdown in hiring. The report also found, though, that wage pressures remain strong, particularly in lower-paid roles. Here’s the key points: Foreign jobseeker interest is up— the share of searches for UK jobs from abroad is up 40% from its pre-Covid average. Roles remain hard-to-fill despite foreign interest - the jobs foreign jobseekers are most drawn to are software development, engineering and mathematics. However, engineering and software development roles remain some of the hardest-to-fill in the UK, meaning barriers remain in hiring this talent. Wage pressures still persist — Despite the labour market cooling, the Indeed Wage Tracker shows that posted wage growth rose to a four-month high of 6.5% year-on-year in May, driven by lower-paid roles, with childcare wages up the most at 8.6% year-on-year. Flexibility is a mainstay — the share of job postings mentioning remote or hybrid work has remained steady at around 15% of job postings in 2024, up from 13% in May 2022. Around 2.4% of jobseeker searches contained remote/hybrid terminology with the share remaining stable since 2022. Jack Kennedy, Indeed’s senior economist, says: “The UK labour market has continued its adjustment in recent months, though it remains somewhat tight and still competitive for employers in many sectors. Highly skilled jobs tend to always be harder to recruit for as they are naturally relevant to a smaller candidate pool. However, there is strong foreign interest in some of these jobs, meaning UK businesses may want to look at jobseekers from outside the country to fill gaps. While lower-paid jobs are generally easier to recruit for as the candidate pool is larger, persistently higher inactivity post-pandemic and post-Brexit immigration policy have made it harder than it used to be for employers to fill these roles. Tackling inactivity, a longer-term skills strategy and the role of immigration in addressing labour shortages will be agenda items for the elected government. The London stock market is a little subdued this morning, with the FTSE 100 down 8 points or 0.1% at 8217 points. Packaging firm DS Smith are the top riser, up 6.7%. Its takeover by US rival International Paper appears to be on track, after Brazil’s Suzano dropped its plans to merge with International Paper. Pharmaceuticals firm GSK is the top faller, down 5.2%, after US health officials recommended restricting vaccination with its RSV vaccine to people who are older and more at risk. That could reduce the market for the UK drugmaker’s blockbuster shot. SpaceX’s new valuation of $210bn is a record for an American private company: Just in: Sweden’s central bank, the Riksbank, has left interest rates on hold at 3.75%. But it also hints that rates could be cut as many as three times in the second half of 2024 if inflation prospects remain the same. The Riksbank explains: Inflation is close to the target and economic activity is weak. The Executive Board considers that monetary policy should be adjusted gradually, and has decided to hold the policy rate unchanged at 3.75%. Wet weather earlier this month has also slowed sales growth at British supermarkets, new data shows. Market researcher NIQ said sales at UK supermarkets rose 1.1% in the four weeks to 15 June year-on-year. That’s a slowdown on the 3.3% growth reported a month ago. The wet weather may have encouraged shoppers to buy groceries online rather than braving the shops; in-store sales fell 0.9% in the month to 15 June, while online sales increased by 3.7%. Shares in Swedish clothing retailer H&amp;M have tumbled 13% after reporting earnings that missed expectations this morning. H&amp;M also predicted a drop in June sales, suggesting they could fall by 6% in local currencies against the same period last year, partly due to poor weather in many key markets. It told shareholders: The unstable weather in many of the H&amp;M group’s large markets at the start of June 2024 had a negative impact on sales, but sales recovered as the weather normalised at the end of the month. CEO Daniel Ervér says H&amp;M group’s profitability performance during the first half of the year was strong. He warns, though, that external factors such as material costs and foreign currency rates, will have a more negative impact than expected in the second half of the year. Profits have dropped at motoring and cycling retailer Halfords. Halfords blamed continuing declines in the markets for car tyres and for cycling equipment, as consumer demand for big ticket purchases wanes. It made pre-tax profits of £19.9m in the last year, a 45% drop on the £36.2m the previous 12 months. On an underlying basis, though, profits before tax were in line with market expectations at £36.1m, down 18%. Halfords reports that the cycling market contracted faster than expected, leading to more promotional activity to shift stock. Elevated cost inflation continued to be a significant headwind, it adds. Looking ahead, Halfords predicts that market volumes for cycling and consumer tyres will fall in the current financial year: Trading since the start of FY25 has continued to be soft, impacted by low consumer confidence around big ticket, discretionary purchases, and poor spring weather, which has reduced store footfall and affected sales of both cycling and staycation products. Whilst we continue to expect market share gains in the year ahead, based on what we are currently seeing we now expect market volumes to decline in FY25 in cycling and consumer tyres, and to remain broadly flat in motoring servicing and retail motoring products. It’s also a busy morning for UK retailers, with several companies updating the stock market on their performance. Electricals seller Currys has reported a 10% rise in adjusted profit before tax, to £118m, but revenues have dropped 2%. Currys is hoping for a further boost from artificial intelligence, telling shareholders that the coming wave of AI led technology could be the most exciting tech cycle since the Apple iPad in 2010. Alex Baldock, Currys CEO, says: Encouraged as we are by our progress, we know we can go further. For one thing, we expect AI-powered technology to be the most exciting new product cycle since the tablet in 2010. With our partnerships, scale and expert colleagues to demystify AI, we’re best-placed to benefit. Japan’s Nikkei stock market has fallen by 0.8% today, losing 325 points to 39,341 points. A weaker yen is good for Japan’s exporters, so there may be some anxiety that Tokyo could intervene to drive the currency up again. Elon Musk’s SpaceX has been valued at about $210bn based on the value of insider shares being sold in a tender offer, Bloomberg reports today. SpaceX will sell insider shares at $112 apiece in a tender offer, a higher-than-expected price, that boosts the value of Elon Musk’s space and satellite company above its previous valuation of $180bn. SpaceX is considered one of the most profitable start-ups in the world, Bloomberg says, adding: The firm, which was founded in 2002 by Tesla Inc CEO Elon Musk, is one of the most prominent private manufacturers of spacecraft and satellites. It also offers satellite-based internet services through its Starlink subsidiary. The firm also holds a slew of contracts from NASA to provide spacecraft and crew equipment for orbital missions and support for the International Space Station. Earlier this month, SpaceX recorded the first fully successful test flight of its mighty space rocket Starship, when it splashed down successfully in the Indian Ocean. Japanese finance minister, Shunichi Suzuki, pledged today that authorities would take necessary actions on currencies after the yen slid to a 38-year low against the dollar. Japanese authorities are “deeply concerned” about the effect of the yen’s drop on the economy and are watching foreign-exchange moves with a high sense of urgency, Suzuki told reporters. He said: “It’s desirable for exchange rates to move stably. Rapid, one-sided moves are undesirable. In particular, we’re deeply concerned about the effect on the economy. We are watching moves with a high sense of urgency, analysing the factors behind the moves, and will take necessary actions.” Good morning, and welcome to our rolling coverage of business, the financial markets and the world economy. Pressure is piling on Japan’s authorities to intervene in the foreign exchange markets, after the yen weakened to a 38-year low against the US dollar. The yen, which has been ailing for some months, has weakened to as low as 160.8 to the dollar, for the first time since 1986. That takes the yen below its low in April, when Tokyo was forced to intervene in the foreign exchange markets, burning through ¥9.8tn (£48bn) to prop up their currency. The yen’s weakness is due to the interest rate differential between Japan and the rest of the world. While most central banks hiked rates aggressively over the last coule of years, the Bank of Japan (BoJ) only ended its negative interest rate policy this spring, and has pegged borrowing costs to a range of 0%-0.1%. Yesterday, Japan’s top currency official, Masato Kanda, told reporters that the government was “seriously concerned and on high alert” about the yen’s decline and would respond to any “excessive” moves. This week’s weakness has prompted speculation that fresh intervention may be required. Ipek Ozkardeskaya, senior analyst at Swissquote Bank, says: The only thing that prevents the yen from a further fall is the direct intervention risk. But other than that, the yen deserves to lose more blood. One-year risk reversals, which show how traders feel about the yen over a longer time, hint that they’re still kind of excited about the yen compared to the dollar. But that excitement is fading fast as the Bank of Japan (BoJ) keeps delaying its intervention plans meanwhile the Federal Reserve delays its rate cutting plans Another option would be for the BoJ to raise interest rates, of course, and try to strengthen the yen organically that way. This may not be too controversial, since the weak yen is hitting Japanese households hard, explains Kathleen Brooks, research director at XTB, adding: They must deal with rising inflation, as import prices surge, which is also weighing on consumption. Wage growth is also below inflation, which is adding pressure to the Japanese authorities to act. Some argue that the BOJ need to adjust monetary policy and narrow the interest differential with the US and the rest of the world, as that is the most effective way to boost the yen. However, it would also require a shift in priorities at the BOJ, moving away from keeping yields low and stable, to a normalization of monetary policy like that in the US and across Europe. The agenda 8.30am BST: Swedish Riksbank interest rate decision 8.30am 10.30am BST: Bank of England Financial Stability Report 10am BST: Eurozone consumer and economic confidence statistics for June 1.30pm BST: US GDP Q1 (final estimate)',
								},
								tags: [
									{
										id: 'business/business',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Business',
										webUrl: 'https://www.theguardian.com/business/business',
										apiUrl:
											'https://content.guardianapis.com/business/business',
										references: [],
									},
									{
										id: 'business/economics',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Economics',
										webUrl: 'https://www.theguardian.com/business/economics',
										apiUrl:
											'https://content.guardianapis.com/business/economics',
										references: [],
									},
									{
										id: 'business/stock-markets',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Stock markets',
										webUrl:
											'https://www.theguardian.com/business/stock-markets',
										apiUrl:
											'https://content.guardianapis.com/business/stock-markets',
										references: [],
									},
									{
										id: 'business/ftse',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'FTSE',
										webUrl: 'https://www.theguardian.com/business/ftse',
										apiUrl: 'https://content.guardianapis.com/business/ftse',
										references: [],
									},
									{
										id: 'business/yen',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Yen',
										webUrl: 'https://www.theguardian.com/business/yen',
										apiUrl: 'https://content.guardianapis.com/business/yen',
										references: [],
									},
									{
										id: 'world/japan',
										type: 'keyword',
										sectionId: 'world',
										sectionName: 'World news',
										webTitle: 'Japan',
										webUrl: 'https://www.theguardian.com/world/japan',
										apiUrl: 'https://content.guardianapis.com/world/japan',
										references: [],
									},
									{
										id: 'business/bankofenglandgovernor',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Bank of England',
										webUrl:
											'https://www.theguardian.com/business/bankofenglandgovernor',
										apiUrl:
											'https://content.guardianapis.com/business/bankofenglandgovernor',
										references: [],
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'business',
									webTitle: 'Business',
									webUrl: 'https://www.theguardian.com/business',
									apiUrl: 'https://content.guardianapis.com/business',
									editions: [
										{
											id: 'business',
											webTitle: 'Business',
											webUrl: 'https://www.theguardian.com/business',
											apiUrl: 'https://content.guardianapis.com/business',
											code: 'default',
										},
										{
											id: 'uk/business',
											webTitle: 'Business',
											webUrl: 'https://www.theguardian.com/uk/business',
											apiUrl: 'https://content.guardianapis.com/uk/business',
											code: 'uk',
										},
										{
											id: 'us/business',
											webTitle: 'Business',
											webUrl: 'https://www.theguardian.com/us/business',
											apiUrl: 'https://content.guardianapis.com/us/business',
											code: 'us',
										},
										{
											id: 'au/business',
											webTitle: 'Business',
											webUrl: 'https://www.theguardian.com/au/business',
											apiUrl: 'https://content.guardianapis.com/au/business',
											code: 'au',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/news',
								pillarName: 'News',
							},
							{
								id: 'world/live/2024/jun/27/eu-leaders-meet-to-discuss-situation-in-ukraine-and-decide-blocs-future-leaders-europe-live',
								type: 'liveblog',
								sectionId: 'world',
								sectionName: 'World news',
								webPublicationDate: '2024-06-27T12:21:10Z',
								webTitle:
									'EU leaders meet to discuss situation in Ukraine amid divisions over bloc’s future leaders – Europe live',
								webUrl:
									'https://www.theguardian.com/world/live/2024/jun/27/eu-leaders-meet-to-discuss-situation-in-ukraine-and-decide-blocs-future-leaders-europe-live',
								apiUrl:
									'https://content.guardianapis.com/world/live/2024/jun/27/eu-leaders-meet-to-discuss-situation-in-ukraine-and-decide-blocs-future-leaders-europe-live',
								fields: {
									headline:
										'EU leaders meet to discuss situation in Ukraine amid divisions over bloc’s future leaders – Europe live',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qqnmg',
									thumbnail:
										'https://media.guim.co.uk/23f36e25960e9fe21fe41fffab15b69fe2ffea9c/0_303_7932_4759/500.jpg',
									bodyText:
										'The German chancellor, Olaf Scholz, has said the decision to back Ursula von der Leyen for a second term as European Commission president would be discussed carefully with all 27 leaders, Reuters reported. “We have reached a political understanding” among the European Parliament’s three main centrist groups,” Scholz said. “That’s just one position. We will discuss this carefully and fairly. All 27 are equally important. That is also important to me. But we have made it easier to reach a decision,” he said. The comments came after the Italian leader, Giorgia Meloni, expressed her frustration with the process. Hungary’s Viktor Orbán and Italy’s Giorgia Meloni could be seen chatting as they walked together to the leaders’ family photo. Roberta Metsola, the European parliament president, said when arriving at the summit that “2.5 weeks ago we had European elections, we got pretty clear messages from those elections, and now we have to make sure that we implement the political message into our programme.” “That means that we need to renew our focus on competitiveness, on security, on defence, and also on making sure that nobody is left behind in the digital and green transitions – those were pretty clear messages to us,” she said. Daniel Freund, a German Green MEP, has sent a letter with 20,000 signatures to the European Council president calling for the upcoming Hungarian presidency of the Council of the EU to be suspended. “Together with 20.000 citizens, we, the undersigned Members of the European Parliament, ask you to officially suspend the Hungarian Presidency of the Council, which is currently set to begin on July 1st, 2024,” he wrote. Hungary is set to take over the presidency on July 1, despite years-long concerns about democratic backsliding at home and the government’s friendly links to Moscow and Beijing. In the letter, seen by the Guardian, Freund wrote: It would be extremely harmful for the reputation of our Union, if the current Hungarian government would represent us Europeans in any capacity, just after the European elections. The EU has officially frozen funds under the Rule of Law Conditionality Mechanism due to the high levels of corruption in Hungary. Over the years, the Orbán government has also undermined their elections, the Rule of Law, and media freedom in Hungary. On the European level, the Orbán government has compared the European Union with a dictatorship. They published posters across the country with bombs bearing the EU flag, when sanctions against Russia were passed. At the time when imperialist dictator Putin is bombing Ukraine, an EU candidate country, Orbán went out of his way to China just to be able to shake hands with him. It is time the EU stands up against the bullying of a government that clearly has issues subscribing to the most fundamental of our European principles and values. Hungary in its current state would never pass the accession criteria to join the EU. Its criminal leadership should therefore not be allowed to represent the Union. Josep Borrell, the EU’s high representative for foreign affairs, said when arriving at the summit that this council “is especially important because we are going to sign with president Zelenskiy the security commitments with European Union.” Europe has to make up for lost time on defence, Borrell noted, adding that it’s not going to be easy. Addressing the situation in the Middle East, Borrell said there is “strong concern.” “We see starvation continues, bombing continues, humanitarian support is not entering into Gaza,” he said. The high representative also pointed to violence in the West Bank and the situation in the north. “Association Council cannot be business as usual,” he said, referring to the EU-Israel association council. The European People’s party should continue to lead, the Croatian prime minister, Andrej Plenković, said ahead of the leaders’ summit. Ireland’s Simon Harris said when arriving at the summit that when it comes to the European Council’s choice for next European Commission president “there’s absolutely no doubt, there is a clear a consensus that that will be Ursula von der Leyen.” He said the name of Ireland’s next commissioner is “settled.” On the Middle East, Harris did: I do not believe we are using all of the levers at our disposal as a European Union to bring about maximum pressure to create an immediate ceasefire. Simon Harris, the Irish leader, said he is “very pleased that we’re taking a historic step forward today in the fact that the European Council will of course be discussing Ukraine’s membership of the European Union, having had the intergovernmental conference in recent days.” “Looking forward to welcoming president Zelenskiy here to Brussels today as well, as another symbol of the ongoing solidarity that the European Union will continue to show with Ukraine for as long as it takes.” Harris also stressed that he is looking forward to talks on competitiveness. He also said that today he believes “we will bring finality – from the Council’s point of view – for the three top roles in the European institutions for the next period of time.” “We will sign three security agreements, including one with the EU as a whole,” Volodymyr Zelenskiy announced as he arrived for a summit with European leaders in Brussels. “For the first time, this agreement will enshrine the commitment of all 27 Member States to provide Ukraine with extensive support, regardless of any internal institutional changes. Each step we take brings us closer to our historic goal of peace and prosperity in our common European home,” he said. Asked if he’s concerned about the consequences of France’s upcoming elections, the Ukrainian president, Volodymyr Zelenskiy, said in Brussels that he hopes that most countries “will be on right side of history, on our side.” He also said Ukraine wants to prepare a plan to put on the table at a second peace summit. The Ukrainian president, Volodymyr Zelenskiy, has arrived at the summit. Standing alongside Charles Michel, he said: Thanks to you and of course to all the leaders of the EU for such historic outcome. We waited for this long period of time, yes. And everybody – civilians and of course our heroes on the battlefield – you know that how we want to be in the EU. Now we see this strong, historic step forward. And thank you very much for this support and for this outcome, opening negotiations. It’s very important for all of us, for all Ukraine, believe me. And of course, we have to work on next steps. You always say that we are too quick! But we need… we will discuss today with leaders about it, our next steps. He also pointed to “urgent things”, stressing the need for more air defence. EU leaders this afternoon will discuss the latest in Ukraine with Volodymyr Zelenskiy, the Ukrainian president. In his invitation letter to the EU’s 27 heads of state and government, Charles Michel, the European Council president, wrote: Concretely, our meeting will kick off on Thursday 27 June at 2pm with an exchange with President Zelenskyy. This will be an opportunity to discuss the situation on the ground, but also take note of some achievements since our last meeting. In particular, this European Council will be an opportunity to welcome the adoption of negotiating frameworks and the holding of Intergovernmental Conferences with Ukraine, Moldova and Montenegro. These are historic steps in supporting these countries’ respective path towards European membership. Furthermore, we have been ambitious and bold in channelling the extraordinary revenue from immobilised Russian assets to support Ukraine this year. For the following years, together with partners, we will secure loans for Ukraine for an additional EUR 50 billion. It is also imperative that we intensify our military support to Ukraine, focusing on air defence, ammunition, and missiles. Additionally, we must continue to rally broad international support for a just peace in Ukraine based on the UN Charter. Good afternoon and welcome to a special edition of the Europe blog, coming to you from the European Council summit in Brussels. Today, the EU’s 27 heads of state and government are expected to discuss the situation in Ukraine – and make a decision on the bloc’s next top leaders. Send tips and comments to lili.bayer@theguardian.com.',
								},
								tags: [
									{
										id: 'world/europe-news',
										type: 'keyword',
										sectionId: 'world',
										sectionName: 'World news',
										webTitle: 'Europe',
										webUrl: 'https://www.theguardian.com/world/europe-news',
										apiUrl:
											'https://content.guardianapis.com/world/europe-news',
										references: [],
									},
									{
										id: 'world/world',
										type: 'keyword',
										sectionId: 'world',
										sectionName: 'World news',
										webTitle: 'World news',
										webUrl: 'https://www.theguardian.com/world/world',
										apiUrl: 'https://content.guardianapis.com/world/world',
										references: [],
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'world',
									webTitle: 'World news',
									webUrl: 'https://www.theguardian.com/world',
									apiUrl: 'https://content.guardianapis.com/world',
									editions: [
										{
											id: 'world',
											webTitle: 'World news',
											webUrl: 'https://www.theguardian.com/world',
											apiUrl: 'https://content.guardianapis.com/world',
											code: 'default',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/news',
								pillarName: 'News',
							},
							{
								id: 'politics/live/2024/jun/27/uk-general-election-2024-live-updates-debate-betting-scandal-rishi-sunak-keir-starmer-tories-labour',
								type: 'liveblog',
								sectionId: 'politics',
								sectionName: 'Politics',
								webPublicationDate: '2024-06-27T12:17:31Z',
								webTitle:
									'At least seven officers under investigation over bets on general election timing, say Metropolitan police – live',
								webUrl:
									'https://www.theguardian.com/politics/live/2024/jun/27/uk-general-election-2024-live-updates-debate-betting-scandal-rishi-sunak-keir-starmer-tories-labour',
								apiUrl:
									'https://content.guardianapis.com/politics/live/2024/jun/27/uk-general-election-2024-live-updates-debate-betting-scandal-rishi-sunak-keir-starmer-tories-labour',
								fields: {
									headline:
										'At least seven officers under investigation over bets on general election timing, say Metropolitan police – live',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qqytd',
									thumbnail:
										'https://media.guim.co.uk/f76ac29d5d9eb4bcf326f856e76fa5766e7fdaf7/0_42_5930_3560/500.jpg',
									bodyText:
										'Keir Starmer has dismissed the Tory election ad saying people should not “surrender” to Labour, and depicting a family with their hands up, as “really desperate stuff”. (See 11.17am.) Speaking to reporters today, he went on: And I’m surprised by it. I think it underlines the difference between the two campaigns. Now, they’re running a very negative campaign, nothing about the future of the country. I’m very happy to be the candidate going into the final week because putting forward a positive case for the change that country needs. Nigel Farage, the Reform UK leader, has announced that the businessman and former Newcastle United owner Sir John Hall is backing his party. In the past Hall has given more than £500,000 to the Conservative party. But today he told ITV Tyne Tees that the party no longer represented his views. He said: I’m a disillusioned Conservative. I just feel in these latter years they’ve let me down. Hall said he liked Reform UK because they would “fight for my English rights and customs”. He said he would not be joining the party, but he would be donating to it. Speaking in a rally in County Durham, Farage said that Hall had been an “amazing success story” and that he was backing Reform UK after decades of supporting the Tories. Before the rally started, Farage posted this on X to illustrate the size of the crowd. Labour’s shadow business secretary Jonathan Reynolds has said the party wants to run a government, not a Netflix series, as he defended the party’s decision to run a relatively surprise-free election campaign. Reynolds said Labour’s offer of stability and predictable policy would be valuable for businesses, in a speech today to industry leaders at the British Chambers of Commerce. Labour has retained a formidable poll lead over the Conservatives, but has also rowed back on some of its more ambitious proposals -notably on green investment. That has led to some activists complaining the party has not been radical enough. Unlike the Conservatives, Labour has also largely avoided making surprise policy announcements. Mostly it has focused on promoting policies agreed and announced well before the campaign started. This has prompted some political pundits to describe the campaign as boring. But Reynolds said: I’m told by some commentators, they don’t think Labour’s campaign is exciting enough. Look, my friends, we’re not pitching you a new Netflix series, you know, we’re not putting on politics as entertainment. We want a return to serious government, to effective policy, and to politics of public service, not as pantomime. Nigel Farage, the Reform UK leader, is speaking at a rally in Durham. There is a live feed here. Last night the Metropolitan police said that, although the Gambling Commission was investigating most of the suspect election date bets, it was involved in cases where the offending could go beyond the Gambling Act to include offences such as misconduct in public office. The Met has also said seven of its officers are now being investigated. This morning Keir Starmer said this showed why Rishi Sunak should have acted earlier. He said: This latest development highlights 1) how serious this is, 2) that the prime minister should have acted swiftly at the beginning and showed leadership rather than being bullied into taking action, and 3) the wider choice that is now there at the election between carrying on with this sort of behaviour – we’ve seen far too much of this sort of bending the rules – we’ve got to stop that, turn the page and usher in a reset for politics and for our country. Rishi Sunak is speaking at an election event in Derbyshire, and he is restating is claim that a vote for Labour would be a “blank cheque” because Keir Starmer is not saying what he would do in government. He says Starmer has “no answers” on immigration, and Labour won’t match the Tory pledge to increase defence spending to 2.5% of GDP. He says Labour “will whack up your taxes”. The Economist has published a leader endorsing Labour – for the first time since 2005. A magazine that calls itself a newspaper, there is a similar contradiction in the fact that it is committed to free-market liberal economics, and globalisation, and it is backing Keir Starmer even though he is not over-keen on either of those. But the election is a choice, it says. It explains: You would never know it from a low-wattage campaign but after 14 years of Conservative rule, Britain is on the threshold of a Labour victory so sweeping that it may break records. No party fully subscribes to the ideas that The Economist holds dear. The economic consensus in Britain has shifted away from liberal values – free trade, individual choice and limits to state intervention. But elections are about the best available choice and that is clear. If we had a vote on July 4th, we, too, would pick Labour, because it has the greatest chance of tackling the biggest problem that Britain faces: a chronic and debilitating lack of economic growth. Seven officers have been identified as having placed bets on the timing of the general election, the Metropolitan police said today. Britain biggest police force said it will continue to investigate a “small number” of wagers. Andrew Rhodes, chief executive of the Gambling Commission, said: We are focused on an investigation into confidential information being used to gain an unfair advantage when betting on the date of the general election. Our enforcement team has made rapid progress so far and will continue to work closely with the Metropolitan police to draw this case to a just conclusion. We understand the desire for information, however, to protect the integrity of the investigation and to ensure a fair and just outcome, we are unable to comment further at this time, including the name of any person who may be under suspicion. Det Supt Katherine Goodwin, who is leading the Met investigation, said: We have agreed a joint approach with the Gambling Commission, who are the appropriate authority to investigate the majority of these allegations. There will, however, be a small number of cases where a broader criminal investigation by the police is required. We will aim to provide updates at key points as our investigation progresses. One officer, a PC attached to the Royalty and Specialist Protection Command, has been bailed after being arrested on Monday 17 June on suspicion of Misconduct in Public Office. And this is from Chris Bryant, the Labour candidate and shadow minister, on the Conservative party’s “surrender” ad attack against Labour. You didn’t stay for the D-Day commemoration. You didn’t turn up for the votes on Owen Paterson or Boris Johnson. You were beaten by Liz Truss. Half of your candidates have given up. And now you talk of surrender? The number of Metropolitan police officers under investigation over bets on the timing of the general election has risen to at least seven, the force has said. On Tuesday the Met said six officers were being investigated – of whom one was the close protection officer who was arrested. The other five, who were not close protection officers, had not been arrested, but were being investigated by the Gambling Commission, it said. Brendan Cox, whose wife, Jo, was murdered by a rightwing terrorist during the Brexit referendum, has condemned the Conservatives for their “Don’t surrender your families future to Labour” advert. (See 11.17am.) According to the BBC transcript, Rishi Sunak used the word “surrender” 17 times during last night’s debate. Mostly it was in connection to borders and tax policy. Here are some examples. I don’t think that people should surrender their family finances to the Labour party Keir Starmer and the Labour party are not being straight with you. So do not surrender to their tax rises. Do not surrender our welfare system to the Labour party and Keir Starmer. If Labour win, the people smugglers are going to need a bigger boat. Don’t surrender our borders to the Labour party. Do not surrender your local councils and our finances to them. When pensioners are paying tax for the first time, that’s the change that is coming, so don’t surrender to that, because your families are going to pay the price. Today, in an advert on social media, Sunak has returned to the theme. The slogan “Don’t surrender your family’s future to Labour” could be seen as either sinister, or silly (or perhaps both). The picture in this advert presents Labour as an invading army, terrorising families at gunpoint. Presumably Rishi Sunak does not really think of the opposition like this, and so it is just a metaphor – exaggerated, for effect. But it seems intended to resonate with people of a certain generation whose mental furniture has not moved on much since 1945. The slogan also recalls Boris Johnson’s decision to label the bill intended to rule out a no-deal Brexit as a “Surrender Act”, which was provocative because it demonised remain-voting MPs at a time when some of them were getting death threats. Some political figures have condemned Sunak’s use of the slogan. This is from Alastair Campbell, the podcaster and former Labour communications chief. Another day another propaganda triumph for Sunak as the right wing papers unite to proclaim the latest attack line on Labour, NO SURRENDER (Ian Paisley Sr RIP!) As predicted on @RestIsPolitics - this was the line Sunak wanted to land. Anyone would think that Central Office dictated headlines ahead of the debate to save editors having to have judgement of their own. For a somewhat more balanced judgement if you missed our post-debate podcast live last night (which had more than double the viewers @TheSun had for their live YouTube leaders’ debate,) here it is https://youtube.com/live/ya1K0WSvOAk This is from Andrew Fisher, who was head of policy for Jeremy Corbyn when he was Labour leader. Sunak using deeply inflammatory language on migration: “surrender”, “soft touch of Europe” France takes more refugees than us, as does Germany, Spain &amp; Italy. Maybe we should do more to stop creating refugees by bombing their countries &amp; selling arms to dictators And this is from the Lib Dem peer Sarah Ludford. Sunak’s warning to voters not to ‘surrender’ to a Labour victory was shoddy, at least. No doubt trying to echo Churchill. But he said we would not surrender to the Nazis. Starmer, whatever one’s view of him, is not Hitler Rachel Reeves, the shadow chancellor, has seen her popularity rise notably during the election campaign, according to polling by JL Partners for the Rest is Politics podcast. RISE OF REEVES: Rachel Reeves has now joined Keir Starmer as one of two positively rated politicians in the UK. In the latest @restispolitics @JLPartnersPolls, she has moved from a net rating of minus 8 to plus 1. She is also the most popular Labour figure with 2019 Tories. In an interview with Times Radio Bridget Phillipson, the shadow education secretary, insisted that Labour would protect single-sex spaces for women. In the debate last night Rishi Sunak claimed Labour could not do this, because it is not backing his plan to amend the Equality Act to make it clear that, when the legislation refers to sex, it means biological sex. (See 7am.) There have been court rulings saying trans women can be included within the definition too, and the matter may have to be resolved by the supreme court. Keir Starmer argued that the legislation already protected women’s spaces. Asked about this on Times Radio, Phillipson said: I do believe in the importance of single-sex provision for women. So that, for example, when accessing women’s refuge provision, they’re confident that it’s a single sex space. And a Labour government will make sure that we maintain that single sex exemption that already exists within the Equality Act. But to give clarity to service providers, we’ll make sure that they know that they can enforce single sex provision on the basis of biological sex. Asked if that meant a trans woman would be allowed in a women’s refuge, Phillipson said: It means that service providers are able to, under the Equality Act, maintain single sex provision for biological women. I do think alongside that we can deliver appropriate care and support for trans people, but that would be done on a different basis, maintaining single sex provision for biological women. Jeremy Corbyn, the former Labour leader, has joined a picket line at St Thomas’ Hospital in Westminster to show his support for the junior doctors who are on strike. The Economist has become the latest organisation to publish an MRP poll suggesting the Tories are on course for a near wipe-out. Its MRP, which it has carried out with WeThink, suggests Labour is on course to win 465 of the 632 seats in England, Scotland, Wales, the Tories are heading for 76 seats, the Lib Dems 52 seats, and the Greens and Reform UK thee each. This would give Labour a majority of 280. This chart from the Economist’s report shows what the polling suggests has happened to the Conservative party’s 2019 vote. But being scrupulous about data, the Economist does not accept this polling as the final word. It also has its own election prediction model, which incorporates the results of conventional polling, and other MRP polls. It too predicts a huge Labour majority, but not such a colossal one. “Its central estimate is that Labour will have 429 mps, the Conservatives 117, the Liberal Democrats 42 seats, the SNP 23 and Reform UK 2,” the Economist says. Kevin Hollinrake, the business minister, has revealed that he put a bet on the Tories winning the general election. As Eleni Courea reports, Hollinrake told LBC the odds were 9:1 and, although he said people might think the bet was foolhardy, he argued: “Victory is always possible if you don’t stop fighting.” Sadly for the Tories, there is no suggestion that Hollinrake was privy to any inside information that made this bet a wise choice. Good morning. I’m Andrew Sparrow, taking over from Helen Sullivan. As reported earlier, a YouGov snap poll, released almost immediately after last night’s BBC debate was over, said viewers felt it was a dead heat. Asked who did best, the result was 50/50. But later in the evening More in Common released polling suggesting Starmer was seen as the winner, by 56% to 44%. These are from Luke Tryl, More in Common’s UK director. Who won tonight’s debate? @Moreincommon_ snap poll finds 44% saying Rishi Sunak and 56% say Keir Starmer But some good news for Rishi Sunak, people were slightly more likely to say that he did better than they expected than said the same about Keir Starmer. Impossible to know how much is partisan lean and how much is objective judgement of performance, but one crude comparison with general public’s choice of preferred PM shows Sunak outperforming that on “won the debate” by 8 points and Starmer under by 8. A similar pattern emerged after the ITV debate near the start of the campaign. The immediate YouGov poll had Sunak as the winner, but only just, by 51% to 49%. But a subsequent Savanta poll had Starmer as the winner by 44% to 39% (or 53% to 37%, if don’t knows are excluded). If you want to contact me, please post a message below the line (BTL) or message me on X (Twitter). I can’t read all the messages BTL, but if you put “Andrew” in a message aimed at me, I am more likely to see it because I search for posts containing that word. If you want to flag something up urgently, it is best to use X; I’ll see something addressed to @AndrewSparrow very quickly. I find it very helpful when readers point out mistakes, even minor typos (no error is too small to correct). And I find your questions very interesting too. I can’t promise to reply to them all, but I will try to reply to as many as I can, either BTL or sometimes in the blog. Shadow education secretary Bridget Phillipson is on the Today show. Asked about funding for universities, she says: ”Our universities are a brilliant success story… We will have to stabilise the sector. We will make sure that once again our universities are treated as the engines of growth,” and that Labour will have a “different relationship with universities”. It isn’t much of an answer. “They want money,” says Nick Robinson, and Phillipson returns to the Tory record on universities. With that vague response, I’m handing over to dean of this blog, Andrew Sparrow. According to MRP models, the Conservatives will win about 50 seats at next week’s election. Then again, some pollsters using the same method believe they are heading for closer to 200 seats. The same models show Labour heading for somewhere between 375 and more than 500 seats. One reason for the huge variation in seat predictions is that people are preparing to vote tactically in historic numbers, encouraged by two opposition parties that have all but abandoned campaigning in each other’s target constituencies. A poll by Ipsos on Wednesday showed that nearly one in five voters say they are planning to vote for a certain party not because they support it but because it is the one most likely to defeat the Conservatives where they are. That is more than any other general election campaign on record, when the numbers doing so tend to be between 10 and 12%. Keiran Pedley, a pollster at Ipsos, said: “Tactical voting is set to be more widespread than normal, which is why the Conservatives are doing so badly in some seat projections. If you want to predict the scale of the Conservative defeat, you have to understand the impact of tactical voting.” Kiran Stacey and Aletha Adu report: Labour’s shadow education secretary said she did not support David Tennant’s comments after the actor told equalities minister Kemi Badenoch to “shut up” in a row over trans rights. Bridget Phillipson told Times Radio: I personally don’t like that kind of language that was used. And I believe that where we discus these issues – and it is right that we can have an open discussion about them – that we do so in a way that is absolutely frank but respectful, tolerant, and in keeping with the best traditions within our country. And I know that politicians, particularly female politicians, receive an awful lot of abuse sometimes and do frequently face that kind of language being used against them and I don’t think it advances a more tolerant and respectful discussion.” Business minister Kevin Hollinrake says the timing of the latest junior doctors’ strike is “interesting”. Asked whether striking in the final week of an election campaign was “deliberately provocative”, Hollinrake told Sky News: It’s interesting timing, it really is. There’s not been a strike for some time. I don’t know, I’m not going to judge somebody’s motivation for a decision but it’s interesting timing and I regret the decision to strike because we know this doesn’t help waiting lists, which we want to bring down.” Even during a general election campaign with projections of historic – even unprecedented – results, people cannot always be relied upon to give their full attention. “We met a guy who said he was going to vote Labour but wouldn’t now because he had just heard that we were taxing condoms,” said Labour’s Karl Turner, who was first voted in as the MP for Hull East in 2010 and is standing for re-election this time. “I said, ‘condoms?’ ‘Yeah,’ he said: ‘I just heard on that [pointing to the TV] that you are taxing condoms, and I’m not having it. You’re not getting my vote.’ It was Terence [Turner’s parliamentary assistant] here who worked it out. “‘We’re taxing non-doms, not condoms,’ I said. ‘Oh,’ he said. ‘Like the prime minister’s wife? Ah.’ He calls out: ‘Margaret: they’re taxing non-doms, not condoms.’” It was one vote saved for Labour in East Yorkshire – but as the general election moves from what observers have described as the “air war”, where messaging is all-important, to the “ground war”, where mobilising the voters to actually visit the ballot box is key, it is the significant tranche of voters who have entirely switched off that worries Turner. Hull East was the only constituency at the last general election where under half (49.3%) of the electorate turned out to vote. Within Turner’s constituency is the ward of Marfleet, which has a strong claim to be the most politically disillusioned place in Britain. Turnout was 11.6% in the last local elections. Disillusionment and distrust when it comes to politics and politicians is a UK-wide phenomenon, and is strong in Hull East. At the start of the election, the Tories said Rishi Sunak wanted to debate Keir Starmer every week for all six weeks. It was a daft proposal that was never going to be accepted, and at time it felt like a clumsy ploy to make Starmer looked scared when he said no. After tonight, you start to wonder whether there were people in CCHQ who genuinely felt that, with a campaign entirely focused on debates, Sunak might actually have turned things around a bit. That is because, when the history of Labour’s election-winning campaign gets written up, the two head-to-head debates will stand out as Sunak’s best moments. Almost nothing else has gone right for him. But in the first debate he used a (fairly spurious) tax claim to keep Starmer on the defensive for the whole encounter, and tonight he was just as persistent and unrelenting. In some of the policy areas, like small boats and welfare, he was clearly winning the argument on points. And in terms of landing his message, he was probably more successful than Starmer too – even though, with the constant references to “surrender”, his message has become more alarmist and hysterical than when the election started. And while technically the YouGov snap poll is a draw, the YouGov sample is weighted (not like the studio audience, which being 50/50 Labour/Tory, was in reality disproportionately Tory) and so if Sunak is drawing neck-and-neck with Starmer, in relative terms he is doing well. Debate snap polls often just reflect how the public feel about leaders generally, and on all those normal measures Sunak and his party are miles behind. There are two caveats. While Sunak may have done well in terms of scoring debating points, he sounded increasingly like the sort of oddball that you would least want to be standing next to at a party. When he seemed nervous, or was facing challenge, his speaking rate starting speeding out and he began to get shouty and a bit monomaniac. Even if he had a point, it was not endearing. And the other caveat, of course, is that it is too late for any of this to make any difference – which may be why there was a thread of desperation running through the Sunak performance. If Sunak won on policy, Starmer won, very easily, on demeanour. He was more effective than he was in the first debate at pushing back at Sunak’s propagandist claims, and he delivered what was probably the best put-down of the night: Starmer said if Sunak listened to people around the country, he would not be so out of touch. He was not afraid to accuse Sunak of lying, but he managed to come over as less petty than his opponent, and more authoritative and likable. Sunak may have won in that he outperformed expectations. But Starmer presented as the next prime minister, and all he needed was a draw anyway; in that sense it was a win for him too. As trans rights appear to be becoming a growing issue in the election, it is worth looking back at this explainer by my colleague Archie Bland of the current government’s guidance for schools on youth transition. In December last year, Bland writes: The government finally published its long-delayed guidance for schools on youth transition. The document promises a clear set of principles for teachers and staff as they wrestle with the needs of children who are questioning their gender identity. According to the education secretary, Gillian Keegan, the guidance “puts the best interests of all children first”. But while the guidance has been broadly welcomed by those who believe that it is currently too easy for young people to “socially transition” at school, there are others who disagree vehemently. They see the government’s approach as informed by an underlying hostility to trans people, and scepticism about whether they even exist. And although the guidance does not include an outright ban on allowing social transition (said to have been under consideration until it was found to be unlawful), it clearly creates new barriers for teenagers who want to talk to teachers about their gender without fear of being outed at home. Central to criticisms of the government’s approach is a view that it takes a highly controversial set of positions about the best way to support children it calls “gender questioning”, and presents them as unimpeachable facts: The Metropolitan police are to take an expanded role in investigating the criminal allegations triggered by the Westminster betting scandal, which is continuing to overshadow the election campaign. Pippa Crerar and Vikram Dodd report: Sources confirmed that talks between the Gambling Commission, which has been investigating multiple suspicious bets on the election date, and Scotland Yard have been continuing for days. A formal announcement is expected as soon as Thursday but exact details are still to be hammered out, with the row around the scandal engulfing Rishi Sunak’s election campaign showing no sign of abating. A Scotland Yard spokesperson said: “The Met is not taking over the investigation into bets on the timing of the general election. “The Gambling Commission will continue to lead the investigation into cases where the alleged offending is limited to breaches of the Gambling Act only. “Met detectives will lead on investigating a small number of cases to assess whether the alleged offending goes beyond Gambling Act offences to include others, such as misconduct in public office.” Rishi Sunak is returning to the campaign trail on Thursday, PA reports, after a two-day hiatus for the Emperor and Empress of Japan’s state visit and preparations for the final head-to-head debate with Sir Keir Starmer. With one week to go until polling day, the deepening gambling scandal is still likely to feature heavily when he faces the media during a tour of the East Midlands and Yorkshire. He is expected to visit a factory in Derbyshire and hold an evening campaign event in Leeds. Keir Starmer accused Rishi Sunak of using transgender issues “as a political football to divide people” during their head-to-head debate on Wednesday. The pair clashed in response to a question about whether they would protect women’s rights to single-sex spaces, regardless of whether people have a gender recognition certificate. The prime minister said he would “unequivocally” change the law “so that the old Equalities Act recognises that sex means biological sex”. Starmer said he would protect women’s spaces but would not amend legislation in order to do so. The Labour leader told the BBC debate at Nottingham Trent University that Sunak should read the current laws and argued the protections are there. “Don’t just use this as a political football to divide people,” he said. Starmer added: “What I will also say is that I do recognise that there are a small number of people who are born into a gender that they don’t identify with, and I will treat them, as I treat all human beings, with dignity and respect. “I’ll tell you why, because if you don’t, we end up with the prime minister of the United Kingdom standing in parliament making an anti-trans joke in front of the mother of a murdered trans teenager.” Sunak replied: “That’s not what I did. I was pointing out that you’ve changed your mind on this question multiple times.” Starmer was referencing Sunak being accused of mocking trans people in the Commons as the mother of the murdered trans teenager Brianna Ghey visited parliament in February: If you’re catching up, here’s our five key takeaways from last night’s TV debate between Rishi Sunak and Keir Starmer: (This post was previously an embargoed story, which has been removed due to breaking the embargo. It will be restored at the correct time) Here is a more detailed schedule of what we can expect on the campaign trail today, via PA: Rishi Sunak and Keir Starmer return to the campaign trail on Thursday after they clashed over the Westminster betting row in their final televised head-to-head debate ahead of the General Election. Secretary of State for Work and Pensions Mel Stride is on morning media round for the Conservatives, Shadow Secretary of State for Education Bridget Phillipson for Labour, Liberal Democrat leader Ed Davey for the Lib Dems. 9.30am Scottish Liberal Democrat candidate for Edinburgh West, Christine Jardine, is on the campaign trail in Edinburgh. 10.15am: Starmer is in the North West and west Midlands. 11.30am: Sunak is campaigning in the Midlands and Yorkshire with a staff Q&amp;A at a pottery factory in Derbyshire. 12pm: Nigel Farage in the North East, before a Reform event with Richard Tice in the evening. 2.30pm Scottish Labour leader Anas Sarwar to visit a health charity in Kirkcaldy with local candidate Melanie Ward. 3:10pm SNP Leader John Swinney on campaign trail in Edinburgh East and Musselburgh with SNP candidate for Edinburgh East and Musselburgh, Tommy Sheppard. Scottish Conservative leader Douglas Ross to visit business in East Lothian. 7pm: Starmer interviewed by Sky’s Sophy Ridge. 8.30pm: ITV interview with Starmer 9pm: Northern Ireland leaders take part in a BBC debate Last night’s debate – and exclamation points – are common themes on the front pages this morning, with the Guardian leading with PM and Starmer clash over betting scandal in tetchy final TV debate: The Times: Sunak rams home tax message in final debate The Independent: Starmer squares up to striking doctors: I won’t give a 35% rise The Daily Mail: Rishi’s furious blast at Starmer… You are taking people for fools! Scotsman: SNP closing gap on Labour despite contrast in seat count Much like the scandal, the betting puns aren’t over yet: the Daily Record has Flutter Coward beside a picture of a downcast Sunak: The award for counting – almost – to ten goes to the Daily Express, with: No idea! 9 times Starmer fails to give an answer on boats crisis: Maybe ‘the next foreign secretary’ knows the answer, in this week’s New Statesman: And distinguished guests, we have a tie for the Stuff of Nightmares Award, which goes to the cover artists for the New European and the Spectator: The leaders of the BMA’s junior doctors committee (JDC) said today that they could call further strikes for this summer if the next government does not hold talks in a “timely manner”. However, they have stressed in recent months that they would be happy for any significant progress towards their goal of “full pay restoration” to be phased in over a number of years. That has raised tentative hopes that the long-running and very disruptive dispute may soon be over. Wes Streeting, the shadow health secretary, has said that increasing junior doctors’ pay would need to be a “journey not an event”. He has also said that he would not approve a 35% rise because if he did, “any trade union worth its salt” would then demand the same sum for its members. Dr Robert Laurenson, the JDC co-chair, said: “He is talking about things like ‘journey not an event’. We’re happy to have a multiyear pay deal. He has seemingly heard that, and ‘journey not an event’ matches that.” Dr Vivek Trivedi, the other co-chair, said: “The main thing I’ve taken away from discussions [with Labour] is that there is a willingness to try and at least engage in constructive and meaningful [talks]”. He added: “If talks do not move in a timely manner, then of course our members would expect us to call for strike action.” Junior doctors in England will strike today for the 11th time over pay, amid concern in their union that a stoppage so close to the general election is an “own goal”. Senior figures in the British Medical Association (BMA) believe the strike is pointless and “naive” and risks irritating Labour, which looks likely to be in power by next Friday and asked the union to call it off. About 25,000 junior doctors are expected to refuse to work during the five-day stoppage, which begins at 7am today and runs until the same time next Tuesday, 2 July. By the end of it, junior doctors will have been on strike for 44 days since they first took industrial action in March 2023 in pursuit of a 35% pay rise. The 10 previous strikes have forced the NHS to cancel 1.4m outpatient appointments and operations and spend £1.7bn to minimise disruption. NHS England expects the “widespread disruption to care” over the next five days to be worse than before because heat-related health problems are adding to the strain on many services. “This new round of strike action will again hit the NHS very hard,” said Prof Stephen Powis, its national medical director. A snap poll by YouGov of 1716 people had voters evenly split on who won last night’s debate. Sunak and Starmer were also practically tied on who seemed more “prime ministerial”, earning 41% and 42% respectively (with 16% “don’t knows”). Asked how well each individual performed, Starmer came out slightly ahead, with a score of 61% to Sunak’s 56%. Starmer was way ahead on being “in touch with ordinary people”, with 63% to Sunak’s 18%. Starmer was also more likeable (52-33) and trustworthy (50-39). Sunak beat starmer on immigration (55-35) and tax (48-37), with Starmer coming out on top on the economy (47-53), welfare and benefits (51-39) and Britain’s relationship with the EU (52-32). Rishi Sunak and Keir Starmer have clashed over their responses to the Westminster gambling scandal, as it emerged the Metropolitan police is to widen its role in the investigation into bets placed on the general election. In the last head-to-head debate before voters go to the polls, the Labour leader launched a fierce attack on the culture at the top of the Conservative party, saying it showed the “wrong instinct” to place bets on the future of the country – likening it to the cavalier attitude to Covid rules. In the angry exchanges, Sunak repeatedly urged the country not to “surrender” to Labour’s plans on tax and migration and said the general election should not be decided purely based on frustration with the Conservatives. Jessica Elgot and Pippa Crerar report: Hello and welcome to the Guardian’s live coverage of the run-up to the UK general election with me, Helen Sullivan. This time next week polling stations will be preparing to open – voting starts at 7am on 4 July. In their final debate before polling day, Rishi Sunak and Keir Starmer traded barbs over their responses to the gambling scandal, the Guardian’s Jessica Elgot and Pippa Crerar report, as it emerged the Metropolitan police is to widen its role in the investigation into bets placed on the general election. Starmer said he had suspended his candidate, Kevin Craig, “within minutes” of Craig admitting in a statement that he had placed a bet against himself winning the seat a few weeks ago. Starmer was comparing his actions with Sunak, who took days to make the decision. “I think that in the last 14 years politics has become too much about self entitlement, and MPs thinking about what they could get for themselves,” he said. “The instinct of these people to think the first thing they should do is try to make money, that was the wrong instinct, and we have to change that.” He said Sunak had “delayed and delayed and delayed” and had been “bullied into” taking action. “My candidates know I have the highest standards. They have seen by my actions the consequences”. Sunak meanwhile repeatedly urged voters not to “surrender” to a Labour government, using language Boris Johnson used when talking about Brexit. “Do not surrender to the Labour party the control of our borders. If Labour wins, the people smugglers are going to need a bigger boat,” said Sunak. More on the key developments from the debate soon. Meanwhile here is what is coming up today: 9.30am Scottish Liberal Democrat candidate for Edinburgh West, Christine Jardine, is on the campaign trail in Edinburgh. 12pm: Nigel Farage in the north-east, before a Reform event with Richard Tice in the evening. 2.30pm Scottish Labour leader Anas Sarwar to visit a health charity in Kirkcaldy with local candidate Melanie Ward. 3:10pm SNP Leader John Swinney on campaign trail in Edinburgh East and Musselburgh with SNP candidate for Edinburgh East and Musselburgh, Tommy Sheppard. The Scottish Conservatives are on the campaign trail in East Lothian. 8.30pm: ITV interview with Keir Starmer 9pm: Northern Ireland leaders take part in a BBC debate',
								},
								tags: [
									{
										id: 'politics/general-election-2024',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'General election 2024',
										webUrl:
											'https://www.theguardian.com/politics/general-election-2024',
										apiUrl:
											'https://content.guardianapis.com/politics/general-election-2024',
										references: [],
									},
									{
										id: 'politics/general-elections',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'General elections',
										webUrl:
											'https://www.theguardian.com/politics/general-elections',
										apiUrl:
											'https://content.guardianapis.com/politics/general-elections',
										references: [],
									},
									{
										id: 'politics/politics',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'Politics',
										webUrl: 'https://www.theguardian.com/politics/politics',
										apiUrl:
											'https://content.guardianapis.com/politics/politics',
										references: [],
										description: '<p><br></p>',
									},
									{
										id: 'politics/conservatives',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'Conservatives',
										webUrl:
											'https://www.theguardian.com/politics/conservatives',
										apiUrl:
											'https://content.guardianapis.com/politics/conservatives',
										references: [],
									},
									{
										id: 'politics/labour',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'Labour',
										webUrl: 'https://www.theguardian.com/politics/labour',
										apiUrl: 'https://content.guardianapis.com/politics/labour',
										references: [],
									},
									{
										id: 'uk/uk',
										type: 'keyword',
										sectionId: 'uk-news',
										sectionName: 'UK news',
										webTitle: 'UK news',
										webUrl: 'https://www.theguardian.com/uk/uk',
										apiUrl: 'https://content.guardianapis.com/uk/uk',
										references: [],
									},
									{
										id: 'politics/keir-starmer',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'Keir Starmer',
										webUrl: 'https://www.theguardian.com/politics/keir-starmer',
										apiUrl:
											'https://content.guardianapis.com/politics/keir-starmer',
										references: [],
									},
									{
										id: 'politics/rishi-sunak',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'Rishi Sunak',
										webUrl: 'https://www.theguardian.com/politics/rishi-sunak',
										apiUrl:
											'https://content.guardianapis.com/politics/rishi-sunak',
										references: [],
									},
									{
										id: 'politics/leaders-debates',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: "Leaders' debates",
										webUrl:
											'https://www.theguardian.com/politics/leaders-debates',
										apiUrl:
											'https://content.guardianapis.com/politics/leaders-debates',
										references: [],
									},
									{
										id: 'media/bbc',
										type: 'keyword',
										sectionId: 'media',
										sectionName: 'Media',
										webTitle: 'BBC',
										webUrl: 'https://www.theguardian.com/media/bbc',
										apiUrl: 'https://content.guardianapis.com/media/bbc',
										references: [],
									},
									{
										id: 'politics/polls',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'Opinion polls',
										webUrl: 'https://www.theguardian.com/politics/polls',
										apiUrl: 'https://content.guardianapis.com/politics/polls',
										references: [],
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'politics',
									webTitle: 'Politics',
									webUrl: 'https://www.theguardian.com/politics',
									apiUrl: 'https://content.guardianapis.com/politics',
									editions: [
										{
											id: 'politics',
											webTitle: 'Politics',
											webUrl: 'https://www.theguardian.com/politics',
											apiUrl: 'https://content.guardianapis.com/politics',
											code: 'default',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/news',
								pillarName: 'News',
							},
							{
								id: 'uk-news/article/2024/jun/27/man-on-trial-posed-imminent-threat-to-holly-willoughby-us-officer-tells-jury',
								type: 'article',
								sectionId: 'uk-news',
								sectionName: 'UK news',
								webPublicationDate: '2024-06-27T12:11:14Z',
								webTitle:
									'Man on trial posed ‘imminent threat’ to Holly Willoughby, US officer tells jury',
								webUrl:
									'https://www.theguardian.com/uk-news/article/2024/jun/27/man-on-trial-posed-imminent-threat-to-holly-willoughby-us-officer-tells-jury',
								apiUrl:
									'https://content.guardianapis.com/uk-news/article/2024/jun/27/man-on-trial-posed-imminent-threat-to-holly-willoughby-us-officer-tells-jury',
								fields: {
									headline:
										'Man on trial posed ‘imminent threat’ to Holly Willoughby, US officer tells jury',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qqzva',
									thumbnail:
										'https://media.guim.co.uk/b45808c4aa7a932f56cd2c391fb8daba322d5690/0_118_1785_1071/500.jpg',
									bodyText:
										'A security guard on trial for allegedly plotting to murder Holly Willoughby posed an “imminent threat” to her safety, the US-based undercover officer who flagged his apparent intentions to UK police told a jury on Thursday. The officer appeared at Chelmsford crown court via video link using the alias David Nelson to give evidence in the trial of 37-year-old Gavin Plumb, who denies plotting to kidnap, rape and murder Willoughby. Nelson, who is attached to the Owatonna police department in Minnesota, told jurors that one of his roles was to “engage in online investigations across various types of social media applications”, which was how he met Plumb. He told the court he looked for instances of human trafficking and kidnapping, and that he came across Plumb in an online group called “Abduct Lovers”. The prosecutor, Alison Morgan KC, asked the officer why he decided to send a direct message to Plumb, who was living in Harlow, Essex, at the time. “I felt there was imminent threat to the female at that time,” Nelson said. Plumb shared “what appeared to be the address” of the TV presenter, Nelson told the court, and he agreed that Plumb also shared “information about the vehicle used by Ms Willoughby”. He recalled the defendant sending him an image of what the officer described as an “abduction kit”, saying: “At that point in the conversation it was quite alarming.” He said Plumb also sent a photo of bottles of chloroform. “Earlier in the conversation he had indicated he had chloroform,” he told the court. “It was not present in that photo of his abduction kit. I asked where the chloroform was and he sent a picture of chloroform.” The jury heard earlier in the trial that a search of Plumb’s home found items including sexualised paraphernalia, chloroform, cable ties and a folding knife, as well as a mobile phone with more than 10,000 images of Willoughby. The court heard that Plumb sent the officer a screenshot of a Google map showing the route from Plumb’s address to Willoughby’s home. Nelson told the jury that he asked Plumb how far it was from his place to where Willoughby lived, “to figure out where Mr Plumb was located, where he lived”. The officer passed information about Plumb to the FBI, the court heard. There was a meeting between Nelson, the FBI and the Metropolitan police on 4 October last year. Morgan said: “And during the course of that liaison between the FBI and the Metropolitan police, were you providing up-to-date information from the chat you had had with the defendant?” The officer replied: “Yes.” He also agreed that the information was “being passed on effectively for authorities in the UK to deal with”. Earlier in the trial, the jury was told that Plumb has previous convictions for attempted kidnap and false imprisonment. He had tried to force two women off a train with a fake gun and a threatening note in 2006 and attempted to tie up two teenage girls in a Woolworths stock room in 2008. The trial continues.',
								},
								tags: [
									{
										id: 'uk/uk',
										type: 'keyword',
										sectionId: 'uk-news',
										sectionName: 'UK news',
										webTitle: 'UK news',
										webUrl: 'https://www.theguardian.com/uk/uk',
										apiUrl: 'https://content.guardianapis.com/uk/uk',
										references: [],
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'uk-news',
									webTitle: 'UK news',
									webUrl: 'https://www.theguardian.com/uk-news',
									apiUrl: 'https://content.guardianapis.com/uk-news',
									editions: [
										{
											id: 'uk-news',
											webTitle: 'UK news',
											webUrl: 'https://www.theguardian.com/uk-news',
											apiUrl: 'https://content.guardianapis.com/uk-news',
											code: 'default',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/news',
								pillarName: 'News',
							},
							{
								id: 'business/article/2024/jun/27/bp-imposes-hiring-freeze-and-halts-new-offshore-wind-projects',
								type: 'article',
								sectionId: 'business',
								sectionName: 'Business',
								webPublicationDate: '2024-06-27T12:02:25Z',
								webTitle:
									'BP imposes hiring freeze and halts new offshore wind projects',
								webUrl:
									'https://www.theguardian.com/business/article/2024/jun/27/bp-imposes-hiring-freeze-and-halts-new-offshore-wind-projects',
								apiUrl:
									'https://content.guardianapis.com/business/article/2024/jun/27/bp-imposes-hiring-freeze-and-halts-new-offshore-wind-projects',
								fields: {
									headline:
										'BP imposes hiring freeze and halts new offshore wind projects',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qqndn',
									thumbnail:
										'https://media.guim.co.uk/b91cd0b3345550541c657c44c5fb9ae083ebdb5c/0_267_5500_3299/500.jpg',
									bodyText:
										'Thehead of BP has imposed a hiring freeze and halted new offshore wind projects, in an apparent attempt to placate investors who are unhappy with the oil company’s green targets. Murray Auchincloss – BP’s former finance chief who was appointed CEO in January after the shock departure of his predecessor, Bernard Looney, for failing to fully detail relationships with colleagues last year – is slowing down investments in big low-carbon projects such as offshore wind, in news first reported by Reuters. This is a reversal of the direction Looney was taking to move the company away from fossil fuels, with a pledge to “become a net zero company by 2050 or sooner”. That policy has weighed on BP’s shares as some renewable projects proved more costly than expected, while profits from oil and gas soared after Russia’s invasion of Ukraine more than two years ago. Over the past four years, the oil company has built up a sizeable portfolio of offshore wind projects capable of generating 9.5 gigawatts of energy in total in the UK, Germany and the US that are yet to be developed. It wants to focus on these assets, it is understood, rather than bidding for new renewable projects. BP is thought to have imposed a hiring freeze, with a few exceptions such as frontline roles. It has reassigned dozens of people tasked with finding new renewables opportunities to its offshore wind projects in Britain and Germany, Reuters reports, and could make some job cuts in renewables. BP shares were up about 1% on Thursday, but have underperformed rivals in recent months, prompting speculation that it could be a takeover target. Looney set out a “net zero” plan that originally aimed to cut the company’s oil production by 2030 while others plan to increase their fossil fuel production. BP has come under mounting pressure from environmental campaigners after watering down its green targets last year. Auchincloss is reportedly looking at investing in and possibly acquiring new oil and gas assets to strengthen BP’s existing operations, particularly in the Gulf of Mexico and the shale basins acquired from the Anglo-Australian miner BHP in Texas. BP is also investing in biofuels and low-carbon businesses that can generate returns in the short term. A week ago, the company agreed a $1.4bn deal to take full ownership of its Brazilian sugar and ethanol joint venture, but said it was scaling back plans for development of new biofuels projects. BP said: “As Murray Auchincloss said in February, BP’s destination – transforming from international oil company to integrated energy company – is unchanged, but we are going to deliver as a simpler, more focused and higher value company. “We set out six priorities that underpin this, including driving greater focus into the business, on to activities that create the most value, as well as delivering both the next wave of efficiencies and BP’s growth projects.” Auchincloss has pledged a “more pragmatic” approach to BP’s green targets since taking up the CEO role permanently in January. In May, BP said it would cut $2bn of costs by the end of 2026, after reporting lower than expected profits for the first quarter of the year. Auchincloss said he planned to make the savings by choosing fewer new projects to invest in over the coming years.',
								},
								tags: [
									{
										id: 'business/bp',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'BP',
										webUrl: 'https://www.theguardian.com/business/bp',
										apiUrl: 'https://content.guardianapis.com/business/bp',
										references: [],
									},
									{
										id: 'environment/windpower',
										type: 'keyword',
										sectionId: 'environment',
										sectionName: 'Environment',
										webTitle: 'Wind power',
										webUrl: 'https://www.theguardian.com/environment/windpower',
										apiUrl:
											'https://content.guardianapis.com/environment/windpower',
										references: [],
									},
									{
										id: 'business/oilandgascompanies',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Oil and gas companies',
										webUrl:
											'https://www.theguardian.com/business/oilandgascompanies',
										apiUrl:
											'https://content.guardianapis.com/business/oilandgascompanies',
										references: [],
									},
									{
										id: 'environment/renewableenergy',
										type: 'keyword',
										sectionId: 'environment',
										sectionName: 'Environment',
										webTitle: 'Renewable energy',
										webUrl:
											'https://www.theguardian.com/environment/renewableenergy',
										apiUrl:
											'https://content.guardianapis.com/environment/renewableenergy',
										references: [],
									},
									{
										id: 'business/oil',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Oil',
										webUrl: 'https://www.theguardian.com/business/oil',
										apiUrl: 'https://content.guardianapis.com/business/oil',
										references: [],
									},
									{
										id: 'business/energy-industry',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Energy industry',
										webUrl:
											'https://www.theguardian.com/business/energy-industry',
										apiUrl:
											'https://content.guardianapis.com/business/energy-industry',
										references: [],
									},
									{
										id: 'environment/biofuels',
										type: 'keyword',
										sectionId: 'environment',
										sectionName: 'Environment',
										webTitle: 'Biofuels',
										webUrl: 'https://www.theguardian.com/environment/biofuels',
										apiUrl:
											'https://content.guardianapis.com/environment/biofuels',
										references: [],
									},
									{
										id: 'business/business',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Business',
										webUrl: 'https://www.theguardian.com/business/business',
										apiUrl:
											'https://content.guardianapis.com/business/business',
										references: [],
									},
									{
										id: 'environment/oil',
										type: 'keyword',
										sectionId: 'environment',
										sectionName: 'Environment',
										webTitle: 'Oil',
										webUrl: 'https://www.theguardian.com/environment/oil',
										apiUrl: 'https://content.guardianapis.com/environment/oil',
										references: [],
									},
									{
										id: 'business/commodities',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Commodities',
										webUrl: 'https://www.theguardian.com/business/commodities',
										apiUrl:
											'https://content.guardianapis.com/business/commodities',
										references: [],
									},
									{
										id: 'environment/fossil-fuels',
										type: 'keyword',
										sectionId: 'environment',
										sectionName: 'Environment',
										webTitle: 'Fossil fuels',
										webUrl:
											'https://www.theguardian.com/environment/fossil-fuels',
										apiUrl:
											'https://content.guardianapis.com/environment/fossil-fuels',
										references: [],
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'business',
									webTitle: 'Business',
									webUrl: 'https://www.theguardian.com/business',
									apiUrl: 'https://content.guardianapis.com/business',
									editions: [
										{
											id: 'business',
											webTitle: 'Business',
											webUrl: 'https://www.theguardian.com/business',
											apiUrl: 'https://content.guardianapis.com/business',
											code: 'default',
										},
										{
											id: 'uk/business',
											webTitle: 'Business',
											webUrl: 'https://www.theguardian.com/uk/business',
											apiUrl: 'https://content.guardianapis.com/uk/business',
											code: 'uk',
										},
										{
											id: 'us/business',
											webTitle: 'Business',
											webUrl: 'https://www.theguardian.com/us/business',
											apiUrl: 'https://content.guardianapis.com/us/business',
											code: 'us',
										},
										{
											id: 'au/business',
											webTitle: 'Business',
											webUrl: 'https://www.theguardian.com/au/business',
											apiUrl: 'https://content.guardianapis.com/au/business',
											code: 'au',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/news',
								pillarName: 'News',
							},
							{
								id: 'us-news/article/2024/jun/27/biden-trump-rematch-history',
								type: 'article',
								sectionId: 'us-news',
								sectionName: 'US news',
								webPublicationDate: '2024-06-27T12:00:07Z',
								webTitle:
									'Biden v Trump II: a rematch with few historical precedents',
								webUrl:
									'https://www.theguardian.com/us-news/article/2024/jun/27/biden-trump-rematch-history',
								apiUrl:
									'https://content.guardianapis.com/us-news/article/2024/jun/27/biden-trump-rematch-history',
								fields: {
									headline:
										'Biden v Trump II: a rematch with few historical precedents',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qq8z2',
									thumbnail:
										'https://media.guim.co.uk/fa977a0053a2011e57ec1e696816e548e67874d5/1_0_2998_1800/500.jpg',
									bodyText:
										'When Joe Biden and Donald Trump secured enough delegates to lead the Democratic and Republican party presidential tickets in November, they confirmed what many voters expected but fewer actually wanted: a redo of the 2020 election. Republicans skeptical about giving Trump a second shot tried in vain to elevate a viable primary opponent. Powerful donors, including the Koch-aligned Americans for Prosperity Action, poured money into former South Carolina governor Nikki Haley’s campaign, but Haley was unable to claw enough support away from Trump to pose a threat to the former president. So for the first time in more than 50 years, the Republican party will rerun a candidate who already lost a general presidential election – the last time that happened was in 1968, when Richard Nixon, who had lost the 1960 general presidential election, ran again and won. It has been even longer since a presidential candidate faced a true rematch. When was the last presidential rematch? The last time Americans voted in a contest between the same two presidential candidates as the election before was in 1956, when the Republican Dwight Eisenhower and the Democrat Adlai Stevenson faced off for the second time in four years. Eisenhower, a former military officer famed for his triumph as a second world war general, beat the Stevenson, who was known as cerebral and humorless (“Eisenhower a Typical Man of Action And Stevenson a Man of Thought,” read a 1952 New York Times headline), in a landslide in 1952. During his first term, Eisenhower, an anti-communist, backed the regime changes in Iran in 1953 and Guatemala in 1954 – replacing elected leaders with authoritarian regimes. The same year, he signed the Communist Control Act, which made the Communist party illegal in the United States, calling it a “conspiracy dedicated to the violent overthrow of our entire form of government”. On domestic economic issues, he governed as a moderate, expanding social security benefits to millions of people and creating the Department of Health, Education, and Welfare (later renamed the Department of Health and Human Services). By the end of his first term, Eisenhower had grown elderly but remained popular. Stevenson scraped by in the Democratic primary but lost resoundingly in the 1956 general election by an even wider margin than the first time around, with Eisenhower winning more than 57% of the vote, 457 electoral college votes and all but seven of the states. What about an ex-president, like Trump, running against an incumbent? “If [Trump] were to win, he would be the only one since Grover Cleveland to actually get back to the presidency after losing it,” said Jeff Pasley, a professor of American history at the University of Missouri. Elected in 1884, Cleveland was the first Democrat to win the presidency after the civil war. The former New York governor had crusaded against corruption in politics and was active in the economically conservative, pro-business “Bourbon Democrat” movement. In the lead-up to the election, Cleveland’s supporters lobbed allegations of corruption against his opponent James Blaine, questioning Blaine’s financial dealings with railroad companies. Republicans, in turn, hammered on allegations that Cleveland had secretly fathered a child during an illicit affair with a waitress – their respective alleged moral failings became central to the 1884 campaign. The personal attacks ignored a deeper, fundamental moral corruption in American politics and society. As historian Henry Graff observed in his biography of Cleveland, the president’s first campaign took place amid Jim Crow and the backlash to Reconstruction-era policies granting equal rights to Black Americans: “[R]acism was rampant in the country” with formerly enslaved Americans facing “discrimination and segregation and, increasingly in the South, lynching”, while the genocidal conquest of Indigenous lands continued into the end of the 19th century. “The campaign,” wrote Graff, “avoided these pressing and shameful matters.” Cleveland won the popular vote narrowly and picked up 37 more electoral votes than Blaine. During his first term, Cleveland advocated for, but ultimately failed to enact tariff reform – a key issue of his first campaign. He viewed his post as president as an administrative one and was reluctant to act forcefully. He ran for re-election in 1888 against the Republican Benjamin Harrison, narrowly winning the popular vote but losing the electoral vote resoundingly. Determined to hold office again, Cleveland decided to run for president in the 1892 cycle, campaigning again in opposition to tariff hikes. A few important things had changed in the four years that Cleveland was out of office. The Populist party, which advocated an eight-hour workday and benefits for veterans, was drawing increasing support from the Republican voters who prioritized those issues. Meanwhile, Harrison’s wife, Caroline Harrison, was dying of tuberculosis. During Caroline’s illness, Harrison had refrained from campaigning, and when she died two weeks before the election, the other candidates stopped campaigning out of respect, too. Cleveland won by a wide margin in both the popular vote and electoral college, making him the only president to come back and win after losing to the same candidate four years earlier. What lessons can Cleveland’s non-consecutive presidencies teach us about Biden v Trump? Cleveland’s example shows it’s possible for an ex-president to claw the office back after losing it to the same opponent. But it’s also a tricky comparison: Cleveland was, according to Graff, “the very symbol of rectitude and incorruptibility” and didn’t face a barrage of criminal indictments or a well-coordinated opposition campaign like Biden’s. Meanwhile, his supporters may have agreed with him on economic issues, but they were hardly fanatics. “Cleveland had fans but it wasn’t like there was a Cleveland cult,” said Pasley. “He just happened to be the last successful Democratic president.”',
								},
								tags: [
									{
										id: 'us-news/us-elections-2024',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'US elections 2024',
										webUrl:
											'https://www.theguardian.com/us-news/us-elections-2024',
										apiUrl:
											'https://content.guardianapis.com/us-news/us-elections-2024',
										references: [],
										description:
											'<p>News and comment about the 2024 US presidential election. Voters head to the polls on 5 November</p>',
									},
									{
										id: 'us-news/us-news',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'US news',
										webUrl: 'https://www.theguardian.com/us-news/us-news',
										apiUrl: 'https://content.guardianapis.com/us-news/us-news',
										references: [],
									},
									{
										id: 'us-news/us-politics',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'US politics',
										webUrl: 'https://www.theguardian.com/us-news/us-politics',
										apiUrl:
											'https://content.guardianapis.com/us-news/us-politics',
										references: [],
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'us-news',
									webTitle: 'US news',
									webUrl: 'https://www.theguardian.com/us-news',
									apiUrl: 'https://content.guardianapis.com/us-news',
									editions: [
										{
											id: 'us-news',
											webTitle: 'US news',
											webUrl: 'https://www.theguardian.com/us-news',
											apiUrl: 'https://content.guardianapis.com/us-news',
											code: 'default',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/news',
								pillarName: 'News',
							},
							{
								id: 'us-news/article/2024/jun/27/biden-trump-debate-what-to-know',
								type: 'article',
								sectionId: 'us-news',
								sectionName: 'US news',
								webPublicationDate: '2024-06-27T12:00:06Z',
								webTitle:
									'Joe Biden v Donald Trump: what you need to know about the first 2024 presidential debate',
								webUrl:
									'https://www.theguardian.com/us-news/article/2024/jun/27/biden-trump-debate-what-to-know',
								apiUrl:
									'https://content.guardianapis.com/us-news/article/2024/jun/27/biden-trump-debate-what-to-know',
								fields: {
									headline:
										'Joe Biden v Donald Trump: what you need to know about the first 2024 presidential debate',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qqkbq',
									thumbnail:
										'https://media.guim.co.uk/0e2750ebc39919d45b8b7f41dc1fcf7abb90220d/535_131_3687_2213/500.jpg',
									bodyText:
										'Joe Biden and Donald Trump will hold the first of two scheduled US presidential debates on Thursday, a high-stakes re-match between two well-defined political foes. The earlier-than-usual confrontation will give both men a chance to make their case for a second-term to what could be one of the largest television – and internet – audiences of the election cycle. Thursday’s show down also carries the risk that Americans already dissatisfied with their options will come away even more dismayed. Polls show an extremely tight race between the 81-year-old incumbent and the 78-year-old former US president – and both candidates remain broadly unpopular. Here’s what to know and what to watch during the 90-minute primetime event, scheduled to start at 9pm ET inside a CNN studio in Atlanta. What’s at stake for each candidate? Both candidates arrive at the debate with a similar goal: magnify the other’s weaknesses. Trump has been convicted of 34 felony counts, and is scheduled to be sentenced on 11 July. This week marked two years since the supreme court overturned Roe v Wade, a decision Trump has taken credit for. As president, he nominated three conservative justices who voted to eliminate the constitutional right to an abortion, sparking a political backlash even in predominantly conservative states. His vision for a second term includes the promise of retribution and threats to prosecute his political enemies, raising alarms about the future of American democracy and the rule of law. Biden, meanwhile, must confront the electorate’s deep malaise: discontent over his handling of the economy and the southern border. But perhaps even more acutely, Biden is facing questions about whether he has the stamina and cognitive health to lead the country for another four years. A coherent and energetic performance – like his State of the Union address – could allay some concerns. Trump and his team are scrambling to reset expectations for Biden, after placing the bar so low that some conservatives are warning that Biden will exceed expectations if he manages simply to stay awake for 90 minutes. Despite the right’s portrayal of Biden as frail and doddering, including through the use of misleading videos, Trump also has a pattern of rambling and gaffe-making during campaign speeches. Biden, meanwhile, is also working against the weight of history: incumbent presidents, out of practice after nearly four years of being in charge, tend to lose the first debate. What’s the strategy for each candidate? Both candidates have presidential records to defend and second-term visions to offer. From the debate stage, Biden’s challenge will be to remind voters why they chose him over Trump four years ago. He is likely to use Trump’s own words against him – arguing that the former president is a grave risk to reproductive rights and American democracy. On immigration, Biden has new data to point to, showing the number of encounters at the south-west border declined steadily since his asylum restrictions took effect. He also recently rolled out new actions to expand pathways to citizenship for people living in the US without documentation. Staying calm but alert under the barrage of attacks expected to fly from Trump poses another test for the president, who is known to have a temper when provoked. Trump, by contrast, needs to appeal to the swing voters and moderate Republicans who abandoned him in 2020 but are unhappy with the present state of affairs. They are not likely to be persuaded by personal insults and conspiracy theories. Rather than resurfacing baseless claims about the 2020 election or fuming about his own legal entanglements, voters will want to know if he’s capable of governing in their interest, pressing the Republican’s advantage on the economy and immigration. Moderators are sure to try to pin Trump down on abortion and reproductive rights. A disciplined performance might be enough to convince some of his Republican skeptics. The legal issues There is a debate among Democrats over how central an issue Biden should make Trump’s felony counts, of falsifying business records as part of a criminal hush money scheme to influence the outcome of the 2016 election. He also faces serious charges in three further criminal trials. For many voters, Trump’s legal travails are eclipsed by their concerns over the economy, immigration, abortion rights and the state of democracy. But there are signs the conviction is a concern for some voters, particularly young people and people without a college degree that the president needs to motivate. Biden has mostly been restrained on the subject of Trump’s prosecutions to avoid any appearance of political interference, though that hasn’t stopped the former president from alleging as much. Biden’s campaign has sought to cast the felonies – and pending cases – as a commitment to the rule of law and the equal application of justice. With the exception of a few jabs at campaign events, Biden is mostly letting his allies make the aggressive attacks against Trump’s legal record. Trump, meanwhile, could also go after Biden’s son, Hunter, who was recently convicted on charges related to the purchase of a gun. Trump and his rightwing allies have also tried to tie Hunter’s foreign business dealings to the president, but they uncovered no evidence to support that. The rules of the debate Until relatively recently, it wasn’t clear Biden and Trump would share a stage again after 2020. But then their campaigns agreed to a pair of debates, the first scheduled for Thursday, 27 June, the earliest in the nation’s history. The CNN-hosted event, moderated by network anchors Jake Tapper and Dana Bash, circumvents the nonpartisan Commission on Presidential Debates, which typically sets the debate schedule and the rules. It will run for 90 minutes, with two scheduled commercial breaks. As in past debates, the rules of engagement and – how effectively the moderators enforce them – will help set the tone. According to the terms mutually agreed to by the campaigns, it will take place in an Atlanta studio without an audience that deprives Trump of the real-time feedback he craves from his supporters. The candidates’ microphones will be muted when it is not their turn to speak, an attempt to minimize the onstage chaos that overwhelmed their first debate in 2020. Independent candidate Robert Kennedy Jr failed to qualify under CNN’s eligibility criteria, which included earning at least 15% support in four high-quality polls and appearing on enough state ballots to reach 270 electoral votes. There will be no opening statement. A coin flip determined the podium placement and the order of closing statements. Biden’s campaign chose to select the podium that will appear on the right side of viewers’ screens, while Trump’s campaign chose to deliver his closing argument last. Will it move the needle? About six in 10 Americans say they are “extremely” or “very” likely to tune into the debate live, or to watch parts of it afterward, or read or listen to analysis of their performance, according to a new poll from The Associated Press-NORC Center for Public Affairs Research. It also found that supporters of both candidates view the debate as important. Americans are deeply polarized and the universe of voters open to persuasion – and live in the handful of states that will decide the election – is small. Many of those people will watch, like sports fans, to cheer on their candidate. Others may tune in simply for the spectacle of showdown between the two oldest major party presidential nominees in American history. As has become tradition, both campaigns will likely claim success immediately following the debate. To the degree both spin operations can pump out content highlighting their candidates’ stand out moments – and their opponents’ missteps – they will be correct. Few expect a polling bump to last through election day. Due to the early timing of the debate, any boost from a strong performance is unlikely to last. By contrast, a major gaffe – even a minor gaffe, depending how it’s repackaged and disseminated – could haunt the candidate online through the campaign. And perhaps, for the viewers who have so far tried to look away, the debate will clarify the choice and the stakes this November.',
								},
								tags: [
									{
										id: 'us-news/us-elections-2024',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'US elections 2024',
										webUrl:
											'https://www.theguardian.com/us-news/us-elections-2024',
										apiUrl:
											'https://content.guardianapis.com/us-news/us-elections-2024',
										references: [],
										description:
											'<p>News and comment about the 2024 US presidential election. Voters head to the polls on 5 November</p>',
									},
									{
										id: 'us-news/us-news',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'US news',
										webUrl: 'https://www.theguardian.com/us-news/us-news',
										apiUrl: 'https://content.guardianapis.com/us-news/us-news',
										references: [],
									},
									{
										id: 'us-news/joebiden',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'Joe Biden',
										webUrl: 'https://www.theguardian.com/us-news/joebiden',
										apiUrl: 'https://content.guardianapis.com/us-news/joebiden',
										references: [],
										description:
											'<p>News about Joe Biden, the 46th US president, including comment and features from the Guardian</p>',
									},
									{
										id: 'us-news/donaldtrump',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'Donald Trump',
										webUrl: 'https://www.theguardian.com/us-news/donaldtrump',
										apiUrl:
											'https://content.guardianapis.com/us-news/donaldtrump',
										references: [],
										description:
											'<p>News about Donald Trump, the 45th US president, including comment and features from the Guardian</p>',
									},
									{
										id: 'us-news/democrats',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'Democrats',
										webUrl: 'https://www.theguardian.com/us-news/democrats',
										apiUrl:
											'https://content.guardianapis.com/us-news/democrats',
										references: [],
										description:
											'<p>News about the US Democratic party, including comment and features from the Guardian</p>',
									},
									{
										id: 'us-news/republicans',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'Republicans',
										webUrl: 'https://www.theguardian.com/us-news/republicans',
										apiUrl:
											'https://content.guardianapis.com/us-news/republicans',
										references: [],
										description:
											'<p>News about the US Republican party, including comment and features from the Guardian</p>',
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'us-news',
									webTitle: 'US news',
									webUrl: 'https://www.theguardian.com/us-news',
									apiUrl: 'https://content.guardianapis.com/us-news',
									editions: [
										{
											id: 'us-news',
											webTitle: 'US news',
											webUrl: 'https://www.theguardian.com/us-news',
											apiUrl: 'https://content.guardianapis.com/us-news',
											code: 'default',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/news',
								pillarName: 'News',
							},
							{
								id: 'football/article/2024/jun/27/morgans-olympics-snub-may-not-be-emma-hayess-most-contentious-decision',
								type: 'article',
								sectionId: 'football',
								sectionName: 'Football',
								webPublicationDate: '2024-06-27T11:57:37Z',
								webTitle:
									'Morgan’s Olympic snub may not be Emma Hayes’s most contentious decision',
								webUrl:
									'https://www.theguardian.com/football/article/2024/jun/27/morgans-olympics-snub-may-not-be-emma-hayess-most-contentious-decision',
								apiUrl:
									'https://content.guardianapis.com/football/article/2024/jun/27/morgans-olympics-snub-may-not-be-emma-hayess-most-contentious-decision',
								fields: {
									headline:
										'Morgan’s Olympic snub may not be Emma Hayes’s most contentious decision',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qqkx4',
									thumbnail:
										'https://media.guim.co.uk/2ac4e1de80aa2cc66239fdf80fcdff68ef62ca6a/2_0_4996_3000/500.jpg',
									bodyText:
										'Emma Hayes has named her first squad for a major tournament. With just 18 players permitted for the Olympic roster, the margins to get the call-up for Paris were slim, and with her selections, Hayes sent a clear signal. This is a USWNT roster that fully embraces an emerging generation of talent. No veteran star was too venerated to be cut. Capitalizing on a months-long transition coordinated in tandem with assistant coach Twila Kilgore, Hayes named a squad that balances leadership with youth. Getting experience for that youth has been a priority for Hayes since she was named the new coach. Collaborating with Kilgore, who served as interim head coach before Hayes stepped up, on squad selection from London, she emphasized bringing fresh faces into the squad for the Concacaf W Gold Cup and SheBelieves Cup. “One of the biggest things for me ever since I got the job, was I want to provide opportunities for less experienced players,” Hayes said on Wednesday. “The volume of players that haven’t played more than 30 caps was really, really noticeable for me. So the last eight months has been about giving experiences to bridge that gap, because there is a correlation between caps played and success at international tournaments.” With an average age of 26.8, this is the youngest squad the USWNT has sent to the Olympics since 2008. It’s their fourth youngest Olympic squad all-time. In comparison, the bronze-medal winning side from Tokyo had an average age of 30. The average number of caps per player in this squad (58) is around half of that of the roster picked for Tokyo (111). The youngest player on the team is 19-year-old Jaedyn Shaw, who becomes the fifth youngest player ever named to a USWNT Olympic roster. Still, there is plenty of experience in the ranks, including talented, young players who played in their first World Cup in 2023: Trinity Rodman, Sophia Smith, Naomi Girma and Emily Fox among them. Some longtime veterans have kept their place, too. Four have 100 appearances or more: Lindsey Horan (148), Crystal Dunn (147), Alyssa Naeher (104) and Rose Lavelle (100). Horan and Dunn have both already played in 10 Olympic matches. Horan, Dunn and Naeher will soon be three-time Olympians. But there’s a notable exclusion. For the first time since 2008, the USWNT will go to a major tournament without Alex Morgan. “First off, I want to talk about what an amazing player and human Alex Morgan has been,” Hayes said. “I’ve only had one opportunity to work with her in the last camp. I saw first-hand not just her qualities, but her professionalism. Her record speaks for itself. It’s not easy making a decision that there’s only 16 outfield players and two goalkeepers on a roster of 18.” Since her debut in 2010, Morgan has produced 123 goals and 53 assists in 224 appearances for the US. But after a dismal World Cup in which she failed to score, it seemed likely Morgan would be dropped six months ago. But after a late call-up to replace the injured Mia Fishel, Morgan reasserted herself as a leader and starting striker in the Concacaf W Gold Cup. Competition at the forward position is fierce, though. Rodman, Smith, Shaw, Mal Swanson and Crystal Dunn are a formidable cast of names. Other forwards, like Smith or Cat Macario can also line-up as a striker. Plus, Morgan’s club form with the San Diego Wave has been on the decline. Given the small number of places, Morgan was always likely to be a casualty. But with new talent coming through, missing out on this summer could means it’s the end of the 34-year-old’s international career. Still, the most contentious decision in Hayes’s squad – with fans, at least, may be the inclusion of 20-year-old PSG midfielder Korbin Albert, who apologized this year for social media activity seen as critical of the LGBTQ community, and celebrating Megan Rapinoe’s career-ending injury. When she was subbed in before crowds in Georgia and Ohio shortly afterwards, she did so to a mix of boos. “Korbin making the team is on merit in terms of what she offers for us in the midfield positions. I think she’s demonstrated in Gold Cup that she can play a lot of games in quick succession. There’s no denying there’s been a lot of work that’s been going on in the background to work with Korbin,” said Hayes. “And, as I’ve expressed on a couple of occasions, I think it’s really important that everybody in this team understands the importance of not just being tolerant and respectful and understanding the things that are going to matter to us all, that Korbin has had to learn. My experiences with her has been [that] she’s a young person who’s understood fully the implications of her social media activity … I can say, first-hand, having spent a limited time with Korbin, she really is a lovely person and someone who really values the most important things.” It’s unlikely Albert’s inclusion will cause friction in the squad: she has already been included in the team since her social media comments, and fiercely competitive players will put aside any personal differences – during a tournament at least – in order to win. The more likely dissent will come from sections of the USWNT’s fanbase, and there has already been pushback on social media. Elsewhere, positional flexibility has been prioritized over specialists. In a short competition with tight turnaround times, that matters. It also lends itself to shifting tactics between games, something Hayes hinted she may rely on in France. One of the five forwards, Dunn, is a remarkable talent who can align anywhere on the pitch. For years, Dunn was repurposed as a left-back for the national team, though she’s long preferred to be further up the field. In Hayes’ second match in charge, she started Dunn as a forward. It took her 13 minutes to score. “I think the biggest factor is there’s 16 outfield players to play a lot of games,” Hayes said. “So having a roster that could adapt is essential. Having players on the roster that you know could play more than one position mattered with squad depth.” Other notable exclusions include 17-year-old Lily Yohannes, who became the third-youngest goalscorer in USWNT history when she scored 10 minutes into her debut this June. The Virginia-born midfielder has made waves at Ajax this season and is also eligible to play for the Netherlands. According to Hayes, Yohannes hasn’t yet made a decision over who she will represent at international level. “Lily was a consideration for this roster,” Hayes said. “But yes, at this moment, Lily hasn’t made a decision about her future, and I support that.” The hurdle of naming the roster has been crossed, but other difficulties lie ahead. One of them is simply hoping everyone stays healthy. In the scenario where somebody is injured, four alternates have been named in Lynn Williams, Jane Campbell, Hal Hershfelt and Croix Bethune. As with the core squad, there’s a of experience and fresh talent, emblematic of Hayes’ broader approach. All four will travel to France with the team. Expectations in Paris, as ever, will be high. Hayes has had little time to work with her squad but she’s named that’s built to win gold this summer with an eye already on the 2027 World Cup.',
								},
								tags: [
									{
										id: 'football/usa-womens-football-team',
										type: 'keyword',
										sectionId: 'football',
										sectionName: 'Football',
										webTitle: "USA women's football team",
										webUrl:
											'https://www.theguardian.com/football/usa-womens-football-team',
										apiUrl:
											'https://content.guardianapis.com/football/usa-womens-football-team',
										references: [],
									},
									{
										id: 'sport/olympic-games',
										type: 'keyword',
										sectionId: 'sport',
										sectionName: 'Sport',
										webTitle: 'Olympic Games',
										webUrl: 'https://www.theguardian.com/sport/olympic-games',
										apiUrl:
											'https://content.guardianapis.com/sport/olympic-games',
										references: [],
										description: '<p>Full coverage of every Olympic Games</p>',
									},
									{
										id: 'football/emma-hayes',
										type: 'keyword',
										sectionId: 'football',
										sectionName: 'Football',
										webTitle: 'Emma Hayes',
										webUrl: 'https://www.theguardian.com/football/emma-hayes',
										apiUrl:
											'https://content.guardianapis.com/football/emma-hayes',
										references: [],
									},
									{
										id: 'sport/us-sport',
										type: 'keyword',
										sectionId: 'sport',
										sectionName: 'Sport',
										webTitle: 'US sports',
										webUrl: 'https://www.theguardian.com/sport/us-sport',
										apiUrl: 'https://content.guardianapis.com/sport/us-sport',
										references: [],
									},
									{
										id: 'football/football',
										type: 'keyword',
										sectionId: 'football',
										sectionName: 'Football',
										webTitle: 'Football',
										webUrl: 'https://www.theguardian.com/football/football',
										apiUrl:
											'https://content.guardianapis.com/football/football',
										references: [],
									},
									{
										id: 'sport/sport',
										type: 'keyword',
										sectionId: 'sport',
										sectionName: 'Sport',
										webTitle: 'Sport',
										webUrl: 'https://www.theguardian.com/sport/sport',
										apiUrl: 'https://content.guardianapis.com/sport/sport',
										references: [],
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'football',
									webTitle: 'Football',
									webUrl: 'https://www.theguardian.com/football',
									apiUrl: 'https://content.guardianapis.com/football',
									editions: [
										{
											id: 'football',
											webTitle: 'Football',
											webUrl: 'https://www.theguardian.com/football',
											apiUrl: 'https://content.guardianapis.com/football',
											code: 'default',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/sport',
								pillarName: 'Sport',
							},
							{
								id: 'music/article/2024/jun/27/cosi-fan-tutte-review-royal-opera-house-london-jan-philipp-gloger',
								type: 'article',
								sectionId: 'music',
								sectionName: 'Music',
								webPublicationDate: '2024-06-27T11:57:00Z',
								webTitle:
									'Così fan Tutte review – self-conscious staginess is surreal fun in beautifully sung revival',
								webUrl:
									'https://www.theguardian.com/music/article/2024/jun/27/cosi-fan-tutte-review-royal-opera-house-london-jan-philipp-gloger',
								apiUrl:
									'https://content.guardianapis.com/music/article/2024/jun/27/cosi-fan-tutte-review-royal-opera-house-london-jan-philipp-gloger',
								fields: {
									headline:
										'Così fan Tutte review – self-conscious staginess is surreal fun in beautifully sung revival',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qqngy',
									thumbnail:
										'https://media.guim.co.uk/22c2f74da4271c696b77488c8a5791d6afa337fa/1234_1540_2010_1206/500.jpg',
									bodyText:
										'‘Is that the one with the mobile phones?” someone asked me ahead of the latest revival of Jan Philipp Gloger’s 2016 production of Così fan Tutte. That’s the one, but those phones are just one cameo in a staging that rampages around time and place with riotous energy and accessories galore. Although Da Ponte’s libretto about male naivety and female faithlessness theoretically unfolds in a single 24-hour period, the Aristotelian unities don’t trouble us here. Act One alone hurtles from a 21st-century night at the Royal Opera (still clutching their red programme books, the opera’s two couples have just watched … Mozart’s Così fan Tutte) to a farewell scene at a Brief Encounter-ish station, to a bar populated by a kind of Rat Pack of aggressively flirtatious men wearing thin black ties and porkpie hats, to a Technicolor Eden where the now-disguised Ferrando and Guglielmo pretend to poison themselves under an apple tree sporting a prominent serpent. Gloger’s association-game isn’t for all tastes. Its self-conscious staginess becomes increasingly pronounced in the second half: the men have been back to the wardrobe department and now gambol in frock-coats and turbans in the 2D woodland of a stage-within-the-stage. Cue eye-rolls and sarcasm from their fiancees, who in this production have already seen through the fake moustaches but play along regardless. Despina and Alfonso, meanwhile, have more explicitly directorial positions than usual, stage-managing the movement of mid-century theatrical lighting and manoeuvring chorus members into place. That a lot of detailed conceptualisation underpins the production is obvious from the programme’s interview between Gloger and his dramaturg, Katharina John. Seen live, some of that detail is impossible to grasp. What comes across instead is a kind of high-octane surrealism, as the characters veer in and out of different “realist” settings. The pace set by conductor Alexander Soddy was fast and furious, the orchestra’s tone quality and ensemble just occasionally suffering in such a turbo-charged performance. With this revival cast, though, the production’s zany, sentimentality-free shtick works extremely well. Gerald Finley was born to play earnest, know-all Alfonso, his occasional snarls betraying a nastier streak. Jennifer France’s Despina is an onstage dynamo, revelling in silly voices for her absurd turns as a doctor and notary. As for the two “heroes”, Daniel Behle made a return appearance as a burnished if nerdy Ferrando, while Andrè Schuen’s Guglielmo was persuasively self-assured, physically at ease and vocally suave. Best of all were Samantha Hankey and Golda Schultz in their house debuts. Hankey’s Dorabella was the ideal hard-edged sparring partner to Schultz’s sweet, agile Fiordiligi. Both provided moments of startling musical beauty – but Schultz’s virtuosic range of facial expressions did almost as much to humanise the opera’s troubling ambivalence. • Until 10 July',
								},
								tags: [
									{
										id: 'music/opera',
										type: 'keyword',
										sectionId: 'music',
										sectionName: 'Music',
										webTitle: 'Opera',
										webUrl: 'https://www.theguardian.com/music/opera',
										apiUrl: 'https://content.guardianapis.com/music/opera',
										references: [],
									},
									{
										id: 'music/classical-music-and-opera',
										type: 'keyword',
										sectionId: 'music',
										sectionName: 'Music',
										webTitle: 'Classical music',
										webUrl:
											'https://www.theguardian.com/music/classical-music-and-opera',
										apiUrl:
											'https://content.guardianapis.com/music/classical-music-and-opera',
										references: [],
									},
									{
										id: 'culture/royal-opera-house',
										type: 'keyword',
										sectionId: 'culture',
										sectionName: 'Culture',
										webTitle: 'Royal Opera House',
										webUrl:
											'https://www.theguardian.com/culture/royal-opera-house',
										apiUrl:
											'https://content.guardianapis.com/culture/royal-opera-house',
										references: [],
									},
									{
										id: 'culture/culture',
										type: 'keyword',
										sectionId: 'culture',
										sectionName: 'Culture',
										webTitle: 'Culture',
										webUrl: 'https://www.theguardian.com/culture/culture',
										apiUrl: 'https://content.guardianapis.com/culture/culture',
										references: [],
									},
									{
										id: 'music/music',
										type: 'keyword',
										sectionId: 'music',
										sectionName: 'Music',
										webTitle: 'Music',
										webUrl: 'https://www.theguardian.com/music/music',
										apiUrl: 'https://content.guardianapis.com/music/music',
										references: [],
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'music',
									webTitle: 'Music',
									webUrl: 'https://www.theguardian.com/music',
									apiUrl: 'https://content.guardianapis.com/music',
									editions: [
										{
											id: 'music',
											webTitle: 'Music',
											webUrl: 'https://www.theguardian.com/music',
											apiUrl: 'https://content.guardianapis.com/music',
											code: 'default',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/arts',
								pillarName: 'Arts',
							},
						],
					},
				},
			},
		},
		errors: null,
		status: 200,
		code: 'success',
		success: true,
	},
	getNewsFeed: {
		message: 'Request Completed Successfully!',
		result: {
			data: {
				articlesFromNewsApiAi: {
					articles: {
						results: [
							{
								uri: '2024-06-403484186',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '11:39:49',
								dateTime: '2024-06-27T11:39:49Z',
								dateTimePub: '2024-06-27T10:40:00Z',
								dataType: 'news',
								sim: 0,
								url: 'https://markets.businessinsider.com/news/stocks/3-biotech-stocks-that-could-make-your-grandchildren-rich-1033510910',
								title:
									'3 Biotech Stocks That Could Make Your Grandchildren Rich',
								body: "InvestorPlace - Stock Market News, Stock Advice & Trading Tips\n\nIn the world of investing, biotech stocks represent a unique blend of high risk and high reward. After a period of volatility in the broader markets in 2022 and 2023, biotech stocks are now drawing attention for their potential to deliver substantial long-term returns.\n\nThe global biotechnology market, valued at $1.2 trillion in 2022, is projected to grow to $3.9 trillion by 2031. Key drivers for growth include increasing R&D activities, government funding and rising demand. New biotechnology products can address chronic diseases and agricultural challenges.\n\nAs we look to the future, the biotech industry stands at the forefront of medical advancements. These include revolutionary cancer treatments to groundbreaking gene editing technologies.",
								source: {
									uri: 'markets.businessinsider.com',
									dataType: 'news',
									title: 'Markets Insider',
								},
								authors: [
									{
										uri: 'mohammed_saqib@markets.businessinsider.com',
										name: 'Mohammed Saqib',
										type: 'author',
										isAgency: false,
									},
								],
								image:
									'https://investorplace.com/wp-content/uploads/2021/11/crispr-theraputics-crsp-stock-1600-300x169.jpg',
								eventUri: null,
								sentiment: 0.2,
								wgt: 457184389,
								relevance: 1,
							},
							{
								uri: '2024-06-403484185',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '11:39:48',
								dateTime: '2024-06-27T11:39:48Z',
								dateTimePub: '2024-06-27T10:40:00Z',
								dataType: 'news',
								sim: 0,
								url: 'https://markets.businessinsider.com/news/stocks/wait-dont-even-think-about-buying-ford-stock-until-this-happens-1033510909',
								title:
									"Wait! Don't Even Think About Buying Ford Stock Until THIS Happens.",
								body: "InvestorPlace - Stock Market News, Stock Advice & Trading Tips\n\nSometimes, the best policy is for a company to stick to its core, bread-and-butter market. Ford Motor (NYSE:F) tried to expand into a difficult automotive market outside of the U.S., but without much success. Ford stock investors should insist that the automaker focus on doing what it does best, where it does it best.\n\nThis isn't to suggest that Ford is making all the wrong moves. It makes sense that Ford is cutting costs by eliminating jobs in Germany, Spain and the United Kingdom . Plus, there's another smart move that Ford is making in 2024, so let's delve into the details of that now.\n\nFord Opens Up U.S. Dealers' EV Sales\n\nFord CEO Jim Farley doesn't deny that the company is having some trouble selling electric vehicles. He admitted, \"We're entering new customers, the mainstream customers are not willing to pay a premium for EVs.",
								source: {
									uri: 'markets.businessinsider.com',
									dataType: 'news',
									title: 'Markets Insider',
								},
								authors: [
									{
										uri: 'david_moadel@markets.businessinsider.com',
										name: 'David Moadel',
										type: 'author',
										isAgency: false,
									},
								],
								image:
									'https://markets.businessinsider.com/Images/FacebookIcon.jpg',
								eventUri: null,
								sentiment: 0.1137254901960785,
								wgt: 457184388,
								relevance: 1,
							},
							{
								uri: '2024-06-403484144',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '11:39:48',
								dateTime: '2024-06-27T11:39:48Z',
								dateTimePub: '2024-06-27T11:00:00Z',
								dataType: 'news',
								sim: 0,
								url: 'https://markets.businessinsider.com/news/stocks/3-out-of-favor-fintech-stocks-primed-for-a-massive-bull-run-1033510901',
								title:
									'3 Out-Of-Favor Fintech Stocks Primed for a Massive Bull Run',
								body: "InvestorPlace - Stock Market News, Stock Advice & Trading Tips\n\nFintech stocks have been languishing since the end of the post-Covid boom, and most fintech names have been trading at bargain-basement levels for the past two years. That said, I believe it makes sense to use this near-term weakness as an opportunity to buy some of the top fintech stocks for the long-haul.\n\nI think most fintech stocks will recover once interest rate cuts are handed down and transaction volumes increase. Most tech companies have seen a significant recovery so far. I expect this recovery to extend into the fintech sector in due time, especially when the banking sector also makes a full recovery, and lenders are more comfortable partnering up with fintech firms.\n\nWith that in mind, here are three fintech stocks to consider right now.",
								source: {
									uri: 'markets.businessinsider.com',
									dataType: 'news',
									title: 'Markets Insider',
								},
								authors: [
									{
										uri: 'omor_ibne_ehsan@markets.businessinsider.com',
										name: 'Omor Ibne Ehsan',
										type: 'author',
										isAgency: false,
									},
								],
								image:
									'https://investorplace.com/wp-content/uploads/2020/01/stne1600-300x169.jpg',
								eventUri: null,
								sentiment: 0.2078431372549019,
								wgt: 457184388,
								relevance: 1,
							},
							{
								uri: '2024-06-403484150',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '11:39:48',
								dateTime: '2024-06-27T11:39:48Z',
								dateTimePub: '2024-06-27T10:46:00Z',
								dataType: 'news',
								sim: 0,
								url: 'https://markets.businessinsider.com/news/stocks/3-future-trillion-dollar-champs-to-buy-before-they-get-there-1033510907',
								title:
									'3 Future Trillion- Dollar Champs to Buy BEFORE They Get There',
								body: "InvestorPlace - Stock Market News, Stock Advice & Trading Tips\n\nFinding potential trillion-dollar companies is a calculated risk that may significantly improve an investor's portfolio. The encouraging development paths of three businesses are on track to accomplish this goal. Investors hoping to profit from rising market leaders must comprehend the principles underlying these businesses' success. These businesses excel in cloud services, are leaders in semiconductor technology and have creative methods to integrate AI. These accomplishments underscore the strategic ambitions driving these businesses.\n\nHere is a thorough review of these firms' fundamentals, including their financial stability and strategic initiatives. The analysis explores why they are strong candidates for trillion-dollar values in the future. With an emphasis on identifying critical growth drivers and market positioning in pursuing future trillion-dollar stocks, the insights provided here are intended to provide readers with the knowledge necessary to make wise investment decisions. These businesses can be valued at trillions of dollars as they represent the tech industry's dynamic character and high potential for financial gain.",
								source: {
									uri: 'markets.businessinsider.com',
									dataType: 'news',
									title: 'Markets Insider',
								},
								authors: [
									{
										uri: 'yiannis_zourmpanos@markets.businessinsider.com',
										name: 'Yiannis Zourmpanos',
										type: 'author',
										isAgency: false,
									},
								],
								image:
									'https://investorplace.com/wp-content/uploads/2019/08/orcl-stock-1-1-300x169.jpg',
								eventUri: null,
								sentiment: 0.411764705882353,
								wgt: 457184388,
								relevance: 1,
							},
							{
								uri: '2024-06-403484149',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '11:39:48',
								dateTime: '2024-06-27T11:39:48Z',
								dateTimePub: '2024-06-27T10:47:00Z',
								dataType: 'news',
								sim: 0,
								url: 'https://markets.businessinsider.com/news/stocks/3-solar-stocks-to-buy-on-the-dip-june-2024-1033510906',
								title: '3 Solar Stocks to Buy on the Dip: June 2024',
								body: "InvestorPlace - Stock Market News, Stock Advice & Trading Tips\n\nSolar stocks to buy on the dip are witnessing renewed enthusiasm with the recent positive economic developments.\n\nMay's cooling inflation rates have weighed down U.S. Treasury yields, ramping up speculation around a potential September interest rate cut. This shift is crucial as high interest rates have played spoilsport for the industry. The record increase in interest rates has made financing for solar installations significantly more costly than traditional electricity sources.\n\nHowever, with the recent encouraging developments, ETFs like the Invesco Solar ETF (NYSEARCA:TAN) are ticking into the green this month. Investors in TAN stock will have breathed a sigh of relief, considering it lost upwards of 30% in value last year.\n\nHaving said that, these solar stocks are the best ways to play the comeback trend, boasting solid financial foundations. Additionally, these stocks are uniquely positioned to capitalize on favorable economic shifts, with the odds of a September rate cut looming large.\n\nSolar Stocks to Buy on the Dip: First Solar (FSLR)\n\nFirst Solar (NASDAQ:FSLR) is a top player in the U.S.'s burgeoning utility-scale solar energy sector. Its technological edge, robust financial positioning and aggressive geographic expansion make it the best bet for the solar resurgence.\n\nRecent results have been extraordinary. Its first-quarter (Q1) report showed revenues soaring to $794 million, a staggering 44.8% year-over-year (YOY) increase from the prior-year period. Additionally, its GAAP EPS of $2.20 beat estimates by 22 cents. It's worth noting that its profitability margins are substantially higher than its historical metrics. A lot of it is due to its refined cost management, reducing its cost of sales to just 57% of its trailing 12-month sales, a stark contrast to the 95% seen in 2022.\n\nAs we advance, the firm is in excellent shape to benefit from favorable U.S. tax policies and protective measures against foreign competitors. Also, it boasts a massive backlog of almost 80 gigawatts, pointing to a clear runway for sustained growth.\n\nArray Technologies (ARRY)\n\nArray Technologies (NASDAQ:ARRY) is one of the giants in utility-scale solar tracker technology efficiently navigating a testing market landscape. That is shown by the sluggishness in its stock market performance, which saw ARRY stock shedding upwards of 35% year-to-date (YTD).\n\nFurthermore, its Q1 report showed a noticeable dip in sales to $153.4 million, 59.3% lower than the prior-year period. However, on a positive note, its order book swelled to $2.1 billion, signaling a promising horizon ahead. Hence, if current trends persist, this burgeoning demand could set the stage for substantial revenue growth.\n\nARRY now flaunts impressive financial flexibility, with its annualized free cash flow soaring past the $180 million mark. This financial flexibility is imperative as Array looks to expand its footprint. It recently invested $50 million into a new solar manufacturing campus in Mexico, which should significantly expand production capabilities and fuel future growth.\n\nShoals (SHLS)\n\nShoals (NASDAQ:SHLS) is a leading manufacturer and marketer of electrical components for solar-energy projects. However, given the slowdown in the solar space, SHLS stock tanked more than 70% over the last year and now trades for just 2.3 times forward sales estimates.\n\nRecent quarterlies have been forgettable, but the firm expects to end the year relatively strong. Its 2024 revenue guidance peaks at $490 million, a modest 0.2% increase over the previous year. Additionally, it expects adjusted EBITDA to lie between $130 million and $150 million.\n\nHowever, things are expected to improve substantially next year, with analysts predicting sales to jump to $572 million. Additionally, it expects EPS to rise to 70 cents in 2025 from the 52 cents estimate this year.\n\nReflecting this optimism, Shoals recently announced an attractive stock repurchase program. It plans to buy over $150 million worth of SHLS stock by the end of 2025.\n\nOn the date of publication, Muslim Farooque did not hold (either directly or indirectly) any positions in the securities mentioned in this article. The opinions expressed in this article are those of the writer, subject to the InvestorPlace.com Publishing Guidelines.\n\nMore From InvestorPlace",
								source: {
									uri: 'markets.businessinsider.com',
									dataType: 'news',
									title: 'Markets Insider',
								},
								authors: [
									{
										uri: 'muslim_farooque@markets.businessinsider.com',
										name: 'Muslim Farooque',
										type: 'author',
										isAgency: false,
									},
								],
								image:
									'https://investorplace.com/wp-content/uploads/2023/10/fslr1600-300x169.png',
								eventUri: null,
								sentiment: 0.5450980392156863,
								wgt: 457184388,
								relevance: 1,
							},
							{
								uri: '2024-06-403484140',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '11:39:48',
								dateTime: '2024-06-27T11:39:48Z',
								dateTimePub: '2024-06-27T11:39:37Z',
								dataType: 'news',
								sim: 0,
								url: 'https://markets.businessinsider.com/news/interestrates/swedish-economic-confidence-rises-to-22-month-high-1033510861',
								title: 'Swedish Economic Confidence Rises To 22-Month High',
								body: "(RTTNews) - Sweden's economic confidence improved in June to the highest level in nearly two years, survey results published by the National Institute of Economic Research showed on Thursday.\n\nThe economic tendency index rose to 96.3 in June from 94.1 in the previous month. This was the highest score since August 2022, when it was 99.2.\n\nThe latest figure signaled that sentiment is nearing normal levels, the NIER said.\n\nThe index measuring confidence in manufacturing rose by 0.6 points to 99.2 in June amid strong signals from manufacturers of transport equipment.\n\nThe morale for the construction segment improved to 97.0 from 95.8, and that for retail trade jumped by 6.0 points to 98.6.\n\nSimilarly, there was an increase in confidence in services, which rose to 96.9 from 94.3.\n\nThe survey showed that the consumer confidence index increased further to a 28-month high of 93.3 in June from 91.3 in May. However, a reading below 100 indicates pessimism among households.",
								source: {
									uri: 'markets.businessinsider.com',
									dataType: 'news',
									title: 'Markets Insider',
								},
								authors: [],
								image:
									'https://markets.businessinsider.com/Images/FacebookIcon.jpg',
								eventUri: null,
								sentiment: 0.3490196078431373,
								wgt: 457184388,
								relevance: 1,
							},
							{
								uri: '2024-06-403484184',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '11:39:47',
								dateTime: '2024-06-27T11:39:47Z',
								dateTimePub: '2024-06-27T10:45:00Z',
								dataType: 'news',
								sim: 0,
								url: 'https://markets.businessinsider.com/news/stocks/lucid-stocks-false-dawn-why-the-lcid-rally-is-doomed-to-crash-1033510908',
								title:
									"Lucid Stock's False Dawn: Why the LCID Rally Is Doomed to Crash",
								body: "InvestorPlace - Stock Market News, Stock Advice & Trading Tips\n\nAs of this writing, Lucid Group (NASDAQ:LCID) is rallying higher, but this latest Lucid stock rally has nothing to do with anything company-specific. Shares are moving higher because of positive news for a key competitor in the space.\n\nWe're talking about Volkswagen's (OTCMKTS:VWAGY) plans to invest up to $5 billion into Rivian Automotive (NASDAQ:RIVN), as part of a joint venture between the German automotive giant, and the U.S.-based electric van and truck startup.\n\nLCID and its peers are rallying in response, on speculation that other early-stage EV makers will soon be yielding similar offers. Yet while anything's possible, we wouldn't bank on this fading EV contender getting extended such an opportunity.\n\nInstead, the company is likely to stick with its existing \"dance partner,\" which in turn strongly suggests that LCID's downward spiral will carry on, once this latest news for Rivian enters the rearview mirror.\n\nLucid Stock: No New Partner Waiting in the Wings\n\nLucid Group already has a financial and strategic partner. Saudi Arabia's Public Investment Fund is Lucid's majority shareholder, with a 59.6% stake. Lucid has also moved into the Saudi EV market, setting up manufacturing and sales operations there.\n\nSaudi Arabia's involvement doesn't preclude another partner coming on board. In fact, PIF, after investing billions into the company, with little in the way of financial return thus far, may not want to up the ante with another capital infusion. Much like with RIVN stock, forming a similar partnership would likely provide a boost for LCID stock.\n\nHowever, is there a major automaker waiting in the wings? We're doubtful. Yes, part of Volkswagen's interest in Rivian is getting its hands on Rivian's EV technology. Lucid has proprietary EV technology of its own. Previously, it has licensed it out to British automaker Aston Martin.\n\nHowever, Rivian has also cultivated a fan base for its vehicles. In contrast, Lucid has gained little traction, as seen from its weak vehicle delivery numbers. While other smaller EV makers may be interested in licensing deals, we just don't see an global automaker stepping up to invest billions into this floundering upstart.\n\nThe Downward Spiral Shall Continue\n\nAssuming that automakers in the U.S., Europe, China, and Japan pass up on the opportunity to make a big bet on LCID stock, expect the downward spiral that has sent shares to the stock market junkyard to carry on.\n\nAs we've pointed out in past articles about Lucid, the following shall continue. First, delivery volume will remain at levels far too low for the company to reach profitability. The fact Lucid has downsized its workforce, and hence likely reduced production capacity, underscores the chances of this happening.\n\nSecond, as sales remain too low, high operating losses and cash burn will carry on as well. This means a further depletion of Lucid's cash position, which at some point will cause the need for another capital infusion.\n\nGranted, if this downward spiral continues, at a low enough price strategic investors could emerge to seize the opportunity at a bargain basement price.\n\nHowever, if LCID becomes cheap enough, what's to stop PIF from buying out minority shareholders at a scant premium, then forming an automaker partnership, maximizing its upside? As before, Lucid Group offers a \"lose lose\" proposition to outside investors.\n\nThe Verdict: Stay Away from This Still-Bad Situation\n\nA rising tide lifts all boats, but the rising tide of Rivian, due to the Volkswagen deal, has already started to recede. As it'll take time to see whether this deal really changes the story for RIVN, shares are likely to cough back their latest gains.\n\nThe same applies here, for lifted boats like LCID. The moderate-sized rally could fade, with shares quickly getting back on a downward trajectory.\n\nAs attention turns back to Lucid's still-unsolved demand and profitability issues, not to mention its still-high dilution risk, a sliding down to $2 per share, then on to $1 per share or less, remains very likely.\n\nWhile you're free to consider opportunities among any of the publicly-traded EV stocks out there, take heed of our warning, and stay away from the still-bad situation with Lucid stock.\n\nLucid stock earns a D rating in Portfolio Grader.\n\nOn the date of publication, neither Louis Navellier nor the InvestorPlace Research Staff member primarily responsible for this article held (either directly or indirectly) any positions in the securities mentioned in this article.\n\nMore From InvestorPlace",
								source: {
									uri: 'markets.businessinsider.com',
									dataType: 'news',
									title: 'Markets Insider',
								},
								authors: [
									{
										uri: 'thomas_niel@markets.businessinsider.com',
										name: 'Thomas Niel',
										type: 'author',
										isAgency: false,
									},
								],
								image:
									'https://markets.businessinsider.com/Images/FacebookIcon.jpg',
								eventUri: null,
								sentiment: 0.09019607843137245,
								wgt: 457184387,
								relevance: 1,
							},
							{
								uri: '2024-06-403484104',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '11:39:46',
								dateTime: '2024-06-27T11:39:46Z',
								dateTimePub: '2024-06-27T11:39:34Z',
								dataType: 'news',
								sim: 0,
								url: 'https://jakartaglobe.id/news/world-cup-qualifiers-indonesia-in-group-with-asian-giants',
								title:
									'World Cup Qualifiers: Indonesia in Group with Asian Giants',
								body: "Jakarta. Indonesia has been drawn alongside Asia's football giants for the 2026 World Cup qualifiers, with its first group match against Saudi Arabia scheduled for September 5.\n\nThe Asian Football Confederation's draw in Kuala Lumpur on Thursday placed Indonesia in Group C, along with Australia, Bahrain, China, Japan, and Saudi Arabia.\n\nGroup A includes Iran, Kyrgyzstan, North Korea, Qatar, the United Arab Emirates, and Uzbekistan.\n\nGroup B consists of Iraq, Jordan, Kuwait, Oman, Palestine, and South Korea.\n\nThe top two teams from each group will directly qualify for the 2026 World Cup finals. Teams finishing third and fourth will compete in another round of two groups, where only the top team will advance.\n\nBelow are the fixtures for Indonesia's group matches:",
								source: {
									uri: 'jakartaglobe.id',
									dataType: 'news',
									title: 'Jakarta Globe',
								},
								authors: [],
								image:
									'https://img2.beritasatu.com/cache/jakartaglobe/960x620-w/2024/06/1718135691-3000x2137.webp',
								eventUri: null,
								sentiment: 0.09019607843137245,
								wgt: 457184386,
								relevance: 1,
							},
							{
								uri: '2024-06-403484148',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '11:39:46',
								dateTime: '2024-06-27T11:39:46Z',
								dateTimePub: '2024-06-27T11:15:00Z',
								dataType: 'news',
								sim: 0,
								url: 'https://markets.businessinsider.com/news/stocks/7-a-rated-stocks-for-your-june-buy-list-1033510905',
								title: '7 A-Rated Stocks for Your June Buy List',
								body: "InvestorPlace - Stock Market News, Stock Advice & Trading Tips\n\nThere's no bad time to buy A-rated stocks. But if you want to be richer than you are now, one of the best things you can do for yourself this June is to invest in A-rated stocks and watch the returns come in.\n\nWhen I'm talking about A-rated stocks, of course, I'm referring to the rankings assigned to all stocks by the Portfolio Grader. Stocks get \"A\" ratings based on their earnings performance, growth history, analyst sentiment and momentum.\n\nYou have a much better chance to make money with A-rated stocks than with those that have a poor rating, so I always use the Portfolio Grader as a tool when I'm looking at new stocks, or when its time to rebalance my portfolios.\n\nJune is the perfect time for this exercise. We are approaching the end of the second quarter, which is an ideal time to check on your portfolio to see how it's performing compared to the general market.\n\nJune is also a time where many companies announce quarterly earnings and issue or reaffirm guidance for the rest of the year. That's important information for any investor, especially for those of us looking at A-rated stocks.\n\nThe stock market continues to be strong this year, carried primarily by tech stocks.\n\nYou don't want to lose out on the opportunities that the markets offer this June, so I encourage you to review your holdings versus the Portfolio Grader and look to optimize your holdings. If you're looking to make a change, these seven stocks are ideal selections.\n\nNvidia (NVDA)\n\nI can't tell you how many times over the course of the last year I led off a series of recommendations with the semiconductor maker Nvidia (NASDAQ:NVDA). But if you're a skittish investor, you may be nervous about the recent dip this company saw.\n\nDon't be.\n\nFollowing another great earnings report and the company's successful 10-for-1 stock split, Nvidia extended its mammoth run to a market capitalization of $3.3 trillion and was briefly the No. 1 company in the world in terms of market capitalization.\n\nBut then we saw a dip -- roughly 13% over three trading sessions, and some people started saying that the NVDA bubble was finally popping.\n\nThey were wrong -- NVDA is already climbing its way back up. And Nvidia hardly represents a bubble. This is a company that makes that powerful semiconductors that handle the most complex computer operations, including machine learning, generative artificial intelligence and the Internet of Things.\n\nNvidia has a massive market share in making these chips, with even better products in the workflow to be released over the next few quarters.\n\nThat's why analysts from Bank of America and Jefferies are still touting NVDA stock, and why you're going to see Nvidia continue to gain new highs in 2024.\n\nNVDA stock is up 154% in 2024 and gets an \"A\" rating in the Portfolio Grader.\n\nSuper Micro Computer (SMCI)\n\nSome company has to make the server infrastructure that allows companies who are buying up NVDA chips to package them together and so they can run generative AI.\n\nThat's where Super Micro Computer (NASDAQ:SMCI), or Supermicro, comes in.\n\nSMCI took a hit recently as its stock price fell from nearly $1,200 to less than $800. But the stock is already rebounding, helped in no small part by Nvidia's strength and the bullish sentiment that surrounds it.\n\nThe company is also making some key moves, such as collaborating on building a large AI data center in Japan, and it's work into building \"Direct Liquid Cooling\" servers that would offer energy cost and environmental advantages over those that utilize traditional fan-based cooling systems.\n\nIf you're kicking yourself for not buying SMCI when it was under $800, don't fret. This company has a long path ahead of it and I wouldn't be surprised to see it go back over $1,000 and re-challenge its previous highs.\n\nSMCI stock is up 196% this year and gets an \"A\" rating in the Portfolio Grader.\n\nChipotle Mexican Grill (CMG)\n\nI love a good stock split, because they instantly increase the liquidity of a stock by making shares more affordable.\n\nThe share price decreases as the total number of shares increase, so while an individual investor still has the same position in the company, the number of shares they have increase.\n\nFor example, when Nvidia had a share price of $1,200 and did its 10-for-1 split, an investor with a single share of NVDA stock suddenly had 10 shares valued at $120 each.\n\nThat brings us to Chipotle Mexican Grill (NYSE:CMG), which more than topped Nvidia's trick. Chipotle just completed an amazing 50-for-1 split, bringing the share price from $3,283 to roughly $65.\n\nBut if you had a single CMG share, you now have 50 of those beauties, and you know the price is going to be climbing again.\n\nChipotle is one of the best restaurant stocks on the planet, with more than 3,400 locations dishing out its freshly made Tex-Mex fare.\n\nSecond-quarter results won't be out until late July, but the company had a solid first quarter with revenue of $2.7 billion rising by 14.1% from a year ago. Chipotle also reported that comparable restaurant sales were up an impressive 7% and operating margins rose from 15.5% to 16.3%.\n\nCMG stock is up 45% in 2024 and gets an \"A\" rating in the Portfolio Grader.\n\nMeta Platforms (META)\n\nMeta Platforms (NASDAQ:META) is the owner of some of the most popular social media and advertising platforms on the planet, including Instagram, Facebook, Threads and WhatsApp.\n\nWhile many call Meta purely a social media company, it will always be an advertising powerhouse in my book -- especially considering that it saw roughly 98% of its revenue come from advertising in the first quarter.\n\nMeta's advertising is so popular because they do it right. Meta has amassed an amazing amount of data about its users, including hobbies and interests, locations and their social networks. They use that information to allow advertisers to precisely target offerings to the people who are most likely to buy a product.\n\nMeta is also making an effort in the AI world with Meta AI, a large language model that would be capable of answering queries, solving problems and performing other functions on Meta's platforms.\n\nMeta will continue to be a workhorse for your portfolio. The stock is up 44% this year and gets an \"A\" rating in the Portfolio Grader.\n\nDell Technologies (DELL)\n\nThat brings us to Dell Technologies (NYSE:DELL), which is truly a legacy technology company. The company made its name as a manufacturer of computers laptops and mobile devices, but its future is in AI as well.\n\nNvidia has a key partnership with Dell, and Nvidia CEO Jensen Huang touts that Dell's large server business makes it easier for companies to get into AI.\n\nDell and Nvidia are working hand-in-hand to create an AI factory that would help xAI, the artificial intelligence venture fronted by Elon Musk, create an AI supercomputer to power the Grok chatbot, among other things.\n\nMusk says that Dell will assemble half the racks that are going to be used for the xAI supercomputer. Supermicro is also involved in the effort.\n\nAll this will be important for Dell stock moving forward. DELL is up 83% this year and gets an \"A\" rating in the Portfolio Grader.\n\nNetflix (NFLX)\n\nJust a few years ago, I think it would have been fair to have legitimate concerns about Netflix.\n\nThe company seemed to have hit a wall -- subscription growth was weak, other streaming services were taking off, stripping Netflix of some of its most popular content (such as the Star Wars franchise, the Marvel franchise and hit sitcoms like Friends and The Office).\n\nBut wow, did Netflix turn things around, or what?\n\nThe biggest move that it made was ending the password-sharing practice that Netflix had long turned a blind eye to. It recognized that its platform was still desirable, and that people were willing to pay for it.\n\nSo it instituted an $8 surcharge for people who were sharing their accounts with someone outside of their platform -- kids in college, former roommates and ex-romantic partners, for instance.\n\nThat left customers with the choice of paying the surcharge or allowing those external household members to get their own accounts. Both decisions are a win for Netflix.\n\nEarnings in the first quarter showed revenue of $9.3 billion, up from $8.1 billion a year ago. Global streaming paid memberships hit 269.6 million, up 16% from a year ago, and net income was $2.06 million, up from $1.3 million in the first quarter of 2023.\n\nNetflix is still special and still growing, and it's the premiere streaming service on the market. The stock is up 38% in 2024 and gets an \"A\" rating in the Portfolio Grader.\n\nEli Lilly (LLY)\n\nEli Lilly (NYSE:LLY) isn't a tech stock, but its made what may be one of the most popular breakthroughs of the decade. The biotech company created a drug that's approved by the Food and Drug Administration to help people lose weight.\n\nZepbound is an injectable drug that won FDA approval in November 2023 and is geared to the 42% of the U.S. population that are classified as obese. The drug in Zepbound, tirzepatide, is also used in another highly successful Lilly product called Mounjaro, which is used to treat type 2 diabetes.\n\nWhile Lilly is now pouring billions of dollars into expanding its manufacturing facilities to produce Zepbound and Mounjaro, the company has another amazing drug around the corner.\n\nAn FDA panel voted unanimously in favor of the company's donanemab drug, which would be used to treat Alzheimer's. The full FDA still needs to give final approval, but that's fully expected to happen soon.\n\nThese catalysts make LLY stock a must-own for 2024. Eli Lilly stock is up 55% this year and gets an \"A\" rating in the Portfolio Grader.\n\nOn the date of publication, Louis Navellier had long positions in NVDA, SCMI and LLY. Louis Navellier did not have (either directly or indirectly) any other positions in the securities mentioned in this article.\n\nOn the date of publication, the InvestorPlace Research Staff member primarily responsible for this article had long positions in NVDA and SCMI. The staff member did not hold (either directly or indirectly) any other positions in the securities mentioned in this article.\n\nMore From InvestorPlace",
								source: {
									uri: 'markets.businessinsider.com',
									dataType: 'news',
									title: 'Markets Insider',
								},
								authors: [
									{
										uri: 'louis_navellier@markets.businessinsider.com',
										name: 'Louis Navellier',
										type: 'author',
										isAgency: false,
									},
								],
								image:
									'https://investorplace.com/wp-content/uploads/2022/05/nvda-1600-300x169.png',
								eventUri: null,
								sentiment: 0.2,
								wgt: 457184386,
								relevance: 1,
							},
							{
								uri: '2024-06-403484002',
								lang: 'eng',
								isDuplicate: false,
								date: '2024-06-27',
								time: '11:39:46',
								dateTime: '2024-06-27T11:39:46Z',
								dateTimePub: '2024-06-27T11:21:53Z',
								dataType: 'news',
								sim: 0,
								url: 'https://www.devdiscourse.com/article/science-environment/2997751-flash-floods-paralyze-dibrugarh-a-call-for-better-drainage-system',
								title:
									'Flash Floods Paralyze Dibrugarh: A Call for Better Drainage System',
								body: "Dibrugarh town is facing severe flash floods due to heavy rains, resulting in waterlogged streets. Residents blame an unplanned drainage system and encroachments for the recurring issue. Officials and locals call for scientific drainage solutions. 41 lives have been lost in Assam due to floods, landslides, and storms this year.\n\nDibrugarh town has been severely affected by flash floods, with most streets waterlogged following heavy rains on Thursday morning. Mancotta Road, a crucial thoroughfare, is now submerged in knee-deep water.\n\nResidents of Dibrugarh, located on the Brahmaputra's banks, have long complained about persistent flash flooding due to an unplanned drainage system. Parimal Banik, a local resident, stated, ''Every year, waterlogging occurs mainly because of poor drainage system. Although the department concerned constructs roads in every ward, they refrain from digging up drains adjacent to these roads.''\n\nAn official, who wished to remain anonymous, noted that encroachments near the Dibrugarh Town Protection (DTP) drain hinder rainwater from flowing out, resulting in widespread waterlogging.\n\nIsmail Ahmed, a retired professor, argued, ''We need a scientific drainage system that can flush out water from the town. Dibrugarh, one of Assam's oldest towns, suffers greatly during the rainy season.''\n\nThe flood situation in Assam is gradually improving, yet nearly 1.4 lakh people remain affected across seven districts, with Cachar being the worst hit. To date, 41 people have died in the state's floods, landslides, and storms this year.\n\n(This story has not been edited by Devdiscourse staff and is auto-generated from a syndicated feed.)",
								source: {
									uri: 'devdiscourse.com',
									dataType: 'news',
									title: 'Devdiscourse',
								},
								authors: [],
								image:
									'https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/aiimagegallery/27_06_2024_11_21_53_3980047.png?width=920&format=jpeg',
								eventUri: null,
								sentiment: -0.1843137254901961,
								wgt: 457184386,
								relevance: 1,
							},
						],
						totalResults: 4762001,
						page: 1,
						count: 10,
						pages: 476201,
					},
				},
				articlesFromNewsApiOrg: {
					status: 'ok',
					totalResults: 0,
					articles: [],
				},
				articlesFromNYTimesApi: {
					status: 'OK',
					copyright:
						'Copyright (c) 2024 The New York Times Company. All Rights Reserved.',
					response: {
						docs: [
							{
								abstract:
									'It’s clear that Rita’s life in rural Argentina could use a bit of magic. But her willingness to bend the truth to achieve it heralds disaster.',
								web_url:
									'https://www.nytimes.com/2024/06/27/movies/chronicles-of-a-wandering-saint-review.html',
								lead_paragraph:
									'“How do I know if something is a miracle?” This is the question that Rita (Mónica Villa), a 60-something Catholic woman living in rural Argentina, poses to a search engine — though deep down, she already knows the answer. A statue that Rita found while tending to her duties as the local chapel keeper isn’t the long-lost figure of St. Rita. But it’d be a miracle if it were, and miracles mean glory, attention and prestige in her small town.',
								source: 'The New York Times',
								headline: {
									main: '‘Chronicles of a Wandering Saint’ Review: Are the Meek Blessed?',
									kicker: null,
									content_kicker: null,
									print_headline: 'Chronicles of a Wandering Saint',
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'Movies',
								_id: 'nyt://article/66bcf0ec-3548-543b-94bc-56051f46164e',
							},
							{
								abstract:
									'President Emmanuel Macron’s governing style has always been intensely top-down. But with far-right nationalists in France closing in on power, some believe he may have gone too far this time.',
								web_url:
									'https://www.nytimes.com/2024/06/27/world/europe/france-macron-snap-election-decision.html',
								lead_paragraph:
									'His prime minister was among the last to know. That is how secretive, how confined to a small group of advisers President Emmanuel Macron’s shock decision to dissolve Parliament and call French legislative elections was.',
								source: 'The New York Times',
								headline: {
									main: 'A Tiny Circle of Advisers Helped Prod Macron to Take a Giant Risk',
									kicker: 'News Analysis',
									content_kicker: null,
									print_headline: null,
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'World',
								_id: 'nyt://article/c60f68f4-549d-57ae-acd7-3da67fbee313',
							},
							{
								abstract:
									'As the planet warms, atoll nations like the Maldives seemed doomed to shrink. Scientists have begun to tell a surprising new story.',
								web_url:
									'https://www.nytimes.com/2024/06/27/briefing/maldives-atolls-climate-change.html',
								lead_paragraph:
									'We humans have settled in all sorts of precarious environments: parched deserts, barren tundra, high mountains. None are precarious in quite the same way as atolls, the tiny, low-lying islands that dot the tropics. As the planet warms and the oceans rise, atoll nations like the Maldives, the Marshall Islands and Tuvalu have seemed doomed to vanish, like the mythical Atlantis, into watery oblivion.',
								source: 'The New York Times',
								headline: {
									main: 'A Surprising Climate Find',
									kicker: null,
									content_kicker: null,
									print_headline: null,
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'Briefing',
								_id: 'nyt://article/e48c0d8f-9c12-53cb-b324-c3a58d3eece8',
							},
							{
								abstract:
									'Allegations in the world of competitive swimming raise questions about fairness in the sport.',
								web_url:
									'https://www.nytimes.com/2024/06/27/podcasts/the-daily/china-olympics-doping.html',
								lead_paragraph:
									'A new doping scandal is rocking the world of competitive swimming, as the Paris Olympics approach. These allegations are raising questions about fairness in the sport and whether the results at the summer games can be trusted.',
								source: 'The New York Times',
								headline: {
									main: 'The Doping Scandal Rocking the Upcoming Olympics',
									kicker: null,
									content_kicker: null,
									print_headline: null,
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'Podcasts',
								_id: 'nyt://article/44785a27-ddf6-5013-a9d3-36b25439b6c2',
							},
							{
								abstract: 'Plus, is the future “made in India”?',
								web_url:
									'https://www.nytimes.com/2024/06/27/podcasts/trump-biden-debate-supreme-court.html',
								lead_paragraph: 'On Today’s Episode:',
								source: 'The New York Times',
								headline: {
									main: 'Why Tonight’s Debate Is Different, and New Supreme Court Rulings',
									kicker: null,
									content_kicker: null,
									print_headline: null,
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'Podcasts',
								_id: 'nyt://article/a9a585ca-745f-5e3a-8270-21d0c28b5d21',
							},
							{
								abstract:
									'Scroll down to reveal a hint for each category of today’s Connections, or head to the comments for community hints and conversation.',
								web_url:
									'https://www.nytimes.com/2024/06/27/crosswords/connections-companion-383.html',
								lead_paragraph:
									'Good morning, dear connectors. Welcome to today’s Connections forum, where you can give and receive puzzle — and emotional — support.',
								source: 'The New York Times',
								headline: {
									main: 'The Connections Companion No. 383, June 28, 2024',
									kicker: null,
									content_kicker: null,
									print_headline: null,
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'Crosswords & Games',
								_id: 'nyt://article/7a904f93-ee7c-5c28-81ec-0faf1f3edf51',
							},
							{
								abstract:
									'The painting, “Odalisque,” was sold to the Stedelijk Museum in the early 1940s by a German-Jewish family desperate to escape the Nazis.',
								web_url:
									'https://www.nytimes.com/2024/06/27/arts/stedelijk-museum-matisse-odalisque-restitution.html',
								lead_paragraph:
									'The Stedelijk Museum in Amsterdam says it will return an Henri Matisse painting that has been in its collection since 1941 to the heirs of its former owner, a German-Jewish textile manufacturer and art patron who sold it to fund his family’s escape of the Netherlands’ Nazi occupation.',
								source: 'The New York Times',
								headline: {
									main: 'Amsterdam Museum to Return a Matisse Work Sold Under Duress in World War II',
									kicker: null,
									content_kicker: null,
									print_headline: null,
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'Arts',
								_id: 'nyt://article/b41f8ea0-9f29-574c-ae0c-8d1612ba64f6',
							},
							{
								abstract:
									'He hanged high-profile inmates in exchange for a reduction in his own robbery and murder sentences, and became a social media sensation after his release.',
								web_url:
									'https://www.nytimes.com/2024/06/27/world/asia/shahjahan-bhuiya-dead.html',
								lead_paragraph:
									'Shahjahan Bhuiya, who hanged some of Bangladesh’s highest-profile death row inmates in exchange for reductions in his own robbery and murder sentences, then briefly became a TikTok star after his release from prison, died on Monday in Dhaka.',
								source: 'The New York Times',
								headline: {
									main: 'Shahjahan Bhuiya, Executioner Turned TikTok Star, Dies in Bangladesh',
									kicker: null,
									content_kicker: null,
									print_headline: null,
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'World',
								_id: 'nyt://article/34403061-db05-5d35-b892-3d3ada556995',
							},
							{
								abstract:
									'Iranians say they have little faith their votes in Friday’s presidential election will improve their lives, and many are planning to sit it out.',
								web_url:
									'https://www.nytimes.com/2024/06/27/world/middleeast/iran-presidential-election.html',
								lead_paragraph:
									'Central Tehran is ablaze this week with posters and billboards of the six candidates in Friday’s presidential election, and the streets are jammed with buses taking supporters to campaign rallies, yet it is hard to find enthusiasm even for voting, much less for any individual candidate.',
								source: 'The New York Times',
								headline: {
									main: 'Ahead of Election, Iranian Voters Say, ‘We Have Been Going Backward’',
									kicker: null,
									content_kicker: null,
									print_headline: null,
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'World',
								_id: 'nyt://article/8723f06c-0c2a-5d6c-8eb0-f002df371b66',
							},
							{
								abstract:
									'Three bodies were discovered near the mountain’s crater, the local media reported. Separately, a professional climber fell unconscious and died.',
								web_url:
									'https://www.nytimes.com/2024/06/27/us/mount-fuji-deaths-japan-climbers.html',
								lead_paragraph:
									'At least one person died climbing Mount Fuji days before the official start of the climbing season, and three bodies were found on the mountain, the police and local media said.',
								source: 'The New York Times',
								headline: {
									main: 'Four Mount Fuji Deaths Reported Before Climbing Season Begins',
									kicker: null,
									content_kicker: null,
									print_headline: null,
									name: null,
									seo: null,
									sub: null,
								},
								section_name: 'U.S.',
								_id: 'nyt://article/6dc11b43-5388-589c-a42c-fbbcfb0e291b',
							},
						],
						meta: {
							hits: 12859,
							offset: 10,
							time: 23,
						},
					},
				},
				articlesFromTheGuardianApi: {
					response: {
						status: 'ok',
						userTier: 'developer',
						total: 2509461,
						startIndex: 1,
						pageSize: 10,
						currentPage: 1,
						pages: 250947,
						orderBy: 'newest',
						results: [
							{
								id: 'world/live/2024/jun/27/israel-gaza-war-live-israel-warns-it-could-take-lebanon-back-to-the-stone-age-as-defence-minister-wraps-up-washington-trip',
								type: 'liveblog',
								sectionId: 'world',
								sectionName: 'World news',
								webPublicationDate: '2024-06-27T12:38:42Z',
								webTitle:
									'Israel-Gaza war live: Israel warns it could take Lebanon ‘back to the Stone Age’ as defence minister wraps up Washington trip',
								webUrl:
									'https://www.theguardian.com/world/live/2024/jun/27/israel-gaza-war-live-israel-warns-it-could-take-lebanon-back-to-the-stone-age-as-defence-minister-wraps-up-washington-trip',
								apiUrl:
									'https://content.guardianapis.com/world/live/2024/jun/27/israel-gaza-war-live-israel-warns-it-could-take-lebanon-back-to-the-stone-age-as-defence-minister-wraps-up-washington-trip',
								fields: {
									headline:
										'Israel-Gaza war live: Israel warns it could take Lebanon ‘back to the Stone Age’ as defence minister wraps up Washington trip',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qqm7j',
									thumbnail:
										'https://media.guim.co.uk/4f7145dfa4158016fa610104d95b9d5abe7f88d3/0_124_2605_1563/500.jpg',
									bodyText:
										'Here are some more pictures from today’s demonstrations in Israel against Benjamin Netanyahu and his government. Reporting from Deir al-Balah in central Gaza, Tareq Abu Azzoum has told Al Jazeera that families there have begun evacuating after receiving orders from Israel’s military. He says families have started to move from Shujayea neighbourhood to the southern part of Gaza City. Israel has previously claimed it “takes all possible precautions to avoid causing loss of civilian life or injury, adopting all available means”, including an interactive map on a website, aimed at a population that has a limited electricity supply and which has been subjected to communications blackouts. A Brussels charity, Human Smile, has got the backing of the European Commission and the Belgian ministry of defence to send 240 tonnes of aid to Gaza via Jordan after a “think outside the box” effort to get around continued obstructions to alleviate the suffering and starvation there. The transport of the aid, which includes mattresses, sleeping bags as well as baby milk powder and hygiene products, will be covered by the Commission. The cargo will be transported to Jordan by sea and delivered to the Hashemite Charity Organization of Jordan, before being transported to Gaza. Commissioner for crisis management Janez Lenarčič said it was an important to establish new routes into Gaza. “We must think outside the box and explore new ways of working together to alleviate the suffering of civilians in Gaza. It is essential that all land routes for aid to Gaza are opened and used to their full capacity. I urge all parties to allow rapid and unhindered humanitarian access to and inside Gaza.” Gaza’s health ministry has released its latest death toll figures. At least 37,765 Palestinians have been killed and 86,429 wounded in Israel’s military offensive since October 7. Israel’s military has reported that warning sirens have sounded near the Gaza border at kibbutz Nahal Oz in the south of the country. Al Jazeera reports that in conjunction with a US humanitarian organisation 21 Palestinian children with cancer are being transferred out of Gaza for treatment. Images on the news wires show families having tearful goodbyes with children as they are being transferred through the Kerem Shalom border crossing. Here are some of the latest images sent to us over the news wires from Gaza and Israel. Israel’s military has issued another one of its instructions to residents of Gaza to move from a series of blocks in the territory it has numbered to areas that Israel has designated as “safe”. In a recent report on the conflict the UN office for the coordination of humanitarian affairs said: Intensified hostilities following the issuance of evacuation orders and the Israeli military operation in Rafah have so far forced the displacement of about one million people, amid a decline in the entry of humanitarian aid. Israel has started to deploy extra troops to its northern border in preparation for potential full-scale war with the powerful Lebanese group, Hezbollah. Troops under the banner of the Northern Command conducted a major training exercise drilling “extreme” scenarios in the area on Wednesday, overseen partly by the prime minister, Benjamin Netanyahu, who said: “[the soldiers] are determined and devoted to the mission – to defend the country and achieve victory, nothing less.” Over the past few weeks, fears have grown on both sides of the UN-drawn blue line that diplomatic efforts to deescalate the current tit-for-tat hostilities between the two sides will fail to prevent a slide into major conflict after a sharp uptick in cross border attacks. Israeli officials said last week that plans for a ground offensive in Lebanon to drive the Iran-allied Shia militia back from the border had been signed off, prompting Hezbollah leader, Hassan Nasrallah, to issue more severe threats than he has made in the past. Several countries, including Germany and Canada, have issued travel warnings urging citizens to leave Lebanon. Hezbollah began firing on Israel the day after Hamas’ 7 October attack in an effort to aid the Palestinian group fighting in Gaza and hostilities have steadily spiralled over the last eight months. At least 400 people have been killed in Lebanon, including dozens of civilians, and 19 soldiers and 11 civilians have been killed in Israel. Diplomatic efforts led by the US and France are still under way. Israel’s defense minister, Yoav Gallant, said on Wednesday during a visit to Washington DC that Israel is still seeking a diplomatic solution to the crisis. Associated Press is carrying more details of the incident in the Red Sea that we briefly reported on earlier. It writes: The ship issued a radio call off the coast of the Houthi-held port city of al-Hudaydah, saying it had been struck, the private security firm Ambrey said. A warship in the area was responding to the attack, Ambrey added. Neither the British nor US militaries immediately reported the attack. The Houthis did not immediately claim the attack. Reuters earlier reported that the ship involved had been heading to the eastern city of Dammam, in Saudi Arabia, and no injuries or damage were reported. Palestinian news agency Wafa reports that Isreali forces detain 28 Palestinians in the occupied West Bank in the last 24 hours. According to Wafa, the total number of Palestinians who have been detained in the Israeli-occupied West Bank since 7 October has risen to over 9,400. Here are some of the latest images from Israel, where an anti-government demonstration has again attempted to block highways while demanding that Benjamin Netanyahu strike a deal to return Israeli hostages held by Hamas, and to call elections in Israel. Haaretz reporter Bar Peleg has posted this video, which shows protesters blocking a road by setting a fire. The Times of Israel reports that families of the hostages have said of Netanyahu in a statement “It’s either a deal or burial. Netanyahu has given up on the hostages. They can be buried in Gaza so long as he keeps his seat.” Palestinian news agency Wafa reports that at least five people have been killed and more injured as Israel continues its bombardment of the Gaza Strip. The agency said: Medical sources reported that five people were killed, and others were injured, when the occupation warplanes bombed a house in Shujaiya neighbourhood, east of Gaza City. The same sources added that a number of civilians were killed in the occupation’s artillery shelling east of Bureij refugee camp in the central Gaza Strip. The claims have not been independently verified. The Hamas-led health authorities in Gaza put the number of people killed during Israel’s military assault on the territory at nearly 38,000, with more than an additional 86,000 wounded. Many more people, including children, are believed to be under rubble in the Gaza Strip after months of airstrikes. It has not been possible for journalists to independently verify the casualty figures being issued during the conflict. Reuters is reporting that according to state-run media in Russia, Palestinian Authority president Mahmoud Abbas may visit Russia in August. Israel’s military has confirmed that one soldier was killed and another injured in the Jenin refugee camp in the Israeli-occupied West Bank. In a statement on its official Telegram channel, the IDF said the injured soldier was “evacuated to receive medical treatment at a hospital” and that his family has been notified. Haaretz reports that “16 other soldiers sustained light-to-moderate wounds in the incident”, which is in line with earlier reports from Al Jazeera. Al Jazeera has been banned from operating inside Israel by Benjamin Netanyahu’s government. The details of the incident given by Haaretz are: Members of the force were hit by an explosive device burried about a meter and a half underground, the army says, adding that a rescue force was then hit by a second explosive device. The army added that military bulldozers scanned the area prior to the forces’ entry, including the road under which the explosives were buried. Earlier this week Israel’s far-right finance minister, Bezalel Smotrich, described in explicit terms his active effort to permanently annex the West Bank to Israel, saying it was his “life’s mission” to thwart a Palestinian state forming. Since 7 October, settler violence across the West Bank has intensified, displacing entire villages, and the IDF conducts regular raids on Hamas and Palestinian Islamic Jihad cells as well as local brigades in Jenin, Nablus and Tulkarem on a near-nightly basis. More than 450 Palestinians have been killed in the Israeli-occupied West Bank in the past six months. The global maritime risk management agency Ambrey has said it is aware of an incident 84 nautical miles (155km) west of al-Hudaydah on Yemen’s Red Sea coast, Reuters reports. Anti-government protesters have again attempted to block a highway inside Israel, calling for Benjamin Netanyahu’s government to strike a hostage release deal and call elections. As well as the protest on the highway, demonstrations are planned outside the homes of significant figures in the Israeli government, and there are continued calls for a general strike. Haaretz quotes the Kaplan Force, which it says is leading the protests in Jerusalem, saying: We will protest until he falls. The failed and most provocative prime minister will not stop the citizens’ demand to return the mandate to the people. Demonstrations at Netanyahu’s home were pivotal in dismantling his previous government, and will be again. Herbew media outlet Ynet is carrying a story today that the IDF disputes the extent to which it has destroyed permanent buildings in Gaza during Israel’s months-long relentless bombardment of the territory. Earlier this month the United Nations satellite analysis agency Unosat said its imagery suggested that more than 137,000 buildings had been possibly affected, which amounted to 55% of the structures in Gaza. Other satellite imagery projects have put the level of destruction even higher. In Ynet today it says that the IDF, which claims its figures are more accurate, says that it has destroyed 16% of Gaza’s permanent structures and 36% of temporary structures, that is “35,952 permanent structures that the IDF destroyed in the Gaza Strip, and 84,276 temporary structures that were destroyed.” The UN estimate is based on a satellite image taken on 3 May this year, and compared with images of Gaza taken a year earlier. Ynet reports the IDF figures are claimed to be more accurate on the basis “the IDF’s data is based on an almost daily visual collection, which is dedicated to this purpose and is done by advanced drones, large drones and close and sophisticated technological documentation in 3D, some of it also at street level.” It continued, saying the figures may have a future use for the IDF: They may also be presented to the international tribunals and foreign commissions of inquiry that will investigate the IDF and the state of Israel at the end of the hostilities, a stage when foreign investigative bodies from international organizations will also be allowed to enter the Gaza Strip. Thousands of the buildings destroyed by the IDF do not necessarily belong to terrorists or Hamas, but are located near the border with Israel, and the IDF is destroying them to create a buffer zone between the western Negev and the cities and villages of the Gaza Strip. Many Palestinians have been forced to flee their homes and live in makeshift tent camps with poor sanitation facilities for months on end while the IDF carries out its military assault on Gaza. The Syrian Observatory for Human Rights reports three people have been killed and 11 wounded in a reported Israeli strike on south of Damascus. More details soon … Al Jazeera is reporting that one Israeli soldier has been killed in a blast in the Jenin refugee camp in the Israeli-occupied West Bank. It states that 17 were injured. There has been no comment yet from Israel’s security forces. Hello and welcome to the Guardian’s continuing coverage of the Israel-Gaza war and the wider crisis in the Middle East. Israel’s defence minister, Yoav Gallant, has warned that Israel’s military is capable of taking Lebanon “back to the stone age” in any war with Hezbollah militants, but insisted his government prefers a diplomatic solution on the Israel-Lebanon border. Speaking to reporters as his trip to Washington wrapped up, Gallant also said he discussed with senior US officials his “day after” proposals for governance of postwar Gaza that would include local Palestinians, regional partners and the US, but that it would be “a long and complex process.” More on that in a moment, first here’s a summary of the day’s other main events. US president Joe Biden’s top aides told Gallant that Washington would maintain a pause on a shipment of heavy bombs for Israel while the issue is under review, a senior US official told the Reuters news agency. The official said the allies remain in discussions about the single shipment of powerful munitions, which was paused by Biden in May over concerns they could cause more Palestinian civilian deaths in Gaza. Israeli forces pounded several areas across Gaza on Wednesday, and residents reported fierce fighting overnight in Rafah. Residents said fighting intensified in the Tel Al-Sultan neighbourhood in western Rafah, where tanks were also trying to force their way north amid heavy clashes. The armed wings of Hamas and the Islamic Jihad said fighters attacked Israeli forces with anti-tank rockets and mortar bombs. Turkish president Recep Tayyip Erdoğan has accused western powers of backing what he said were Israeli plans to attack Lebanon and “spread war” throughout the region. “Israel is now setting its sights on Lebanon and we see that western powers behind the scenes are patting Israel on the back and even supporting them,” he told lawmakers from his ruling AKP party. Vatican secretary of state, Pietro Parolin, on Wednesday urged warring parties in the Middle East to accept “peace proposals”, saying the region including Lebanon “doesn’t need war”. He told a press conference in Beirut, “the Middle East is going through a critical moment.” The outgoing United Nations humanitarian chief warned that a spread of the war to Lebanon would be “potentially apocalyptic”. Martin Griffiths described Lebanon as “the flashpoint beyond all flashpoints”. A war involving Lebanon “will draw in Syria … it will draw in others”, he told reporters in Geneva. “It’s very alarming.”',
								},
								tags: [
									{
										id: 'world/israel',
										type: 'keyword',
										sectionId: 'world',
										sectionName: 'World news',
										webTitle: 'Israel',
										webUrl: 'https://www.theguardian.com/world/israel',
										apiUrl: 'https://content.guardianapis.com/world/israel',
										references: [],
									},
									{
										id: 'world/gaza',
										type: 'keyword',
										sectionId: 'world',
										sectionName: 'World news',
										webTitle: 'Gaza',
										webUrl: 'https://www.theguardian.com/world/gaza',
										apiUrl: 'https://content.guardianapis.com/world/gaza',
										references: [],
									},
									{
										id: 'world/middleeast',
										type: 'keyword',
										sectionId: 'world',
										sectionName: 'World news',
										webTitle: 'Middle East and north Africa',
										webUrl: 'https://www.theguardian.com/world/middleeast',
										apiUrl: 'https://content.guardianapis.com/world/middleeast',
										references: [],
									},
									{
										id: 'world/hamas',
										type: 'keyword',
										sectionId: 'world',
										sectionName: 'World news',
										webTitle: 'Hamas',
										webUrl: 'https://www.theguardian.com/world/hamas',
										apiUrl: 'https://content.guardianapis.com/world/hamas',
										references: [],
									},
									{
										id: 'us-news/us-foreign-policy',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'US foreign policy',
										webUrl:
											'https://www.theguardian.com/us-news/us-foreign-policy',
										apiUrl:
											'https://content.guardianapis.com/us-news/us-foreign-policy',
										references: [],
									},
									{
										id: 'world/world',
										type: 'keyword',
										sectionId: 'world',
										sectionName: 'World news',
										webTitle: 'World news',
										webUrl: 'https://www.theguardian.com/world/world',
										apiUrl: 'https://content.guardianapis.com/world/world',
										references: [],
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'world',
									webTitle: 'World news',
									webUrl: 'https://www.theguardian.com/world',
									apiUrl: 'https://content.guardianapis.com/world',
									editions: [
										{
											id: 'world',
											webTitle: 'World news',
											webUrl: 'https://www.theguardian.com/world',
											apiUrl: 'https://content.guardianapis.com/world',
											code: 'default',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/news',
								pillarName: 'News',
							},
							{
								id: 'world/live/2024/jun/27/eu-leaders-meet-to-discuss-situation-in-ukraine-and-decide-blocs-future-leaders-europe-live',
								type: 'liveblog',
								sectionId: 'world',
								sectionName: 'World news',
								webPublicationDate: '2024-06-27T12:37:11Z',
								webTitle:
									'EU leaders meet to discuss situation in Ukraine amid divisions over bloc’s future leaders – Europe live',
								webUrl:
									'https://www.theguardian.com/world/live/2024/jun/27/eu-leaders-meet-to-discuss-situation-in-ukraine-and-decide-blocs-future-leaders-europe-live',
								apiUrl:
									'https://content.guardianapis.com/world/live/2024/jun/27/eu-leaders-meet-to-discuss-situation-in-ukraine-and-decide-blocs-future-leaders-europe-live',
								fields: {
									headline:
										'EU leaders meet to discuss situation in Ukraine amid divisions over bloc’s future leaders – Europe live',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qqnmg',
									thumbnail:
										'https://media.guim.co.uk/23f36e25960e9fe21fe41fffab15b69fe2ffea9c/0_303_7932_4759/500.jpg',
									bodyText:
										'Speaking to reporters at the summit, Hungary’s Viktor Orbán said the agreement reached among the centre-right, socialists and Renew Europe on the EU’s top jobs is “shameful.” Hungary cannot support this deal, he said, criticising in particular the European Commission president, Ursula von der Leyen. The top jobs, however, do not require a unanimous vote, and von der Leyen could win the European Council’s support without Hungary. Asked if he will miss Mark Rutte, who is attending his last European Council and will be taking over in October as Nato’s secretary-general, Orbán said: “It would be an exaggeration.” Asked if the French elections are overshadowing the summit, the Hungarian leader said they are giving it sunshine. Volodymyr Zelenskiy, Charles Michel and Ursula von der Leyen are now signing an agreement with Ukraine. The German chancellor, Olaf Scholz, has said the decision to back Ursula von der Leyen for a second term as European Commission president would be discussed carefully with all 27 leaders, Reuters reported. “We have reached a political understanding” among the European Parliament’s three main centrist groups,” Scholz said. “That’s just one position. We will discuss this carefully and fairly. All 27 are equally important. That is also important to me. But we have made it easier to reach a decision,” he said. The comments came after the Italian leader, Giorgia Meloni, expressed her frustration with the process. Hungary’s Viktor Orbán and Italy’s Giorgia Meloni could be seen chatting as they walked together to the leaders’ family photo. Roberta Metsola, the European parliament president, said when arriving at the summit that “2.5 weeks ago we had European elections, we got pretty clear messages from those elections, and now we have to make sure that we implement the political message into our programme.” “That means that we need to renew our focus on competitiveness, on security, on defence, and also on making sure that nobody is left behind in the digital and green transitions – those were pretty clear messages to us,” she said. Daniel Freund, a German Green MEP, has sent a letter with 20,000 signatures to the European Council president calling for the upcoming Hungarian presidency of the Council of the EU to be suspended. “Together with 20.000 citizens, we, the undersigned Members of the European Parliament, ask you to officially suspend the Hungarian Presidency of the Council, which is currently set to begin on July 1st, 2024,” he wrote. Hungary is set to take over the presidency on July 1, despite years-long concerns about democratic backsliding at home and the government’s friendly links to Moscow and Beijing. In the letter, seen by the Guardian, Freund wrote: It would be extremely harmful for the reputation of our Union, if the current Hungarian government would represent us Europeans in any capacity, just after the European elections. The EU has officially frozen funds under the Rule of Law Conditionality Mechanism due to the high levels of corruption in Hungary. Over the years, the Orbán government has also undermined their elections, the Rule of Law, and media freedom in Hungary. On the European level, the Orbán government has compared the European Union with a dictatorship. They published posters across the country with bombs bearing the EU flag, when sanctions against Russia were passed. At the time when imperialist dictator Putin is bombing Ukraine, an EU candidate country, Orbán went out of his way to China just to be able to shake hands with him. It is time the EU stands up against the bullying of a government that clearly has issues subscribing to the most fundamental of our European principles and values. Hungary in its current state would never pass the accession criteria to join the EU. Its criminal leadership should therefore not be allowed to represent the Union. Josep Borrell, the EU’s high representative for foreign affairs, said when arriving at the summit that this council “is especially important because we are going to sign with president Zelenskiy the security commitments with European Union.” Europe has to make up for lost time on defence, Borrell noted, adding that it’s not going to be easy. Addressing the situation in the Middle East, Borrell said there is “strong concern.” “We see starvation continues, bombing continues, humanitarian support is not entering into Gaza,” he said. The high representative also pointed to violence in the West Bank and the situation in the north. “Association Council cannot be business as usual,” he said, referring to the EU-Israel association council. The European People’s party should continue to lead, the Croatian prime minister, Andrej Plenković, said ahead of the leaders’ summit. Ireland’s Simon Harris said when arriving at the summit that when it comes to the European Council’s choice for next European Commission president “there’s absolutely no doubt, there is a clear a consensus that that will be Ursula von der Leyen.” He said the name of Ireland’s next commissioner is “settled.” On the Middle East, Harris did: I do not believe we are using all of the levers at our disposal as a European Union to bring about maximum pressure to create an immediate ceasefire. Simon Harris, the Irish leader, said he is “very pleased that we’re taking a historic step forward today in the fact that the European Council will of course be discussing Ukraine’s membership of the European Union, having had the intergovernmental conference in recent days.” “Looking forward to welcoming president Zelenskiy here to Brussels today as well, as another symbol of the ongoing solidarity that the European Union will continue to show with Ukraine for as long as it takes.” Harris also stressed that he is looking forward to talks on competitiveness. He also said that today he believes “we will bring finality – from the Council’s point of view – for the three top roles in the European institutions for the next period of time.” “We will sign three security agreements, including one with the EU as a whole,” Volodymyr Zelenskiy announced as he arrived for a summit with European leaders in Brussels. “For the first time, this agreement will enshrine the commitment of all 27 Member States to provide Ukraine with extensive support, regardless of any internal institutional changes. Each step we take brings us closer to our historic goal of peace and prosperity in our common European home,” he said. Asked if he’s concerned about the consequences of France’s upcoming elections, the Ukrainian president, Volodymyr Zelenskiy, said in Brussels that he hopes that most countries “will be on right side of history, on our side.” He also said Ukraine wants to prepare a plan to put on the table at a second peace summit. The Ukrainian president, Volodymyr Zelenskiy, has arrived at the summit. Standing alongside Charles Michel, he said: Thanks to you and of course to all the leaders of the EU for such historic outcome. We waited for this long period of time, yes. And everybody – civilians and of course our heroes on the battlefield – you know that how we want to be in the EU. Now we see this strong, historic step forward. And thank you very much for this support and for this outcome, opening negotiations. It’s very important for all of us, for all Ukraine, believe me. And of course, we have to work on next steps. You always say that we are too quick! But we need… we will discuss today with leaders about it, our next steps. He also pointed to “urgent things”, stressing the need for more air defence. EU leaders this afternoon will discuss the latest in Ukraine with Volodymyr Zelenskiy, the Ukrainian president. In his invitation letter to the EU’s 27 heads of state and government, Charles Michel, the European Council president, wrote: Concretely, our meeting will kick off on Thursday 27 June at 2pm with an exchange with President Zelenskyy. This will be an opportunity to discuss the situation on the ground, but also take note of some achievements since our last meeting. In particular, this European Council will be an opportunity to welcome the adoption of negotiating frameworks and the holding of Intergovernmental Conferences with Ukraine, Moldova and Montenegro. These are historic steps in supporting these countries’ respective path towards European membership. Furthermore, we have been ambitious and bold in channelling the extraordinary revenue from immobilised Russian assets to support Ukraine this year. For the following years, together with partners, we will secure loans for Ukraine for an additional EUR 50 billion. It is also imperative that we intensify our military support to Ukraine, focusing on air defence, ammunition, and missiles. Additionally, we must continue to rally broad international support for a just peace in Ukraine based on the UN Charter. Good afternoon and welcome to a special edition of the Europe blog, coming to you from the European Council summit in Brussels. Today, the EU’s 27 heads of state and government are expected to discuss the situation in Ukraine – and make a decision on the bloc’s next top leaders. Send tips and comments to lili.bayer@theguardian.com.',
								},
								tags: [
									{
										id: 'world/europe-news',
										type: 'keyword',
										sectionId: 'world',
										sectionName: 'World news',
										webTitle: 'Europe',
										webUrl: 'https://www.theguardian.com/world/europe-news',
										apiUrl:
											'https://content.guardianapis.com/world/europe-news',
										references: [],
									},
									{
										id: 'world/world',
										type: 'keyword',
										sectionId: 'world',
										sectionName: 'World news',
										webTitle: 'World news',
										webUrl: 'https://www.theguardian.com/world/world',
										apiUrl: 'https://content.guardianapis.com/world/world',
										references: [],
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'world',
									webTitle: 'World news',
									webUrl: 'https://www.theguardian.com/world',
									apiUrl: 'https://content.guardianapis.com/world',
									editions: [
										{
											id: 'world',
											webTitle: 'World news',
											webUrl: 'https://www.theguardian.com/world',
											apiUrl: 'https://content.guardianapis.com/world',
											code: 'default',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/news',
								pillarName: 'News',
							},
							{
								id: 'business/live/2024/jun/27/japan-fresh-warnings-yen-38-year-low-spacex-valued-210bn-business-live',
								type: 'liveblog',
								sectionId: 'business',
								sectionName: 'Business',
								webPublicationDate: '2024-06-27T12:35:51Z',
								webTitle:
									'Financial markets at risk of ‘sharp correction’, warns Bank of England – business live',
								webUrl:
									'https://www.theguardian.com/business/live/2024/jun/27/japan-fresh-warnings-yen-38-year-low-spacex-valued-210bn-business-live',
								apiUrl:
									'https://content.guardianapis.com/business/live/2024/jun/27/japan-fresh-warnings-yen-38-year-low-spacex-valued-210bn-business-live',
								fields: {
									headline:
										'Financial markets at risk of ‘sharp correction’, warns Bank of England – business live',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qqmzp',
									thumbnail:
										'https://media.guim.co.uk/1d159073dad20491092b34324a6d2eb5b19e1cfe/760_1344_5017_3011/500.jpg',
									bodyText:
										'Just in: the US economy grew a little faster than previously thought in the first quarter of this year. New data from the Bureau of Economic Analysis show that US gross domestic product increased at an annual rate of 1.4% in the first quarter of 2024. That’s the equivalent of growing by 0.35% quarter-on-quarter….and is up from the prevoius estimate of 1.3% annualised growth. The BEA says the increase primarily reflected increases in consumer spending, housing investment, business investment, and state and local government. But, a fall in inventory investment weighed on GDP, as did a rise in imports. This chart shows why the Bank of England has concerns about private equity risk management (see earlier post)… Here’s economist Julian Jessop of the Institute of Economic Affairs on today’s financial stability report: Uncertainty caused by a global wave of elections, starting this weekend in France, risks destabilising the UK’s financial system, the Bank of England has warned. Officials are concerned about the kind of policies that newly elected governments may enforce in large economies, including the US, where Donald Trump is vying for another term as president in the run-up to the election in November. The French president Emmanuel Macron’s shock announcement of a parliamentary election, with a first round of voting on 30 June and Marine Le Pen’s far-right National Rally party forecast to make significant gains, had shown how political uncertainty could impact economic growth forecasts and cause volatility in financial markets, affecting government debt prices, the Bank’s financial policy committee (FPC) said. More here. There’s no shortage of newsy lines in today’s financial stability report. Another one, is that the Bank of England believes that risk management in the private equity sector needs improving. The BoE says an investigation of the sector showed it was facing challenges from higher borrowing costs (because increases in interest rates have hit borrowers who loaded up on debt when it was cheap). The Bank says: Although the [private equity] sector has been resilient so far, it is facing challenges in the higher rate environment. These manifest in refinancing risk as debt matures, and an increased drag on performance from higher financing costs. In response, Michael Moore, chief executive of the BVCA (British Private Equity &amp; Venture Capital Association), says: The Bank has rightly highlighted the long-term stability and resilience of the private equity industry and the vital role it has played in the UK economy for over 40 years, and we welcome their acknowledgment of the importance of the sector to the economy. Many of the Bank’s concerns are already being addressed through new regulatory activity by the FCA, and we at the BVCA remain highly engaged in these processes. Over in the US, retail giant Walgreens Boots is planning to close some underperforming US stores and cut its profit forecasts today. Walgreen Boots now expects to make an adjusted profit of $2.80 to $2.95 per share for its financial year ending August, compared with its $3.20 to $3.35 per share forecast in March. The company says it is finalizing a “significant multiyear footprint optimization program” to close certain underperforming US stores. Chief executive officer Tim Wentworth says Walgreen Boots continues to face “a difficult operating environment”, due to the pressures on US consumers. He adds: “Informed by our strategic review, we are focused on improving our core business: retail pharmacy, which is central to the future of healthcare. We are addressing critical issues with urgency and working to unlock opportunities for growth. Many of these actions will take time, but I am confident that we have the right team and the right strategy to lead a business turnaround for the Walgreens that our customers and patients need.” Today’s Financial Stability Report recognises the forthcoming French elections as a potential geopolitical risk, points out Professor Costas Milas, of the University of Liverpool’s management school: In light of the forthcoming French elections, the French cost of borrowing continues to rise -albeit slightly- over the past week as does the Italian one. My brand new piece for the LSE Business Review blog looks at the rising political uncertainty in France and assesses the risk of contagion effects in Europe and the UK through the banking channel. European and British banks have a notable exposure to French public and domestic debt (around 10% their total exposure worldwide), which (according to the Chart in the piece) has increased over time. Something for ECB’s and BoE’s monetary policymakers to keep an eye on over the next few days and weeks… The Bank of England also warns that “significant downside risks remain” from China’s property market. Today’s financial stability report points out that activity in the mainland Chinese residential property sector continues to decrease, with the prices of new and existing homes falling this year: Disorderly defaults by property developers have been avoided so far, the Bank of England says, even though some large Chinese property developers have missed bond payments without agreed extensions. Chinese authorities have put various measures into place to support the housing market, which has helped support housing demand. The Bank warns, though, that the ongoing market adjustment will weigh on China’s economy for some time – and could potentially spill over to the UK economy, saying: The adjustment in the property sector, alongside broader structural trends, is likely to weigh on growth in China for some time. Property accounts for a significant proportion of household wealth in China; much higher than in the US, for example. That means falls in sales and residential property prices are likely to continue to impact Chinese consumption and growth. There have been limited spillovers to the UK so far from the adjustment in mainland China’s property market. However, significant downside risks remain. More widespread crystallisation of risks in mainland China could lead to spillovers to the UK and other countries, and could be larger if the crystallisation of property sector vulnerabilities were to spread to other sectors in the Chinese economy. Risks could spill over to the UK financial system through channels including weaker trade, financial markets, and global risk sentiment. Today’s Bank of England’s report shows high borrowing costs still pose a threat to the stability of the financial system, points out Karim Haji, global and UK head of financial services at KPMG. Haji adds that banks need to keep supporting customers who need help: “While there are signs that a brighter economic outlook is starting to feed through to resilient consumers and businesses, the Bank of England’s report shows high borrowing costs still pose a threat to the stability of the financial system. The good news is UK banks are in rude health, with strong capital and liquidity positions allowing them to support people even if the economy does worse than expected. It is incumbent on them to continue supporting vulnerable customers.” The Bank of England is concerned that the flurry of elections taking place this year could cause financial instability. Today’s report says: Geopolitical risks remain high and there is policy uncertainty associated with elections set to take place globally. This could make the global economic outlook less certain and lead to financial market volatility. The Bank cites the drop in French government bond prices, and shares in Paris, this month after Emmanuel Macron called snap parliamentary elections. They say: Markets responded to the unexpected announcement that French parliamentary elections would be held on 30 June and 7 July. For example, the spread between French and German 10-year government bond yields rose to its highest level since 2017. The US presidential elections, in November, are also an obvious source of risk and uncertainty, with Joe Biden and Donald Trump due to face off in a debate tonight. The City has been unspooked by the UK election next week, though, with JP Morgan suggesting that a Labour election victory will be a “net positive” for financial markets. If markets suffer a sharp correction, it would hurt the cost and availability of finance to the real economy through two main channels. The BoE says. First, a sharp market correction would make it more costly and difficult for corporates to refinance maturing debt, including by reducing the value of collateral. This is particularly relevant given the large proportion of leveraged lending and high-yield market-based corporate debt that is due to mature by the end of 2025. Second, it could interact with vulnerabilities in market-based finance, which may amplify the correction. For example, it may cause large losses for leveraged market participants, which could further reduce risk appetite, or it may lead to a spike in liquidity demand and a deterioration in the functioning of core markets. Millions of UK households will be hit by rising mortgage costs over the next two years, the Bank of England says, even though interest rates may have peaked. Its new Financial Stability Reprt shows that around 30% of mortgagors are likely to see mortgage costs rise by more than £100 a month by the end of 2026. That’s because borrowers will continue to come to the end of their fixed-rate deals, meaning they’ll have to refinance onto higher rates. Today’s Report says: With continued strong income growth and low unemployment, the aggregate amount of debt held by UK households relative to their income has fallen further since Q1. That said, many UK households, including renters, are still facing pressures from the increased cost of living and higher interest rates. The share of households spending a high proportion of their income on mortgage payments is still expected to increase slightly over the next two years. But the overall share of households who are behind in paying their mortgages remains low by historical standards. It adds: Over the next four years, the vast majority of fixed-rate mortgagors were expected to refinance, most at rates higher than they currently paid. A smaller group, predominantly those on variable-rate mortgages, could see a reduction in their monthly payments. The Bank also predicts that mortgage arrears will increase further, but are likely to remain well below their early 1990s and post-GFC peaks of 4.0% and 2.4%, respectively. This is despite interest rates having risen by more since 2021 Q4 than in past tightening cycles, it adds. The Bank of England also warns that some firms will struggle with the impact of higher interest rates in the years ahead. But most UK businesses remain ‘resilient’ to the economic outlook, today’s financial stability report says: We still expect most UK businesses to continue to be resilient to the economic outlook, including high interest rates. However some firms are likely to struggle with higher borrowing costs in the coming years. Firms with a large amount of market-based debt which still needs to be refinanced, and where a high proportion of income is being spent on repayments, are likely to come under the most pressure. Newsflash: The Bank of England has warned that financial markets remain at risk of a sharp correction. In its latest financial stability report, the BoE says that high inflation, or geopolitical risks, could trigger a selloff. The Bank says risks to the UK financial system are “broadly unchanged” since the first quarter of the year. But some asset prices have continued to rise, it points out, while the risk of a sharp correction persists. European markets are up around 8% so far this year, while the US Nasdaq Composite index has surged by 18%. The report, which is designed to track the stability of the financial system, says: The prices of many assets such as shares and bonds remain high relative to historical norms, and some have continued to rise. This suggests that investors in financial markets are continuing to expect the economy to recover and inflation to fall. They are placing less weight on risks, such as geopolitical developments or continued high inflation, that might cause weaker growth or interest rates to stay higher than expected. These risks make it more likely that there could be a sharp correction in asset prices that could ultimately make it more costly and difficult for UK households and businesses to borrow. The report also warns that Global risks are material, including geopolitical risks, which remain high. Overall, UK households and businesses have remained resilient to the impact of higher interest rates. The UK banking system is strong enough to support households and businesses, even if the economy does worse than expected. The French stock market has dipped this morning, with the CAC40 share index down 0.2%. Traders are jittery ahead of the first round of voting in the national assembly elections this weekend. Joshua Mahony, chief market analyst at Scope Markets, says: European markets have kicked off a somewhat indecisive start to the day, with the German DAX providing the one glimmer of light as the likes of the FTSE 100 and CAC head lower. While we saw early gains for French stocks, the fact that we are seeing them fade once again comes as no surprise as we approach the weekend election. Yesterday saw yet another poll that pointed towards further gains for the far-right National Rally party, with a Macron loss becoming increasingly likely. Nonetheless, while the Bloomberg poll of polls has NR and its allies at 36% of the vote, the fact that this remains well below the 50% marker highlights the fact that we will likely have to wait until next Sunday to find out the result. With that in mind, traders should expect a jittery period ahead, with the fears of a fresh surge in borrowing costs and financial instability driving potential CAC and euro weakness. Over in Tokyo, the government has warned that high interest rates in the United States and Europe are hurting the yen, and risking economic damage. In a monthly report, a cabinet office official flagged that “fluctuations” in the marketss should be watched closely. The report says: “The Japanese economy is recovering at a moderate pace, although it recently appears to be pausing. “The economy could face downside risks from the effects of continued high interest rate levels in the United States and Europe. Full attentions should be given to fluctuations in the financial and capital markets.” Some analysts are forecasting that Tokyo could intervene to support the yen if it fell as low as 165 to the dollar. ING point out that the intervention two months ago was triggeed by a 10 yen move in USD/JPY. They told clients: In April, USDI/JPY had risen from a low of 150 to a high of just below 160 over a little less than a month when Japan intervened… In the past 30 days, the low was 154.60, which would by the same logic place the intervention level at 164/165. The yen is still trading over 160 to the dollar, above this new “line in the sand” of 165…. The number of job openings at UK companies has dropped by a fifth compared with a year ago, hiring platform Indeed reports. In its Mid-Year Labour Market Update, Indeed shows job postings are slowing as the labour market cools. The technology industry, and the beauty &amp; wellness sector, are among those seeing the fastest slowdown in hiring. The report also found, though, that wage pressures remain strong, particularly in lower-paid roles. Here’s the key points: Foreign jobseeker interest is up— the share of searches for UK jobs from abroad is up 40% from its pre-Covid average. Roles remain hard-to-fill despite foreign interest - the jobs foreign jobseekers are most drawn to are software development, engineering and mathematics. However, engineering and software development roles remain some of the hardest-to-fill in the UK, meaning barriers remain in hiring this talent. Wage pressures still persist — Despite the labour market cooling, the Indeed Wage Tracker shows that posted wage growth rose to a four-month high of 6.5% year-on-year in May, driven by lower-paid roles, with childcare wages up the most at 8.6% year-on-year. Flexibility is a mainstay — the share of job postings mentioning remote or hybrid work has remained steady at around 15% of job postings in 2024, up from 13% in May 2022. Around 2.4% of jobseeker searches contained remote/hybrid terminology with the share remaining stable since 2022. Jack Kennedy, Indeed’s senior economist, says: “The UK labour market has continued its adjustment in recent months, though it remains somewhat tight and still competitive for employers in many sectors. Highly skilled jobs tend to always be harder to recruit for as they are naturally relevant to a smaller candidate pool. However, there is strong foreign interest in some of these jobs, meaning UK businesses may want to look at jobseekers from outside the country to fill gaps. While lower-paid jobs are generally easier to recruit for as the candidate pool is larger, persistently higher inactivity post-pandemic and post-Brexit immigration policy have made it harder than it used to be for employers to fill these roles. Tackling inactivity, a longer-term skills strategy and the role of immigration in addressing labour shortages will be agenda items for the elected government. The London stock market is a little subdued this morning, with the FTSE 100 down 8 points or 0.1% at 8217 points. Packaging firm DS Smith are the top riser, up 6.7%. Its takeover by US rival International Paper appears to be on track, after Brazil’s Suzano dropped its plans to merge with International Paper. Pharmaceuticals firm GSK is the top faller, down 5.2%, after US health officials recommended restricting vaccination with its RSV vaccine to people who are older and more at risk. That could reduce the market for the UK drugmaker’s blockbuster shot. SpaceX’s new valuation of $210bn is a record for an American private company: Just in: Sweden’s central bank, the Riksbank, has left interest rates on hold at 3.75%. But it also hints that rates could be cut as many as three times in the second half of 2024 if inflation prospects remain the same. The Riksbank explains: Inflation is close to the target and economic activity is weak. The Executive Board considers that monetary policy should be adjusted gradually, and has decided to hold the policy rate unchanged at 3.75%. Wet weather earlier this month has also slowed sales growth at British supermarkets, new data shows. Market researcher NIQ said sales at UK supermarkets rose 1.1% in the four weeks to 15 June year-on-year. That’s a slowdown on the 3.3% growth reported a month ago. The wet weather may have encouraged shoppers to buy groceries online rather than braving the shops; in-store sales fell 0.9% in the month to 15 June, while online sales increased by 3.7%. Shares in Swedish clothing retailer H&amp;M have tumbled 13% after reporting earnings that missed expectations this morning. H&amp;M also predicted a drop in June sales, suggesting they could fall by 6% in local currencies against the same period last year, partly due to poor weather in many key markets. It told shareholders: The unstable weather in many of the H&amp;M group’s large markets at the start of June 2024 had a negative impact on sales, but sales recovered as the weather normalised at the end of the month. CEO Daniel Ervér says H&amp;M group’s profitability performance during the first half of the year was strong. He warns, though, that external factors such as material costs and foreign currency rates, will have a more negative impact than expected in the second half of the year. Profits have dropped at motoring and cycling retailer Halfords. Halfords blamed continuing declines in the markets for car tyres and for cycling equipment, as consumer demand for big ticket purchases wanes. It made pre-tax profits of £19.9m in the last year, a 45% drop on the £36.2m the previous 12 months. On an underlying basis, though, profits before tax were in line with market expectations at £36.1m, down 18%. Halfords reports that the cycling market contracted faster than expected, leading to more promotional activity to shift stock. Elevated cost inflation continued to be a significant headwind, it adds. Looking ahead, Halfords predicts that market volumes for cycling and consumer tyres will fall in the current financial year: Trading since the start of FY25 has continued to be soft, impacted by low consumer confidence around big ticket, discretionary purchases, and poor spring weather, which has reduced store footfall and affected sales of both cycling and staycation products. Whilst we continue to expect market share gains in the year ahead, based on what we are currently seeing we now expect market volumes to decline in FY25 in cycling and consumer tyres, and to remain broadly flat in motoring servicing and retail motoring products. It’s also a busy morning for UK retailers, with several companies updating the stock market on their performance. Electricals seller Currys has reported a 10% rise in adjusted profit before tax, to £118m, but revenues have dropped 2%. Currys is hoping for a further boost from artificial intelligence, telling shareholders that the coming wave of AI led technology could be the most exciting tech cycle since the Apple iPad in 2010. Alex Baldock, Currys CEO, says: Encouraged as we are by our progress, we know we can go further. For one thing, we expect AI-powered technology to be the most exciting new product cycle since the tablet in 2010. With our partnerships, scale and expert colleagues to demystify AI, we’re best-placed to benefit. Japan’s Nikkei stock market has fallen by 0.8% today, losing 325 points to 39,341 points. A weaker yen is good for Japan’s exporters, so there may be some anxiety that Tokyo could intervene to drive the currency up again. Elon Musk’s SpaceX has been valued at about $210bn based on the value of insider shares being sold in a tender offer, Bloomberg reports today. SpaceX will sell insider shares at $112 apiece in a tender offer, a higher-than-expected price, that boosts the value of Elon Musk’s space and satellite company above its previous valuation of $180bn. SpaceX is considered one of the most profitable start-ups in the world, Bloomberg says, adding: The firm, which was founded in 2002 by Tesla Inc CEO Elon Musk, is one of the most prominent private manufacturers of spacecraft and satellites. It also offers satellite-based internet services through its Starlink subsidiary. The firm also holds a slew of contracts from NASA to provide spacecraft and crew equipment for orbital missions and support for the International Space Station. Earlier this month, SpaceX recorded the first fully successful test flight of its mighty space rocket Starship, when it splashed down successfully in the Indian Ocean. Japanese finance minister, Shunichi Suzuki, pledged today that authorities would take necessary actions on currencies after the yen slid to a 38-year low against the dollar. Japanese authorities are “deeply concerned” about the effect of the yen’s drop on the economy and are watching foreign-exchange moves with a high sense of urgency, Suzuki told reporters. He said: “It’s desirable for exchange rates to move stably. Rapid, one-sided moves are undesirable. In particular, we’re deeply concerned about the effect on the economy. We are watching moves with a high sense of urgency, analysing the factors behind the moves, and will take necessary actions.” Good morning, and welcome to our rolling coverage of business, the financial markets and the world economy. Pressure is piling on Japan’s authorities to intervene in the foreign exchange markets, after the yen weakened to a 38-year low against the US dollar. The yen, which has been ailing for some months, has weakened to as low as 160.8 to the dollar, for the first time since 1986. That takes the yen below its low in April, when Tokyo was forced to intervene in the foreign exchange markets, burning through ¥9.8tn (£48bn) to prop up their currency. The yen’s weakness is due to the interest rate differential between Japan and the rest of the world. While most central banks hiked rates aggressively over the last coule of years, the Bank of Japan (BoJ) only ended its negative interest rate policy this spring, and has pegged borrowing costs to a range of 0%-0.1%. Yesterday, Japan’s top currency official, Masato Kanda, told reporters that the government was “seriously concerned and on high alert” about the yen’s decline and would respond to any “excessive” moves. This week’s weakness has prompted speculation that fresh intervention may be required. Ipek Ozkardeskaya, senior analyst at Swissquote Bank, says: The only thing that prevents the yen from a further fall is the direct intervention risk. But other than that, the yen deserves to lose more blood. One-year risk reversals, which show how traders feel about the yen over a longer time, hint that they’re still kind of excited about the yen compared to the dollar. But that excitement is fading fast as the Bank of Japan (BoJ) keeps delaying its intervention plans meanwhile the Federal Reserve delays its rate cutting plans Another option would be for the BoJ to raise interest rates, of course, and try to strengthen the yen organically that way. This may not be too controversial, since the weak yen is hitting Japanese households hard, explains Kathleen Brooks, research director at XTB, adding: They must deal with rising inflation, as import prices surge, which is also weighing on consumption. Wage growth is also below inflation, which is adding pressure to the Japanese authorities to act. Some argue that the BOJ need to adjust monetary policy and narrow the interest differential with the US and the rest of the world, as that is the most effective way to boost the yen. However, it would also require a shift in priorities at the BOJ, moving away from keeping yields low and stable, to a normalization of monetary policy like that in the US and across Europe. The agenda 8.30am BST: Swedish Riksbank interest rate decision 8.30am 10.30am BST: Bank of England Financial Stability Report 10am BST: Eurozone consumer and economic confidence statistics for June 1.30pm BST: US GDP Q1 (final estimate)',
								},
								tags: [
									{
										id: 'business/business',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Business',
										webUrl: 'https://www.theguardian.com/business/business',
										apiUrl:
											'https://content.guardianapis.com/business/business',
										references: [],
									},
									{
										id: 'business/economics',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Economics',
										webUrl: 'https://www.theguardian.com/business/economics',
										apiUrl:
											'https://content.guardianapis.com/business/economics',
										references: [],
									},
									{
										id: 'business/stock-markets',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Stock markets',
										webUrl:
											'https://www.theguardian.com/business/stock-markets',
										apiUrl:
											'https://content.guardianapis.com/business/stock-markets',
										references: [],
									},
									{
										id: 'business/ftse',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'FTSE',
										webUrl: 'https://www.theguardian.com/business/ftse',
										apiUrl: 'https://content.guardianapis.com/business/ftse',
										references: [],
									},
									{
										id: 'business/yen',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Yen',
										webUrl: 'https://www.theguardian.com/business/yen',
										apiUrl: 'https://content.guardianapis.com/business/yen',
										references: [],
									},
									{
										id: 'world/japan',
										type: 'keyword',
										sectionId: 'world',
										sectionName: 'World news',
										webTitle: 'Japan',
										webUrl: 'https://www.theguardian.com/world/japan',
										apiUrl: 'https://content.guardianapis.com/world/japan',
										references: [],
									},
									{
										id: 'business/bankofenglandgovernor',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Bank of England',
										webUrl:
											'https://www.theguardian.com/business/bankofenglandgovernor',
										apiUrl:
											'https://content.guardianapis.com/business/bankofenglandgovernor',
										references: [],
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'business',
									webTitle: 'Business',
									webUrl: 'https://www.theguardian.com/business',
									apiUrl: 'https://content.guardianapis.com/business',
									editions: [
										{
											id: 'business',
											webTitle: 'Business',
											webUrl: 'https://www.theguardian.com/business',
											apiUrl: 'https://content.guardianapis.com/business',
											code: 'default',
										},
										{
											id: 'uk/business',
											webTitle: 'Business',
											webUrl: 'https://www.theguardian.com/uk/business',
											apiUrl: 'https://content.guardianapis.com/uk/business',
											code: 'uk',
										},
										{
											id: 'us/business',
											webTitle: 'Business',
											webUrl: 'https://www.theguardian.com/us/business',
											apiUrl: 'https://content.guardianapis.com/us/business',
											code: 'us',
										},
										{
											id: 'au/business',
											webTitle: 'Business',
											webUrl: 'https://www.theguardian.com/au/business',
											apiUrl: 'https://content.guardianapis.com/au/business',
											code: 'au',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/news',
								pillarName: 'News',
							},
							{
								id: 'football/live/2024/jun/27/euro-2024-last-16-ties-all-set-england-slovakia-live',
								type: 'liveblog',
								sectionId: 'football',
								sectionName: 'Football',
								webPublicationDate: '2024-06-27T12:31:35Z',
								webTitle:
									'Euro 2024: England pair Trippier and Rice train away from main group – live',
								webUrl:
									'https://www.theguardian.com/football/live/2024/jun/27/euro-2024-last-16-ties-all-set-england-slovakia-live',
								apiUrl:
									'https://content.guardianapis.com/football/live/2024/jun/27/euro-2024-last-16-ties-all-set-england-slovakia-live',
								fields: {
									headline:
										'Euro 2024: England pair Trippier and Rice train away from main group – live',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qqjjf',
									thumbnail:
										'https://media.guim.co.uk/4edd168f6d43846b1dcfc1b6857e46af0bfdc1da/0_129_5461_3280/500.jpg',
									bodyText:
										'Until then, shall we engage in a bit more England tactics/lineup chat? Yeah, why not. Shaun Tooze has been in touch on email: Hi Dominic. I know this is only joining the list of ‘experts who know better’ but the more I think about it, a formation of 3-4-1-2 would suit me. Stones - Guehi - Walker, with whoever is most comfortable being on the left of that, then (from left to right) Bowen/Foden - Rice - Mainoo/Wharton/Gallagher - Alexander-Arnold ... Bellingham/Palmer (I’m leaning towards Palmer) in the 10, with Kane and Watkins/AN Other up top. I think that would give us solidity when attacked and options going forward with the ball, and also wouldn’t have people tripping over each other like we’ve seen so far, especially in the middle and front-centre. Trippier, Saka and Bellingham have offered very little so I’d seriously consider other options now. Dunno ... just thinking out loud … what do you think ? I’d take issue with Phil Foden being stuck at left wing-back (Saka would be better there). And not sure two up top is the way forward either. Marc Guehi – who for me has, comfortably, been England’s best player at this tournament so far – is due speak to the media at 1.30pm BST. We’ll bring you some of his comments later. Thoughts on this? Three Germans, one Slovenian, a Georgia goalkeeper … und keine Engländer. It’s been great to see Willy Sagnol front and centre at these Euros. As a player for France in the 2000s, he often played second fiddle to the likes of Liliam Thuram and Bixente Lizarazu. He did once start a 2006 World Cup win over Portugal – the same opponent his Georgia side stunned last night to secure a last 16 berth. Sagnol could hardly believe what his team has achieved. “It’s still a bit difficult to realise what we have done,” he told Reuters. “When we go back to our homes and holidays, I think we are going to realise at this time exactly what we have done. Today I don’t have a lot of words ... I am so proud of the players. What an image of Georgia they have shown.” Slovakia are confident they can get a result against England in the last 16. Hey, why wouldn’t they be? Slovakian sports journalist Lukas Vrablik has been on BBC Radio 5 Live today talking about the Three Lions. “I’m quite disappointed by England’s performances, especially when you look at their individual quality have at their disposal,” he said. “I thought that England would be more convincing in those games, and Slovenia managed to neutralise the danger so it gives me big hope for Slovakia. I think this England team doesn’t look that strong as it did before the tournament.” Thanks. Good to be here! On John Brewin’s piece that Will mentioned earlier, I particularly enjoyed this paragraph about Gary Lineker’s side-project footy podcast: The use of “shit” by Lineker in summarising England’s Denmark performance was hardly the Sex Pistols meet Bill Grundy but the BBC’s leading men staging their own, vin-rouge-fuelled production threatens to become one of those issues on which Amol Rajan reports for the BBC about the BBC on the BBC, quoting senior BBC sources. Thank you very much for joining me this morning. Dominic Booth will run you through the lunchtime fun. Enjoy the rest of your football-free day, people. Keir Starmer has told England fans there is “too much criticism” of Gareth Southgate’s team after their group stage performances in Euro 2024 – and urged supporters to “get behind them”. Speaking on the campaign trail in Staffordshire, he added: “Get them over the line because this is a really important competition. “England always do a bit of this at the beginning of competitions ... but it’s a brilliant squad of players, all had great seasons for their respective clubs. Just get behind the team. I want less of the criticism, more of the support.” Spain defender Nacho became the latest big name in European soccer to move to the Saudi Pro League, joining newly-promoted Al-Qadsiah after a 23-year stay at Real Madrid. Khobar-based Al-Qadsiah, who won the Saudi First Division League in 2023-24 to move up to the top flight, announced Nacho’s signing on Thursday. The 34-year-old joined Real in 2001 as a youth player and debuted for their first team in 2011. He won six Champions League titles at the Santiago Bernabeu as well as four LaLiga crowns and two Copa del Reys. Nacho will join his new club after Spain’s Euro 2024 campaign. It is reported that Anthony Gordon fell off a bike at the training camp yesterday, resulting in a grazed chin. Get some stabilisers, lad. Gareth Vaughan emails: “A lot of people (including me) have said a lot of less than flattering things about Gareth Southgate during this tournament (and long before it frankly). There is a growing noise from some sources that this is somehow vastly unfair and unjust given his previous tournament success. Well the fact is that this is both manifestly true and untrue st the same time. “Clearly Southgate has brought us a period of consistent general success (without actually winning a trophy) during his tenure. And those who would say anyone could with the players he had, ignore the fact that there have been very talented England squads before this one who also failed to win anything and were far less successful. “But the fact also remains that watching this England is a form of torture and Southgate has that haunted look on his face so reminiscent of every England manager who has spent too much time staring into the dark abyss. And recently, his decision to make certain players unstoppable no matter how poor their performances and instead select a fantasy football first 11 rather than the best team, suggests he’s cosplaying at England manager, rather than actually BEING the manager. “I’d have more respect for him if he decided to ignore all the external white noise and pick the team he deep down thinks is the best for a tournament- which is probably a 3-5-1-1 formation similar to his 2018 World Cup team. A starting 11 of Pickford - Guehi, Stones, Walker - Shaw, Bellingham, Mainoo, Rice, Saka - Bellingham/ Foden- Kane will probably enrage most fans initially but would crucially allow us to control midfield and give the team a structure that has been lacking for the past 8 games. ”But it ain’t gonna happen…” It might … A few shots from England training. “Loving today’s blog,” says Simon Klee, “and thinking about the England and Wales situation. Southgate likely to go after this tournament; Wales looking for a new head coach and are prepared to accept a non-Welshmen. Perfect for Gareth to walk from one job to the next.” I do think Southgate might be more suited to international management that club. We have the great John Brewin on the battle between ITV and BBC for our hearts and minds. France’s defenders are readying themselves to face Romelu Lukaku. France meet Belgium in Düsseldorf on Monday in a game between “neighbours who want to beat each other”, as Dayot Upamecano described it moments ago. It is a tricky tie for France, who missed out on top spot in Group D to Austria. France have conceded a single goal – a Robert Lewandowski penalty in their last match – but William Saliba knows he and Upamecano will have to be on their toes to stifle Lukaku, even if he is still searching for his first goal of the tournament. “I don’t think there are many players that like playing opposite against Lukaku,” said the Arsenal defender. “When you play against the best forwards we are happy because they bring us up to the level. We have to be really focused when we play players like that. He’s a very good player but I hope he won’t be any good against us. I haven’t played against Lukaku before but he is one of the best attackers in the world. But it is not just him, there are other players we have to defend well against.” Speaking of goalscorers, William Saliba is confident France’s forward line will find their feet in the knockout stages. They face Belgium in the last 16 after failing to score from open play in their past four matches. Their two goals in the tournament so far have been an own goal and a Kylian Mbappe penalty, which is underwhelming to say the least. “It’s true we didn’t score many goals in the group stage. When you don’t score a lot, you have to be focused,” Saliba told a press conference. “But that’s how it can be when you are playing at the highest level. But I have no doubt that the attackers will be there in the round of 16 and deliver. It’s clear that we have to be more dangerous with our set pieces, especially me. I think I haven’t even touched one, so we can do better.” And do remember to keep on top of the Golden Boot table. For more opinions on how England could change, we have Karen Carney’s column from before the Slovenia match. A little bit of surprise at England’s Blankenhain training base this morning with Kieran Trippier and Declan Rice not among the main training group. Instead, they followed individual programmes. Load management is key to Gareth Southgate’s thinking over what he hopes will be a prolonged stay in Germany and Trippier is known to have carried a minor calf problem. It did not stop him from starting against Slovenia on Tuesday, although he was substituted in the 84th minute. Rice has not missed a minute of action here so far; his appearance against Slovenia was his 123th for club and country over the past two seasons. Phil Foden remains in England where he has returned to be with his partner for the birth of their third child. Wai Ming Loh emails: “I’m a Scotland supporter, just for context ... I sent this message to two friends this morning and feel it relates nicely to your morning feed, with regards to this article “I find this really interesting. It’s not something exclusive to England of course (talk of Clarke getting the boot despite taking Scotland to successive tournaments with a bunch of ok players and a few very good ones, and can only imagine it’s even worse in eg Brazil) but I find it amusing and tiresome in equal measure how many people “know” what needs to be done, despite having zero experience or qualifications as coaches, or former players who have either never been a manager/coach (eg Ferdinand) or are particularly noted for their abject performance when they were (eg Shearer, Neville). “Southgate has taken England further than anyone other than in 1966, and actually across his tenure probably even better on average than that, in bigger events with many stronger teams. “Yes, they’re dull at the moment, but all this gnashing of teeth, etc, just beggars belief. They qualified, will quite feasibly beat the Netherlands [edit now we know Slovakia], and thus find themselves in yet another semi, and possibly a final. “Obviously, I don’t want that to happen but if it would make these people eat their words, it’d almost (but not quite) be worth it. Of course, that wouldn’t happen - lots of revisionism or forgetting their earlier complaints would see them all right behind Gaz and his Boys, long live the King, etc.” Wouldn’t life be dull without opinions? Wales are willing to appoint a non-Welshman as manager for the first time in 25 years. The Football Association of Wales has detailed the criteria required to succeed Rob Page after ending his three-and-a-half-year reign last week and invited “expressions of interest” from potential candidates. Welsh football’s governing body has confirmed it is looking for an individual with a “proven track record of delivering success at club and/or international level” and plans to cast its net far and wide. Thierry Henry, Yaya Toure and Patrick Vieira - charismatic playing greats who went through Wales’ admired coaching system - would all be welcomed to express interest by the FAW, although all three are currently in employment. “The FAW knows how important coach education is to growing the game in Wales and offers a world-renowned service through its coaching courses,” said a FWA statement. “The Uefa Pro-Licence is a pre-requisite for coaches at the top level of the game and this qualification will be required to become Cymru’s next head coach. The Pro-Licence prepares candidates to work as a modern-day manager or head coach at club or international level. It develops their leadership and interpersonal skills to successfully implement their unique management style and philosophy.” “I liked Kári Tulinius’s coastal metaphor (10.22am),” says Charles Antaki. “To carry on with it, Czech Republic were like a large displeased child trying to headbutt the seaside Punch &amp; Judy show. Happily they shan’t bother us any further. There was, though, another large displeased child on show yesterday, and he will in fact still be with us into the next round.” The news from inside the England camp is that Declan Rice and Kieran Trippier are training indoors, separately from the group. Phil Foden is also absent as he is attending the birth of his third child. The other 23 players are present and correct. Where has the sense of fun gone with Gareth Southgate? Asks Jonathan Liew. Manchester United Women are losing a lot of talent. Who is the proud owner of these tattoos? Jude Bellingham has told his England team-mates to forget about any negative supporters as he praised the fans who dragged him over the line against Slovenia despite being “absolutely dead” on his feet. Despite drawing widespread criticism for their performances at Euro 2024, England topped Group C and avoided what appears to be the much tougher half of the draw for the knockout stages. “I think you definitely draw on them for energy towards the end of games,” he said. “I felt like in the last game, I was absolutely dead but you hear them singing, hear them chanting and you can play at a level that’s not our best, it’s normal, it can happen. But I think the important thing is, when you’re wearing this badge and you’re representing those fans, is that you don’t give up and I think that they’re a constant reminder of that. “I think it’s always interesting. I know there’s a lot of negativity outside the stadium and the camp but I always feel that when we get into the stadium, it’s so different. I think it’s important that as teammates and as a team, we remember that the ones in the stadium are the ones that are going to give us the energy so don’t worry about the ones that aren’t there. We’ve obviously got to keep using that energy, using that feeling that we get from them, to be successful in this tournament.” On yer bike. Switzerland enjoy your downtime between the group and knockout stages. A bit more on Bronze’s exit from Barcelona and the equally industrious Tom Garry. Richard Hirst joins the party: “A revolutionary (or maybe a revisionist) suggestion I know, but why don’t we just leave Southgate alone to do his thing? France don’t top their group, Portugal lose to Georgia, Italy need a stoppage time goal - maybe Southgate isn’t doing too badly after all. And he has a good tournament record. Just saying.” The performances have been pretty poor, though. He needs to find a massive improvement. “Turkey have played like a man trying to cross a spit of land that will be submerged once the tide rolls in,” says Kári Tulinius. “Austria have played like the tide. It could be fabulous to watch.” “My random unscientific theory is all England managers post Sir Bobby (not including Venables and Big Sam (forgot about him) as they didn’t stay long enough) go slightly mad and try to be too clever in their selections,” suggests Will Cook (Chef to his friends). “Southgate’s started by playing 3 right backs and not taking a fit left back, not even peak Pep Champions league semifinal breakdowns would play with 3 right backs. Anyway, that’s my random thought, I should get back to work now.” Luke Shaw will be available on Sunday … “Hello from a baking hot summers day in Dubai, Will,” emails Brett Turner. “Since you asked here’s the team I’d put out - Pickford Trent Stones Guehi Walker Bellingham Rice Bowen Palmer Gordon Kane We need pace, aggression and flair to break down another stubborn team parking the bus. I’d rather have Trent in the team than Trippier when we need to create and Walker / Gordon gives us frightening pace down the left for Trent to hit with his quarterback passes. Foden can come on for Palmer and hook Kane for Watkins if he’s still not aggressive enough. |This management lark is easy! Where’s my five million quid?? “Love your work.” I have not seen much clamour for Bowen but the campaign starts here, it would seen. Dropping Saka and Foden is the bold. Some Euros adjacent news from Matt Hughes. Georgia’s celebrations in video form for those that like car horns. Which last-16 tie clash are you most looking forward to? Despite neither team looking at their best, I think France v Belgium could be decent. There is plenty of quality in the two squad and maybe they will finally show it when it truly matters. There were some fantastic scenes in Romania after they top their group to make it to the last 16. How green is the Euros? Philippe Auclair takes a look. Elsewhere it has been confirmed that England full-back Lucy Broze will leave Barcelona this summer after the conclusion of her contract. Every man and his dog will be offering up their opinions on what England should do on Sunday against Slovakia. One such person is former striker Jermain Defoe who fancies seeing a bit more Ollie Watkins in this tournament. “When Ollie Watkins came on (against Denmark), he looked really sharp,” Defoe told the PA news agency. “He is someone who can get us up the pitch because he is so dynamic. He runs in behind, the ball doesn’t only come to his feet. I would love to see see him involved a little bit more because Harry Kane can drop into that 10 position, to roam and do his stuff. Harry is such a world-class finisher and it is almost like he can play in two positions, having almost mastered the number nine position as a focal point and can then also play in at number 10 because his passing rate is one of the best.” How do we solve a problem like England? Jacob Steinberg has a big and bold suggestion: drop Jude Bellingham. The team has looked incredible unbalanced in the three group games. If Southgate wants Rice and Mainoo to sit, maybe it is best for everyone is Bellingham sits it out on Sunday. What do you think? What a night it was for Georgia. In their first European Championships and they have made the last 16. How will we all cope with a day without European Championship football? We can all see our families for a few precious and enjoy a full 24 hours of complaining how Gareth Southgate is essentially wrong about everything. We will keep you up to date with everything that happens on what should be a lovely Thursday of fun and frolics. In the meantime, here is the full list of the last-16 ties: Saturday 29 June Switzerland vs Italy (Berlin, 5pm, all times BST) Germany vs Denmark (Dortmund, 8pm) Sunday 30 June England vs Slovakia (Gelsenkirchen, 5pm) Spain vs Georgia (Cologne, 8pm) Monday 1 July France vs Belgium (Düsseldorf, 5pm) Portugal vs Slovenia (Frankfurt, 8pm) Tuesday 2 July Romania vs Netherlands (Munich, 5pm) Austria vs Turkey (Leipzig, 8pm)',
								},
								tags: [
									{
										id: 'football/euro-2024',
										type: 'keyword',
										sectionId: 'football',
										sectionName: 'Football',
										webTitle: 'Euro 2024',
										webUrl: 'https://www.theguardian.com/football/euro-2024',
										apiUrl:
											'https://content.guardianapis.com/football/euro-2024',
										references: [],
									},
									{
										id: 'football/european-championship',
										type: 'keyword',
										sectionId: 'football',
										sectionName: 'Football',
										webTitle: 'European Championship',
										webUrl:
											'https://www.theguardian.com/football/european-championship',
										apiUrl:
											'https://content.guardianapis.com/football/european-championship',
										references: [],
									},
									{
										id: 'football/football',
										type: 'keyword',
										sectionId: 'football',
										sectionName: 'Football',
										webTitle: 'Football',
										webUrl: 'https://www.theguardian.com/football/football',
										apiUrl:
											'https://content.guardianapis.com/football/football',
										references: [],
									},
									{
										id: 'sport/sport',
										type: 'keyword',
										sectionId: 'sport',
										sectionName: 'Sport',
										webTitle: 'Sport',
										webUrl: 'https://www.theguardian.com/sport/sport',
										apiUrl: 'https://content.guardianapis.com/sport/sport',
										references: [],
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'football',
									webTitle: 'Football',
									webUrl: 'https://www.theguardian.com/football',
									apiUrl: 'https://content.guardianapis.com/football',
									editions: [
										{
											id: 'football',
											webTitle: 'Football',
											webUrl: 'https://www.theguardian.com/football',
											apiUrl: 'https://content.guardianapis.com/football',
											code: 'default',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/sport',
								pillarName: 'Sport',
							},
							{
								id: 'politics/live/2024/jun/27/uk-general-election-2024-live-updates-debate-betting-scandal-rishi-sunak-keir-starmer-tories-labour',
								type: 'liveblog',
								sectionId: 'politics',
								sectionName: 'Politics',
								webPublicationDate: '2024-06-27T12:31:09Z',
								webTitle:
									'At least seven officers under investigation over bets on general election timing, say Metropolitan police – live',
								webUrl:
									'https://www.theguardian.com/politics/live/2024/jun/27/uk-general-election-2024-live-updates-debate-betting-scandal-rishi-sunak-keir-starmer-tories-labour',
								apiUrl:
									'https://content.guardianapis.com/politics/live/2024/jun/27/uk-general-election-2024-live-updates-debate-betting-scandal-rishi-sunak-keir-starmer-tories-labour',
								fields: {
									headline:
										'At least seven officers under investigation over bets on general election timing, say Metropolitan police – live',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qqytd',
									thumbnail:
										'https://media.guim.co.uk/f76ac29d5d9eb4bcf326f856e76fa5766e7fdaf7/0_42_5930_3560/500.jpg',
									bodyText:
										'The last FMQs before the Scottish parliament’s summer recess – and the final outing for Douglas Ross as Scottish Conservative leader – was little more than an opportunity for the parties to rehearse their election campaign lines, despite the focus supposedly being on Holyrood matters. Ross – who was immediately told off by the presiding officer for describing SNP members as “clapping seals” – said that independence was “the only thing that mattered” to John Swinney, and that voters had other priorities; Ross referred to new figures showing delayed discharge is at a record high. Swinney blamed 14 years of austerity, and said that the Institute for Fiscal Studies had highlighted a “conspiracy of silence” about the funding of public services. Labour leader Anas Sarwar also attacked the Scottish government for NHS failings – waiting times in particular – while Scottish Lib Dem leader Alex Cole-Hamilton went on GP waiting times and cuts of mental health funding. Swinney told Sarwar he wanted an “honest conversation” about the financial support required for the NHS – and Sarwar said he looked forward to having just that on the SNP’s health record ahead of the 2026 Holyrood elections. New polling out this morning suggests the gap between Labour and the SNP has narrowed but that, because of the concentration of Labour support in the central belt, the nationalists should still expect heavy losses. As PA Media reports, a Savanta poll has Labour and the SNP both on 34% – but with analysis suggesting this could lead to Labour winning 28 seats (up from 1 in 2019), and the SNP just 18 (down from 48 at the last election). And a Survation poll has Labour on 37%, with the SNP on 31%. That would give Labour 31 MPs and the SNP 17, modelling suggests. Keir Starmer has dismissed the Tory election ad saying people should not “surrender” to Labour, and depicting a family with their hands up, as “really desperate stuff”. (See 11.17am.) Speaking to reporters today, he went on: And I’m surprised by it. I think it underlines the difference between the two campaigns. Now, they’re running a very negative campaign, nothing about the future of the country. I’m very happy to be the candidate going into the final week because putting forward a positive case for the change that country needs. Nigel Farage, the Reform UK leader, has announced that the businessman and former Newcastle United owner Sir John Hall is backing his party. In the past Hall has given more than £500,000 to the Conservative party. But today he told ITV Tyne Tees that the party no longer represented his views. He said: I’m a disillusioned Conservative. I just feel in these latter years they’ve let me down. Hall said he liked Reform UK because they would “fight for my English rights and customs”. He said he would not be joining the party, but he would be donating to it. Speaking in a rally in County Durham, Farage said that Hall had been an “amazing success story” and that he was backing Reform UK after decades of supporting the Tories. Before the rally started, Farage posted this on X to illustrate the size of the crowd. Labour’s shadow business secretary Jonathan Reynolds has said the party wants to run a government, not a Netflix series, as he defended the party’s decision to run a relatively surprise-free election campaign. Reynolds said Labour’s offer of stability and predictable policy would be valuable for businesses, in a speech today to industry leaders at the British Chambers of Commerce. Labour has retained a formidable poll lead over the Conservatives, but has also rowed back on some of its more ambitious proposals -notably on green investment. That has led to some activists complaining the party has not been radical enough. Unlike the Conservatives, Labour has also largely avoided making surprise policy announcements. Mostly it has focused on promoting policies agreed and announced well before the campaign started. This has prompted some political pundits to describe the campaign as boring. But Reynolds said: I’m told by some commentators, they don’t think Labour’s campaign is exciting enough. Look, my friends, we’re not pitching you a new Netflix series, you know, we’re not putting on politics as entertainment. We want a return to serious government, to effective policy, and to politics of public service, not as pantomime. Nigel Farage, the Reform UK leader, is speaking at a rally in Durham. There is a live feed here. Last night the Metropolitan police said that, although the Gambling Commission was investigating most of the suspect election date bets, it was involved in cases where the offending could go beyond the Gambling Act to include offences such as misconduct in public office. The Met has also said seven of its officers are now being investigated. This morning Keir Starmer said this showed why Rishi Sunak should have acted earlier. He said: This latest development highlights 1) how serious this is, 2) that the prime minister should have acted swiftly at the beginning and showed leadership rather than being bullied into taking action, and 3) the wider choice that is now there at the election between carrying on with this sort of behaviour – we’ve seen far too much of this sort of bending the rules – we’ve got to stop that, turn the page and usher in a reset for politics and for our country. Rishi Sunak is speaking at an election event in Derbyshire, and he is restating is claim that a vote for Labour would be a “blank cheque” because Keir Starmer is not saying what he would do in government. He says Starmer has “no answers” on immigration, and Labour won’t match the Tory pledge to increase defence spending to 2.5% of GDP. He says Labour “will whack up your taxes”. The Economist has published a leader endorsing Labour – for the first time since 2005. A magazine that calls itself a newspaper, there is a similar contradiction in the fact that it is committed to free-market liberal economics, and globalisation, and it is backing Keir Starmer even though he is not over-keen on either of those. But the election is a choice, it says. It explains: You would never know it from a low-wattage campaign but after 14 years of Conservative rule, Britain is on the threshold of a Labour victory so sweeping that it may break records. No party fully subscribes to the ideas that The Economist holds dear. The economic consensus in Britain has shifted away from liberal values – free trade, individual choice and limits to state intervention. But elections are about the best available choice and that is clear. If we had a vote on July 4th, we, too, would pick Labour, because it has the greatest chance of tackling the biggest problem that Britain faces: a chronic and debilitating lack of economic growth. Seven officers have been identified as having placed bets on the timing of the general election, the Metropolitan police said today. Britain biggest police force said it will continue to investigate a “small number” of wagers. Andrew Rhodes, chief executive of the Gambling Commission, said: We are focused on an investigation into confidential information being used to gain an unfair advantage when betting on the date of the general election. Our enforcement team has made rapid progress so far and will continue to work closely with the Metropolitan police to draw this case to a just conclusion. We understand the desire for information, however, to protect the integrity of the investigation and to ensure a fair and just outcome, we are unable to comment further at this time, including the name of any person who may be under suspicion. Det Supt Katherine Goodwin, who is leading the Met investigation, said: We have agreed a joint approach with the Gambling Commission, who are the appropriate authority to investigate the majority of these allegations. There will, however, be a small number of cases where a broader criminal investigation by the police is required. We will aim to provide updates at key points as our investigation progresses. One officer, a PC attached to the Royalty and Specialist Protection Command, has been bailed after being arrested on Monday 17 June on suspicion of Misconduct in Public Office. And this is from Chris Bryant, the Labour candidate and shadow minister, on the Conservative party’s “surrender” ad attack against Labour. You didn’t stay for the D-Day commemoration. You didn’t turn up for the votes on Owen Paterson or Boris Johnson. You were beaten by Liz Truss. Half of your candidates have given up. And now you talk of surrender? The number of Metropolitan police officers under investigation over bets on the timing of the general election has risen to at least seven, the force has said. On Tuesday the Met said six officers were being investigated – of whom one was the close protection officer who was arrested. The other five, who were not close protection officers, had not been arrested, but were being investigated by the Gambling Commission, it said. Brendan Cox, whose wife, Jo, was murdered by a rightwing terrorist during the Brexit referendum, has condemned the Conservatives for their “Don’t surrender your families future to Labour” advert. (See 11.17am.) According to the BBC transcript, Rishi Sunak used the word “surrender” 17 times during last night’s debate. Mostly it was in connection to borders and tax policy. Here are some examples. I don’t think that people should surrender their family finances to the Labour party Keir Starmer and the Labour party are not being straight with you. So do not surrender to their tax rises. Do not surrender our welfare system to the Labour party and Keir Starmer. If Labour win, the people smugglers are going to need a bigger boat. Don’t surrender our borders to the Labour party. Do not surrender your local councils and our finances to them. When pensioners are paying tax for the first time, that’s the change that is coming, so don’t surrender to that, because your families are going to pay the price. Today, in an advert on social media, Sunak has returned to the theme. The slogan “Don’t surrender your family’s future to Labour” could be seen as either sinister, or silly (or perhaps both). The picture in this advert presents Labour as an invading army, terrorising families at gunpoint. Presumably Rishi Sunak does not really think of the opposition like this, and so it is just a metaphor – exaggerated, for effect. But it seems intended to resonate with people of a certain generation whose mental furniture has not moved on much since 1945. The slogan also recalls Boris Johnson’s decision to label the bill intended to rule out a no-deal Brexit as a “Surrender Act”, which was provocative because it demonised remain-voting MPs at a time when some of them were getting death threats. Some political figures have condemned Sunak’s use of the slogan. This is from Alastair Campbell, the podcaster and former Labour communications chief. Another day another propaganda triumph for Sunak as the right wing papers unite to proclaim the latest attack line on Labour, NO SURRENDER (Ian Paisley Sr RIP!) As predicted on @RestIsPolitics - this was the line Sunak wanted to land. Anyone would think that Central Office dictated headlines ahead of the debate to save editors having to have judgement of their own. For a somewhat more balanced judgement if you missed our post-debate podcast live last night (which had more than double the viewers @TheSun had for their live YouTube leaders’ debate,) here it is https://youtube.com/live/ya1K0WSvOAk This is from Andrew Fisher, who was head of policy for Jeremy Corbyn when he was Labour leader. Sunak using deeply inflammatory language on migration: “surrender”, “soft touch of Europe” France takes more refugees than us, as does Germany, Spain &amp; Italy. Maybe we should do more to stop creating refugees by bombing their countries &amp; selling arms to dictators And this is from the Lib Dem peer Sarah Ludford. Sunak’s warning to voters not to ‘surrender’ to a Labour victory was shoddy, at least. No doubt trying to echo Churchill. But he said we would not surrender to the Nazis. Starmer, whatever one’s view of him, is not Hitler Rachel Reeves, the shadow chancellor, has seen her popularity rise notably during the election campaign, according to polling by JL Partners for the Rest is Politics podcast. RISE OF REEVES: Rachel Reeves has now joined Keir Starmer as one of two positively rated politicians in the UK. In the latest @restispolitics @JLPartnersPolls, she has moved from a net rating of minus 8 to plus 1. She is also the most popular Labour figure with 2019 Tories. In an interview with Times Radio Bridget Phillipson, the shadow education secretary, insisted that Labour would protect single-sex spaces for women. In the debate last night Rishi Sunak claimed Labour could not do this, because it is not backing his plan to amend the Equality Act to make it clear that, when the legislation refers to sex, it means biological sex. (See 7am.) There have been court rulings saying trans women can be included within the definition too, and the matter may have to be resolved by the supreme court. Keir Starmer argued that the legislation already protected women’s spaces. Asked about this on Times Radio, Phillipson said: I do believe in the importance of single-sex provision for women. So that, for example, when accessing women’s refuge provision, they’re confident that it’s a single sex space. And a Labour government will make sure that we maintain that single sex exemption that already exists within the Equality Act. But to give clarity to service providers, we’ll make sure that they know that they can enforce single sex provision on the basis of biological sex. Asked if that meant a trans woman would be allowed in a women’s refuge, Phillipson said: It means that service providers are able to, under the Equality Act, maintain single sex provision for biological women. I do think alongside that we can deliver appropriate care and support for trans people, but that would be done on a different basis, maintaining single sex provision for biological women. Jeremy Corbyn, the former Labour leader, has joined a picket line at St Thomas’ Hospital in Westminster to show his support for the junior doctors who are on strike. The Economist has become the latest organisation to publish an MRP poll suggesting the Tories are on course for a near wipe-out. Its MRP, which it has carried out with WeThink, suggests Labour is on course to win 465 of the 632 seats in England, Scotland, Wales, the Tories are heading for 76 seats, the Lib Dems 52 seats, and the Greens and Reform UK thee each. This would give Labour a majority of 280. This chart from the Economist’s report shows what the polling suggests has happened to the Conservative party’s 2019 vote. But being scrupulous about data, the Economist does not accept this polling as the final word. It also has its own election prediction model, which incorporates the results of conventional polling, and other MRP polls. It too predicts a huge Labour majority, but not such a colossal one. “Its central estimate is that Labour will have 429 mps, the Conservatives 117, the Liberal Democrats 42 seats, the SNP 23 and Reform UK 2,” the Economist says. Kevin Hollinrake, the business minister, has revealed that he put a bet on the Tories winning the general election. As Eleni Courea reports, Hollinrake told LBC the odds were 9:1 and, although he said people might think the bet was foolhardy, he argued: “Victory is always possible if you don’t stop fighting.” Sadly for the Tories, there is no suggestion that Hollinrake was privy to any inside information that made this bet a wise choice. Good morning. I’m Andrew Sparrow, taking over from Helen Sullivan. As reported earlier, a YouGov snap poll, released almost immediately after last night’s BBC debate was over, said viewers felt it was a dead heat. Asked who did best, the result was 50/50. But later in the evening More in Common released polling suggesting Starmer was seen as the winner, by 56% to 44%. These are from Luke Tryl, More in Common’s UK director. Who won tonight’s debate? @Moreincommon_ snap poll finds 44% saying Rishi Sunak and 56% say Keir Starmer But some good news for Rishi Sunak, people were slightly more likely to say that he did better than they expected than said the same about Keir Starmer. Impossible to know how much is partisan lean and how much is objective judgement of performance, but one crude comparison with general public’s choice of preferred PM shows Sunak outperforming that on “won the debate” by 8 points and Starmer under by 8. A similar pattern emerged after the ITV debate near the start of the campaign. The immediate YouGov poll had Sunak as the winner, but only just, by 51% to 49%. But a subsequent Savanta poll had Starmer as the winner by 44% to 39% (or 53% to 37%, if don’t knows are excluded). If you want to contact me, please post a message below the line (BTL) or message me on X (Twitter). I can’t read all the messages BTL, but if you put “Andrew” in a message aimed at me, I am more likely to see it because I search for posts containing that word. If you want to flag something up urgently, it is best to use X; I’ll see something addressed to @AndrewSparrow very quickly. I find it very helpful when readers point out mistakes, even minor typos (no error is too small to correct). And I find your questions very interesting too. I can’t promise to reply to them all, but I will try to reply to as many as I can, either BTL or sometimes in the blog. Shadow education secretary Bridget Phillipson is on the Today show. Asked about funding for universities, she says: ”Our universities are a brilliant success story… We will have to stabilise the sector. We will make sure that once again our universities are treated as the engines of growth,” and that Labour will have a “different relationship with universities”. It isn’t much of an answer. “They want money,” says Nick Robinson, and Phillipson returns to the Tory record on universities. With that vague response, I’m handing over to dean of this blog, Andrew Sparrow. According to MRP models, the Conservatives will win about 50 seats at next week’s election. Then again, some pollsters using the same method believe they are heading for closer to 200 seats. The same models show Labour heading for somewhere between 375 and more than 500 seats. One reason for the huge variation in seat predictions is that people are preparing to vote tactically in historic numbers, encouraged by two opposition parties that have all but abandoned campaigning in each other’s target constituencies. A poll by Ipsos on Wednesday showed that nearly one in five voters say they are planning to vote for a certain party not because they support it but because it is the one most likely to defeat the Conservatives where they are. That is more than any other general election campaign on record, when the numbers doing so tend to be between 10 and 12%. Keiran Pedley, a pollster at Ipsos, said: “Tactical voting is set to be more widespread than normal, which is why the Conservatives are doing so badly in some seat projections. If you want to predict the scale of the Conservative defeat, you have to understand the impact of tactical voting.” Kiran Stacey and Aletha Adu report: Labour’s shadow education secretary said she did not support David Tennant’s comments after the actor told equalities minister Kemi Badenoch to “shut up” in a row over trans rights. Bridget Phillipson told Times Radio: I personally don’t like that kind of language that was used. And I believe that where we discus these issues – and it is right that we can have an open discussion about them – that we do so in a way that is absolutely frank but respectful, tolerant, and in keeping with the best traditions within our country. And I know that politicians, particularly female politicians, receive an awful lot of abuse sometimes and do frequently face that kind of language being used against them and I don’t think it advances a more tolerant and respectful discussion.” Business minister Kevin Hollinrake says the timing of the latest junior doctors’ strike is “interesting”. Asked whether striking in the final week of an election campaign was “deliberately provocative”, Hollinrake told Sky News: It’s interesting timing, it really is. There’s not been a strike for some time. I don’t know, I’m not going to judge somebody’s motivation for a decision but it’s interesting timing and I regret the decision to strike because we know this doesn’t help waiting lists, which we want to bring down.” Even during a general election campaign with projections of historic – even unprecedented – results, people cannot always be relied upon to give their full attention. “We met a guy who said he was going to vote Labour but wouldn’t now because he had just heard that we were taxing condoms,” said Labour’s Karl Turner, who was first voted in as the MP for Hull East in 2010 and is standing for re-election this time. “I said, ‘condoms?’ ‘Yeah,’ he said: ‘I just heard on that [pointing to the TV] that you are taxing condoms, and I’m not having it. You’re not getting my vote.’ It was Terence [Turner’s parliamentary assistant] here who worked it out. “‘We’re taxing non-doms, not condoms,’ I said. ‘Oh,’ he said. ‘Like the prime minister’s wife? Ah.’ He calls out: ‘Margaret: they’re taxing non-doms, not condoms.’” It was one vote saved for Labour in East Yorkshire – but as the general election moves from what observers have described as the “air war”, where messaging is all-important, to the “ground war”, where mobilising the voters to actually visit the ballot box is key, it is the significant tranche of voters who have entirely switched off that worries Turner. Hull East was the only constituency at the last general election where under half (49.3%) of the electorate turned out to vote. Within Turner’s constituency is the ward of Marfleet, which has a strong claim to be the most politically disillusioned place in Britain. Turnout was 11.6% in the last local elections. Disillusionment and distrust when it comes to politics and politicians is a UK-wide phenomenon, and is strong in Hull East. At the start of the election, the Tories said Rishi Sunak wanted to debate Keir Starmer every week for all six weeks. It was a daft proposal that was never going to be accepted, and at time it felt like a clumsy ploy to make Starmer looked scared when he said no. After tonight, you start to wonder whether there were people in CCHQ who genuinely felt that, with a campaign entirely focused on debates, Sunak might actually have turned things around a bit. That is because, when the history of Labour’s election-winning campaign gets written up, the two head-to-head debates will stand out as Sunak’s best moments. Almost nothing else has gone right for him. But in the first debate he used a (fairly spurious) tax claim to keep Starmer on the defensive for the whole encounter, and tonight he was just as persistent and unrelenting. In some of the policy areas, like small boats and welfare, he was clearly winning the argument on points. And in terms of landing his message, he was probably more successful than Starmer too – even though, with the constant references to “surrender”, his message has become more alarmist and hysterical than when the election started. And while technically the YouGov snap poll is a draw, the YouGov sample is weighted (not like the studio audience, which being 50/50 Labour/Tory, was in reality disproportionately Tory) and so if Sunak is drawing neck-and-neck with Starmer, in relative terms he is doing well. Debate snap polls often just reflect how the public feel about leaders generally, and on all those normal measures Sunak and his party are miles behind. There are two caveats. While Sunak may have done well in terms of scoring debating points, he sounded increasingly like the sort of oddball that you would least want to be standing next to at a party. When he seemed nervous, or was facing challenge, his speaking rate starting speeding out and he began to get shouty and a bit monomaniac. Even if he had a point, it was not endearing. And the other caveat, of course, is that it is too late for any of this to make any difference – which may be why there was a thread of desperation running through the Sunak performance. If Sunak won on policy, Starmer won, very easily, on demeanour. He was more effective than he was in the first debate at pushing back at Sunak’s propagandist claims, and he delivered what was probably the best put-down of the night: Starmer said if Sunak listened to people around the country, he would not be so out of touch. He was not afraid to accuse Sunak of lying, but he managed to come over as less petty than his opponent, and more authoritative and likable. Sunak may have won in that he outperformed expectations. But Starmer presented as the next prime minister, and all he needed was a draw anyway; in that sense it was a win for him too. As trans rights appear to be becoming a growing issue in the election, it is worth looking back at this explainer by my colleague Archie Bland of the current government’s guidance for schools on youth transition. In December last year, Bland writes: The government finally published its long-delayed guidance for schools on youth transition. The document promises a clear set of principles for teachers and staff as they wrestle with the needs of children who are questioning their gender identity. According to the education secretary, Gillian Keegan, the guidance “puts the best interests of all children first”. But while the guidance has been broadly welcomed by those who believe that it is currently too easy for young people to “socially transition” at school, there are others who disagree vehemently. They see the government’s approach as informed by an underlying hostility to trans people, and scepticism about whether they even exist. And although the guidance does not include an outright ban on allowing social transition (said to have been under consideration until it was found to be unlawful), it clearly creates new barriers for teenagers who want to talk to teachers about their gender without fear of being outed at home. Central to criticisms of the government’s approach is a view that it takes a highly controversial set of positions about the best way to support children it calls “gender questioning”, and presents them as unimpeachable facts: The Metropolitan police are to take an expanded role in investigating the criminal allegations triggered by the Westminster betting scandal, which is continuing to overshadow the election campaign. Pippa Crerar and Vikram Dodd report: Sources confirmed that talks between the Gambling Commission, which has been investigating multiple suspicious bets on the election date, and Scotland Yard have been continuing for days. A formal announcement is expected as soon as Thursday but exact details are still to be hammered out, with the row around the scandal engulfing Rishi Sunak’s election campaign showing no sign of abating. A Scotland Yard spokesperson said: “The Met is not taking over the investigation into bets on the timing of the general election. “The Gambling Commission will continue to lead the investigation into cases where the alleged offending is limited to breaches of the Gambling Act only. “Met detectives will lead on investigating a small number of cases to assess whether the alleged offending goes beyond Gambling Act offences to include others, such as misconduct in public office.” Rishi Sunak is returning to the campaign trail on Thursday, PA reports, after a two-day hiatus for the Emperor and Empress of Japan’s state visit and preparations for the final head-to-head debate with Sir Keir Starmer. With one week to go until polling day, the deepening gambling scandal is still likely to feature heavily when he faces the media during a tour of the East Midlands and Yorkshire. He is expected to visit a factory in Derbyshire and hold an evening campaign event in Leeds. Keir Starmer accused Rishi Sunak of using transgender issues “as a political football to divide people” during their head-to-head debate on Wednesday. The pair clashed in response to a question about whether they would protect women’s rights to single-sex spaces, regardless of whether people have a gender recognition certificate. The prime minister said he would “unequivocally” change the law “so that the old Equalities Act recognises that sex means biological sex”. Starmer said he would protect women’s spaces but would not amend legislation in order to do so. The Labour leader told the BBC debate at Nottingham Trent University that Sunak should read the current laws and argued the protections are there. “Don’t just use this as a political football to divide people,” he said. Starmer added: “What I will also say is that I do recognise that there are a small number of people who are born into a gender that they don’t identify with, and I will treat them, as I treat all human beings, with dignity and respect. “I’ll tell you why, because if you don’t, we end up with the prime minister of the United Kingdom standing in parliament making an anti-trans joke in front of the mother of a murdered trans teenager.” Sunak replied: “That’s not what I did. I was pointing out that you’ve changed your mind on this question multiple times.” Starmer was referencing Sunak being accused of mocking trans people in the Commons as the mother of the murdered trans teenager Brianna Ghey visited parliament in February: If you’re catching up, here’s our five key takeaways from last night’s TV debate between Rishi Sunak and Keir Starmer: (This post was previously an embargoed story, which has been removed due to breaking the embargo. It will be restored at the correct time) Here is a more detailed schedule of what we can expect on the campaign trail today, via PA: Rishi Sunak and Keir Starmer return to the campaign trail on Thursday after they clashed over the Westminster betting row in their final televised head-to-head debate ahead of the General Election. Secretary of State for Work and Pensions Mel Stride is on morning media round for the Conservatives, Shadow Secretary of State for Education Bridget Phillipson for Labour, Liberal Democrat leader Ed Davey for the Lib Dems. 9.30am Scottish Liberal Democrat candidate for Edinburgh West, Christine Jardine, is on the campaign trail in Edinburgh. 10.15am: Starmer is in the North West and west Midlands. 11.30am: Sunak is campaigning in the Midlands and Yorkshire with a staff Q&amp;A at a pottery factory in Derbyshire. 12pm: Nigel Farage in the North East, before a Reform event with Richard Tice in the evening. 2.30pm Scottish Labour leader Anas Sarwar to visit a health charity in Kirkcaldy with local candidate Melanie Ward. 3:10pm SNP Leader John Swinney on campaign trail in Edinburgh East and Musselburgh with SNP candidate for Edinburgh East and Musselburgh, Tommy Sheppard. Scottish Conservative leader Douglas Ross to visit business in East Lothian. 7pm: Starmer interviewed by Sky’s Sophy Ridge. 8.30pm: ITV interview with Starmer 9pm: Northern Ireland leaders take part in a BBC debate Last night’s debate – and exclamation points – are common themes on the front pages this morning, with the Guardian leading with PM and Starmer clash over betting scandal in tetchy final TV debate: The Times: Sunak rams home tax message in final debate The Independent: Starmer squares up to striking doctors: I won’t give a 35% rise The Daily Mail: Rishi’s furious blast at Starmer… You are taking people for fools! Scotsman: SNP closing gap on Labour despite contrast in seat count Much like the scandal, the betting puns aren’t over yet: the Daily Record has Flutter Coward beside a picture of a downcast Sunak: The award for counting – almost – to ten goes to the Daily Express, with: No idea! 9 times Starmer fails to give an answer on boats crisis: Maybe ‘the next foreign secretary’ knows the answer, in this week’s New Statesman: And distinguished guests, we have a tie for the Stuff of Nightmares Award, which goes to the cover artists for the New European and the Spectator: The leaders of the BMA’s junior doctors committee (JDC) said today that they could call further strikes for this summer if the next government does not hold talks in a “timely manner”. However, they have stressed in recent months that they would be happy for any significant progress towards their goal of “full pay restoration” to be phased in over a number of years. That has raised tentative hopes that the long-running and very disruptive dispute may soon be over. Wes Streeting, the shadow health secretary, has said that increasing junior doctors’ pay would need to be a “journey not an event”. He has also said that he would not approve a 35% rise because if he did, “any trade union worth its salt” would then demand the same sum for its members. Dr Robert Laurenson, the JDC co-chair, said: “He is talking about things like ‘journey not an event’. We’re happy to have a multiyear pay deal. He has seemingly heard that, and ‘journey not an event’ matches that.” Dr Vivek Trivedi, the other co-chair, said: “The main thing I’ve taken away from discussions [with Labour] is that there is a willingness to try and at least engage in constructive and meaningful [talks]”. He added: “If talks do not move in a timely manner, then of course our members would expect us to call for strike action.” Junior doctors in England will strike today for the 11th time over pay, amid concern in their union that a stoppage so close to the general election is an “own goal”. Senior figures in the British Medical Association (BMA) believe the strike is pointless and “naive” and risks irritating Labour, which looks likely to be in power by next Friday and asked the union to call it off. About 25,000 junior doctors are expected to refuse to work during the five-day stoppage, which begins at 7am today and runs until the same time next Tuesday, 2 July. By the end of it, junior doctors will have been on strike for 44 days since they first took industrial action in March 2023 in pursuit of a 35% pay rise. The 10 previous strikes have forced the NHS to cancel 1.4m outpatient appointments and operations and spend £1.7bn to minimise disruption. NHS England expects the “widespread disruption to care” over the next five days to be worse than before because heat-related health problems are adding to the strain on many services. “This new round of strike action will again hit the NHS very hard,” said Prof Stephen Powis, its national medical director. A snap poll by YouGov of 1716 people had voters evenly split on who won last night’s debate. Sunak and Starmer were also practically tied on who seemed more “prime ministerial”, earning 41% and 42% respectively (with 16% “don’t knows”). Asked how well each individual performed, Starmer came out slightly ahead, with a score of 61% to Sunak’s 56%. Starmer was way ahead on being “in touch with ordinary people”, with 63% to Sunak’s 18%. Starmer was also more likeable (52-33) and trustworthy (50-39). Sunak beat starmer on immigration (55-35) and tax (48-37), with Starmer coming out on top on the economy (47-53), welfare and benefits (51-39) and Britain’s relationship with the EU (52-32). Rishi Sunak and Keir Starmer have clashed over their responses to the Westminster gambling scandal, as it emerged the Metropolitan police is to widen its role in the investigation into bets placed on the general election. In the last head-to-head debate before voters go to the polls, the Labour leader launched a fierce attack on the culture at the top of the Conservative party, saying it showed the “wrong instinct” to place bets on the future of the country – likening it to the cavalier attitude to Covid rules. In the angry exchanges, Sunak repeatedly urged the country not to “surrender” to Labour’s plans on tax and migration and said the general election should not be decided purely based on frustration with the Conservatives. Jessica Elgot and Pippa Crerar report: Hello and welcome to the Guardian’s live coverage of the run-up to the UK general election with me, Helen Sullivan. This time next week polling stations will be preparing to open – voting starts at 7am on 4 July. In their final debate before polling day, Rishi Sunak and Keir Starmer traded barbs over their responses to the gambling scandal, the Guardian’s Jessica Elgot and Pippa Crerar report, as it emerged the Metropolitan police is to widen its role in the investigation into bets placed on the general election. Starmer said he had suspended his candidate, Kevin Craig, “within minutes” of Craig admitting in a statement that he had placed a bet against himself winning the seat a few weeks ago. Starmer was comparing his actions with Sunak, who took days to make the decision. “I think that in the last 14 years politics has become too much about self entitlement, and MPs thinking about what they could get for themselves,” he said. “The instinct of these people to think the first thing they should do is try to make money, that was the wrong instinct, and we have to change that.” He said Sunak had “delayed and delayed and delayed” and had been “bullied into” taking action. “My candidates know I have the highest standards. They have seen by my actions the consequences”. Sunak meanwhile repeatedly urged voters not to “surrender” to a Labour government, using language Boris Johnson used when talking about Brexit. “Do not surrender to the Labour party the control of our borders. If Labour wins, the people smugglers are going to need a bigger boat,” said Sunak. More on the key developments from the debate soon. Meanwhile here is what is coming up today: 9.30am Scottish Liberal Democrat candidate for Edinburgh West, Christine Jardine, is on the campaign trail in Edinburgh. 12pm: Nigel Farage in the north-east, before a Reform event with Richard Tice in the evening. 2.30pm Scottish Labour leader Anas Sarwar to visit a health charity in Kirkcaldy with local candidate Melanie Ward. 3:10pm SNP Leader John Swinney on campaign trail in Edinburgh East and Musselburgh with SNP candidate for Edinburgh East and Musselburgh, Tommy Sheppard. The Scottish Conservatives are on the campaign trail in East Lothian. 8.30pm: ITV interview with Keir Starmer 9pm: Northern Ireland leaders take part in a BBC debate',
								},
								tags: [
									{
										id: 'politics/general-election-2024',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'General election 2024',
										webUrl:
											'https://www.theguardian.com/politics/general-election-2024',
										apiUrl:
											'https://content.guardianapis.com/politics/general-election-2024',
										references: [],
									},
									{
										id: 'politics/general-elections',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'General elections',
										webUrl:
											'https://www.theguardian.com/politics/general-elections',
										apiUrl:
											'https://content.guardianapis.com/politics/general-elections',
										references: [],
									},
									{
										id: 'politics/politics',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'Politics',
										webUrl: 'https://www.theguardian.com/politics/politics',
										apiUrl:
											'https://content.guardianapis.com/politics/politics',
										references: [],
										description: '<p><br></p>',
									},
									{
										id: 'politics/conservatives',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'Conservatives',
										webUrl:
											'https://www.theguardian.com/politics/conservatives',
										apiUrl:
											'https://content.guardianapis.com/politics/conservatives',
										references: [],
									},
									{
										id: 'politics/labour',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'Labour',
										webUrl: 'https://www.theguardian.com/politics/labour',
										apiUrl: 'https://content.guardianapis.com/politics/labour',
										references: [],
									},
									{
										id: 'uk/uk',
										type: 'keyword',
										sectionId: 'uk-news',
										sectionName: 'UK news',
										webTitle: 'UK news',
										webUrl: 'https://www.theguardian.com/uk/uk',
										apiUrl: 'https://content.guardianapis.com/uk/uk',
										references: [],
									},
									{
										id: 'politics/keir-starmer',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'Keir Starmer',
										webUrl: 'https://www.theguardian.com/politics/keir-starmer',
										apiUrl:
											'https://content.guardianapis.com/politics/keir-starmer',
										references: [],
									},
									{
										id: 'politics/rishi-sunak',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'Rishi Sunak',
										webUrl: 'https://www.theguardian.com/politics/rishi-sunak',
										apiUrl:
											'https://content.guardianapis.com/politics/rishi-sunak',
										references: [],
									},
									{
										id: 'politics/leaders-debates',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: "Leaders' debates",
										webUrl:
											'https://www.theguardian.com/politics/leaders-debates',
										apiUrl:
											'https://content.guardianapis.com/politics/leaders-debates',
										references: [],
									},
									{
										id: 'media/bbc',
										type: 'keyword',
										sectionId: 'media',
										sectionName: 'Media',
										webTitle: 'BBC',
										webUrl: 'https://www.theguardian.com/media/bbc',
										apiUrl: 'https://content.guardianapis.com/media/bbc',
										references: [],
									},
									{
										id: 'politics/polls',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'Opinion polls',
										webUrl: 'https://www.theguardian.com/politics/polls',
										apiUrl: 'https://content.guardianapis.com/politics/polls',
										references: [],
									},
									{
										id: 'uk/metropolitan-police',
										type: 'keyword',
										sectionId: 'uk-news',
										sectionName: 'UK news',
										webTitle: 'Metropolitan police',
										webUrl:
											'https://www.theguardian.com/uk/metropolitan-police',
										apiUrl:
											'https://content.guardianapis.com/uk/metropolitan-police',
										references: [],
									},
									{
										id: 'politics/brexit-party',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'Reform UK',
										webUrl: 'https://www.theguardian.com/politics/brexit-party',
										apiUrl:
											'https://content.guardianapis.com/politics/brexit-party',
										references: [],
									},
									{
										id: 'politics/nigel-farage',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'Nigel Farage',
										webUrl: 'https://www.theguardian.com/politics/nigel-farage',
										apiUrl:
											'https://content.guardianapis.com/politics/nigel-farage',
										references: [],
									},
									{
										id: 'politics/john-swinney',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'John Swinney',
										webUrl: 'https://www.theguardian.com/politics/john-swinney',
										apiUrl:
											'https://content.guardianapis.com/politics/john-swinney',
										references: [],
									},
									{
										id: 'uk/scotland',
										type: 'keyword',
										sectionId: 'uk-news',
										sectionName: 'UK news',
										webTitle: 'Scotland',
										webUrl: 'https://www.theguardian.com/uk/scotland',
										apiUrl: 'https://content.guardianapis.com/uk/scotland',
										references: [],
									},
									{
										id: 'politics/scotland',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'Scottish politics',
										webUrl: 'https://www.theguardian.com/politics/scotland',
										apiUrl:
											'https://content.guardianapis.com/politics/scotland',
										references: [],
									},
									{
										id: 'society/gambling',
										type: 'keyword',
										sectionId: 'society',
										sectionName: 'Society',
										webTitle: 'Gambling',
										webUrl: 'https://www.theguardian.com/society/gambling',
										apiUrl: 'https://content.guardianapis.com/society/gambling',
										references: [],
										description: 'The latest news and comment on gambling',
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'politics',
									webTitle: 'Politics',
									webUrl: 'https://www.theguardian.com/politics',
									apiUrl: 'https://content.guardianapis.com/politics',
									editions: [
										{
											id: 'politics',
											webTitle: 'Politics',
											webUrl: 'https://www.theguardian.com/politics',
											apiUrl: 'https://content.guardianapis.com/politics',
											code: 'default',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/news',
								pillarName: 'News',
							},
							{
								id: 'money/article/2024/jun/27/private-car-parks-uk-motorists-10-minute-grace-period-fines',
								type: 'article',
								sectionId: 'money',
								sectionName: 'Money',
								webPublicationDate: '2024-06-27T12:30:03Z',
								webTitle:
									'Private car parks to give UK motorists 10-minute grace period before fines',
								webUrl:
									'https://www.theguardian.com/money/article/2024/jun/27/private-car-parks-uk-motorists-10-minute-grace-period-fines',
								apiUrl:
									'https://content.guardianapis.com/money/article/2024/jun/27/private-car-parks-uk-motorists-10-minute-grace-period-fines',
								fields: {
									headline:
										'Private car parks to give UK motorists 10-minute grace period before fines',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qqz44',
									thumbnail:
										'https://media.guim.co.uk/d37aa78aa7a4ffdd5ffc66a838f19e8eb5de3889/0_282_5616_3370/500.jpg',
									bodyText:
										'Private car parks will offer motorists in the UK a 10-minute “grace period” before issuing fines, but motorists say the voluntary code is not enough to protect drivers from unfair practices. The measure is part of a new code of practice that private car-park companies have promised to introduce in the autumn. Industry trade bodies will also implement a fairer appeals system and maintain an existing cap on charges of £100 – reduced to £60 if paid within 14 days. However, motoring organisations have argued that the proposed voluntary code “falls far short” of the standards required to protect “innocent” drivers from the “sharks running private car parks”. They are calling for government legislation. The AA head of roads policy, Jack Cousens, said: “This self-authored code doesn’t acknowledge the need to cap charges and remove debt recovery fees … These elements are desperately needed from a government-backed code to protect innocent drivers from the sharks running private car parks.” The code was published by the British Parking Association and the International Parking Community, the two trade bodies representing private car-park operators. It also includes requirements for more consistent signage and an “appeals charter” for drivers. The grace period means that vehicles in car parks will have 10 minutes after parking expires before being issued with a fine. Parking companies will only be required to meet the new standards in full by December 2026. Politicians and motorist groups have criticised private parking businesses – which issued 9.7m tickets between April and December last year – for unreasonable fees and misleading signage. A bill to enable the introduction of a legislation-backed code of conduct received royal assent in March 2019. The legislation, which was withdrawn in 2022 after a legal challenge from private parking companies, included halving the cap on tickets for most parking offences to £50, among a number of other measures. Simon Williams, the head of policy at the RAC, said: “Drivers shouldn’t be fooled into thinking this so-called code developed by the private parking industry itself is the same as the long-delayed official private parking code of practice that is backed by legislation. “This, and only this, will bring an end to the worst practices of some private parking operators, and mean drivers – especially those who are vulnerable – are protected from unreasonable fines and debt collectors chasing down payments.”',
								},
								tags: [
									{
										id: 'money/motoring',
										type: 'keyword',
										sectionId: 'money',
										sectionName: 'Money',
										webTitle: 'Motoring',
										webUrl: 'https://www.theguardian.com/money/motoring',
										apiUrl: 'https://content.guardianapis.com/money/motoring',
										references: [],
									},
									{
										id: 'money/money',
										type: 'keyword',
										sectionId: 'money',
										sectionName: 'Money',
										webTitle: 'Money',
										webUrl: 'https://www.theguardian.com/money/money',
										apiUrl: 'https://content.guardianapis.com/money/money',
										references: [],
									},
									{
										id: 'uk/transport',
										type: 'keyword',
										sectionId: 'uk-news',
										sectionName: 'UK news',
										webTitle: 'Transport',
										webUrl: 'https://www.theguardian.com/uk/transport',
										apiUrl: 'https://content.guardianapis.com/uk/transport',
										references: [],
									},
									{
										id: 'politics/politics',
										type: 'keyword',
										sectionId: 'politics',
										sectionName: 'Politics',
										webTitle: 'Politics',
										webUrl: 'https://www.theguardian.com/politics/politics',
										apiUrl:
											'https://content.guardianapis.com/politics/politics',
										references: [],
										description: '<p><br></p>',
									},
									{
										id: 'uk/uk',
										type: 'keyword',
										sectionId: 'uk-news',
										sectionName: 'UK news',
										webTitle: 'UK news',
										webUrl: 'https://www.theguardian.com/uk/uk',
										apiUrl: 'https://content.guardianapis.com/uk/uk',
										references: [],
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'money',
									webTitle: 'Money',
									webUrl: 'https://www.theguardian.com/money',
									apiUrl: 'https://content.guardianapis.com/money',
									editions: [
										{
											id: 'money',
											webTitle: 'Money',
											webUrl: 'https://www.theguardian.com/money',
											apiUrl: 'https://content.guardianapis.com/money',
											code: 'default',
										},
										{
											id: 'uk/money',
											webTitle: 'Money',
											webUrl: 'https://www.theguardian.com/uk/money',
											apiUrl: 'https://content.guardianapis.com/uk/money',
											code: 'uk',
										},
										{
											id: 'us/money',
											webTitle: 'Money',
											webUrl: 'https://www.theguardian.com/us/money',
											apiUrl: 'https://content.guardianapis.com/us/money',
											code: 'us',
										},
										{
											id: 'au/money',
											webTitle: 'Money',
											webUrl: 'https://www.theguardian.com/au/money',
											apiUrl: 'https://content.guardianapis.com/au/money',
											code: 'au',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/lifestyle',
								pillarName: 'Lifestyle',
							},
							{
								id: 'uk-news/article/2024/jun/27/man-on-trial-posed-imminent-threat-to-holly-willoughby-us-officer-tells-jury',
								type: 'article',
								sectionId: 'uk-news',
								sectionName: 'UK news',
								webPublicationDate: '2024-06-27T12:11:14Z',
								webTitle:
									'Man on trial posed ‘imminent threat’ to Holly Willoughby, US officer tells jury',
								webUrl:
									'https://www.theguardian.com/uk-news/article/2024/jun/27/man-on-trial-posed-imminent-threat-to-holly-willoughby-us-officer-tells-jury',
								apiUrl:
									'https://content.guardianapis.com/uk-news/article/2024/jun/27/man-on-trial-posed-imminent-threat-to-holly-willoughby-us-officer-tells-jury',
								fields: {
									headline:
										'Man on trial posed ‘imminent threat’ to Holly Willoughby, US officer tells jury',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qqzva',
									thumbnail:
										'https://media.guim.co.uk/b45808c4aa7a932f56cd2c391fb8daba322d5690/0_118_1785_1071/500.jpg',
									bodyText:
										'A security guard on trial for allegedly plotting to murder Holly Willoughby posed an “imminent threat” to her safety, the US-based undercover officer who flagged his apparent intentions to UK police told a jury on Thursday. The officer appeared at Chelmsford crown court via video link using the alias David Nelson to give evidence in the trial of 37-year-old Gavin Plumb, who denies plotting to kidnap, rape and murder Willoughby. Nelson, who is attached to the Owatonna police department in Minnesota, told jurors that one of his roles was to “engage in online investigations across various types of social media applications”, which was how he met Plumb. He told the court he looked for instances of human trafficking and kidnapping, and that he came across Plumb in an online group called “Abduct Lovers”. The prosecutor, Alison Morgan KC, asked the officer why he decided to send a direct message to Plumb, who was living in Harlow, Essex, at the time. “I felt there was imminent threat to the female at that time,” Nelson said. Plumb shared “what appeared to be the address” of the TV presenter, Nelson told the court, and he agreed that Plumb also shared “information about the vehicle used by Ms Willoughby”. He recalled the defendant sending him an image of what the officer described as an “abduction kit”, saying: “At that point in the conversation it was quite alarming.” He said Plumb also sent a photo of bottles of chloroform. “Earlier in the conversation he had indicated he had chloroform,” he told the court. “It was not present in that photo of his abduction kit. I asked where the chloroform was and he sent a picture of chloroform.” The jury heard earlier in the trial that a search of Plumb’s home found items including sexualised paraphernalia, chloroform, cable ties and a folding knife, as well as a mobile phone with more than 10,000 images of Willoughby. The court heard that Plumb sent the officer a screenshot of a Google map showing the route from Plumb’s address to Willoughby’s home. Nelson told the jury that he asked Plumb how far it was from his place to where Willoughby lived, “to figure out where Mr Plumb was located, where he lived”. The officer passed information about Plumb to the FBI, the court heard. There was a meeting between Nelson, the FBI and the Metropolitan police on 4 October last year. Morgan said: “And during the course of that liaison between the FBI and the Metropolitan police, were you providing up-to-date information from the chat you had had with the defendant?” The officer replied: “Yes.” He also agreed that the information was “being passed on effectively for authorities in the UK to deal with”. Earlier in the trial, the jury was told that Plumb has previous convictions for attempted kidnap and false imprisonment. He had tried to force two women off a train with a fake gun and a threatening note in 2006 and attempted to tie up two teenage girls in a Woolworths stock room in 2008. The trial continues.',
								},
								tags: [
									{
										id: 'uk/uk',
										type: 'keyword',
										sectionId: 'uk-news',
										sectionName: 'UK news',
										webTitle: 'UK news',
										webUrl: 'https://www.theguardian.com/uk/uk',
										apiUrl: 'https://content.guardianapis.com/uk/uk',
										references: [],
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'uk-news',
									webTitle: 'UK news',
									webUrl: 'https://www.theguardian.com/uk-news',
									apiUrl: 'https://content.guardianapis.com/uk-news',
									editions: [
										{
											id: 'uk-news',
											webTitle: 'UK news',
											webUrl: 'https://www.theguardian.com/uk-news',
											apiUrl: 'https://content.guardianapis.com/uk-news',
											code: 'default',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/news',
								pillarName: 'News',
							},
							{
								id: 'business/article/2024/jun/27/bp-imposes-hiring-freeze-and-halts-new-offshore-wind-projects',
								type: 'article',
								sectionId: 'business',
								sectionName: 'Business',
								webPublicationDate: '2024-06-27T12:02:25Z',
								webTitle:
									'BP imposes hiring freeze and halts new offshore wind projects',
								webUrl:
									'https://www.theguardian.com/business/article/2024/jun/27/bp-imposes-hiring-freeze-and-halts-new-offshore-wind-projects',
								apiUrl:
									'https://content.guardianapis.com/business/article/2024/jun/27/bp-imposes-hiring-freeze-and-halts-new-offshore-wind-projects',
								fields: {
									headline:
										'BP imposes hiring freeze and halts new offshore wind projects',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qqndn',
									thumbnail:
										'https://media.guim.co.uk/b91cd0b3345550541c657c44c5fb9ae083ebdb5c/0_267_5500_3299/500.jpg',
									bodyText:
										'Thehead of BP has imposed a hiring freeze and halted new offshore wind projects, in an apparent attempt to placate investors who are unhappy with the oil company’s green targets. Murray Auchincloss – BP’s former finance chief who was appointed CEO in January after the shock departure of his predecessor, Bernard Looney, for failing to fully detail relationships with colleagues last year – is slowing down investments in big low-carbon projects such as offshore wind, in news first reported by Reuters. This is a reversal of the direction Looney was taking to move the company away from fossil fuels, with a pledge to “become a net zero company by 2050 or sooner”. That policy has weighed on BP’s shares as some renewable projects proved more costly than expected, while profits from oil and gas soared after Russia’s invasion of Ukraine more than two years ago. Over the past four years, the oil company has built up a sizeable portfolio of offshore wind projects capable of generating 9.5 gigawatts of energy in total in the UK, Germany and the US that are yet to be developed. It wants to focus on these assets, it is understood, rather than bidding for new renewable projects. BP is thought to have imposed a hiring freeze, with a few exceptions such as frontline roles. It has reassigned dozens of people tasked with finding new renewables opportunities to its offshore wind projects in Britain and Germany, Reuters reports, and could make some job cuts in renewables. BP shares were up about 1% on Thursday, but have underperformed rivals in recent months, prompting speculation that it could be a takeover target. Looney set out a “net zero” plan that originally aimed to cut the company’s oil production by 2030 while others plan to increase their fossil fuel production. BP has come under mounting pressure from environmental campaigners after watering down its green targets last year. Auchincloss is reportedly looking at investing in and possibly acquiring new oil and gas assets to strengthen BP’s existing operations, particularly in the Gulf of Mexico and the shale basins acquired from the Anglo-Australian miner BHP in Texas. BP is also investing in biofuels and low-carbon businesses that can generate returns in the short term. A week ago, the company agreed a $1.4bn deal to take full ownership of its Brazilian sugar and ethanol joint venture, but said it was scaling back plans for development of new biofuels projects. BP said: “As Murray Auchincloss said in February, BP’s destination – transforming from international oil company to integrated energy company – is unchanged, but we are going to deliver as a simpler, more focused and higher value company. “We set out six priorities that underpin this, including driving greater focus into the business, on to activities that create the most value, as well as delivering both the next wave of efficiencies and BP’s growth projects.” Auchincloss has pledged a “more pragmatic” approach to BP’s green targets since taking up the CEO role permanently in January. In May, BP said it would cut $2bn of costs by the end of 2026, after reporting lower than expected profits for the first quarter of the year. Auchincloss said he planned to make the savings by choosing fewer new projects to invest in over the coming years.',
								},
								tags: [
									{
										id: 'business/bp',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'BP',
										webUrl: 'https://www.theguardian.com/business/bp',
										apiUrl: 'https://content.guardianapis.com/business/bp',
										references: [],
									},
									{
										id: 'environment/windpower',
										type: 'keyword',
										sectionId: 'environment',
										sectionName: 'Environment',
										webTitle: 'Wind power',
										webUrl: 'https://www.theguardian.com/environment/windpower',
										apiUrl:
											'https://content.guardianapis.com/environment/windpower',
										references: [],
									},
									{
										id: 'business/oilandgascompanies',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Oil and gas companies',
										webUrl:
											'https://www.theguardian.com/business/oilandgascompanies',
										apiUrl:
											'https://content.guardianapis.com/business/oilandgascompanies',
										references: [],
									},
									{
										id: 'environment/renewableenergy',
										type: 'keyword',
										sectionId: 'environment',
										sectionName: 'Environment',
										webTitle: 'Renewable energy',
										webUrl:
											'https://www.theguardian.com/environment/renewableenergy',
										apiUrl:
											'https://content.guardianapis.com/environment/renewableenergy',
										references: [],
									},
									{
										id: 'business/oil',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Oil',
										webUrl: 'https://www.theguardian.com/business/oil',
										apiUrl: 'https://content.guardianapis.com/business/oil',
										references: [],
									},
									{
										id: 'business/energy-industry',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Energy industry',
										webUrl:
											'https://www.theguardian.com/business/energy-industry',
										apiUrl:
											'https://content.guardianapis.com/business/energy-industry',
										references: [],
									},
									{
										id: 'environment/biofuels',
										type: 'keyword',
										sectionId: 'environment',
										sectionName: 'Environment',
										webTitle: 'Biofuels',
										webUrl: 'https://www.theguardian.com/environment/biofuels',
										apiUrl:
											'https://content.guardianapis.com/environment/biofuels',
										references: [],
									},
									{
										id: 'business/business',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Business',
										webUrl: 'https://www.theguardian.com/business/business',
										apiUrl:
											'https://content.guardianapis.com/business/business',
										references: [],
									},
									{
										id: 'environment/oil',
										type: 'keyword',
										sectionId: 'environment',
										sectionName: 'Environment',
										webTitle: 'Oil',
										webUrl: 'https://www.theguardian.com/environment/oil',
										apiUrl: 'https://content.guardianapis.com/environment/oil',
										references: [],
									},
									{
										id: 'business/commodities',
										type: 'keyword',
										sectionId: 'business',
										sectionName: 'Business',
										webTitle: 'Commodities',
										webUrl: 'https://www.theguardian.com/business/commodities',
										apiUrl:
											'https://content.guardianapis.com/business/commodities',
										references: [],
									},
									{
										id: 'environment/fossil-fuels',
										type: 'keyword',
										sectionId: 'environment',
										sectionName: 'Environment',
										webTitle: 'Fossil fuels',
										webUrl:
											'https://www.theguardian.com/environment/fossil-fuels',
										apiUrl:
											'https://content.guardianapis.com/environment/fossil-fuels',
										references: [],
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'business',
									webTitle: 'Business',
									webUrl: 'https://www.theguardian.com/business',
									apiUrl: 'https://content.guardianapis.com/business',
									editions: [
										{
											id: 'business',
											webTitle: 'Business',
											webUrl: 'https://www.theguardian.com/business',
											apiUrl: 'https://content.guardianapis.com/business',
											code: 'default',
										},
										{
											id: 'uk/business',
											webTitle: 'Business',
											webUrl: 'https://www.theguardian.com/uk/business',
											apiUrl: 'https://content.guardianapis.com/uk/business',
											code: 'uk',
										},
										{
											id: 'us/business',
											webTitle: 'Business',
											webUrl: 'https://www.theguardian.com/us/business',
											apiUrl: 'https://content.guardianapis.com/us/business',
											code: 'us',
										},
										{
											id: 'au/business',
											webTitle: 'Business',
											webUrl: 'https://www.theguardian.com/au/business',
											apiUrl: 'https://content.guardianapis.com/au/business',
											code: 'au',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/news',
								pillarName: 'News',
							},
							{
								id: 'us-news/article/2024/jun/27/biden-trump-rematch-history',
								type: 'article',
								sectionId: 'us-news',
								sectionName: 'US news',
								webPublicationDate: '2024-06-27T12:00:07Z',
								webTitle:
									'Biden v Trump II: a rematch with few historical precedents',
								webUrl:
									'https://www.theguardian.com/us-news/article/2024/jun/27/biden-trump-rematch-history',
								apiUrl:
									'https://content.guardianapis.com/us-news/article/2024/jun/27/biden-trump-rematch-history',
								fields: {
									headline:
										'Biden v Trump II: a rematch with few historical precedents',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qq8z2',
									thumbnail:
										'https://media.guim.co.uk/fa977a0053a2011e57ec1e696816e548e67874d5/1_0_2998_1800/500.jpg',
									bodyText:
										'When Joe Biden and Donald Trump secured enough delegates to lead the Democratic and Republican party presidential tickets in November, they confirmed what many voters expected but fewer actually wanted: a redo of the 2020 election. Republicans skeptical about giving Trump a second shot tried in vain to elevate a viable primary opponent. Powerful donors, including the Koch-aligned Americans for Prosperity Action, poured money into former South Carolina governor Nikki Haley’s campaign, but Haley was unable to claw enough support away from Trump to pose a threat to the former president. So for the first time in more than 50 years, the Republican party will rerun a candidate who already lost a general presidential election – the last time that happened was in 1968, when Richard Nixon, who had lost the 1960 general presidential election, ran again and won. It has been even longer since a presidential candidate faced a true rematch. When was the last presidential rematch? The last time Americans voted in a contest between the same two presidential candidates as the election before was in 1956, when the Republican Dwight Eisenhower and the Democrat Adlai Stevenson faced off for the second time in four years. Eisenhower, a former military officer famed for his triumph as a second world war general, beat the Stevenson, who was known as cerebral and humorless (“Eisenhower a Typical Man of Action And Stevenson a Man of Thought,” read a 1952 New York Times headline), in a landslide in 1952. During his first term, Eisenhower, an anti-communist, backed the regime changes in Iran in 1953 and Guatemala in 1954 – replacing elected leaders with authoritarian regimes. The same year, he signed the Communist Control Act, which made the Communist party illegal in the United States, calling it a “conspiracy dedicated to the violent overthrow of our entire form of government”. On domestic economic issues, he governed as a moderate, expanding social security benefits to millions of people and creating the Department of Health, Education, and Welfare (later renamed the Department of Health and Human Services). By the end of his first term, Eisenhower had grown elderly but remained popular. Stevenson scraped by in the Democratic primary but lost resoundingly in the 1956 general election by an even wider margin than the first time around, with Eisenhower winning more than 57% of the vote, 457 electoral college votes and all but seven of the states. What about an ex-president, like Trump, running against an incumbent? “If [Trump] were to win, he would be the only one since Grover Cleveland to actually get back to the presidency after losing it,” said Jeff Pasley, a professor of American history at the University of Missouri. Elected in 1884, Cleveland was the first Democrat to win the presidency after the civil war. The former New York governor had crusaded against corruption in politics and was active in the economically conservative, pro-business “Bourbon Democrat” movement. In the lead-up to the election, Cleveland’s supporters lobbed allegations of corruption against his opponent James Blaine, questioning Blaine’s financial dealings with railroad companies. Republicans, in turn, hammered on allegations that Cleveland had secretly fathered a child during an illicit affair with a waitress – their respective alleged moral failings became central to the 1884 campaign. The personal attacks ignored a deeper, fundamental moral corruption in American politics and society. As historian Henry Graff observed in his biography of Cleveland, the president’s first campaign took place amid Jim Crow and the backlash to Reconstruction-era policies granting equal rights to Black Americans: “[R]acism was rampant in the country” with formerly enslaved Americans facing “discrimination and segregation and, increasingly in the South, lynching”, while the genocidal conquest of Indigenous lands continued into the end of the 19th century. “The campaign,” wrote Graff, “avoided these pressing and shameful matters.” Cleveland won the popular vote narrowly and picked up 37 more electoral votes than Blaine. During his first term, Cleveland advocated for, but ultimately failed to enact tariff reform – a key issue of his first campaign. He viewed his post as president as an administrative one and was reluctant to act forcefully. He ran for re-election in 1888 against the Republican Benjamin Harrison, narrowly winning the popular vote but losing the electoral vote resoundingly. Determined to hold office again, Cleveland decided to run for president in the 1892 cycle, campaigning again in opposition to tariff hikes. A few important things had changed in the four years that Cleveland was out of office. The Populist party, which advocated an eight-hour workday and benefits for veterans, was drawing increasing support from the Republican voters who prioritized those issues. Meanwhile, Harrison’s wife, Caroline Harrison, was dying of tuberculosis. During Caroline’s illness, Harrison had refrained from campaigning, and when she died two weeks before the election, the other candidates stopped campaigning out of respect, too. Cleveland won by a wide margin in both the popular vote and electoral college, making him the only president to come back and win after losing to the same candidate four years earlier. What lessons can Cleveland’s non-consecutive presidencies teach us about Biden v Trump? Cleveland’s example shows it’s possible for an ex-president to claw the office back after losing it to the same opponent. But it’s also a tricky comparison: Cleveland was, according to Graff, “the very symbol of rectitude and incorruptibility” and didn’t face a barrage of criminal indictments or a well-coordinated opposition campaign like Biden’s. Meanwhile, his supporters may have agreed with him on economic issues, but they were hardly fanatics. “Cleveland had fans but it wasn’t like there was a Cleveland cult,” said Pasley. “He just happened to be the last successful Democratic president.”',
								},
								tags: [
									{
										id: 'us-news/us-elections-2024',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'US elections 2024',
										webUrl:
											'https://www.theguardian.com/us-news/us-elections-2024',
										apiUrl:
											'https://content.guardianapis.com/us-news/us-elections-2024',
										references: [],
										description:
											'<p>News and comment about the 2024 US presidential election. Voters head to the polls on 5 November</p>',
									},
									{
										id: 'us-news/us-news',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'US news',
										webUrl: 'https://www.theguardian.com/us-news/us-news',
										apiUrl: 'https://content.guardianapis.com/us-news/us-news',
										references: [],
									},
									{
										id: 'us-news/us-politics',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'US politics',
										webUrl: 'https://www.theguardian.com/us-news/us-politics',
										apiUrl:
											'https://content.guardianapis.com/us-news/us-politics',
										references: [],
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'us-news',
									webTitle: 'US news',
									webUrl: 'https://www.theguardian.com/us-news',
									apiUrl: 'https://content.guardianapis.com/us-news',
									editions: [
										{
											id: 'us-news',
											webTitle: 'US news',
											webUrl: 'https://www.theguardian.com/us-news',
											apiUrl: 'https://content.guardianapis.com/us-news',
											code: 'default',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/news',
								pillarName: 'News',
							},
							{
								id: 'us-news/article/2024/jun/27/biden-trump-debate-what-to-know',
								type: 'article',
								sectionId: 'us-news',
								sectionName: 'US news',
								webPublicationDate: '2024-06-27T12:00:06Z',
								webTitle:
									'Joe Biden v Donald Trump: what you need to know about the first 2024 presidential debate',
								webUrl:
									'https://www.theguardian.com/us-news/article/2024/jun/27/biden-trump-debate-what-to-know',
								apiUrl:
									'https://content.guardianapis.com/us-news/article/2024/jun/27/biden-trump-debate-what-to-know',
								fields: {
									headline:
										'Joe Biden v Donald Trump: what you need to know about the first 2024 presidential debate',
									publication: 'theguardian.com',
									shortUrl: 'https://www.theguardian.com/p/qqkbq',
									thumbnail:
										'https://media.guim.co.uk/0e2750ebc39919d45b8b7f41dc1fcf7abb90220d/535_131_3687_2213/500.jpg',
									bodyText:
										'Joe Biden and Donald Trump will hold the first of two scheduled US presidential debates on Thursday, a high-stakes re-match between two well-defined political foes. The earlier-than-usual confrontation will give both men a chance to make their case for a second-term to what could be one of the largest television – and internet – audiences of the election cycle. Thursday’s show down also carries the risk that Americans already dissatisfied with their options will come away even more dismayed. Polls show an extremely tight race between the 81-year-old incumbent and the 78-year-old former US president – and both candidates remain broadly unpopular. Here’s what to know and what to watch during the 90-minute primetime event, scheduled to start at 9pm ET inside a CNN studio in Atlanta. What’s at stake for each candidate? Both candidates arrive at the debate with a similar goal: magnify the other’s weaknesses. Trump has been convicted of 34 felony counts, and is scheduled to be sentenced on 11 July. This week marked two years since the supreme court overturned Roe v Wade, a decision Trump has taken credit for. As president, he nominated three conservative justices who voted to eliminate the constitutional right to an abortion, sparking a political backlash even in predominantly conservative states. His vision for a second term includes the promise of retribution and threats to prosecute his political enemies, raising alarms about the future of American democracy and the rule of law. Biden, meanwhile, must confront the electorate’s deep malaise: discontent over his handling of the economy and the southern border. But perhaps even more acutely, Biden is facing questions about whether he has the stamina and cognitive health to lead the country for another four years. A coherent and energetic performance – like his State of the Union address – could allay some concerns. Trump and his team are scrambling to reset expectations for Biden, after placing the bar so low that some conservatives are warning that Biden will exceed expectations if he manages simply to stay awake for 90 minutes. Despite the right’s portrayal of Biden as frail and doddering, including through the use of misleading videos, Trump also has a pattern of rambling and gaffe-making during campaign speeches. Biden, meanwhile, is also working against the weight of history: incumbent presidents, out of practice after nearly four years of being in charge, tend to lose the first debate. What’s the strategy for each candidate? Both candidates have presidential records to defend and second-term visions to offer. From the debate stage, Biden’s challenge will be to remind voters why they chose him over Trump four years ago. He is likely to use Trump’s own words against him – arguing that the former president is a grave risk to reproductive rights and American democracy. On immigration, Biden has new data to point to, showing the number of encounters at the south-west border declined steadily since his asylum restrictions took effect. He also recently rolled out new actions to expand pathways to citizenship for people living in the US without documentation. Staying calm but alert under the barrage of attacks expected to fly from Trump poses another test for the president, who is known to have a temper when provoked. Trump, by contrast, needs to appeal to the swing voters and moderate Republicans who abandoned him in 2020 but are unhappy with the present state of affairs. They are not likely to be persuaded by personal insults and conspiracy theories. Rather than resurfacing baseless claims about the 2020 election or fuming about his own legal entanglements, voters will want to know if he’s capable of governing in their interest, pressing the Republican’s advantage on the economy and immigration. Moderators are sure to try to pin Trump down on abortion and reproductive rights. A disciplined performance might be enough to convince some of his Republican skeptics. The legal issues There is a debate among Democrats over how central an issue Biden should make Trump’s felony counts, of falsifying business records as part of a criminal hush money scheme to influence the outcome of the 2016 election. He also faces serious charges in three further criminal trials. For many voters, Trump’s legal travails are eclipsed by their concerns over the economy, immigration, abortion rights and the state of democracy. But there are signs the conviction is a concern for some voters, particularly young people and people without a college degree that the president needs to motivate. Biden has mostly been restrained on the subject of Trump’s prosecutions to avoid any appearance of political interference, though that hasn’t stopped the former president from alleging as much. Biden’s campaign has sought to cast the felonies – and pending cases – as a commitment to the rule of law and the equal application of justice. With the exception of a few jabs at campaign events, Biden is mostly letting his allies make the aggressive attacks against Trump’s legal record. Trump, meanwhile, could also go after Biden’s son, Hunter, who was recently convicted on charges related to the purchase of a gun. Trump and his rightwing allies have also tried to tie Hunter’s foreign business dealings to the president, but they uncovered no evidence to support that. The rules of the debate Until relatively recently, it wasn’t clear Biden and Trump would share a stage again after 2020. But then their campaigns agreed to a pair of debates, the first scheduled for Thursday, 27 June, the earliest in the nation’s history. The CNN-hosted event, moderated by network anchors Jake Tapper and Dana Bash, circumvents the nonpartisan Commission on Presidential Debates, which typically sets the debate schedule and the rules. It will run for 90 minutes, with two scheduled commercial breaks. As in past debates, the rules of engagement and – how effectively the moderators enforce them – will help set the tone. According to the terms mutually agreed to by the campaigns, it will take place in an Atlanta studio without an audience that deprives Trump of the real-time feedback he craves from his supporters. The candidates’ microphones will be muted when it is not their turn to speak, an attempt to minimize the onstage chaos that overwhelmed their first debate in 2020. Independent candidate Robert Kennedy Jr failed to qualify under CNN’s eligibility criteria, which included earning at least 15% support in four high-quality polls and appearing on enough state ballots to reach 270 electoral votes. There will be no opening statement. A coin flip determined the podium placement and the order of closing statements. Biden’s campaign chose to select the podium that will appear on the right side of viewers’ screens, while Trump’s campaign chose to deliver his closing argument last. Will it move the needle? About six in 10 Americans say they are “extremely” or “very” likely to tune into the debate live, or to watch parts of it afterward, or read or listen to analysis of their performance, according to a new poll from The Associated Press-NORC Center for Public Affairs Research. It also found that supporters of both candidates view the debate as important. Americans are deeply polarized and the universe of voters open to persuasion – and live in the handful of states that will decide the election – is small. Many of those people will watch, like sports fans, to cheer on their candidate. Others may tune in simply for the spectacle of showdown between the two oldest major party presidential nominees in American history. As has become tradition, both campaigns will likely claim success immediately following the debate. To the degree both spin operations can pump out content highlighting their candidates’ stand out moments – and their opponents’ missteps – they will be correct. Few expect a polling bump to last through election day. Due to the early timing of the debate, any boost from a strong performance is unlikely to last. By contrast, a major gaffe – even a minor gaffe, depending how it’s repackaged and disseminated – could haunt the candidate online through the campaign. And perhaps, for the viewers who have so far tried to look away, the debate will clarify the choice and the stakes this November.',
								},
								tags: [
									{
										id: 'us-news/us-elections-2024',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'US elections 2024',
										webUrl:
											'https://www.theguardian.com/us-news/us-elections-2024',
										apiUrl:
											'https://content.guardianapis.com/us-news/us-elections-2024',
										references: [],
										description:
											'<p>News and comment about the 2024 US presidential election. Voters head to the polls on 5 November</p>',
									},
									{
										id: 'us-news/us-news',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'US news',
										webUrl: 'https://www.theguardian.com/us-news/us-news',
										apiUrl: 'https://content.guardianapis.com/us-news/us-news',
										references: [],
									},
									{
										id: 'us-news/joebiden',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'Joe Biden',
										webUrl: 'https://www.theguardian.com/us-news/joebiden',
										apiUrl: 'https://content.guardianapis.com/us-news/joebiden',
										references: [],
										description:
											'<p>News about Joe Biden, the 46th US president, including comment and features from the Guardian</p>',
									},
									{
										id: 'us-news/donaldtrump',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'Donald Trump',
										webUrl: 'https://www.theguardian.com/us-news/donaldtrump',
										apiUrl:
											'https://content.guardianapis.com/us-news/donaldtrump',
										references: [],
										description:
											'<p>News about Donald Trump, the 45th US president, including comment and features from the Guardian</p>',
									},
									{
										id: 'us-news/democrats',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'Democrats',
										webUrl: 'https://www.theguardian.com/us-news/democrats',
										apiUrl:
											'https://content.guardianapis.com/us-news/democrats',
										references: [],
										description:
											'<p>News about the US Democratic party, including comment and features from the Guardian</p>',
									},
									{
										id: 'us-news/republicans',
										type: 'keyword',
										sectionId: 'us-news',
										sectionName: 'US news',
										webTitle: 'Republicans',
										webUrl: 'https://www.theguardian.com/us-news/republicans',
										apiUrl:
											'https://content.guardianapis.com/us-news/republicans',
										references: [],
										description:
											'<p>News about the US Republican party, including comment and features from the Guardian</p>',
									},
									{
										id: 'type/article',
										type: 'type',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										apiUrl: 'https://content.guardianapis.com/type/article',
										references: [],
									},
								],
								references: [],
								section: {
									id: 'us-news',
									webTitle: 'US news',
									webUrl: 'https://www.theguardian.com/us-news',
									apiUrl: 'https://content.guardianapis.com/us-news',
									editions: [
										{
											id: 'us-news',
											webTitle: 'US news',
											webUrl: 'https://www.theguardian.com/us-news',
											apiUrl: 'https://content.guardianapis.com/us-news',
											code: 'default',
										},
									],
								},
								isHosted: false,
								pillarId: 'pillar/news',
								pillarName: 'News',
							},
						],
					},
				},
			},
		},
		errors: null,
		status: 200,
		code: 'success',
		success: true,
	},
};
