
<template>
	<!-- Navigation -->
	<nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
		<div class="container">

			<!-- Text Logo - Use this if you don't have a graphic logo -->
			<!-- <a class="navbar-brand logo-text page-scroll" href="index.html">Tivo</a> -->

			<!-- Image Logo -->
			<!-- <a class="navbar-brand logo-image" href="index.html"><img :src="require('@/assets/images/logo.svg')"
                    alt="alternative"></a> -->

			<span class="navbar-brand logo-image">MediCloud</span>

			<!-- Mobile Menu Toggle Button -->
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
				aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-awesome fas fa-bars"></span>
				<span class="navbar-toggler-awesome fas fa-times"></span>
			</button>
			<!-- end of mobile menu toggle button -->

			<div class="collapse navbar-collapse" id="navbarsExampleDefault">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<a class="nav-link page-scroll" href="#">HOME <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link page-scroll" href="javascript:void()"
							@click="scrollTo('features')">FEATURES</a>
					</li>
					<li class="nav-item">
						<a class="nav-link page-scroll" href="javascript:void()"
							@click="scrollTo('details')">DETAILS</a>
					</li>

					<li class="nav-item">
						<a class="nav-link page-scroll" href="javascript:void()"
							@click="scrollTo('pricing')">PRICING</a>
					</li>
				</ul>
				<span class="nav-item">
					<router-link class="btn-outline-sm" to="/patients/auth">LOG IN</router-link>
				</span>
			</div>
		</div> <!-- end of container -->
	</nav> <!-- end of navbar -->
	<!-- end of navigation -->


	<!-- Header -->
	<header id="header" class="header">
		<div class="header-content">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-xl-5">
						<div class="text-container">
							<h1>Reshaping the healthcare tech industry</h1>
							<p class="p-large">MediCloud is a fast-growing healthcare tech startup founded in
								Egypt that aims to bring the latest technologies into the medical field</p>
							<a class="btn-solid-lg page-scroll" href="sign-up.html">SIGN UP</a>
						</div> <!-- end of text-container -->
					</div> <!-- end of col -->
					<div class="col-lg-6 col-xl-7">
						<div class="image-container">
							<div class="img-wrapper">
								<img class="img-fluid" :src="require('@/assets/images/header-software-app.png')"
									alt="alternative">
							</div> <!-- end of img-wrapper -->
						</div> <!-- end of image-container -->
					</div> <!-- end of col -->
				</div> <!-- end of row -->
			</div> <!-- end of container -->
		</div> <!-- end of header-content -->
	</header> <!-- end of header -->
	<svg class="header-frame" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
		viewBox="0 0 1920 310" style="fill: #0068f9;">
		<defs>
		</defs>
		<path class="cls-1"
			d="M0,283.054c22.75,12.98,53.1,15.2,70.635,14.808,92.115-2.077,238.3-79.9,354.895-79.938,59.97-.019,106.17,18.059,141.58,34,47.778,21.511,47.778,21.511,90,38.938,28.418,11.731,85.344,26.169,152.992,17.971,68.127-8.255,115.933-34.963,166.492-67.393,37.467-24.032,148.6-112.008,171.753-127.963,27.951-19.26,87.771-81.155,180.71-89.341,72.016-6.343,105.479,12.388,157.434,35.467,69.73,30.976,168.93,92.28,256.514,89.405,100.992-3.315,140.276-41.7,177-64.9V0.24H0V283.054Z" />
	</svg>
	<!-- end of header -->


	<!-- Customers -->
	<div class="slider-1">
		<div class="container">
			<div class="row">
				<!-- add title saying our new parteners and customers -->
				<div class="col-lg-12">
					<h3 class="section-title">Our New Partners and Customers</h3>
				</div> <!-- end of col -->
				<div class="col-lg-12">
					<img :src="require('@/assets/images/customers.png')" alt="new-customers"
						style="width: 100%; height: auto; object-fit: cover;">
				</div> <!-- end of col -->
			</div> <!-- end of row -->
		</div> <!-- end of container -->
	</div> <!-- end of slider-1 -->
	<!-- end of customers -->


	<!-- Description -->
	<div class="cards-1">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="above-heading">DESCRIPTION</div>
					<h2 class="h2-heading">A Central Secure Medical Data Cloud for all healthcare customers</h2>
				</div> <!-- end of col -->
			</div> <!-- end of row -->
			<div class="row">
				<div class="col-lg-12">

					<!-- Card -->
					<div class="card">
						<div class="card-image">
							<img class="img-fluid" :src="require('@/assets/images/description-1.png')" alt="alternative"
								style="width: 200px; height: 200px; object-fit: contain;">
						</div>
						<div class="card-body">
							<h4 class="card-title">End-to End Encrypted Cloud</h4>
							<p>No more serious medical data breaches, thanks to our cutting-edge technologies, making it
								100% secure cloud for your confidential medical data</p>
						</div>
					</div>
					<!-- end of card -->

					<!-- Card -->
					<div class="card">
						<div class="card-image">
							<img class="img-fluid" :src="require('@/assets/images/description-2.png')" alt="alternative"
								style="width: 200px; height: 200px; object-fit: contain;">
						</div>
						<div class="card-body">
							<h4 class="card-title">Centralized cloud everywhere</h4>
							<p>Your data will be in sync wherever you go, between all hospitals, clinics, and labs with
								no more redundancy</p>
						</div>
					</div>
					<!-- end of card -->

					<!-- Card -->
					<div class="card">
						<div class="card-image">
							<img class="img-fluid" :src="require('@/assets/images/description-3.png')" alt="alternative"
								style="width: 200px; height: 200px; object-fit: contain;">
						</div>
						<div class="card-body">
							<h4 class="card-title">Linker between all medical providers</h4>
							<p>Easier communication between all medical providers in Egypt by providing a link for each
								healthcare stakeholder</p>
						</div>
					</div>
					<!-- end of card -->

				</div> <!-- end of col -->
			</div> <!-- end of row -->
		</div> <!-- end of container -->
	</div> <!-- end of cards-1 -->
	<!-- end of description -->


	<!-- Features -->
	<div id="features" ref="features" class="tabs">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="above-heading">FEATURES</div>
					<h2 class="h2-heading">Our Medical Cloud Features</h2>
					<p class="p-heading">Benefit from our valuable features and technical solutions for both patients
						and doctors</p>
				</div> <!-- end of col -->
			</div> <!-- end of row -->
			<div class="row">
				<div class="col-lg-12">

					<!-- Tabs Links -->
					<ul class="nav nav-tabs" id="argoTabs" role="tablist">
						<li class="nav-item patient-feature-tab">
							<button :class="`nav-link ${isPatient ? 'active' : ''}`" id="nav-tab-1" data-toggle="tab"
								role="tab" aria-controls="tab-1" aria-selected="true" @click="(isPatient = true)">For
								Patients</button>
						</li>
						<li class="nav-item doctor-feature-tab">
							<button :class="`nav-link ${isPatient ? '' : 'active'}`" id="nav-tab-2" data-toggle="tab"
								role="tab" aria-controls="tab-2" aria-selected="false" @click="(isPatient = false)">For
								Doctors</button>
						</li>
					</ul>
					<!-- end of tabs links -->

					<!-- Patient Tabs Content -->
					<div v-if="isPatient" class="tab-content" id="argoTabsContent">

						<!-- Tab -->
						<div class="tab-pane show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
							<div class="row">
								<div class="col-lg-6">
									<div class="image-container">
										<img class="img-fluid feature-img" :src="require('@/assets/images/features-1.png')"
											alt="alternative">
									</div> <!-- end of image-container -->
								</div> <!-- end of col -->
								<div class="col-lg-6">
									<div class="text-container">
										<h3>Save your medical data and emergency in a secure cloud</h3>
										<p>Save your medical data in a secure cloud, and never worry about losing it.
											We will take care of it for you with 100% security
											Have an emergency profile to save your life withMediCard</p>
									</div> <!-- end of text-container -->
								</div> <!-- end of col -->
							</div> <!-- end of row -->
						</div> <!-- end of tab-pane -->
						<!-- end of tab -->

						<!-- Tab -->
						<div class="tab-pane show active" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
							<div class="row">
								<div class="col-lg-6 order-lg-2">
									<div class="image-container">
										<img class="img-fluid feature-img" :src="require('@/assets/images/features-2.png')"
											alt="alternative">
									</div> <!-- end of image-container -->
								</div> <!-- end of col -->
								<div class="col-lg-6 order-lg-first">
									<div class="text-container">
										<h3>Get Discounts up to 60%</h3>
										<p>Paying for your lab tests and scans can be quite expensive, With your MediCard, you can have 
											discounts up to 60% for any labs, scans, prescriptions,
											and more.
										</p>
									</div> <!-- end of text-container -->
								</div> <!-- end of col -->
							</div> <!-- end of row -->
						</div> <!-- end of tab-pane -->
						<!-- end of tab -->

						<!-- Tab -->
						<div class="tab-pane show active" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
							<div class="row">
								<div class="col-lg-6">
									<div class="image-container">
										<img class="img-fluid feature-img" :src="require('@/assets/images/features-3.png')"
											alt="alternative">
									</div> <!-- end of image-container -->
								</div> <!-- end of col -->
								<div class="col-lg-6">
									<div class="text-container">
										<h3>Keep track of your medical progress</h3>
										<p>You can keep track of having you medications by using our
											daily routine checklist that reminds you of taking pills.
											you can also benefit from our diary that keeps track of your mental health.
										</p>
									</div> <!-- end of text-container -->
								</div> <!-- end of col -->
							</div> <!-- end of row -->
						</div> <!-- end of tab-pane -->
						<!-- end of tab -->

					</div>
					<!-- end of Patient tabs content -->

					<!-- Doctors Tabs Content -->
					<div v-else class="tab-content" id="argoTabsContent">

						<!-- Tab -->
						<div class="tab-pane show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
							<div class="row">
								<div class="col-lg-6">
									<div class="image-container">
										<img class="img-fluid feature-img" :src="require('@/assets/images/features-4.png')"
											alt="alternative">
									</div> <!-- end of image-container -->
								</div> <!-- end of col -->
								<div class="col-lg-6">
									<div class="text-container">
										<h3>Keep track of you records and patients</h3>
										<p>Using MediCloud, you can keep track of your records and patients.
											You can also see the records of your patients. MediCloud allows you to 
											see useful statistics and future predictions about your clinic.
										</p>
									</div> <!-- end of text-container -->
								</div> <!-- end of col -->
							</div> <!-- end of row -->
						</div> <!-- end of tab-pane -->
						<!-- end of tab -->

						<!-- Tab -->
						<div class="tab-pane show active" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
							<div class="row">
								<div class="col-lg-6 order-lg-2">
									<div class="image-container">
										<img class="img-fluid feature-img" :src="require('@/assets/images/features-5.png')"
											alt="alternative">
									</div> <!-- end of image-container -->
								</div> <!-- end of col -->
								<div class="col-lg-6 order-lg-first">
									<div class="text-container">
										<h3>Increase your flow and revenue</h3>
										<p>By using MediCloud Clinic you can increase your flow and revenue 
											by have a way of comminucation with your patients as well as giving
											them a card with your clinic name and logo on it.
										</p>
									</div> <!-- end of text-container -->
								</div> <!-- end of col -->
							</div> <!-- end of row -->
						</div> <!-- end of tab-pane -->
						<!-- end of tab -->

						<!-- Tab -->
						<div class="tab-pane show active" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
							<div class="row">
								<div class="col-lg-6">
									<div class="image-container">
										<img class="img-fluid feature-img" :src="require('@/assets/images/features-6.png')"
											alt="alternative">
									</div> <!-- end of image-container -->
								</div> <!-- end of col -->
								<div class="col-lg-6">
									<div class="text-container">
										<h3>Reduce wasted time and money</h3>
										<p>Why waste time on taking the exact history of your patient if you can see it
											in detail in seconds, by using MediCloud you can see your patient's history
											by just tapping their MediCard into you phone.
										</p>
									</div> <!-- end of text-container -->
								</div> <!-- end of col -->
							</div> <!-- end of row -->
						</div> <!-- end of tab-pane -->
						<!-- end of tab -->

					</div>
					<!-- end of Doctors tabs content -->

				</div> <!-- end of col -->
			</div> <!-- end of row -->
		</div> <!-- end of container -->
	</div> <!-- end of tabs -->
	<!-- end of features -->

	<!-- Details -->
	<div id="details" ref="details" class="basic-1">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="text-container">
						<h2>Now Is The Time To Upgrade Your Marketing Solution</h2>
						<p>Target the right customers for your business with the help of Tivo's patented segmentation
							technology and deploy efficient marketing campaigns. Keep your customers happy and loyal.
						</p>
						<ul class="list-unstyled li-space-lg">
							<li class="media">
								<i class="fas fa-square"></i>
								<div class="media-body">Understand customers and meet their requirements</div>
							</li>
							<li class="media">
								<i class="fas fa-square"></i>
								<div class="media-body">Targeted client base with Tivo's efficient technology</div>
							</li>
						</ul>
						<a class="btn-solid-reg page-scroll" href="sign-up.html">SIGN UP</a>
					</div> <!-- end of text-container -->
				</div> <!-- end of col -->
				<div class="col-lg-6">
					<div class="image-container">
						<img class="img-fluid" :src="require('@/assets/images/details.png')" alt="alternative">
					</div> <!-- end of image-container -->
				</div> <!-- end of col -->
			</div> <!-- end of row -->
		</div> <!-- end of container -->
	</div> <!-- end of basic-1 -->
	<!-- end of details -->


	<!-- Video -->
	<div id="video" class="basic-2">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">

					<!-- Video Preview -->
					<div class="image-container">
						<div class="video-wrapper">
							<a class="popup-youtube" href="https://www.youtube.com/watch?v=fLCjQJCekTs"
								data-effect="fadeIn">
								<img class="img-fluid" :src="require('@/assets/images/video-image.png')"
									alt="alternative">
								<span class="video-play-button">
									<span></span>
								</span>
							</a>
						</div> <!-- end of video-wrapper -->
					</div> <!-- end of image-container -->
					<!-- end of video preview -->

					<div class="p-heading">What better way to show off Tivo marketing automation saas app than
						presenting you some great situations of each module and tool available to users in a video</div>
				</div> <!-- end of col -->
			</div> <!-- end of row -->
		</div> <!-- end of container -->
	</div> <!-- end of basic-2 -->
	<!-- end of video -->


	<!-- Pricing -->
	<div id="pricing" ref="pricing" class="cards-2">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="above-heading">PRICING</div>
					<h2 class="h2-heading">Pricing Options Table</h2>
				</div> <!-- end of col -->
			</div> <!-- end of row -->
			<div class="row">
				<div class="col-lg-12">

					<!-- Card-->
					<div class="card">
						<div class="card-body">
							<div class="card-title">BASIC</div>
							<div class="price"><span class="currency">$</span><span class="value">Free</span></div>
							<div class="frequency">14 days trial</div>
							<div class="divider"></div>
							<ul class="list-unstyled li-space-lg">
								<li class="media">
									<i class="fas fa-check"></i>
									<div class="media-body">Email Marketing Module</div>
								</li>
								<li class="media">
									<i class="fas fa-check"></i>
									<div class="media-body">User Control Management</div>
								</li>
								<li class="media">
									<i class="fas fa-times"></i>
									<div class="media-body">List Building And Cleaning</div>
								</li>
								<li class="media">
									<i class="fas fa-times"></i>
									<div class="media-body">Collected Data Reports</div>
								</li>
								<li class="media">
									<i class="fas fa-times"></i>
									<div class="media-body">Planning And Evaluation</div>
								</li>
							</ul>
							<div class="button-wrapper">
								<a class="btn-solid-reg page-scroll" href="sign-up.html">SIGN UP</a>
							</div>
						</div>
					</div> <!-- end of card -->
					<!-- end of card -->

					<!-- Card-->
					<div class="card">
						<div class="card-body">
							<div class="card-title">ADVANCED</div>
							<div class="price"><span class="currency">$</span><span class="value">29.99</span></div>
							<div class="frequency">monthly</div>
							<div class="divider"></div>
							<ul class="list-unstyled li-space-lg">
								<li class="media">
									<i class="fas fa-check"></i>
									<div class="media-body">Email Marketing Module</div>
								</li>
								<li class="media">
									<i class="fas fa-check"></i>
									<div class="media-body">User Control Management</div>
								</li>
								<li class="media">
									<i class="fas fa-check"></i>
									<div class="media-body">List Building And Cleaning</div>
								</li>
								<li class="media">
									<i class="fas fa-times"></i>
									<div class="media-body">Collected Data Reports</div>
								</li>
								<li class="media">
									<i class="fas fa-times"></i>
									<div class="media-body">Planning And Evaluation</div>
								</li>
							</ul>
							<div class="button-wrapper">
								<a class="btn-solid-reg page-scroll" href="sign-up.html">SIGN UP</a>
							</div>
						</div>
					</div> <!-- end of card -->
					<!-- end of card -->

					<!-- Card-->
					<div class="card">
						<!--<div class="label">
                            <p class="best-value">Best Value</p>
                        </div> -->
						<div class="card-body">
							<div class="card-title">COMPLETE</div>
							<div class="price"><span class="currency">$</span><span class="value">39.99</span></div>
							<div class="frequency">monthly</div>
							<div class="divider"></div>
							<ul class="list-unstyled li-space-lg">
								<li class="media">
									<i class="fas fa-check"></i>
									<div class="media-body">Email Marketing Module</div>
								</li>
								<li class="media">
									<i class="fas fa-check"></i>
									<div class="media-body">User Control Management</div>
								</li>
								<li class="media">
									<i class="fas fa-check"></i>
									<div class="media-body">List Building And Cleaning</div>
								</li>
								<li class="media">
									<i class="fas fa-check"></i>
									<div class="media-body">Collected Data Reports</div>
								</li>
								<li class="media">
									<i class="fas fa-check"></i>
									<div class="media-body">Planning And Evaluation</div>
								</li>
							</ul>
							<div class="button-wrapper">
								<a class="btn-solid-reg page-scroll" href="sign-up.html">SIGN UP</a>
							</div>
						</div>
					</div> <!-- end of card -->
					<!-- end of card -->

				</div> <!-- end of col -->
			</div> <!-- end of row -->
		</div> <!-- end of container -->
	</div> <!-- end of cards-2 -->
	<!-- end of pricing -->


	<!-- Testimonials -->
	<div class="slider-2">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">

					<!-- Text Slider -->
					<div class="slider-container">
						<div class="swiper-container text-slider">
							<div class="swiper-wrapper">

								<!-- Slide -->
								<div class="swiper-slide">
									<div class="image-wrapper">
										<img class="img-fluid" :src="require('@/assets/images/testimonial-1.jpg')"
											alt="alternative">
									</div> <!-- end of image-wrapper -->
									<div class="text-wrapper">
										<div class="testimonial-text">I started to use Tivo with the free trial about a
											year ago and never stopped since then. It does all the repeating marketing
											tasks and allows me to focus on core development activities like new product
											research and design. I love it and recommend it to everyone.</div>
										<div class="testimonial-author">Jude Thorn - Online Marketer</div>
									</div> <!-- end of text-wrapper -->
								</div> <!-- end of swiper-slide -->
								<!-- end of slide -->

								<!-- Slide -->
								<div class="swiper-slide">
									<div class="image-wrapper">
										<img class="img-fluid" :src="require('@/assets/images/testimonial-2.jpg')"
											alt="alternative">
									</div> <!-- end of image-wrapper -->
									<div class="text-wrapper">
										<div class="testimonial-text">Awesome features for the money. I never thought
											such a low ammount of money would bring me so many leads per month. Before
											Tivo I used the services of an agency which cost 10x more and delivered far
											less. Highly recommended to marketers focused on results.</div>
										<div class="testimonial-author">Roy Smith - Developer</div>
									</div> <!-- end of text-wrapper -->
								</div> <!-- end of swiper-slide -->
								<!-- end of slide -->

								<!-- Slide -->
								<div class="swiper-slide">
									<div class="image-wrapper">
										<img class="img-fluid" :src="require('@/assets/images/testimonial-3.jpg')"
											alt="alternative">
									</div> <!-- end of image-wrapper -->
									<div class="text-wrapper">
										<div class="testimonial-text">Tivo is the best marketing automation app for
											small and medium sized business. It understands the mindset of young
											entrepreneurs and provides the necessary data for wise marketing decisions.
											Just give it a try and you will definitely not regret spending your time.
										</div>
										<div class="testimonial-author">Marsha Singer - Online Marketer</div>
									</div> <!-- end of text-wrapper -->
								</div> <!-- end of swiper-slide -->
								<!-- end of slide -->

								<!-- Slide -->
								<div class="swiper-slide">
									<div class="image-wrapper">
										<img class="img-fluid" :src="require('@/assets/images/testimonial-4.jpg')"
											alt="alternative">
									</div> <!-- end of image-wrapper -->
									<div class="text-wrapper">
										<div class="testimonial-text">Tivo is one of the greatest marketing automation
											apps out there. I especially love the Reporting Tools module because it
											gives me such a great amount of information based on little amounts of input
											gathered in just few weeks of light weight usage. Recommended!</div>
										<div class="testimonial-author">Ronda Louis - Online Marketer</div>
									</div> <!-- end of text-wrapper -->
								</div> <!-- end of swiper-slide -->
								<!-- end of slide -->

							</div> <!-- end of swiper-wrapper -->

							<!-- Add Arrows -->
							<div class="swiper-button-next"></div>
							<div class="swiper-button-prev"></div>
							<!-- end of add arrows -->

						</div> <!-- end of swiper-container -->
					</div> <!-- end of slider-container -->
					<!-- end of text slider -->

				</div> <!-- end of col -->
			</div> <!-- end of row -->
		</div> <!-- end of container -->
	</div> <!-- end of slider-2 -->
	<!-- end of testimonials -->

	<!-- Footer -->
	<svg class="footer-frame" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
		viewBox="0 0 1920 79" style="fill: #0068f9;">
		<defs>
		</defs>
		<path class="cls-2"
			d="M0,72.427C143,12.138,255.5,4.577,328.644,7.943c147.721,6.8,183.881,60.242,320.83,53.737,143-6.793,167.826-68.128,293-60.9,109.095,6.3,115.68,54.364,225.251,57.319,113.58,3.064,138.8-47.711,251.189-41.8,104.012,5.474,109.713,50.4,197.369,46.572,89.549-3.91,124.375-52.563,227.622-50.155A338.646,338.646,0,0,1,1920,23.467V79.75H0V72.427Z"
			transform="translate(0 -0.188)" />
	</svg>
	<div class="footer">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="footer-col first">
						<h4>About Tivo</h4>
						<p class="p-small">We're passionate about designing and developing one of the best marketing
							apps in the market</p>
					</div>
				</div> <!-- end of col -->
				<div class="col-md-4">
					<div class="footer-col middle">
						<h4>Important Links</h4>
						<ul class="list-unstyled li-space-lg p-small">
							<li class="media">
								<i class="fas fa-square"></i>
								<div class="media-body">Our business partners <a class="white"
										href="#your-link">startupguide.com</a></div>
							</li>
							<li class="media">
								<i class="fas fa-square"></i>
								<div class="media-body">Read our <a class="white" href="terms-conditions.html">Terms &
										Conditions</a>, <a class="white" href="privacy-policy.html">Privacy Policy</a>
								</div>
							</li>
						</ul>
					</div>
				</div> <!-- end of col -->
				<div class="col-md-4">
					<div class="footer-col last">
						<h4>Contact</h4>
						<ul class="list-unstyled li-space-lg p-small">
							<li class="media">
								<i class="fas fa-map-marker-alt"></i>
								<div class="media-body">22 Innovative, San Francisco, CA 94043, US</div>
							</li>
							<li class="media">
								<i class="fas fa-envelope"></i>
								<div class="media-body"><a class="white"
										href="mailto:contact@tivo.com">contact@tivo.com</a> <i
										class="fas fa-globe"></i><a class="white" href="#your-link">www.tivo.com</a>
								</div>
							</li>
						</ul>
					</div>
				</div> <!-- end of col -->
			</div> <!-- end of row -->
		</div> <!-- end of container -->
	</div> <!-- end of footer -->
	<!-- end of footer -->


	<!-- Copyright -->
	<div class="copyright">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<p class="p-small">Copyright © 2020 <a href="https://inovatik.com">Template by Inovatik</a></p>
				</div> <!-- end of col -->
			</div> <!-- enf of row -->
		</div> <!-- end of container -->
	</div> <!-- end of copyright -->
	<!-- end of copyright -->


