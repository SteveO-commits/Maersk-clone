const siteHeader = document.querySelector(".header");

let previousScrollY = window.scrollY;
let ticking = false;

function updateStickyHeader() {
    const currentScrollY = window.scrollY;
    const scrollTrigger = 90;
    const stopFollowingAt = 520;

    siteHeader.classList.toggle(
        "header-scrolled",
        currentScrollY > scrollTrigger
    );

    if (currentScrollY > previousScrollY && currentScrollY > 250) {
        siteHeader.classList.add("header-hidden");
    } else {
        siteHeader.classList.remove("header-hidden");
    }

    if (window.innerWidth <= 1100) {
        siteHeader.style.position = "fixed";
        siteHeader.style.top = "0";
    } else if (currentScrollY > stopFollowingAt) {
        siteHeader.style.position = "absolute";
        siteHeader.style.top = `${stopFollowingAt}px`;
    } else {
        siteHeader.style.position = "fixed";
        siteHeader.style.top = "0";
    }

    previousScrollY = currentScrollY;
    ticking = false;
}

window.addEventListener("scroll", updateStickyHeader, {
    passive: true
});

window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updateStickyHeader);
            ticking = true;
        }
    },
    { passive: true }
);


updateStickyHeader();

const video = document.querySelector(".maersk-video");
const playButton = document.querySelector(".custom-play");

function openVideoFullscreen() {
    video.controls = true;
    video.muted = false;
    video.play();

    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(); // for Safari
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen(); // for Edge
    }
}

function resetPreviewVideo() {
    video.controls = false;
    video.muted = true;
    video.play();
}

// Clicking anywhere on the video
video.addEventListener("click", openVideoFullscreen);

// Clicking the custom button
playButton.addEventListener("click", openVideoFullscreen);

// Hide controls again after leaving fullscreen
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        resetPreviewVideo();
    }
});

document.addEventListener("webkitfullscreenchange", () => {
    if (!document.webkitFullscreenElement) {
        resetPreviewVideo();
    }
});

