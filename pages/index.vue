<script setup>
import { onMounted, useTemplateRef } from 'vue';
import { gsap } from 'gsap';

const route = useRoute();

const backgroundActive = ref(false);

//gsap
const main = ref();
const ctx = ref();

//for now, we read the works data from a variable
const workData = ref([
    {
        id: "elvo",
        title: "Birrificio Elvo",
        url: "https://www.elvo.it/",
        paragraphs: [
            `Elvo is a family-run craft brewery that produces bottom fermentation raw beers in traditional german style. It was born in the homonymous valley on the slopes of Mount Mombarone and has been active in Italian territory since 2013.`,
            `This website serves both as ecommerce and as showcase for their restaurants and menus.
            <br />It uses WordPress as headless CMS, which allows the website admin to manage all the necessary content.
            <br />The frontend is built with Vue 3 and Nuxt, and it features a minimal and responsive UI.
            <br />Stripe APIs are used to handle secure online payments, and all the data about products and orders is saved using WooCommerce.`,
            `In collaboration with: RGB Soluzioni Web
            <br/>Web design: Gioele Bertin`
        ]
    },
    {
        id: "boglietti",
        title: "Boglietti Gioielliere",
        url: "https://www.bogliettigioielliere.com/",
        paragraphs: [
            `Boglietti Gioielliere is an historic Italian jewelry store founded in 1886 in Biella. The business has been passed down through generations and the Boglietti family continues the tradition of fine watchmaking and jewelry craftsmanship.`,
            `This website showcases the brands and services offered by the atelier, but it also integrates a complete <a href="https://www.bogliettigioielliere.com/rolex/scopri/" target="_blank" class="clean-link underline" rel="nofollow noopener noreferrer" referrerpolicy="no-referrer">Rolex Bespoke Solution</a>. 
            <br/>It's built with WordPress and but the base theme has been heavily edited to give the website a unique and modern look.
            <br/>The Rolex area is completely custom coded, strictly following the design specifications given officially by Rolex. Inside this area it's possible to explore the Rolex collections and watches, which are imported automatically into WooCommerce.`,
            `In collaboration with: RGB Soluzioni Web`
        ]
    },
    {
        id: "nccfelicia",
        title: "Felicia NCC",
        url: "https://www.nccfelicia.com/",
        paragraphs: [
            `Felicia NCC is a website built with the purpose to facilitate contact between clients and the NCC driver. The users can fill the form which sends a notification to the driver, who can then contact the user to send them a quote.`,
            `The website is pretty simple: it's a single page built using WordPress and it features a clean look and smooth animations. The actual form is instead coded using Vue 3, which I imported in "standalone" mode. I chose this approach because it offers the benefit of using Vue, but at the same time it can be integrated in an existing webpage without requiring a build step.
            <br/>In the WordPress backend I used PHP to create a custom options page where the admin can edit the mobile phone number shown in the header and the email addresses used for sending notifications. I also integrated the Telegram APIs, so the driver is also notified by a Telegram message.`,
            `In collaboration with: RGB Soluzioni Web
            <br/>Web design: Gioele Bertin`
        ]
    },
    {
        id: "glamora",
        title: "Glamora (backend)",
        url: "https://www.glamora.it/",
        paragraphs: [
            `This website uses WordPress as headless CMS, and I only worked at the backend.`,
            `I used ACF to create an extensive set of blocks that the site editors can use to build pages, effectively creating a custom page builder. I then wrote custom API endpoints in PHP to return the structure of each page, allowing the frontend to render the corresponding components filled with the data entered by the editor.`,
            `I also developed the <a href="https://www.glamora.it/it/advanced-search" target="_blank" class="clean-link underline" rel="nofollow noopener noreferrer" referrerpolicy="no-referrer">advanced search</a> functionality, whose main requirement was the implementation of smart filters. The products showed in the website are imported via a private plugin provided by the client's PIM system, which exposes the data through Laravel-style Eloquent Models. However, these methods turned out to be too slow for the required features. To solve this I built a script that, after each import, saves all the necessary data into custom tables in the DB. The queries needed for searching and updating the filters are then executed directly against the DB, resulting in excellent response times.`,
            `In collaboration with: ThinkingAbout`
        ]
    }
]);