</template>


<script>

export default {
	data() {
		return {
			isPatient: true,
		}
	},
	methods: {
		scrollTo(refName) {
			const el = this.$refs[refName]
			el.scrollIntoView({ behavior: 'smooth' })
		}
	}
}

</script>

<style scoped lang="scss">
/******************************/
/*     01. General Styles     */
/******************************/
body,
html {
	width: 100%;
	height: 100%;
}

body,
p {
	color: #555;
	font: 400 1rem/1.625rem "Open Sans", sans-serif;
	;
}

.p-large {
	font: 400 1.125rem/1.75rem "Open Sans", sans-serif;
}

.p-small {
	font: 400 0.875rem/1.5rem "Open Sans", sans-serif;
}

h1 {
	color: #333;
	font: 700 2.5rem/3.125rem "Open Sans", sans-serif;
	letter-spacing: -0.2px;
}

h2 {
	color: #333;
	font: 700 2rem/2.625rem "Open Sans", sans-serif;
	letter-spacing: -0.2px;
}

h3 {
	color: #333;
	font: 700 1.625rem/2.125rem "Open Sans", sans-serif;
	letter-spacing: -0.2px;
}

h4 {
	color: #333;
	font: 700 1.375rem/1.75rem "Open Sans", sans-serif;
	letter-spacing: -0.1px;
}