// JavaScript for services section
const serviceData = {
    transport: [
        {
            title: "Maersk Spot",
            description:
                "Get fixed prices and guaranteed loading when booking your customers’ shipments online.",
            image: "services/maersk-spot.png"
        },
        {
            title: "Ocean Contract",
            description:
                "Transport your goods with stable rates, choice of allocation and assured space.",
            image: "services/ocean-contract.jfif"
        },
        {
            title: "Ocean quote request",
            description:
                "Get a freight quote for standard, oversized and LCL shipments.",
            image: "services/ocean-quote.png"
        },
        {
            title: "Maersk Go",
            description:
                "Book and manage your own deliveries from door to door with a simple online platform.",
            image: "services/maersk-go.jfif"
        },
        {
            title: "Intermodal Transport Prices",
            description:
                "Find online inland rates for Full Container Loads.",
            image: "services/intermodal-prices.png"
        },
        {
            title: "Air Freight",
            description:
                "Fast, reliable and flexible air freight for urgent supply-chain needs.",
            image: "services/air-freight.jfif"
        },
        {
            title: "Maersk Ground Freight",
            description:
                "Point-to-point non-containerised truck movements from start to end.",
            image: "services/ground-freight.jfif"
        },
        {
            title: "Less-than-Container Load (LCL)",
            description:
                "Ship boxes and pallets by ocean with LCL services.",
            image: "services/lcl.png"
        },
        {
            title: "Mearsk Delivery Gurarantee",
            description:
                "Guaranteed end-to-end delivery timelines across ocean, inland and customs.",
            image: "services/delivery-guarantee.png"
        },
        {
            title: "Freetime Extension",
            description:
                "Extend cargo hold days beyond the agreed freetime.",
            image: "services/freetime.jfif"
        },
        {
            title: "Special Cargo",
            description:
                "Request a shipping quote for an ocean shipment exceeding the dimensions of our standard",
            image: "services/special-cargo.png"
        },
        {
            title: "Maersk ECO Delivery Ocean",
            description:
                "Reduce greenhouse gas emissions by using lower GHG emissions fuels in our network.",
            image: "services/eco-delivery.png"
        },
        {
            title: "Maersk ECO Delivery Air",
            description:
                "Support SAF use within our partner airline network to reduce greenhouse gas emissions.",
            image: "services/delivery-air.png"
        },
        {
            title: "Maersk Flex Route",
            description:
                "Manage supply chain complexities with guaranteed destination changes.",
            image: "services/flex-route.jfif"
        },
        {
            title: "Maersk Accelerate",
            description:
                "A priority service, streamlining the cargo journey with express services.",
            image: "services/maersk-accelerate.png"
        },
        {
            title: "Verified Gross Mass",
            description:
                "Hassle-free weighing, data transmission before vessel loading.",
            image: "services/gross-mass.jfif"
        },
        {
            title: "Premium Quality Containers",
            description:
                "A premium container service for high-value goods.",
            image: "services/quality-containers.jfif"
        },
        {
            title: "Captain Peter™",
            description:
                "Access real-time data on your refrigerated cargo and its journey.",
            image: "services/captain-peter.png"
        },
        {
            title: "Intercontinental Rail Transportation",
            description:
                "Efficient and reliable land connection between Asia and Europe via rail.",
            image: "services/mail-transport.jfif"
        },
        {
            title: "Garments on Hangers",
            description:
                "Specialised containers with built in hanger systems.",
            image: "services/garment-hanger.jfif"
        }
    ],

    store: [
        {
            title: "Contract Logistics",
            description:
                "Discover efficient services for consolidation, deconsolidation and fulfilment of your goods.",
            image: "services/contract-logistics.jfif"
        },
        {
            title: "Depot Services",
            description:
                "Depots acts as key connectors to expedite the import/export of your cargo.",
            image: "services/depot-services.jfif"
        },
        {
            title: "Flex Hub",
            description:
                "Positioning cargo closer to destination and ensuring timely movement.",
            image: "services/flex-hub.jfif"
        }
    ],

    protect: [
        {
            title: "Maersk Customs Services",
            description:
                "Simplify customs clearance with expert support and digital tools.",
            image: "services/maersk-customs.png"
        },
        {
            title: "Maersk Cargo Insurance",
            description:
                "Protect your cargo throughout its journey.",
            image: "services/cargo-insurance.svg"
        },
        {
            title: "Value Protect",
            description:
                "Protect your cargo from accidents, fire, theft and bad weather.",
            image: "services/value-protect.svg"
        },
        {
            title: "Container Protect",
            description:
                "Protect cargo from container damage and cleaning costs.",
            image: "services/container-protect.svg"
        },
        {
            title: "ECTN Certificates",
            description:
                "Document support for selected African countries.",
            image: "services/ectn-certificate-image.svg"
        }
    ],

    management: [
        {
            title: "Supply Chain Management",
            description:
                "Combine data and stakeholders into one connected logistics platform.",
            image: "services/supply-chain.jfif"
        },
        {
            title: "Maersk E-Commerce",
            description:
                "Optimise e-commerce supply chains with fast and reliable deliveries.",
            image: "services/maersk-ecommerce.svg"
        },
        {
            title: "Maersk Project Logistics",
            description:
                "Plan and manage specialised transport for complex cargo.",
            image: "services/project-logistics.png"
        },
        {
            title: "Cold Chain Logistics",
            description:
                "Manage temperature-sensitive goods from origin to destination.",
            image: "services/cold-chain.jfif"
        },
        {
            title: "EDI Solutions",
            description:
                "Reduce paperwork with efficient electronic communication.",
            image: "services/edi-solutions.jfif"
        },
        {
            title: "API Solutions",
            description:
                "The future of data integrations to update B2B information in real-time.",
            image: "services/api-solutions.svg"
        },
        {
            title: "Booking Services",
            description:
                "Single point of contact for bookings and communication with suppliers and carriers.",
            image: "services/booking-services.svg"
        },
        {
            title: "Destination Coordination Services",
            description:
                "From container release to final delivery, one place to manage your entire import ecosystem.",
            image: "services/destination-coordination.svg"
        },
        {
            title: "Maersk Visibility Studio",
            description:
                "Get multi-modal, multi-carrier, multi-regional shipment visibility on a single platform.",
            image: "services/visibility-studio.svg"
        },
        {
            title: "Maersk Risk Management",
            description:
                "Stay ahead with early warnings and clear actions. Powered by expert insights and AI.",
            image: "services/risk-management.svg"
        },
        {
            title: "Cold Chain Management",
            description:
                "Integrated physical and digital services which ensure seamless, transparent reefer cargo logistics.",
            image: "services/cold-chain-management.svg"
        },
        {
            title: "Emissions Studio",
            description:
                "Get visibility into greenhouse gas emissions across carriers and transport modes.",
            image: "services/emissions-dashboard.svg"
        },
        {
            title: "Supply Chain Resilience Modelo",
            description:
                "Manage disruptions and keep your business running smoothly.",
            image: "services/supply-chain-resilience.svg"
        },
        {
            title: "Pharma Cold Chain Management",
            description:
                "Unbroken cold chain logistics ensures control, flexibility and visibility while maintaining product...",
            image: "services/pharma-cold-chain-management.svg"
        },
        {
            title: "NeoNav™",
            description:
                "One platform for transparency, control, and logistics decision-making.",
            image: "services/Neonav.svg"
        }
    ],

    solutions: [
        {
            title: "Cars in Containers",
            description:
                "Flexible transport solutions for finished vehicles.",
            image: "services/cars-in-containers.svg"
        },
        {
            title: "Flexibag Logistics",
            description:
                "Transport bulk liquids safely and efficiently.",
            image: "services/flexibag-logistics.png"
        },
        {
            title: "Chemicals Logistics Management",
            description:
                "Integrated logistics for complex chemical supply chains.",
            image: "services/chemicals-logistics-management.svg"
        }
    ]
};