const setViewportHeight = () => {
    document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
};
const refreshAnim = () => pJSDom[0].pJS.fn.particlesRefresh();

onMounted(() => {
    //fix background animation bug when changing device orientation
    window.addEventListener('resize', refreshAnim);

    //to fix 100vh on mobile
    // window.addEventListener('resize', setViewportHeight);
    // setViewportHeight();


    //load videos after page load
    loadVideos();

    particlesJS("particles-js-black", {
        particles: {
            number: { value: 1000, density: { enable: true, value_area: 500 } },
            color: { value: "#ffffff" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 4 },
            },
            opacity: {
                value: 0.8,
                random: false,
                anim: { enable: false, speed: 0.3, opacity_min: 0.4, sync: false }
            },
            size: {
                value: 1.3,
                random: true,
                anim: { enable: false, speed: 5, size_min: 0.2, sync: false }
            },
            line_linked: {
                enable: false,
                distance: 0,
                color: "#ffffff",
                opacity: 0.41035677364878176,
                width: 1.1048066982851816
            },
            move: {
                enable: true,
                speed: 0.3,
                direction: "bottom-right",
                random: false,
                straight: true,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: false, mode: "repulse" },
                onclick: { enable: false, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true
    });

    particlesJS("particles-js-white", {
        particles: {
            number: { value: 500, density: { enable: true, value_area: 500 } },
            color: { value: "#000000" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 4 },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: false,
                distance: 0,
                color: "#ffffff",
                opacity: 0.41035677364878176,
                width: 1.1048066982851816
            },
            move: {
                enable: true,
                speed: 3,
                direction: "top",
                random: true,
                straight: true,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: "window",
            events: {
                onhover: { enable: false, mode: "bubble" },
                onclick: { enable: false, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: {
                    distance: 300,
                    size: 4,
                    duration: 1,
                    opacity: 0.6252994534720357,
                    speed: 3
                },
                repulse: { distance: 64.96617698410762, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true
    });

    ctx.value = gsap.context((self) => {

        for (let i = 1; i <= workData.value.length + 1; i++) {
            let section = document.getElementById(`sec${i}`);
            let sectionContent = section.querySelector(".nc-content");

            gsap.fromTo(`#cover${i}`, {
                "--circle-radius": () => (window.matchMedia("(orientation: portrait)").matches ? window.innerWidth / 3 : window.innerWidth / 10) + 'px',
            }, {
                "--circle-radius": () => window.matchMedia("(orientation: portrait)").matches ? window.innerHeight * 1.2 : window.innerWidth * 1.5,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=100%",
                    scrub: true,
                    pin: true,

                    /*
                    //not needed anymore, now mobile section height is free and scrolling is not a problem
                    onEnter: () => {
                        sectionContent.style.pointerEvents = "auto"; 
                    },
                    onEnterBack: () => {
                        sectionContent.style.pointerEvents = "auto";
                    },
                    onLeave: () => {
                        sectionContent.style.pointerEvents = "none"; 
                    },
                    onLeaveBack: () => {
                        sectionContent.style.pointerEvents = "none";
                    }
                    */
                },
            });
        }

        let tl = gsap.timeline();
        tl.add(gsap.to("#sec1 .nc-content", { duration: 0.5, opacity: 1 }), 0.5);
        tl.add(gsap.to("#nc-bg .white", { duration: 0.5, opacity: 1 }), 0.5);
        //tl.add(gsap.to(".particles-js-element", { duration: 1, opacity: 1 }));
        tl.play();

    }, main.value);
})

onUnmounted(() => {
    if (ctx.value && ctx.value.revert) {
        ctx.value.revert();
    }
});

function loadVideos() {
    var lazySources = [].slice.call(document.querySelectorAll("video.lazy source"));
    lazySources.forEach(function (videoSource) {
        videoSource.src = videoSource.dataset.src;
        videoSource.parentElement.load();
    });
}

function fullscreenVideo(id) {
    let video = document.getElementById('video-' + id);

    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

</script>

<template>
    <div id="nc-bg">
        <div class="black" id="first-cover">
        </div>

        <div class="white" id="cover1">
        </div>
        <div :class="i % 2 === 0 ? 'black' : 'white'" v-for="i of [...Array(workData.length).keys()]" :key="'cover' + (i + 2)" :id="'cover' + (i + 2)">
        </div>

        <div class="particles-js-element" :class="{ bgActive: backgroundActive }" id="particles-js-black"></div>
        <div class="particles-js-element" :class="{ bgActive: backgroundActive }" id="particles-js-white"></div>
    </div>

    <div class="nc-section title" id="sec1">
        <div>
            <div class="nc-content" style="overflow: visible;">
                <div class="nc-title">
                    <h1 class="nc-title inline w400">Hey, I'm Nicolas</h1>.
                    <span class="w200">I'm a full stack developer, <br class="desktop" />currently working as freelancer.</span>
                </div>
                <div class="nc-subtitle w200" style="margin: 1rem 0;">
                    Check out some of my works below.
                </div>
                <div class="nc-subtitle" style="display: flex; gap: 10px; margin: 1rem 0;">
                    <Icon name="gis:location-poi" style="color: white" />
                    Italy
                </div>
                <div class="hero-icons">
                    <a class="hero-link" href="mailto:nicecco.dev@gmail.com">
                        <Icon name="uiw:mail" />
                    </a>
                    <a class="hero-link" target="_blank" href="https://www.linkedin.com/in/nicolas-cecco/">
                        <Icon name="uiw:linkedin" />
                    </a>
                    <a class="hero-link" target="_blank" href="https://github.com/nico0756">
                        <Icon name="uiw:github" />
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="nc-section" v-for="(work, i) in workData" :id="'sec' + (i + 2)">
        <div class="nc-content">
            <div class="work-item">
                <div class="work-video" v-on:click="fullscreenVideo(work.id)">
                    <video muted loop playsinline autoplay class="lazy">
                        <source :data-src="`/video/${work.id}.mp4`" type="video/mp4">
                    </video>
                </div>
                <div class="work-data">
                    <h2 class="nc-title w400">{{ work.title }}</h2>
                    <p class="nc-text-20" v-for="p of work.paragraphs" v-html="p"></p>
                    <a class="nc-btn" :href="work.url" target="_blank" rel="nofollow noopener noreferrer" referrerpolicy="no-referrer">View website</a>
                </div>
            </div>
        </div>
    </div>

    <!-- to fix fullscreen video bug on mobile (because of gsap) -->
    <div style="height: 0px; width: 0;">
        <video muted loop playsinline controls autoplay v-for="work in workData" style="width: 100%; display: block;" :id="'video-' + work.id" class="lazy">
            <source :data-src="`/video/${work.id}.mp4`" type="video/mp4">
        </video>
    </div>

    <div id="star" :class="{ bgActive: backgroundActive }" v-on:click="backgroundActive = true"></div>
    <div id="blackstar" :class="{ bgActive: backgroundActive }" v-on:click="backgroundActive = false"></div>

    <footer>
        <div class="center">©2025</div>
    </footer>
</template>

<style scoped>
#star {
    position: fixed;
    cursor: pointer;
    top: 30px;
    right: 30px;
    width: 5px;
    height: 5px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0px 0px 6px 5px rgba(255, 255, 255, 1);
    opacity: 1;
    transition: opacity 0.3s;
    animation: starGlow 5s ease infinite;
}

#star.bgActive {
    opacity: 0;
    animation: none;
}

#blackstar {
    position: fixed;
    cursor: pointer;
    bottom: 30px;
    left: 30px;
    width: 5px;
    height: 5px;
    background-color: black;
    border-radius: 50%;
    box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 1);
    opacity: 0;
    transition: opacity 0.3s;
    animation: none;
}

#blackstar.bgActive {
    opacity: 1;
    animation: blackstarGlow 5s ease infinite;
}