h5 {
	color: #333;
	font: 700 1.125rem/1.5rem "Open Sans", sans-serif;
	letter-spacing: -0.1px;
}

h6 {
	color: #333;
	font: 700 1rem/1.375rem "Open Sans", sans-serif;
	letter-spacing: -0.1px;
}

.above-heading {
	color: #0068f9;
	font: 700 0.75rem/0.875rem "Open Sans", sans-serif;
	text-align: center;
}

.p-heading {
	margin-bottom: 3.25rem;
}

.testimonial-text {
	font: italic 400 1rem/1.625rem "Open Sans", sans-serif;
}

.testimonial-author {
	font: 700 1rem/1.625rem "Open Sans", sans-serif;
	letter-spacing: -0.1px;
}

.li-space-lg li {
	margin-bottom: 0.375rem;
}

.indent {
	padding-left: 1.25rem;
}

a {
	color: #555;
	text-decoration: underline;
}

a:hover {
	color: #555;
	text-decoration: underline;
}

a.white {
	color: #fff;
}

.decorative-line {
	display: block;
	width: 5rem;
	height: 0.5rem;
	margin-right: auto;
	margin-left: auto;
}

.blue {
	color: #0068f9;
}

.btn-solid-reg {
	display: inline-block;
	padding: 1.1875rem 2.125rem 1.1875rem 2.125rem;
	border: 0.125rem solid #0068f9;
	border-radius: 2rem;
	background-color: #0068f9;
	color: #fff;
	font: 700 0.875rem/0 "Open Sans", sans-serif;
	text-decoration: none;
	transition: all 0.2s;
}