const servicesTrack = document.querySelector("#servicesTrack");
const serviceTabs = document.querySelectorAll(".service-tab");
const previousServices = document.querySelector("#previousServices");
const nextServices = document.querySelector("#nextServices");
const carouselDots = document.querySelector("#carouselDots");

let activeCategory = "transport";
let currentServiceIndex = 0;

function getVisibleCardCount() {
    const width = window.innerWidth;

    if (width <= 640) return 1;   // XS
    if (width <= 1024) return 2;  // SM
    if (width <= 1440) return 4;  // MD

    return 4;                     // LG and XL
}

function getCarouselStep() {
    return getVisibleCardCount();
}

function getCarouselStep() {
    const width = window.innerWidth;

    if (width < 600) return 1;
    if (width < 900) return 2;
    if (width < 1200) return 3;

    return 4;
}

function getMaximumIndex() {
    const cards = serviceData[activeCategory];
    return Math.max(0, cards.length - getVisibleCardCount());
}

function renderServiceCards() {
    const cards = serviceData[activeCategory];

    servicesTrack.innerHTML = cards
        .map(
            (card) => `
                <article class="service-card">
                    <div class="service-card-image">
                        <img
                            src="${card.image}"
                            alt="${card.title}"
                            loading="lazy"
                        >
                    </div>

                    <h3>${card.title}</h3>
                    <p>${card.description}</p>
                </article>
            `
        )
        .join("");

    currentServiceIndex = 0;

    renderCarouselDots();
    updateCarousel();
}

function renderCarouselDots() {
    const cards = serviceData[activeCategory];
    const visibleCards = getVisibleCardCount();
    const step = getCarouselStep();

    const maximumIndex = Math.max(
        0,
        cards.length - visibleCards
    );

    const positions = [];

    for (let index = 0; index <= maximumIndex; index += step) {
        positions.push(index);
    }

    if (
        positions.length === 0 ||
        positions[positions.length - 1] !== maximumIndex
    ) {
        positions.push(maximumIndex);
    }

    carouselDots.innerHTML = "";

    positions.forEach((position, dotIndex) => {
        const dot = document.createElement("button");

        dot.type = "button";
        dot.className = "carousel-dot";
        dot.dataset.position = position;
        dot.setAttribute(
            "aria-label",
            `Show service group ${dotIndex + 1}`
        );

        dot.addEventListener("click", () => {
            currentServiceIndex = position;
            updateCarousel();
        });

        carouselDots.appendChild(dot);
    });
}

function updateCarousel() {
    const firstCard = servicesTrack.querySelector(".service-card");

    if (!firstCard) return;

    const trackStyles = getComputedStyle(servicesTrack);
    const gap = parseFloat(trackStyles.columnGap) || 0;
    const cardWidth = firstCard.getBoundingClientRect().width;

    const offset = currentServiceIndex * (cardWidth + gap);

    servicesTrack.style.transform = `translateX(-${offset}px)`;

    previousServices.disabled = currentServiceIndex === 0;
    nextServices.disabled = currentServiceIndex >= getMaximumIndex();

    const dots = [...document.querySelectorAll(".carousel-dot")];

let activeDot = 0;

dots.forEach((dot, index) => {
    const position = Number(dot.dataset.position);

    if (position <= currentServiceIndex) {
        activeDot = index;
    }
});

dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeDot);
});
}

serviceTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        serviceTabs.forEach((item) => item.classList.remove("active"));

        tab.classList.add("active");
        activeCategory = tab.dataset.category;

        renderServiceCards();
    });
});

previousServices.addEventListener("click", () => {
    const step = getCarouselStep();

    if (currentServiceIndex <= 0) {
        return;
    }

    currentServiceIndex = Math.max(
        0,
        currentServiceIndex - step
    );

    updateCarousel();
});

