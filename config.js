// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Ameli",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Quiere usted ser mi san valentin? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Me adoras?",                                    // First interaction
            yesBtn: "Si",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "te adoro, enserio muchisimo! ❤️"           // Secret hover message
        },
        second: {
            text: "cuanto me adoras?",                          // For the love meter
            startText: "asi de bastante!",                                   // Text before the percentage
            nextBtn: "goo❤️"                                         // Text for the next button
        },
        third: {
            text: "Quieres ser mi san valentin hoy 14? 🌹", // The big question!
            yesBtn: "Sii!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "JAJAJ oe enserio me adoras? 🥰🚀💝",  // Shows when they go past 5000%
        high: "Te adoro Winniee JAJA! 🚀💝",              // Shows when they go past 1000%
        normal: "Muchisimooooo! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "JAJAJJA ya sabia que no podrias decir que no, te adoro! 🎉💝💖💝💓",
        message: "Ya al rato nos vemos te adoro, un besote para ti!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://github.com/arandatayson/valentine-website-2025/raw/main/music/coqueta.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