.btn-solid-reg:hover {
	background-color: transparent;
	color: #0068f9;
	text-decoration: none;
}

.btn-solid-lg {
	display: inline-block;
	padding: 1.375rem 2.625rem 1.375rem 2.625rem;
	border: 0.125rem solid #0068f9;
	border-radius: 2rem;
	background-color: #0068f9;
	color: #fff;
	font: 700 0.875rem/0 "Open Sans", sans-serif;
	text-decoration: none;
	transition: all 0.2s;
}

.btn-solid-lg:hover {
	background-color: transparent;
	color: #0068f9;
	text-decoration: none;
}

.btn-outline-reg {
	display: inline-block;
	padding: 1.1875rem 2.125rem 1.1875rem 2.125rem;
	border: 0.125rem solid #0068f9;
	border-radius: 2rem;
	background-color: transparent;
	color: #0068f9;
	font: 700 0.875rem/0 "Open Sans", sans-serif;
	text-decoration: none;
	transition: all 0.2s;
}

.btn-outline-reg:hover {
	background-color: #0068f9;
	color: #fff;
	text-decoration: none;
}

.btn-outline-lg {
	display: inline-block;
	padding: 1.375rem 2.625rem 1.375rem 2.625rem;
	border: 0.125rem solid #0068f9;
	border-radius: 2rem;
	background-color: transparent;
	color: #0068f9;
	font: 700 0.875rem/0 "Open Sans", sans-serif;
	text-decoration: none;
	transition: all 0.2s;
}