nextServices.addEventListener("click", () => {
    const step = getCarouselStep();
    const maximumIndex = getMaximumIndex();

    currentServiceIndex = Math.min(
        maximumIndex,
        currentServiceIndex + step
    );

    updateCarousel();
});

window.addEventListener("resize", () => {
    const maximumIndex = getMaximumIndex();

    if (currentServiceIndex > maximumIndex) {
        currentServiceIndex = maximumIndex;
    }

    renderCarouselDots();
    updateCarousel();
});

renderServiceCards();

const industryData = [
    {
        title: "FMCG",
        image: "images/industries/fmcg.svg"
    },
    {
        title: "Retail",
        image: "images/industries/retail.svg"
    },
    {
        title: "Fashion & Lifestyle",
        image: "images/industries/fashion-and-lifestyle.svg"
    },
    {
        title: "Chemicals",
        image: "images/industries/chemicals.svg"
    },
    {
        title: "Technology",
        image: "images/industries/technology.svg"
    },
    {
        title: "Automotive",
        image: "images/industries/automotive.svg"
    },
    {
        title: "Pharma & Healthcare",
        image: "images/industries/pharma-and-healthcare.svg"
    },
    {
        title: "Perishables",
        image: "images/industries/refregirated-goods.svg"
    }
];

const industryTrack = document.querySelector("#industryTrack");
const industryDots = document.querySelector("#industryDots");
const previousIndustries = document.querySelector("#previousIndustries");
const nextIndustries = document.querySelector("#nextIndustries");

let currentIndustryIndex = 0;

function getVisibleIndustryCount() {
    const width = window.innerWidth;

    if (width <= 640) return 1;
    if (width <= 1024) return 2;

    return 4;
}

function getIndustryStep() {
    return getVisibleIndustryCount();
}

function getMaximumIndustryIndex() {
    return Math.max(
        0,
        industryData.length - getVisibleIndustryCount()
    );
}

function renderIndustryCards() {
    industryTrack.innerHTML = industryData
        .map(
            (industry) => `
                <a href="#" class="industry-card">
                    <div class="industry-image">
                        <img
                            src="${industry.image}"
                            alt="${industry.title}"
                            loading="lazy"
                        >
                    </div>

                    <h3>${industry.title}</h3>
                </a>
            `
        )
        .join("");

    currentIndustryIndex = 0;

    renderIndustryDots();
    updateIndustryCarousel();
}

function getIndustryPositions() {
    const maximumIndex = getMaximumIndustryIndex();
    const step = getIndustryStep();
    const positions = [];

    for (let index = 0; index <= maximumIndex; index += step) {
        positions.push(index);
    }

    if (
        positions.length === 0 ||
        positions[positions.length - 1] !== maximumIndex
    ) {
        positions.push(maximumIndex);
    }

    return positions;
}

function renderIndustryDots() {
    const positions = getIndustryPositions();

    industryDots.innerHTML = "";

    positions.forEach((position, index) => {
        const dot = document.createElement("button");

        dot.type = "button";
        dot.className = "industry-dot";
        dot.dataset.position = position;
        dot.setAttribute(
            "aria-label",
            `Show industry group ${index + 1}`
        );

        dot.addEventListener("click", () => {
            currentIndustryIndex = position;
            updateIndustryCarousel();
        });

        industryDots.appendChild(dot);
    });
}

function updateIndustryCarousel() {
    const firstCard = industryTrack.querySelector(".industry-card");

    if (!firstCard) return;

    const trackStyles = getComputedStyle(industryTrack);
    const gap = parseFloat(trackStyles.columnGap) || 0;
    const cardWidth = firstCard.getBoundingClientRect().width;
    const offset = currentIndustryIndex * (cardWidth + gap);

    industryTrack.style.transform = `translateX(-${offset}px)`;

    previousIndustries.disabled = currentIndustryIndex === 0;

    nextIndustries.disabled =
        currentIndustryIndex >= getMaximumIndustryIndex();

    const dots = [...document.querySelectorAll(".industry-dot")];

    let activeDotIndex = 0;

    dots.forEach((dot, index) => {
        const position = Number(dot.dataset.position);

        if (position <= currentIndustryIndex) {
            activeDotIndex = index;
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === activeDotIndex
        );
    });
}

previousIndustries.addEventListener("click", () => {
    const positions = getIndustryPositions();
    const currentPositionIndex = positions.indexOf(currentIndustryIndex);

    const previousPosition =
        positions[Math.max(0, currentPositionIndex - 1)];

    currentIndustryIndex = previousPosition;
    updateIndustryCarousel();
});