@keyframes starGlow {
    0% {
        box-shadow: 0px 0px 6px 5px rgba(255, 255, 255, 1);
    }

    50% {
        box-shadow: 0px 0px 6px 2px rgba(255, 255, 255, 1);
    }

    100% {
        box-shadow: 0px 0px 6px 5px rgba(255, 255, 255, 1);
    }
}

@keyframes blackstarGlow {
    0% {
        box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 1);
    }

    50% {
        box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 1);
    }

    100% {
        box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 1);
    }
}

.nc-section {
    width: 100%;
    height: 100vh;
    /* height: var(--viewport-height); */
    display: flex;
    mix-blend-mode: difference;
    overflow: hidden;
}

.nc-section.title {
    justify-content: center;
    align-items: center;
}

@media screen and (min-width: 1600px) {
    .nc-section {
        justify-content: center;
        align-items: center;
    }
}

.nc-section .nc-content {
    /*pointer-events: none;*/
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.nc-section .nc-content::-webkit-scrollbar {
    display: none;
}


.nc-btn,
.hero-link,
.work-video {
    pointer-events: all !important;
}

.hero-icons {
    display: flex;
    /* 36px */
    gap: 2.25rem;
    font-size: 2.25rem;
}

@media (hover: hover) {
    .hero-link {
        color: white;
        filter: brightness(1) drop-shadow(0px 0px 12px rgba(67, 183, 255, 0));
        transition: filter 0.3s;
    }

    .hero-link:hover {
        filter: brightness(2) drop-shadow(0px 0px 12px rgba(67, 183, 255, 0.9));
    }
}

@media (hover: none) {
    .hero-link {
        color: white;
        filter: brightness(1) drop-shadow(0px 0px 12px rgba(67, 183, 255, 0.6));
    }
}

#nc-bg {
    --circle-radius: 0;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.white {
    background-image: url(/img/semi-white.svg);
    background-repeat: no-repeat;
    background-position: bottom left;
    background-size: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    width: var(--circle-radius);
    height: 100%;
}

.black {
    background-image: url(/img/semi-black.svg);
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 100%;
    position: absolute;
    top: 0;
    right: 0;
    width: var(--circle-radius);
    height: 100%;
}

#first-cover {
    width: 150%;
}