.btn-outline-lg:hover {
	background-color: #0068f9;
	color: #fff;
	text-decoration: none;
}

.btn-outline-sm {
	display: inline-block;
	padding: 0.875rem 1.5rem 0.875rem 1.5rem;
	border: 0.125rem solid #0068f9;
	border-radius: 2rem;
	background-color: transparent;
	color: #0068f9;
	font: 700 0.875rem/0 "Open Sans", sans-serif;
	text-decoration: none;
	transition: all 0.2s;
}

.btn-outline-sm:hover {
	background-color: #0068f9;
	color: #fff;
	text-decoration: none;
}

.label-control {
	position: absolute;
	top: 0.87rem;
	left: 1.25rem;
	color: #555;
	opacity: 1;
	font: 400 0.875rem/1.375rem "Open Sans", sans-serif;
	cursor: text;
	transition: all 0.2s ease;
}

/* IE10+ hack to solve lower label text position compared to the rest of the browsers */
@media screen and (-ms-high-contrast: active),
screen and (-ms-high-contrast: none) {
	.label-control {
		top: 0.9375rem;
	}
}


/**************************/
/*     03. Navigation     */
/**************************/
.navbar-custom {
	background-color: #0068f9;
	font: 700 0.875rem/0.875rem "Open Sans", sans-serif;
	transition: all 0.2s;
}

.navbar-custom .container {
	max-width: 87.5rem;
}

.navbar-custom .navbar-brand.logo-image img {
	width: 4.4375rem;
	height: 1.75rem;
}

.navbar-custom .navbar-brand.logo-text {
	font: 700 2rem/1.5rem "Open Sans", sans-serif;
	color: #fff;
	text-decoration: none;
}

.navbar-custom .navbar-nav {
	margin-top: 0.75rem;
	margin-bottom: 0.5rem;
}

.navbar-custom .nav-item .nav-link {
	padding: 0.625rem 0.75rem 0.625rem 0.75rem;
	color: #f7f5f5;
	opacity: 0.8;
	text-decoration: none;
	transition: all 0.2s ease;
}

.navbar-custom .nav-item .nav-link:hover,
.navbar-custom .nav-item .nav-link.active {
	color: #fff;
	opacity: 1;
}

.navbar-custom .nav-item .btn-outline-sm {
	margin-top: 0.25rem;
	margin-bottom: 1.375rem;
	margin-left: 0.5rem;
	border: 0.125rem solid #fff;
	color: #fff;
}

.navbar-custom .nav-item .btn-outline-sm:hover {
	background-color: #fff;
	color: #0068f9;
}

.navbar-custom .navbar-toggler {
	padding: 0;
	border: none;
	color: #fff;
	font-size: 2rem;
}

.navbar-custom button[aria-expanded='false'] .navbar-toggler-awesome.fas.fa-times {
	display: none;
}

.navbar-custom button[aria-expanded='false'] .navbar-toggler-awesome.fas.fa-bars {
	display: inline-block;
}

.navbar-custom button[aria-expanded='true'] .navbar-toggler-awesome.fas.fa-bars {
	display: none;
}

.navbar-custom button[aria-expanded='true'] .navbar-toggler-awesome.fas.fa-times {
	display: inline-block;
	margin-right: 0.125rem;
}


/*********************/
/*    04. Header     */
/*********************/
.header {
	background-color: #0068f9;
}

.header .header-content {
	padding-top: 3rem;
	padding-bottom: 4rem;
	text-align: center;
}

.header .text-container {
	margin-bottom: 3rem;
}

.header h1 {
	margin-bottom: 1rem;
	color: #fff;
	font-size: 2.5rem;
	line-height: 3rem;
}

.header .p-large {
	margin-bottom: 2rem;
	color: #f3f7fd;
}

.header .btn-solid-lg {
	margin-right: 0.5rem;
	margin-bottom: 1.125rem;
	margin-left: 0.5rem;
	border-color: #f3f7fd;
	background-color: #f3f7fd;
	color: #0068f9;
}

.header .btn-solid-lg:hover {
	background: transparent;
	color: #f3f7fd;
}

.header .btn-outline-lg {
	border-color: #f3f7fd;
	color: #f3f7fd;
}

.header .btn-outline-lg:hover {
	background-color: #f3f7fd;
	color: #0068f9;
}