nextIndustries.addEventListener("click", () => {
    const positions = getIndustryPositions();
    const currentPositionIndex = positions.indexOf(currentIndustryIndex);

    const nextPosition =
        positions[
            Math.min(
                positions.length - 1,
                currentPositionIndex + 1
            )
        ];

    currentIndustryIndex = nextPosition;
    updateIndustryCarousel();
});

window.addEventListener("resize", () => {
    const maximumIndex = getMaximumIndustryIndex();

    currentIndustryIndex = Math.min(
        currentIndustryIndex,
        maximumIndex
    );

    renderIndustryDots();
    updateIndustryCarousel();
});

renderIndustryCards();


// javascript for insights section

const insightsData = [
    {
        title: "Commodity classification and HS 2028 amendments: Regulatory perspective and implementation strategies",
        category: "resilience",
        label: "Resilience",
        date: "3 Jul 2026",
        description:
            "Understand the upcoming classification changes and what they mean for global supply chains.",
        image: "images/insights/employee-at-work-on-the-laptop_1024x576.avif",
        author: "Lina Grenc",
        role: "Customer Communications Specialist Europe",
        authorImage: "images/insights/authors/lana-genc_100x100.avif",
        featured: true
    },
    {
        title:
            "The football effect: powering supply chains across Latin America",
        category: "growth",
        label: "Growth",
        date: "2 Jul 2026",
        description:
            "Explore how football events trigger significant shifts in consumer demand and supply-chain activity.",
        image: "images/insights/soccer-field-with-football-and-player_1024x576.webp",
        author: "Oscar Emiliano Grondona",
        role: "LAM Marketing Content & Strategy",
        authorImage: "images/insights/authors/oscar-emiliano-grondona_100x100.avif"
    },
    {
        title:
            "The new protein dynamics redefining the poultry trade",
        category: "growth",
        label: "Growth",
        date: "27 May 2026",
        description:
            "Explore how shifting protein demand, emerging consumer preferences, and supply chain volatility are reshaping the global poultry trade. Discover the latest protein‑driven market trends shaping production, pricing, and long‑term resilience.",
        image: "images/insights/raw-chicken-pack-supermarket-selection_1024x576.avif",
        author: "Oscar Emiliano Grondona",
        role: "LAM Marketing Content & Strategy",
        authorImage: "images/insights/authors/silvia-la-face_100x100.avif"
    },
    {
        title:
            "Strategic Pathways Through Tariffs",
        category: "growth",
        label: "Growth",
        date: "12 May 2026",
        description:
            "How APAC logistics leaders are navigating a permanently volatile trade landscape",
        image: "images/insights/team-rowing-boat-open-water-aerial-view_1024x576.webp",
        author: "Oscar Emiliano Grondona",
        role: "LAM Marketing Content & Strategy",
        authorImage: "images/insights/authors/sherman-lan_100x100.webp"
    },
    {
        title:
            "How SMEs can soar higher in the Asia-Pacific",
        category: "growth",
        label: "Growth",
        date: "14 Jan 2026",
        description:
            "Sustaining growth in the Asia-Pacific region can be challenging as market conditions fluctuate at will. But small and medium enterprises can stay resilient – and confident – with some key logistics insights. They’re captured in our latest Blue Paper.",
        image: "images/insights/boy-flying-kite_1024x576_v1.avif",
        author: "Oscar Emiliano Grondona",
        role: "LAM Marketing Content & Strategy",
        authorImage: "images/insights/authors/sherman-lan_100x100.webp"
    },
    {
        title:
            "What AI should deliver from your lead logistics provider",
        category: "digitalisation",
        label: "Digitalisation",
        date: "1 Jul 2026",
        description:
            "How artificial intelligence can support better planning, visibility and decision-making.",
        image: "images/insights/maersk-employees-looking-at-screen_1024x576.avif",
        author: "Monica Kohn",
        role: "Global Customer Insights",
        authorImage: "images/insights/authors/hilary-ross_100x100.avif"
    },
    {
        title:
            "Building the control tower ecosystem that leads to decisions and action",
        category: "resilience",
        label: "Resilience",
        date: "29 Jun 2026",
        description:
            "Control towers are evolving from visibility tools into decision engines.",
        image: "images/insights/man_1056x594-v2.avif",
        author: "Lina Grenc",
        role: "Customer Communication Specialist Europe",
        authorImage: "images/insights/authors/lana-genc_100x100.avif"
    },
    {
        title:
            "The Future of Customs: A Passport for Goods",
        category: "digitalisation",
        label: "Digitalisation",
        date: "6 Feb 2026",
        description:
            "Insights from Global Head of Trade and Customs Consulting.",
        image: "images/insights/two-men-converse-in-warehouse_1056x594.avif",
        author: "Stuart Newman",
        role: "Europe Customer Communications Manager",
        authorImage: "images/insights/authors/stuart-newman_100x100.webp"
    },
    {
        title:
            "Tech and Trade Spark FMCG Supply Chain Growth in East Africa",
        category: "digitalisation",
        label: "Digitalisation",
        date: "6 Feb 2026",
        description:
            "This article explores the rapid FMCG supply chain growth in East Africa, highlighting the impact of digital transformation, regional trade integration, and infrastructure upgrades in Kenya, Tanzania, and Ethiopia. Discover key trends, persistent challenges, and strategic solutions shaping the region’s dynamic FMCG market.",
        image: "images/insights/woman-paying-through-digital-platform_1024x576.webp",
        author: "Stuart Newman",
        role: "Europe Customer Communications Manager",
        authorImage: "images/insights/authors/nikhita.avif"
    },
    {
        title:
            "Redefining supply chain resilience with electrification and digitalisation for automotive",
        category: "digitalisation",
        label: "Digitalisation",
        date: "6 Feb 2026",
        description:
            "Examine how the automotive industry can navigate significant transformation and uncertainty with the help of resilience, visibility, collaboration, and technology-driven strategies that transform risk into opportunity.",
        image: "images/insights/robots-assembling-car_1024x576.webp",
        author: "Stuart Newman",
        role: "Europe Customer Communications Manager",
        authorImage: "images/insights/authors/antonio-fondevilla.avif"
    },
    {
        title:
            "Future-proofing supply chains",
        category: "sustainability",
        label: "Sustainability",
        date: "7 Oct 2025",
        description:
            "Professors Nada R. Sanders, PhD, and Christopher S. Tang join the Beyond the Box podcast to discuss how Environmental, Social, and Governance (ESG) initiatives are reshaping logistics and supply chain strategies in the face of geopolitical uncertainty, rising costs, and regulatory complexity.",
        image: "images/insights/nada-sanders-and-christopher-tang_1056x594.avif",
        author: "Maersk Insights",
        role: "Sustainability",
        authorImage: "images/insights/authors/nichole-allem_100x100.avif"
    },
    {
        title:
            "From insight to action: reducing greenhouse-gas emissions",
        category: "sustainability",
        label: "Sustainability",
        date: "7 Oct 2025",
        description:
            "Learn how benchmarking and transparent data can help reduce emissions.",
        image: "images/insights/laura-maersk_1024x576.avif",
        author: "Maersk Insights",
        role: "Sustainability",
        authorImage: "images/insights/authors/lara-albertina-rebello_100x100.avif"
    },
    {
        title:
            "How the rise in electric car sales is shaping logistics: Video",
        category: "sustainability",
        label: "Sustainability",
        date: "7 Oct 2025",
        description:
            "Explore the rise in electric car sales for logistics and how it’s transforming supply chains, battery handling, and global production strategies.",
        image: "images/insights/line-of-blue-electric-cars-charging_1024x576.avif",
        author: "Maersk Insights",
        role: "Sustainability",
        authorImage: "images/insights/authors/emma-firth_100x100.avif"
    },
    {
        title:
            "IMO’s net zero framework: A turning point for global shipping",
        category: "sustainability",
        label: "Sustainability",
        date: "7 Oct 2025",
        description:
            "Learn about the International Maritime Organization net zero framework and its impact on reducing shipping emissions through global fuel standards and pricing.",
        image: "images/insights/cargo-ship-aerial-photo_1024x576.avif",
        author: "Maersk Insights",
        role: "Sustainability",
        authorImage: "images/insights/authors/nichole-allem_100x100.avif"
    },
    {
        title:
            "Redefining reliability in ground freight delivery",
        category: "integrated-logistics",
        label: "Integrated logistics",
        date: "24 Apr 2026",
        description:
            "Why on-time delivery is no longer enough for modern supply chains.",
        image: "images/insights/ground-freight.jpg",
        author: "Monica Kohn",
        role: "Regional Customer Insights",
        authorImage: "images/insights/authors/monica.jpg"
    }
];