.particles-js-element {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
    top: 0;
    right: 0;
    opacity: 0;
    transition: opacity 0.3s;
}

.particles-js-element.bgActive {
    opacity: 1;
}

@media screen and (orientation: portrait) {

    .white,
    .black {
        width: 100%;
        height: var(--circle-radius);
        background-size: auto 100%;
    }

    #first-cover {
        width: 100%;
        height: 120%;
    }
}


.work-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    padding: 2rem 0 4rem 0;
}

.work-video {
    cursor: pointer;
    border-radius: 1rem;
    overflow: hidden;
    width: 40%;
}

.work-video video {
    max-width: 100%;
    display: block;
}

.work-data {
    width: 60%;
}

.work-data .nc-title {
    margin-top: 0;
}

.work-data p:last-child {
    margin-bottom: 0;
}

@media screen and (max-width: 1023px) {

    .nc-section:not(.title) {
        height: auto;
    }

    .work-item {
        display: block;
        max-width: 940px;
        margin: 0 auto;
    }

    .work-data {
        width: auto;
    }

    .work-video {
        width: 70%;
        margin: 0 auto 2rem auto;
    }
}

@media screen and (max-width: 500px) {
    .work-video {
        width: 100%;
    }
}

#sec1 .nc-content,
#nc-bg .white {
    opacity: 0;
}

footer {
    position: relative;
    font-size: 14px;
    font-weight: 200;
    color: black;
    margin-top: 2rem;
    padding: 2rem 0;
    border-top: 1px solid rgb(242, 242, 242);
}
</style>