.header-frame {
	margin-top: -1px;
	/* To remove white margin in FF */
	width: 100%;
	height: 2.25rem;
}


/*************************/
/*     05. Customers     */
/*************************/
.slider-1 {
	padding-top: 5rem;
	padding-bottom: 3.25rem;
}

.slider-1 .slider-container {
	text-align: center;
}


/***************************/
/*     06. Description     */
/***************************/
.cards-1 {
	padding-top: 3.25rem;
	padding-bottom: 3rem;
	text-align: center;
}

.cards-1 .h2-heading {
	margin-bottom: 3.5rem;
}

.cards-1 .card {
	max-width: 21rem;
	margin-right: auto;
	margin-bottom: 3.5rem;
	margin-left: auto;
	padding: 0;
	border: none;
}

.cards-1 .card-image {
	max-width: 16rem;
	margin-right: auto;
	margin-bottom: 2rem;
	margin-left: auto;
}

.cards-1 .card-title {
	margin-bottom: 0.5rem;
}

.cards-1 .card-body {
	padding: 0;
}


/************************/
/*     07. Features     */
/************************/
.tabs {
	padding-top: 8rem;
	padding-bottom: 8.125rem;
	background-color: #f3f7fd;
}

.tabs .h2-heading,
.tabs .p-heading {
	text-align: center;
}

.tabs .nav-tabs {
	// display: block;
	margin-bottom: 2.25rem;
	border-bottom: none;

	.patient-feature-tab {
		margin-right: 0;
		margin-left: auto;
	}

	.doctor-feature-tab {
		margin-left: 0;
		margin-right: auto;
	}
}

.tabs .text-container {
	margin-top: 2.25rem;
}

.tabs .nav-link {
	padding: 0.375rem 1rem 0.375rem 1rem;
	border: none;
	color: #86929b;
	background: transparent;
	font-weight: 700;
	font-size: 1.25rem;
	line-height: 1.75rem;
	text-align: center;
	text-decoration: none;
	transition: all 0.2s ease;
}

.tabs .nav-link:hover,
.tabs .nav-link.active {
	background: transparent;
	color: #0068f9;
}

.tabs .nav-link .fas {
	margin-right: 0.625rem;
}

.tabs .image-container {
	margin-bottom: 2.75rem;
}

.tabs .list-unstyled .fas {
	color: #0068f9;
	font-size: 0.5rem;
	line-height: 1.625rem;
}

.tabs .list-unstyled .media-body {
	margin-left: 0.625rem;
}

.tabs #tab-1 {
	margin-bottom: 2.25rem;

	h3 {
		margin-bottom: 0.75rem;
	}
}

.tabs #tab-1 .list-unstyled {
	margin-bottom: 1.5rem;
}

.tabs #tab-2 {
	margin-bottom: 2.25rem;

	h3 {
		margin-bottom: 0.75rem;
	}
}

.tabs #tab-2 .list-unstyled {
	margin-bottom: 1.5rem;
}

.tabs #tab-3 {
	h3 {
		margin-bottom: 0.75rem;
	}
}

.tabs #tab-3 .list-unstyled {
	margin-bottom: 1.5rem;
}

 .feature-img {
	width: 600px;
	height: 300px;
	object-fit: cover;
	border-radius: 5%;
 }

/***********************/
/*     09. Details     */
/***********************/
.basic-1 {
	padding-top: 7.5rem;
	padding-bottom: 8rem;
}

.basic-1 .text-container {
	margin-bottom: 3.75rem;
}

.basic-1 .list-unstyled {
	margin-bottom: 1.375rem;
}

.basic-1 .list-unstyled .fas {
	color: #0068f9;
	font-size: 0.5rem;
	line-height: 1.625rem;
}

.basic-1 .list-unstyled .media-body {
	margin-left: 0.625rem;
}


/*********************/
/*     10. Video     */
/*********************/
.basic-2 {
	padding-top: 8rem;
	padding-bottom: 6.75rem;
	background-color: #f3f7fd;
	text-align: center;
}

.basic-2 .image-container {
	margin-bottom: 2rem;
}

.basic-2 .image-container img {
	border-radius: 0.75rem;
}

.basic-2 .video-wrapper {
	position: relative;
}

/* Video Play Button */
.basic-2 .video-play-button {
	position: absolute;
	z-index: 10;
	top: 50%;
	left: 50%;
	display: block;
	box-sizing: content-box;
	width: 2rem;
	height: 2.75rem;
	padding: 1.125rem 1.25rem 1.125rem 1.75rem;
	border-radius: 50%;
	-webkit-transform: translateX(-50%) translateY(-50%);
	-ms-transform: translateX(-50%) translateY(-50%);
	transform: translateX(-50%) translateY(-50%);
}

.basic-2 .video-play-button:before {
	content: "";
	position: absolute;
	z-index: 0;
	top: 50%;
	left: 50%;
	display: block;
	width: 4.75rem;
	height: 4.75rem;
	border-radius: 50%;
	background: #0068f9;
	animation: pulse-border 1500ms ease-out infinite;
	-webkit-transform: translateX(-50%) translateY(-50%);
	-ms-transform: translateX(-50%) translateY(-50%);
	transform: translateX(-50%) translateY(-50%);
}

.basic-2 .video-play-button:after {
	content: "";
	position: absolute;
	z-index: 1;
	top: 50%;
	left: 50%;
	display: block;
	width: 4.375rem;
	height: 4.375rem;
	border-radius: 50%;
	background: #0068f9;
	transition: all 200ms;
	-webkit-transform: translateX(-50%) translateY(-50%);
	-ms-transform: translateX(-50%) translateY(-50%);
	transform: translateX(-50%) translateY(-50%);
}

.basic-2 .video-play-button span {
	position: relative;
	display: block;
	z-index: 3;
	top: 0.375rem;
	left: 0.25rem;
	width: 0;
	height: 0;
	border-left: 1.625rem solid #fff;
	border-top: 1rem solid transparent;
	border-bottom: 1rem solid transparent;
}

@keyframes pulse-border {
	0% {
		transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
		opacity: 1;
	}

	100% {
		transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
		opacity: 0;
	}
}

/* end of video play button */

.basic-2 .p-heading {
	margin-bottom: 1rem;
}


/***********************/
/*     11. Pricing     */
/***********************/
.cards-2 {
	padding-top: 7.875rem;
	padding-bottom: 2.25rem;
	text-align: center;
}

.cards-2 .h2-heading {
	margin-bottom: 3.75rem;
}

.cards-2 .card {
	display: block;
	max-width: 19rem;
	margin-right: auto;
	margin-bottom: 3rem;
	margin-left: auto;
	border: 1px solid #ccd3df;
	border-radius: 0.375rem;
}

.cards-2 .card .card-body {
	padding: 2.5rem 2rem 2.75rem 2em;
}