const insightsGrid = document.querySelector("#insightsGrid");
const insightsCategory = document.querySelector("#insightsCategory");
const viewAllInsights = document.querySelector("#viewAllInsights");
const newsGrid = document.querySelector("#newsGrid");

let showAllInsights = false;

function createInsightCard(article, featured = false) {
    return `
        <a
            href="#"
            class="insight-card ${featured ? "featured" : ""}"
        >
            <div class="insight-card-image">
                <img
                    src="${article.image}"
                    alt="${article.title}"
                    loading="lazy"
                >
            </div>

            <div class="insight-card-content">
                <div class="insight-meta">
                    ${article.label} · ${article.date}
                </div>

                <h3>${article.title}</h3>

                <p>${article.description}</p>

                <div class="insight-author">
                    <img
                        src="${article.authorImage}"
                        alt=""
                    >

                    <div class="insight-author-details">
                        <strong>${article.author}</strong>
                        ${article.role}
                    </div>
                </div>
            </div>
        </a>
    `;
}

function renderInsights() {
    const category = insightsCategory.value;

    const filteredArticles = insightsData.filter((article) => {
        return category === "all" || article.category === category;
    });

    const displayedArticles = showAllInsights
        ? filteredArticles
        : filteredArticles.slice(0, 4);

    if (displayedArticles.length === 0) {
        insightsGrid.innerHTML = `
            <p class="no-insights">
                No insights are available in this category.
            </p>
        `;

        viewAllInsights.hidden = true;
        return;
    }

    const firstArticle = displayedArticles[0];
    const secondArticle = displayedArticles[1];
    const thirdArticle = displayedArticles[2];
    const fourthArticle = displayedArticles[3];

    insightsGrid.innerHTML = `
        ${firstArticle
            ? createInsightCard(firstArticle, true)
            : ""
        }

        ${secondArticle
            ? createInsightCard(secondArticle)
            : ""
        }

        ${
            thirdArticle || fourthArticle
                ? `
                    <div class="insights-bottom-right">
                        ${
                            thirdArticle
                                ? createInsightCard(thirdArticle)
                                : ""
                        }

                        ${
                            fourthArticle
                                ? createInsightCard(fourthArticle)
                                : ""
                        }
                    </div>
                `
                : ""
        }
    `;

    viewAllInsights.hidden = filteredArticles.length <= 4;

    viewAllInsights.textContent = showAllInsights
        ? "Show less"
        : "View all";
}

