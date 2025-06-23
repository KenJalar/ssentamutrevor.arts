document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration ---
    const ARTIST_EMAIL = "ssentamutrevor9@gmail.com"; // Change this to your actual email
    const ARTIST_PHONE = "+256784717186"; // Change this to your actual phone
    // -- IMPORTANT: Replace these with your actual social media links --
    const FACEBOOK_URL = "https://facebook.com/your-username";
    const INSTAGRAM_URL = "https://instagram.com/your-username";
    const X_URL = "https://x.com/your-username";
    const Mail = "https://g.co/kgs/3EGPx6d"; 


    // --- DOM Element References ---
    const appRoot = document.getElementById('app-root');
    const brandLogo = document.getElementById('brand-logo');
    // Desktop Nav Buttons
    const navHome = document.getElementById('nav-home');
    const navGallery = document.getElementById('nav-gallery');
    const navContact = document.getElementById('nav-contact');
    // Mobile Nav Buttons and Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavHome = document.getElementById('mobile-nav-home');
    const mobileNavGallery = document.getElementById('mobile-nav-gallery');
    const mobileNavContact = document.getElementById('mobile-nav-contact');

    // --- Dummy Data for Artworks ---
    const artworks = [
        // Updated to use 'viel in silence.PNG' for the first artwork
        { id: '1', title: 'Abstract Serenity', description: 'A vibrant abstract piece exploring peace and chaos.', image: 'viel in silence.PNG', price: '$200 USD' },
        { id: '2', title: 'Urban Echoes', description: 'Capturing the dynamic energy of city life.', image: 'https://placehold.co/400x300/E0E0E0/444444?text=Artwork+2', price: 'UGX 2,200,000' },
        { id: '3', title: 'Nature\'s Embrace', description: 'A serene landscape inspired by the Ugandan wilderness.', image: 'https://placehold.co/400x300/D0D0D0/555555?text=Artwork+3', price: 'UGX 1,800,000' },
        { id: '4', title: 'Portrait of Resilience', description: 'A powerful portrait celebrating strength and endurance.', image: 'https://placehold.co/400x300/C0C0C0/666666?text=Artwork+4', price: 'UGX 2,500,000' },
    ];

    // --- Mobile Menu Toggle Logic ---
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('hidden');
    }

    // --- Page Rendering Functions ---

    /**
     * Renders the Home section of the website.
     * Updates the app-root's inner HTML and attaches event listeners to new buttons.
     */
    function renderHomeSection() {
        appRoot.innerHTML = `
            <section class="min-h-screen bg-gradient-to-br from-stone-100 to-stone-300 flex items-center justify-center p-4 md:p-8 text-gray-900">
                <div class="max-w-4xl text-center">
                    <h1 class="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fade-in-down">
                        Hyper Realistic Pencil <span class="text-amber-700">Drawings</span>
                    </h1>
                    <p class="text-lg md:text-2xl mb-10 font-light leading-relaxed animate-fade-in-up">
                        Explore a diverse collection of captivating artworks, each telling a unique story.
                    </p>
                    <div class="flex justify-center space-x-4">
                        <button id="view-gallery-btn" class="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-400 focus:ring-opacity-75">
                            View Gallery
                        </button>
                        <button id="contact-home-btn" class="bg-white border border-gray-300 text-gray-900 font-semibold py-3 px-6 rounded-lg text-lg shadow-md transition duration-300 ease-in-out transform hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 focus:ring-opacity-75">
                            Contact Us
                        </button>
                </div>
            </section>
        `;
        // Attach event listeners to the new buttons after they are added to the DOM
        document.getElementById('view-gallery-btn').addEventListener('click', renderGallerySection);
        document.getElementById('contact-home-btn').addEventListener('click', renderContactSection);
        // Hide mobile menu if open
        mobileMenu.classList.add('hidden');
    }

    /**
     * Creates an HTML card for a single artwork.
     * @param {Object} artwork - The artwork data.
     * @returns {string} The HTML string for the artwork card.
     */
    function createArtworkCard(artwork) {
        // Create the pre-filled email link for ordering this specific artwork
        const subject = `Order Inquiry for: ${artwork.title}`;
        const body = `Hello,
I am interested in ordering the piece titled "${artwork.title}" (Price: ${artwork.price}).

Please let me know the next steps for payment and delivery.

Thank you,
[Your Name Here]
`;
        const mailtoHref = `mailto:${ARTIST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        return `
            <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200">
                <img src="${artwork.image}" alt="${artwork.title}" class="w-full artwork-card-image" onerror="this.onerror=null;this.src='https://g.co/kgs/3EGPx6d';">
                <div class="p-6">
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">${artwork.title}</h3>
                    <p class="text-gray-700 text-base mb-4 leading-relaxed">${artwork.description}</p>
                    <p class="text-amber-700 font-extrabold text-xl mb-6">${artwork.price}</p>
                    <a href="${mailtoHref}" target="_blank" class="block text-center w-full bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-400 focus:ring-opacity-75">
                        Order Now
                    </a>
                </div>
            </div>
        `;
    }

    /**
     * Renders the Gallery section of the website.
     * Displays artworks in a responsive grid (2 columns on mobile, 3 on larger screens).
     */
    function renderGallerySection() {
        let artworksHtml = artworks.map(createArtworkCard).join('');
        appRoot.innerHTML = `
            <section class="min-h-screen bg-gray-100 py-12 md:py-16 px-4">
                <div class="container mx-auto">
                    <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12 md:mb-16 animate-fade-in">
                        Our <span class="text-amber-700">pieces</span>
                    </h2>
                    <!-- Gallery Grid: 1 column by default, 2 columns on 'sm' (mobile), 3 columns on 'lg' and up -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        ${artworksHtml}
                    </div>
                </div>
            </section>
        `;
        // Hide mobile menu if open
        mobileMenu.classList.add('hidden');
    }

    /**
     * Renders the Contact section of the website.
     * Includes contact details and social media links.
     */
    function renderContactSection() {
        // Create tel: link for phone number
        const telHref = `tel:${ARTIST_PHONE.replace(/\s/g, '')}`;

        appRoot.innerHTML = `
            <section class="min-h-screen bg-gradient-to-br from-stone-200 to-stone-400 flex items-center justify-center p-4 md:p-8 text-gray-900">
                <div class="max-w-3xl text-center bg-stone-800 bg-opacity-10 rounded-2xl p-6 md:p-10 shadow-xl backdrop-blur-sm animate-fade-in-up">
                    <h2 class="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                        Get in <span class="text-amber-700">Touch</span>
                    </h2>
                    <p class="text-lg md:text-xl mb-8 font-light">
                        Have a question, commission request, or just want to say hello? Feel free to reach out!
                    </p>
                    <div class="space-y-6 text-left inline-block max-w-full">
                        <p class="text-base md:text-xl flex items-center">
                            <svg class="w-7 h-7 mr-4 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            <span class="font-semibold mr-2">Email:</span>
                            <a href="mailto:${ARTIST_EMAIL}" class="truncate hover:underline">${ARTIST_EMAIL}</a>
                        </p>
                        <p class="text-base md:text-xl flex items-center">
                            <svg class="w-7 h-7 mr-4 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.5 9.168a1 1 0 01-.504 1.111l-2.004 1A9.957 9.957 0 0012 16.5l1-2.004a1 1 0 011.111-.504l4.484 1.768a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10.25V5z"></path></svg>
                            <span class="font-semibold mr-2">Phone:</span>
                            <a href="${telHref}" class="hover:underline">${ARTIST_PHONE}</a>
                        </p>
                        <div class="flex justify-center space-x-6 mt-8">
                            <a href="${FACEBOOK_URL}" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-amber-700 transition duration-300 transform hover:scale-110" aria-label="Facebook"><svg class="w-9 h-9" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12s4.5 9.96 10 9.96c5.5 0 10-4.46 10-9.96S17.5 2.04 12 2.04zm3.5 7.46h-2.25V20h-3V9.5H8.5V7H10V5.5c0-1.5 1-2.5 2.5-2.5h2V6H13c-.5 0-.5.5-.5.5v2h2.5l-.25 2.5z"></path></svg></a>
                            <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-amber-700 transition duration-300 transform hover:scale-110" aria-label="Instagram"><svg class="w-9 h-9" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c2.72 0 3.05.01 4.12.06 1.06.05 1.79.22 2.42.47.65.25 1.13.58 1.62 1.08.5.5.83 1 1.08 1.62.25.63.42 1.36.47 2.42.05 1.07.06 1.4.06 4.12s-.01 3.05-.06 4.12c-.05 1.06-.22 1.79-.47 2.42a4.88 4.88 0 01-1.08 1.62c-.5.5-1 1.08-1.62 1.08-.63.25-1.36.42-2.42.47-1.07.05-1.4.06-4.12.06s-3.05-.01-4.12-.06c-1.06-.05-1.79-.22-2.42-.47a4.88 4.88 0 01-1.62-1.08c-.5-.5-1.08-1-1.08-1.62-.25-.63-.42-1.36-.47-2.42-.05-1.07-.06-1.4-.06-4.12s.01-3.05.06-4.12c.05-1.06.22-1.79.47-2.42.25-.65.58-1.13 1.08-1.62.5-.5 1-1.08 1.62-1.08.63-.25 1.36-.42 2.42-.47C8.95 2.01 9.28 2 12 2zm0 1.8a8.2 8.2 0 100 16.4 8.2 8.2 0 000-16.4zm0 10.95a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5zm4.95-6.7a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z"></path></svg></a>
                            <a href="${X_URL}" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-amber-700 transition duration-300 transform hover:scale-110" aria-label="X/Twitter"><svg class="w-9 h-9" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a>
                        </div>
                    </div>
                </div>
            </section>
        `;
        // Hide mobile menu if open
        mobileMenu.classList.add('hidden');
    }

    // --- Event Listeners for Navigation Buttons ---
    // These listeners navigate between sections without a full page reload.
    brandLogo.addEventListener('click', renderHomeSection);
    navHome.addEventListener('click', renderHomeSection);
    navGallery.addEventListener('click', renderGallerySection);
    navContact.addEventListener('click', renderContactSection);

    // Mobile Navigation Listeners
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
    mobileNavHome.addEventListener('click', renderHomeSection);
    mobileNavGallery.addEventListener('click', renderGallerySection);
    mobileNavContact.addEventListener('click', renderContactSection);

    // --- Initial Setup on Page Load ---
    // Set the current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    // Render the home section as the initial view
    renderHomeSection();
});