.cards-2 .card .card-title {
	margin-bottom: 0.5rem;
	color: #0068f9;
	font: 700 1.125rem/1.5rem "Open Sans", sans-serif;
}

.cards-2 .card .price .currency {
	margin-right: 0.25rem;
	color: #434c54;
	font-weight: 700;
	font-size: 1.5rem;
	vertical-align: 40%;
}

.cards-2 .card .price .value {
	color: #434c54;
	font: 700 3.25rem/3.5rem "Open Sans", sans-serif;
	text-align: center;
}

.cards-2 .card .frequency {
	font-size: 0.875rem;
}

.cards-2 .card .divider {
	height: 1px;
	margin-top: 1.75rem;
	margin-bottom: 2rem;
	border: none;
	background-color: #ccd3df;
}

.cards-2 .card .list-unstyled {
	margin-top: 1.875rem;
	margin-bottom: 1.625rem;
	text-align: left;
}

.cards-2 .card .list-unstyled .media {
	margin-bottom: 0.5rem;
}

.cards-2 .card .list-unstyled .fas {
	color: #0068f9;
	font-size: 0.875rem;
	line-height: 1.625rem;
}

.cards-2 .card .list-unstyled .fas.fa-times {
	margin-left: 0.1875rem;
	margin-right: 0.125rem;
	color: #555;
}

.cards-2 .card .list-unstyled .media-body {
	margin-left: 0.625rem;
}


/****************************/
/*     12. Testimonials     */
/****************************/
.slider-2 {
	padding-top: 2.75rem;
	padding-bottom: 4rem;
}

.slider-2 .slider-container {
	position: relative;
}

.slider-2 .swiper-container {
	position: static;
	width: 82%;
	text-align: center;
}

.slider-2 .image-wrapper {
	width: 6rem;
	margin-right: auto;
	margin-bottom: 1rem;
	margin-left: auto;
}

.slider-2 .image-wrapper img {
	border-radius: 50%;
}

.slider-2 .testimonial-text {
	margin-bottom: 0.5rem;
}

.slider-2 .testimonial-author {
	color: #333;
}

.slider-2 .swiper-button-prev,
.slider-2 .swiper-button-next {
	width: 1.125rem;
}

.slider-2 .swiper-button-prev:focus,
.slider-2 .swiper-button-next:focus {
	/* even if you can't see it chrome you can see it on mobile device */
	outline: none;
}

.slider-2 .swiper-button-prev {
	left: -0.375rem;
	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2028%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23505c67'%2F%3E%3C%2Fsvg%3E");
	background-size: 1.125rem 1.75rem;
}

.slider-2 .swiper-button-next {
	right: -0.375rem;
	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2028%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23505c67'%2F%3E%3C%2Fsvg%3E");
	background-size: 1.125rem 1.75rem;
}


/**********************/
/*     14. Footer     */
/**********************/
.footer-frame {
	width: 100%;
	height: 1.5rem;
}

.footer {
	padding-top: 3rem;
	padding-bottom: 0.5rem;
	background-color: #0068f9;
}

.footer .footer-col {
	margin-bottom: 2.25rem;
}

.footer h4 {
	margin-bottom: 0.625rem;
	color: #fff;
}

.footer .list-unstyled,
.footer p {
	color: #f3f7fd;
}

.footer .footer-col.middle .list-unstyled .fas {
	color: #fff;
	font-size: 0.5rem;
	line-height: 1.5rem;
}

.footer .footer-col.middle .list-unstyled .media-body {
	margin-left: 0.5rem;
}

.footer .footer-col.last .list-unstyled .fas {
	color: #fff;
	font-size: 0.875rem;
	line-height: 1.5rem;
}

.footer .footer-col.last .list-unstyled .media-body {
	margin-left: 0.625rem;
}

.footer .footer-col.last .list-unstyled .fas.fa-globe {
	margin-left: 1rem;
	margin-right: 0.625rem;
}


/*************************/
/*     15. Copyright     */
/*************************/
.copyright {
	padding-top: 1rem;
	padding-bottom: 0.375rem;
	background-color: #0068f9;
	text-align: center;
}

.copyright .p-small {
	padding-top: 1.375rem;
	border-top: 1px solid #718ad1;
	color: #f3f7fd;
}

.copyright a {
	color: #f3f7fd;
	text-decoration: none;
}


/*****************************/
/*     19. Media Queries     */
/*****************************/
/* Min-width width 768px */
@media (min-width: 768px) {

	/* General Styles */
	.p-heading {
		width: 85%;
		margin-right: auto;
		margin-left: auto;
	}

	.h2-heading {
		width: 80%;
		margin-right: auto;
		margin-left: auto;
	}

	/* end of general styles */


	/* Header */
	.header .text-container {
		margin-bottom: 4rem;
	}

	.header h1 {
		font-size: 3.5rem;
		line-height: 4.125rem;
	}

	.header .btn-solid-lg {
		margin-bottom: 0;
		margin-left: 0;
	}

	.header-frame {
		height: 5.5rem;
	}

	/* end of header */


	/* Testimonials */
	.slider-2 .swiper-button-prev {
		width: 1.375rem;
		background-size: 1.375rem 2.125rem;
	}

	.slider-2 .swiper-button-next {
		width: 1.375rem;
		background-size: 1.375rem 2.125rem;
	}

	/* end of testimonials */

	/* Footer */
	.footer-frame {
		height: 5rem;
	}

	/* end of footer */


	/* Extra Pages */
	.ex-header {
		padding-top: 11rem;
		padding-bottom: 9rem;
	}

	.ex-basic-2 .text-container.dark {
		padding: 2.5rem 3rem 2rem 3rem;
	}

	.ex-basic-2 .form-container {
		margin-top: 0;
	}

	/* end of extra pages */


	/* Sign Up And Log In Pages */
	.ex-2-header {
		padding-top: 11rem;
	}

	.ex-2-header .form-container {
		padding: 2.25rem 1.75rem 1.25rem 1.75rem;
	}

	/* end of sign up and log in pages */
}

/* end of min-width width 768px */