insightsCategory.addEventListener("change", () => {
    showAllInsights = false;
    renderInsights();
});

viewAllInsights.addEventListener("click", () => {
    showAllInsights = !showAllInsights;
    renderInsights();
});

renderInsights();

//

const newsTrack = document.querySelector("#newsTrack");
const newsDots = document.querySelector("#newsDots");
const previousNews = document.querySelector("#previousNews");
const nextNews = document.querySelector("#nextNews");

let currentNewsIndex = 0;

const newsData = [
    {
        title: "Maersk Invests $100 Million in New Boston-area Fulfillment Hub,...",
        label: "Press releases",
        date: "15 Jul 2026",
        image: "images/news/new-boston-area-fulfillment-hub_1024x576.avif"
    },
    {
        title: "Maersk Latin America Market Update – July, 2026",
        label: "News",
        date: "14 Jul 2026",
        image: "images/news/women-infront-container-1024x576.webp"
    },
    {
        title: "How General Motors strengthened supply chain resilience with...",
        label: "Case studies",
        date: "9 Jul 2026",
        image: "images/news/general-motors_1056x594.webp"
    },
    {
        title: "Union Minister Sonowal unveils Maersk’s first Indian manufactured...",
        label: "Press releases",
        date: "3 Jul 2026",
        image: "images/news/maersk-blue-container-on-stage_1024x576.avif"
    },
    {
        title: "Maersk deploys next-generation connectivity across its network",
        label: "Press releases",
        date: "2 Jul 2026",
        image: "images/news/maersk-containers-stacked_1024x576.avif"
    },
    {
        title: "Maersk Europe Market Update July 2026",
        label: "News",
        date: "1 Jul 2026",
        image: "images/news/maersk-vessel-at-panama_1024x576.avif"
    },
    {
        title: "Adriatic Service: Delivering Speed, Reliability, and Connectivity to the East Mediterranean",
        label: "News",
        date: "30 Jul 2026",
        image: "images/news/maersk-vessel-at-panama_1024x576.avif"
    },
    {
        title: "Maersk Asia Pacific Monthly Market Update – July 2026",
        label: "News",
        date: "28 Jun 2026",
        image: "images/news/warehouse-worker_1024x576.webp"
    },
    {
        title: "Maersk upgrades guidance for full year 2026",
        label: "Press News",
        date: "29 Jun 2026",
        image: "images/news/maersk-office_1024x576.webp"
    },
    {
        title: "Maersk North America Market Update — July 2026",
        label: "News",
        date: "29 Jun 2026",
        image: "images/news/maersk-container-truck-parked-at-apm-terminals.avif"
    },
    {
        title: "What’s it like working at Maersk Africa? Hear from the best in sales",
        label: "News",
        date: "29 Jun 2026",
        image: "images/news/maersk-africa-leadership-banner_1024x576.webp"
    },
    {
        title: "Maersk appoints Scott Elliott as Regional President, Asia Pacific",
        label: "Press Releases",
        date: "29 Jun 2026",
        image: "images/news/scott-elliott_v1_1024x576.avif"
    }
];