/* Min-width width 992px */
@media (min-width: 992px) {

	/* Navigation */
	.navbar-custom {
		padding: 2.125rem 1.5rem 2.125rem 2rem;
		box-shadow: none;
	}

	.navbar-custom .navbar-nav {
		margin-top: 0;
		margin-bottom: 0;
	}

	.navbar-custom .nav-item .nav-link {
		padding: 0.25rem 0.75rem 0.25rem 0.75rem;
	}

	.navbar-custom .nav-item .nav-link:hover,
	.navbar-custom .nav-item .nav-link.active {
		opacity: 1;
	}

	.navbar-custom.top-nav-collapse {
		padding: 0.5rem 1.5rem 0.5rem 2rem;
		background-color: #0068f9;
		box-shadow: 0 0.0625rem 0.375rem 0 rgba(0, 0, 0, 0.1);
	}

	.navbar-custom.top-nav-collapse .nav-item .nav-link:hover,
	.navbar-custom.top-nav-collapse .nav-item .nav-link.active {
		color: #fff;
	}

	.navbar-custom .dropdown-menu {
		padding-top: 1rem;
		padding-bottom: 1rem;
		border-top: 0.25rem solid rgba(0, 0, 0, 0);
		border-radius: 0.25rem;
	}

	.navbar-custom.top-nav-collapse .dropdown-menu {
		border-top: 0.25rem solid rgba(0, 0, 0, 0);
		box-shadow: 0 0.375rem 0.375rem 0 rgba(0, 0, 0, 0.02);
	}

	.navbar-custom .dropdown-item {
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
	}

	.navbar-custom .dropdown-items-divide-hr {
		width: 84%;
	}

	.navbar-custom .nav-item .btn-outline-sm {
		margin-top: 0;
		margin-bottom: 0;
		margin-left: 1rem;
	}

	/* end of navigation */


	/* General Styles */
	.p-heading {
		width: 65%;
	}

	.h2-heading {
		width: 60%;
	}

	/* end of general styles */


	/* Header */
	.header .header-content {
		text-align: left;
	}

	.header .text-container {
		margin-top: 4rem;
		margin-bottom: 0;
	}

	.header .image-container {
		position: relative;
		margin-top: 3rem;
	}

	.header .image-container .img-wrapper {
		position: absolute;
		display: block;
		width: 470px;
	}

	.img-wrapper {
		margin-left: 90px;
	}

	.header-frame {
		height: 8rem;
	}

	/* end of header */


	/* Description */
	.cards-1 .card {
		display: inline-block;
		width: 17rem;
		max-width: 100%;
		margin-right: 1rem;
		margin-left: 1rem;
		vertical-align: top;
	}

	.cards-1 .card-image {
		width: 9rem;
	}

	/* end of description */


	/* Features */
	.tabs .nav-tabs {
		display: flex;
		justify-content: center;
		margin-bottom: 2.75rem;
	}

	.tabs .nav-link {
		padding-right: 1.25rem;
		padding-left: 1.25rem;
		border-bottom: 2px solid rgb(202, 202, 202);
	}

	.tabs .nav-link:hover,
	.tabs .nav-link.active {
		border-bottom: 2px solid #0068f9;
	}

	.tabs .image-container {
		margin-bottom: 0;
	}

	/* end of features */

	/* Details */
	.basic-1 {
		padding-top: 8rem;
	}

	.basic-1 .text-container {
		margin-bottom: 0;
	}

	/* end of details */


	/* Video */
	.basic-2 .image-container {
		max-width: 53.125rem;
		margin-right: auto;
		margin-left: auto;
	}

	.basic-2 p {
		width: 65%;
		margin-right: auto;
		margin-left: auto;
	}

	/* end of video */


	/* Pricing */
	.cards-2 .card {
		display: inline-block;
		margin-right: 0.5rem;
		margin-left: 0.5rem;
		vertical-align: top;
	}

	/* end of pricing */


	/* Testimonials */
	.slider-2 .swiper-container {
		width: 92%;
		text-align: left;
	}

	.slider-2 .image-wrapper {
		float: left;
		width: 10rem;
		margin-bottom: 0;
	}

	.slider-2 .text-wrapper {
		max-width: 100%;
		margin-top: 1.25rem;
		margin-left: 13rem;
	}

	.slider-2 .swiper-button-prev {
		left: -0.75rem;
	}

	.slider-2 .swiper-button-next {
		right: -0.75rem;
	}

	/* end of testimonials */

	/* Extra Pages */
	.ex-header h1 {
		width: 80%;
		margin-right: auto;
		margin-left: auto;
	}

	.ex-basic-2 {
		padding-bottom: 5rem;
	}

	/* end of extra pages */
}

/* end of min-width width 992px */


/* Min-width width 1200px */
@media (min-width: 1200px) {

	/* General Styles */
	.h2-heading {
		width: 50%;
	}

	/* end of general styles */


	/* Header */
	.header .header-content {
		padding-top: 3rem;
		padding-bottom: 5rem;
	}

	.header .text-container {
		margin-top: 5.5rem;
		margin-right: 0.5rem;
	}

	.header .image-container {
		margin-top: 1rem;
		margin-left: 1.5rem;
	}

	.header .image-container .img-wrapper {
		width: 630px;
	}

	.header-frame {
		height: 9.375rem;
	}

	/* end of header */


	/* Customer */
	.slider-1 .slider-container {
		margin-right: 3rem;
		margin-left: 3rem;
	}

	/* end of customer */


	/* Description */
	.cards-1 .card {
		width: 18.875rem;
		margin-right: 2rem;
		margin-left: 2rem;
	}

	.cards-1 .card-image {
		width: 12.5rem;
	}

	/* end of description */


	/* Features */
	.tabs .image-container {
		margin-right: 1.5rem;
		margin-left: 1rem;
	}

	.tabs .text-container {
		margin-top: 1.5rem;
		margin-right: 1rem;
		margin-left: 1.5rem;
	}

	/* end of features */


	/* Details */
	.basic-1 .image-container {
		margin-right: 1rem;
		margin-left: 1.5rem;
	}

	.basic-1 .text-container {
		margin-top: 1rem;
		margin-right: 1.5rem;
		margin-left: 1rem;
	}

	.basic-1 h2 {
		margin-bottom: 1rem;
	}

	/* end of details */


	/* Pricing */
	.cards-2 .card {
		width: 19.375rem;
		max-width: 100%;
		margin-right: 1.75rem;
		margin-left: 1.75rem;
	}

	.cards-2 .card .card-body {
		padding-right: 2.25rem;
		padding-left: 2.25rem;
	}

	/* end of pricing */


	/* Testimonials */
	.slider-2 .slider-container {
		width: 64.125rem;
		margin-right: auto;
		margin-left: auto;
	}

	/* end of testimonials */

	/* Footer */
	.footer .footer-col.first {
		margin-right: 1.5rem;
	}

	.footer .footer-col.middle {
		margin-right: 0.75rem;
		margin-left: 0.75rem;
	}

	.footer .footer-col.last {
		margin-left: 1.5rem;
	}

	/* end of footer */


	/* Extra Pages */
	.ex-header h1 {
		width: 60%;
		margin-right: auto;
		margin-left: auto;
	}

	.ex-basic-2 .form-container {
		margin-left: 1.75rem;
	}

	.ex-basic-2 .image-container-small {
		margin-left: 1.75rem;
	}

	/* end of extra pages */
}

/* end of min-width width 1200px */
</style>