function getVisibleNewsCount() {
    const width = window.innerWidth;

    if (width <= 640) return 1;
    if (width <= 1024) return 3;

    return 4;
}

function getNewsStep() {
    return getVisibleNewsCount();
}

function getMaximumNewsIndex() {
    return Math.max(
        0,
        newsData.length - getVisibleNewsCount()
    );
}

function getNewsPositions() {
    const maximumIndex = getMaximumNewsIndex();
    const step = getNewsStep();
    const positions = [];

    for (let index = 0; index <= maximumIndex; index += step) {
        positions.push(index);
    }

    if (
        positions.length === 0 ||
        positions[positions.length - 1] !== maximumIndex
    ) {
        positions.push(maximumIndex);
    }

    return positions;
}

function renderNews() {
    newsTrack.innerHTML = newsData
        .map(
            (article) => `
                <a href="#" class="news-card">
                    <div class="news-card-image">
                        <img
                            src="${article.image}"
                            alt="${article.title}"
                            loading="lazy"
                        >
                    </div>

                    <div class="news-card-body">
                        <div class="news-category">
                            ${article.label}
                        </div>

                        <h3>${article.title}</h3>

                        <div class="news-date">
                            ${article.date}
                        </div>
                    </div>
                </a>
            `
        )
        .join("");

    currentNewsIndex = 0;

    renderNewsDots();
    updateNewsCarousel();
}

function renderNewsDots() {
    const positions = getNewsPositions();

    newsDots.innerHTML = "";

    positions.forEach((position, index) => {
        const dot = document.createElement("button");

        dot.type = "button";
        dot.className = "news-dot";
        dot.dataset.position = position;
        dot.setAttribute(
            "aria-label",
            `Show news group ${index + 1}`
        );

        dot.addEventListener("click", () => {
            currentNewsIndex = position;
            updateNewsCarousel();
        });

        newsDots.appendChild(dot);
    });
}

function updateNewsCarousel() {
    const firstCard = newsTrack.querySelector(".news-card");

    if (!firstCard) return;

    const trackStyles = getComputedStyle(newsTrack);
    const gap = parseFloat(trackStyles.columnGap) || 0;
    const cardWidth = firstCard.getBoundingClientRect().width;
    const offset = currentNewsIndex * (cardWidth + gap);

    newsTrack.style.transform = `translateX(-${offset}px)`;

    previousNews.disabled = currentNewsIndex === 0;
    nextNews.disabled =
        currentNewsIndex >= getMaximumNewsIndex();

    const dots = [...document.querySelectorAll(".news-dot")];

    let activeDotIndex = 0;

    dots.forEach((dot, index) => {
        const position = Number(dot.dataset.position);

        if (position <= currentNewsIndex) {
            activeDotIndex = index;
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === activeDotIndex
        );
    });
}

previousNews.addEventListener("click", () => {
    const positions = getNewsPositions();
    const currentPosition = positions.indexOf(currentNewsIndex);

    currentNewsIndex =
        positions[Math.max(0, currentPosition - 1)];

    updateNewsCarousel();
});

nextNews.addEventListener("click", () => {
    const positions = getNewsPositions();
    const currentPosition = positions.indexOf(currentNewsIndex);

    currentNewsIndex =
        positions[
            Math.min(
                positions.length - 1,
                currentPosition + 1
            )
        ];

    updateNewsCarousel();
});

window.addEventListener("resize", () => {
    currentNewsIndex = Math.min(
        currentNewsIndex,
        getMaximumNewsIndex()
    );

    renderNewsDots();
    updateNewsCarousel();
});

renderNews();

const quickTabs = document.querySelectorAll(".quick-tabs button");

const quickPanels = document.querySelectorAll(".quick-content");

quickTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        quickTabs.forEach(button =>
            button.classList.remove("active")
        );

        tab.classList.add("active");

        const panelName =
            tab.textContent.trim().toLowerCase();

        quickPanels.forEach(panel => {

            panel.classList.toggle(
                "active",
                panel.dataset.panel === panelName
            );
        });
    });
});
